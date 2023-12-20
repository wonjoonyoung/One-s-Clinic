document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId = 'media-one-more';
    showContent(defaultTabId);

    // 각 탭을 클릭할 때의 동작
    const tabs = document.querySelectorAll('.media-tap');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent(tabId);

            // 선택된 탭에 border 추가
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTabButton = document.querySelector(`.media-tap[onclick="showContent('${defaultTabId}')"]`);
    if (defaultTabButton) {
        defaultTabButton.classList.add('active');
    }
});

function showContent(tabId) {
    // 모든 탭 내용 감추기
    const tabContents = document.querySelectorAll('.media-space-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent = document.getElementById(tabId);
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
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