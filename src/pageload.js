import Icon from "../src/frontpage.jpg";

const pageload = function(){
    const title = document.createElement("h1");
    const content = document.getElementById("content");
    console.log(content)
    title.textContent = "Nagra Smoke House";
    content.appendChild(title);
    
    const myIcon = new Image();
    myIcon.src = Icon;
    content.appendChild(myIcon);

    const intro = document.createElement('p')
    intro.textContent = "The best smoked shalmon in all of Surrey BC"
    content.appendChild(intro)
    
}

export{pageload}