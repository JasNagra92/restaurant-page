function homeLoad(){

    const review = document.createElement('p')
    review.classList.add('review')
    review.innerHTML = "<em>I had some of the brisket at a kids Birthday party and it was unreal</em> <br> Mr. Ho"
    const mainContent = document.querySelector(".mainContent")
    mainContent.appendChild(review)

    const hours = document.createElement('p')
    hours.classList.add('hours')
    hours.innerHTML = "Monday - Friday <br> 9:00 AM - 5:00 PM <br> Saturday/Sunday <br> Closed"
    mainContent.appendChild(hours)
}
export{homeLoad}