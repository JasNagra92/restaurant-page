import {pageload} from "./pageload";
import {homeLoad} from "./homeload";
import {menuload} from "./menuload";
import './style.css';

pageload();
homeLoad();
const menuBtn = document.querySelector("#menu");
menuBtn.addEventListener('click',menuload)