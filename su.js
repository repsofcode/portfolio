// Hero section buttons

const githubBtn = document.getElementById("githubBtn")
const resumeBtn = document.getElementById("resumeBtn")

githubBtn.addEventListener("click", function () {

window.open("https://github.com/repsofcode", "_blank")

})


resumeBtn.addEventListener("click", function () {

alert("Resume will be added soon")

})




// Project buttons

const projectButtons = document.querySelectorAll(".projectBtn")

projectButtons.forEach(function(button){

button.addEventListener("click", function(){

const repoLink = button.getAttribute("data-link")

window.open(repoLink, "_blank")

})

})
