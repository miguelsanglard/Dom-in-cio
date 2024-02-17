// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const distancia = primeiraImagem.offsetTop
console.log(distancia)
// Retorne a soma da largura de todas as imagens


function depois() {
  const imagems = document.querySelectorAll('img')
  let soma = 0;
  imagems.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  })
  console.log(soma)
}
window.onload = function () {
  depois()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach((item) => {

  if (item.offsetWidth >= 48 && item.offsetHeight) {
    console.log('Possui o mínimo')
  } else {
    console.log('Não possui o mínimo')
  }
})
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu


const browser = window.matchMedia('(max-width: 720px)').matches;

if (browser) {
  const menuMobile = document.querySelector('.menu');
  menuMobile.classList.add('menu-mobile');
}