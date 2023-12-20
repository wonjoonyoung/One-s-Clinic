document.addEventListener("DOMContentLoaded", function () {
    // toggleAccordion 함수 등록 및 기타 초기화 작업
});

function toggleAccordion(sectionId) {
    var content = document.getElementById(`${sectionId}-content`);

    if (content) {
        var arrow = document.querySelector(`#${sectionId} .notice-contents-arrow`);

        if (arrow) {
            content.classList.toggle("active");
            arrow.style.transform = content.classList.contains("active") ? "rotate(180deg)" : "rotate(0deg)";
            console.log(`Toggle accordion for section: ${sectionId}`);
        } else {
            console.error(`Arrow element not found for section: ${sectionId}`);
        }
    } else {
        console.error(`Content element not found for section: ${sectionId}`);
    }
}

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