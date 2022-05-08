import createHomePage from './home';
import createContactPage from './contact';
import createMenuPage from './menu'

const wrapper = document.querySelector('.wrapper')

//create header
const header = document.createElement('header')
wrapper.appendChild(header)

const navbar = document.createElement('div')
navbar.classList.add('navbar')
header.appendChild(navbar)

const home = document.createElement('div')
const menu = document.createElement('div')
const contact = document.createElement('div')

home.classList.add('navbar-item', 'active')
menu.classList.add('navbar-item')
contact.classList.add('navbar-item')

const homeLink = document.createElement('a')
const menuLink = document.createElement('a')
const contactLink = document.createElement('a')

homeLink.textContent = 'Home'
menuLink.textContent = 'Menu'
contactLink.textContent = 'Contact'

home.appendChild(homeLink)
menu.appendChild(menuLink)
contact.appendChild(contactLink)

navbar.append(home, menu, contact)

const main = document.createElement('main')

//create main
main.append(createHomePage())



//create footer
const footer = document.createElement('footer')
const legalInfo = document.createElement('div')
legalInfo.classList.add('legal-info')
const siteName = document.createElement('div')
const copyRight = document.createElement('div')
siteName.textContent = `JijaRare Inc., ${new Date().getFullYear()}`
copyRight.textContent = 'All rights reserved'
legalInfo.append(siteName, copyRight)
footer.appendChild(legalInfo)
wrapper.append(main, footer)



contact.addEventListener('click', ()=> {
    main.removeChild(document.querySelector('.container'))
    home.classList.remove('active')
    contact.classList.add('active')
    menu.classList.remove('active')
    main.append(createContactPage())
})

menu.addEventListener('click', ()=> {
    main.removeChild(document.querySelector('.container'))
    home.classList.remove('active')
    contact.classList.remove('active')
    menu.classList.add('active')
    main.append(createMenuPage())
})

home.addEventListener('click', ()=> {
    main.removeChild(document.querySelector('.container'))
    main.append(createHomePage())
    menu.classList.remove('active')
    contact.classList.remove('active')
    home.classList.add('active')
})
