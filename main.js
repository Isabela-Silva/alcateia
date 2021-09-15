// char - caractere
// string - palavras
// number - numeros
// boolean - true ou false
/* abre e fecha o menu quando clicar no icone; hambuerguer e x */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // SE
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // SENÃO
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// testimonials corousel slides swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: mostrar elementos quando der scroll na paina */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
`,
  { interval: 100 }
)

/* botão voltR P CIMA*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll(' main section [id]')
function activateMenuAtCurrentSection() {
  /*LINHA IMAGINÁRIA */
  const checkpoint =
    window.pageYOffset +
    (window.innerHeight / 8) *
      4 /* o que é checkpoint? window é janela, então essa constante vai pegar toda a window e usar o offset(o deslocamento y) e faz um calculo com + todo o tamanho da window dividido por 8 pedaços na tela e desses 8 pega só 4 pedacinhos */

  for (const section of sections) {
    /* para cada sessão de sessões, aplique essas funcões*/
    const sectionTop =
      section.offsetTop /* vamos mexer no topo da sessão, então usa-se offsetTop p deslocar o topo */
    const sectionHeight =
      section.offsetHeight /* vamos mexer na altura do site */
    const sectionId =
      section.getAttribute(
        'id'
      ) /* mexer no id, mas nesse caso usar uma função get pra pesquisar o id */

    const checkpointStart =
      checkpoint >=
      sectionTop /* checkpoint é tipo uma linha imaginária que vai passar pela linha imag. do topo (como se fosse a linha de partida de um corrida) e quanto mais o checkpoint ( imagine um carrinho) passa do top mais ele aumenta, ou seja, está maior que o top*/

    const checkpointEnd =
      checkpoint <=
      sectionTop +
        sectionHeight /* nesse caso o check é menor ou igual ao o top + altura*/
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '] ')
        .classList.add('active')

      /* queryselector ta fazendo uma pesquisa p encontrar a ancora das sessões home, sobre, contatos que ficam no menu. na vdd ta pesquisando o id de cada um */
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + '] ')
        .classList.remove('active')

      /* senão tiver nos limites da caixa home, sobre etc. então remove o active, quer dizer, remover a função de ativado no menu mostrando quem está sendo visualizado: home, sobre.. */
    }
  }
}

/* CHAMANDO AS FUNÇÕES */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
