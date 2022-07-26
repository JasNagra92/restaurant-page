function pageload(){
    const title = document.createElement("h1");
    const content = document.getElementById("content");
    title.textContent = "Nagra Smoke House";
    content.appendChild(title);
    const mainContent = document.createElement('div');
    mainContent.classList.add("mainContent");
    content.appendChild(mainContent)

    const navBar = document.createElement('div')
    navBar.classList.add('nav')
    content.appendChild(navBar)
    
    const homeBtn = document.createElement('button')
    navBar.appendChild(homeBtn)
    homeBtn.id = "home"
    homeBtn.innerHTML = "HOME"
    const menuBtn = document.createElement('button')
    navBar.appendChild(menuBtn)
    menuBtn.id = 'menu'
    menuBtn.innerHTML = "MENU"
    const contactBtn = document.createElement('button')
    navBar.appendChild(contactBtn)
    contactBtn.id = 'contact'
    contactBtn.innerHTML = "CONTACT"
    homeBtn.classList.add('navbtn')
    menuBtn.classList.add('navbtn')
    contactBtn.classList.add('navbtn')
}
export {pageload}