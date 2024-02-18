
const links = document.querySelectorAll('a[href^="#"]')


function clickouLink(event) {
  const localClick = event.target;
  event.preventDefault();
  localClick.classList.add('ativo')
  console.log(localClick)
  links.forEach((item) => {
    if (item !== localClick && item.classList.contains('ativo')) {
      item.classList.remove('ativo')
    }
  })
};



links.forEach((link) => {
  link.addEventListener('click', clickouLink)
})




const body = document.body
const bodyAll = body.querySelectorAll('body *')

function eventoclick(event) {
  event.target.remove()
}

bodyAll.forEach((click) => {
  click.addEventListener('click', eventoclick)
})
console.log(bodyAll)





function handleClick(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('aumentarTexto')
  }
}

window.addEventListener('keydown', handleClick)
