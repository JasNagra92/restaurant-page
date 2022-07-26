import {removeMainContent} from "./removeMainContent"

function menuload (){
const ribs = document.createElement('div');
const ribsHeading = document.createElement('h4');
const ribsPrice = document.createElement('h4');
ribsHeading.innerHTML = "Baby back applewood smoked ribs";
ribsPrice.innerHTML = "$24.00"
ribs.appendChild(ribsHeading)
ribs.appendChild(ribsPrice)
ribs.classList.add('menuitem');
ribsPrice.classList.add('.menutiem')

const pork = document.createElement('div')
const porkHeading = document.createElement('h4');
const porkPrice = document.createElement('h4');
porkHeading.innerHTML = "Hickory smoked Pulled Pork";
porkPrice.innerHTML = "$20.00"
pork.appendChild(porkHeading)
pork.appendChild(porkPrice)
pork.classList.add('menuitem')
porkPrice.classList.add('.menuitem')

const wings = document.createElement('div')
const wingsHeading = document.createElement('h4');
const wingsPrice = document.createElement('h4');
wingsHeading.innerHTML = "2lbs of apple wood smoked buffalo wings";
wingsPrice.innerHTML = "$24.00"
wings.appendChild(wingsHeading)
wings.appendChild(wingsPrice)
wings.classList.add('menuitem')
ribsPrice.classList.add('.menutiem')

const primeRib = document.createElement('div')
const primeRibHeading = document.createElement('h4');
const primeRibPrice = document.createElement('h4');
primeRibHeading.innerHTML = "4lb Prime Rib smoked for 8 hours ";
primeRibPrice.innerHTML = "$30.00"
primeRib.appendChild(primeRibHeading)
primeRib.appendChild(primeRibPrice)
primeRib.classList.add('menuitem')
primeRibPrice.classList.add('.menutiem')

const brisket = document.createElement('div')
brisket.id = "brisket"
const brisketHeading = document.createElement('h4');
const brisketPrice = document.createElement('h4');
brisketHeading.innerHTML = "World famous Nagra Brisket, smoked 14 hours";
brisketPrice.innerHTML = "$100.00"
brisket.appendChild(brisketHeading)
brisket.appendChild(brisketPrice)
brisket.classList.add('menuitem')
brisketPrice.classList.add('.menutiem')

removeMainContent()
const mainContent = document.querySelector('#mainContent')
mainContent.classList.replace('mainContent','mainContentMenu')
mainContent.classList.replace('contactContent', 'mainContentMenu')

mainContent.appendChild(ribs)
mainContent.appendChild(pork)
mainContent.appendChild(wings)
mainContent.appendChild(primeRib)
mainContent.appendChild(brisket)
}
export {menuload}