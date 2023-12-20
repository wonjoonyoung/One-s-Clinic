document.addEventListener("DOMContentLoaded", function () {
    const resultsList = document.getElementById("test-results-list");

    // localStorage에서 sortedResults 가져오기
    const sortedResultsList = JSON.parse(localStorage.getItem("sortedResults"));

    if (sortedResultsList) {
        // 결과값과 해당 부제목들을 정의한 객체
        const resultsWithSubtitles = {
            "텔로미어 검사(생체나이 검사)": ["항산화 치료", "마인드 바디 밸런스 치료"],
            "유전자 검사": ["항산화치료", "바디 밸런스 치료"],
            "활성산소 및 항산화력 검사": ["항산화 치료", "해독치료"],
            "음식물 알레르기 검사 (IgG4)": ["면역증진 치료", "장면역치료"],
            "모발 미네랄 검사": ["해독치료"],
            "NK 세포 활성도 검사": ["면역증진 치료"],
            "오메가 3": ["대사개선 치료"],
            "HRV (Heart Rate Variability)": ["마인드 바디 밸런스 치료"],   
            "유기산 대사균형 검사": ["항산화치료","바디 밸런스 치료"],    
            "마이크로바이옴 검사": ["장면역 치료"],   
            "일반혈액검사": [""],            // 다른 결과값과 부제목들 추가            // 다른 결과값과 부제목들 추가
            // 다른 결과값과 부제목들 추가            // 다른 결과값과 부제목들 추가
        };

        sortedResultsList.forEach((result, index) => {
            if (index < sortedResultsList.length) { // 길이 확인
                const resultItem = document.createElement("li");
                resultItem.classList.add("result-item");

                const resultTitleContainer = document.createElement("div");
                resultTitleContainer.classList.add("result-title-container");

                const resultOrder = document.createElement("span");
                resultOrder.textContent = (index + 1).toString().padStart(2, '0');
                resultOrder.classList.add("result-order");

                resultTitleContainer.appendChild(resultOrder);
                resultItem.appendChild(resultTitleContainer);

                const subtitles = resultsWithSubtitles[result];
                if (subtitles) {
                    const subtitleList = document.createElement("ul");
                    subtitleList.classList.add("subtitle-list");

                    const resultTitle = document.createElement("h2");
                    resultTitle.textContent = result;
                    subtitleList.appendChild(resultTitle);

                    subtitles.forEach((subtitle) => {
                        const subtitleItem = document.createElement("li");
                        subtitleItem.textContent = subtitle;
                        subtitleItem.classList.add("subtitle-item");
                        subtitleList.appendChild(subtitleItem);
                    });
                    resultItem.appendChild(subtitleList);
                }

                resultsList.appendChild(resultItem);
            }
        });
    }
});


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