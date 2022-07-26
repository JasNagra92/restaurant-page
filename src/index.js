import {pageload} from "./pageload";
import {homeLoad} from "./homeload";
import {menuload} from "./menuload";
import {contactload} from "./contactContent"
import {removeMainContent} from "./removeMainContent";
import './style.css';

pageload();
homeLoad();
const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener('click',menuload);
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener('click', function(){
    removeMainContent();
    homeLoad();
})
const contactBtn = document.querySelector("#contact")
contactBtn.addEventListener('click', function(){
    removeMainContent();
    contactload();
})