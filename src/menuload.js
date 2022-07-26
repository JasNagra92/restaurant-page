import {removeMainContent} from "./removeMainContent"

function menuload (){
const ribs = document.createElement('div');
ribs.classList.add('menuitem');


const pork = document.createElement('div')
pork.classList.add('menuitem')

const wings = document.createElement('div')
wings.classList.add('menuitem')

const primeRib = document.createElement('div')
primeRib.classList.add('menuitem')

const brisket = document.createElement('div')
brisket.classList.add('menuitem')

removeMainContent()
const mainContent = document.querySelector('.mainContent')
mainContent.classList.replace('mainContent','mainContentMenu')

mainContent.appendChild(ribs)
mainContent.appendChild(pork)
mainContent.appendChild(wings)
mainContent.appendChild(primeRib)
mainContent.appendChild(brisket)
}
export {menuload}