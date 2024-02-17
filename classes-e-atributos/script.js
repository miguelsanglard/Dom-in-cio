// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');

menuItens.forEach((item) => {
  item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((i) => {
  i.classList.remove('ativo')
})
menuItens[0].classList.add('ativo')
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')
imagens.forEach((i) => {
  if (i.hasAttribute('alt')) {
    console.log('Possui alt')
  } else {
    console.log('Não possui alt')
  }
})
// Modifique o href do link externo no menu
const hrefMenu = document.querySelector('.menu [href^="https://"]')
hrefMenu.setAttribute('href', 'Funcionou')

