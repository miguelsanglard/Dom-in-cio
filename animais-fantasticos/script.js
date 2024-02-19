function initTavNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabcontent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabcontent.length) {
    tabcontent[0].classList.add('ativo')
    function activeTab(index) {
      tabcontent.forEach((section) => {
        section.classList.remove('ativo')
      });
      tabcontent[index].classList.add('ativo');
    }
    tabMenu.forEach((menuItem, index) => {
      menuItem.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}
initTavNav()
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const ativo = 'ativo'
  accordionList[0].classList.add(ativo);
  accordionList[0].nextElementSibling.classList.add(ativo);
  function activeAccordion() {
    this.classList.toggle(ativo)
    this.nextElementSibling.classList.toggle(ativo)
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  })
}
initAccordion()


function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"] ')
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  linksInternos.forEach((limk) => {
    limk.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()

function InitScrollAnim() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScrollSuave() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
  }
  animaScrollSuave()
  window.addEventListener('scroll', animaScrollSuave)
}
InitScrollAnim