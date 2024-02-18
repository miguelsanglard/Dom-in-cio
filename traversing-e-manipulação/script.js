// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const menuClone = menu.cloneNode(true);

copy.append(menuClone)

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista dt')
// Selecione o DD referente ao primeiro DT
const ddDt = document.querySelector('.faq-lista dt:first-child')
const teste = ddDt.nextElementSibling
console.log(teste.innerHTML)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais')


faq.innerHTML = animais.innerHTML

console.log()
