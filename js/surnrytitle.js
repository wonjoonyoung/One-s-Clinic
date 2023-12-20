const moHeaderHam = document.querySelector(".header-bg-bar")
const moheader =  document.querySelector(".mo-menu")
const moHeaderX = document.querySelector(".mo-menuX")

function showmoheader(){
    moheader.classList.add('active')
}

moHeaderHam.addEventListener("click", showmoheader);


function closemoheader(){
    moheader.classList.remove('active')
}

moHeaderX.addEventListener("click", closemoheader);


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}