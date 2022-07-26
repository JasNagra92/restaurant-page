function removeMainContent (){
    const mainContent = document.querySelector(".mainContent");
    while(mainContent.firstChild){
        mainContent.removeChild(mainContent.firstChild)
    }
}
export{removeMainContent}