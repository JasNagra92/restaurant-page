import Icon from "../src/frontpage.jpg";

const pageload = function(){
    const title = document.createElement("h1");
    const content = document.getElementById("content");
    title.textContent = "Nagra Smoke House";
    content.appendChild(title);

    const mainContent = document.createElement('div');
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent)

    const imgContainer = document.createElement('div');
    imgContainer.classList.add("imgContainer")
    mainContent.appendChild(imgContainer)

    const myIcon = new Image();
    myIcon.src = Icon;
    imgContainer.appendChild(myIcon);

    const navBar = document.createElement('div')
    navBar.classList.add('nav')
    content.appendChild(navBar)

    const homeBtn = document.createElement('button')
    navBar.appendChild(homeBtn)
    const menuBtn = document.createElement('button')
    navBar.appendChild(menuBtn)
    const contactBtn = document.createElement('button')
    navBar.appendChild(contactBtn)
    homeBtn.classList.add('navbtn')
    menuBtn.classList.add('navbtn')
    contactBtn.classList.add('navbtn')



    const intro = document.createElement('p')
    intro.textContent = "The best smoked shalmon in all of Surrey BC"
    mainContent.appendChild(intro)
    
}

export{pageload}