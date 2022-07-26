const pageload = function(){
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
    homeBtn.innerHTML = "HOME"
    const menuBtn = document.createElement('button')
    navBar.appendChild(menuBtn)
    menuBtn.innerHTML = "MENU"
    const contactBtn = document.createElement('button')
    navBar.appendChild(contactBtn)
    contactBtn.innerHTML = "CONTACT"
    homeBtn.classList.add('navbtn')
    menuBtn.classList.add('navbtn')
    contactBtn.classList.add('navbtn')

    const review = document.createElement('p')
    review.classList.add('review')
    review.innerHTML = "<em>I had some of the brisket at a kids Birthday party and it was unreal</em> <br> Mr. Ho"
    mainContent.appendChild(review)

    const hours = document.createElement('p')
    hours.classList.add('hours')
    hours.innerHTML = "Monday - Friday <br> 9:00 AM - 5:00 PM <br> Saturday/Sunday <br> Closed"
    mainContent.appendChild(hours)
}

export{pageload}