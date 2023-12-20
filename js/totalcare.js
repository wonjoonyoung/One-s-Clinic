document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTotalTabId = 'totalcare-tab1';
    const tabContents = document.querySelectorAll('.totalcare-aging-clinic-program_grade_contents');

    showTotalContent(defaultTotalTabId);

    // 각 탭을 클릭할 때의 동작
    const Totaltabs = document.querySelectorAll('.introduce-introduce-list-warp');
    Totaltabs.forEach(Totaltab => {
        Totaltab.addEventListener('click', function () {
            const TotaltabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showTotalContent(TotaltabId);

            // 선택된 탭에 border 추가
            Totaltabs.forEach(Totaltab => {
                Totaltab.classList.remove('active');

            });
            
            this.classList.add('active');
        });
    });


    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTotalTabButton = document.querySelector(`.introduce-introduce-list-warp[onclick="showTotalContent('${defaultTotalTabId}')"]`);
    console.log(defaultTotalTabButton); // 확인용 로그
    
    if (defaultTotalTabButton) {
        defaultTotalTabButton.classList.add('active');
    }
    
});

function showTotalContent(TotaltabId) {
    const tabTotalContents = document.querySelectorAll('.introduce-introduce-list-warp');
    // tabTotalContents.forEach(content => content.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTotalTabContent = document.getElementById(TotaltabId);
    if (selectedTotalTabContent) {
        selectedTotalTabContent.classList.remove('remove');

    const allTotalTabs = document.querySelectorAll('.totalcare-aging_contents');
    allTotalTabs.forEach(tab => {
        if (tab !== selectedTotalTabContent) {
            tab.classList.add('remove');
        }
    });



    }
}





const tabContentBasic = document.querySelectorAll('.totalcare-introduce-list-warp');

function basic(event) {
    const basicSelected = document.querySelectorAll('.basic');
    basicSelected.forEach(item => {
        item.classList.add('active');
    });

    // 클릭된 요소에 'active' 클래스 추가
    event.target.classList.add('active');

}



tabContentBasic.forEach(tab => {
    tab.addEventListener('click', basic);
});




document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정

    const defaultTabId = 'totalcare-aging-clinic-program_grade-tab1';
    showContent(defaultTabId);
    // 각 탭을 클릭할 때의 동작
    const tabs = document.querySelectorAll('.grade');
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
    const defaultTabButton = document.querySelector(`.grade[onclick="showContent('${defaultTabId}')"]`);
    if (defaultTabButton) {
        defaultTabButton.classList.add('active');
    }
});

function showContent(tabId) {
    // 모든 탭 내용 감추기
    const tabContents = document.querySelectorAll('.totalcare-aging-clinic-program_grade_contents');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent = document.getElementById(tabId);
    if (selectedTabContent) {
        selectedTabContent.classList.add('active');
    }
}






document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId2 = 'totalcare-diet-clinic-program_grade-tab1';
    showContent2(defaultTabId2);

    // 각 탭을 클릭할 때의 동작
    const tabs2 = document.querySelectorAll('.grade');
    tabs2.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId2 = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent2(tabId2);

            // 선택된 탭에 border 추가
            tabs2.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTabButton2 = document.querySelector(`.grade[onclick="showContent2('${defaultTabId2}')"]`);
    if (defaultTabButton2) {
        defaultTabButton2.classList.add('active');
    }
});

function showContent2(tabId2) {
    // 모든 탭 내용 감추기
    const tabContents2 = document.querySelectorAll('.totalcare-diet-clinic-program_grade_contents');
    tabContents2.forEach(content2 => content2.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent2 = document.getElementById(tabId2);
    if (selectedTabContent2) {
        selectedTabContent2.classList.add('active');
    }
}



document.addEventListener('DOMContentLoaded', function () {
    // 기본으로 선택되는 탭 설정
    const defaultTabId3 = 'totalcare-Immune-clinic-program_grade-tab1';
    showContent3(defaultTabId3);

    // 각 탭을 클릭할 때의 동작
    const tabs3 = document.querySelectorAll('.grade');
    tabs3.forEach(tab => {
        tab.addEventListener('click', function () {
            const tabId3 = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showContent3(tabId3);

            // 선택된 탭에 border 추가
            tabs3.forEach(tab => {
                tab.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTabButton3 = document.querySelector(`.grade[onclick="showContent3('${defaultTabId3}')"]`);
    if (defaultTabButton3) {
        defaultTabButton3.classList.add('active');
    }
});

function showContent3(tabId3) {
    // 모든 탭 내용 감추기
    const tabContents3 = document.querySelectorAll('.totalcare-Immune-clinic-program_grade_contents');
    tabContents3.forEach(content3 => content3.classList.remove('active'));

    // 선택한 탭에 해당하는 내용 표시
    const selectedTabContent3 = document.getElementById(tabId3);
    if (selectedTabContent3) {
        selectedTabContent3.classList.add('active');
    }
}





const topMenu = document.getElementById("top-menu");
const middleMenus = document.querySelectorAll(".middle-menu");

// 첫 번째 middleMenu만 선택
const middleMenu = middleMenus[0];

if (middleMenu) {
    const middleMenuTop = middleMenu.offsetTop;
    const middleMenuHeight = middleMenu.offsetHeight;

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        // 스크롤 위치가 요소의 초기 위치 이상이면 "fixed" 클래스 추가
        if (scrollPosition >= middleMenuTop) {
            middleMenu.classList.add("fixed");
            topMenu.classList.add("fixed");

            // middleMenu 높이만큼 다음 컨텐츠를 내림
            document.body.style.paddingTop = `${middleMenuHeight}px`;

        } else {
            // 스크롤 위치가 요소의 초기 위치 미만이면 "fixed" 클래스 제거
            middleMenu.classList.remove("fixed");
            topMenu.classList.remove("fixed");

            document.body.style.paddingTop = "0";
        }
    });
} else {
    console.error('No middle-menu element found.');
}


/////////////
// 첫 번째 middleMenu만 선택
const middleMenu2 = middleMenus[1];

if (middleMenu) {
    const middleMenuTop2 = middleMenu.offsetTop;
    const middleMenuHeight2 = middleMenu.offsetHeight;

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
        const scrollPosition2 = window.scrollY;

        // 스크롤 위치가 요소의 초기 위치 이상이면 "fixed" 클래스 추가
        if (scrollPosition2 >= middleMenuTop2) {
            middleMenu2.classList.add("fixed");
            topMenu2.classList.add("fixed");

            // middleMenu 높이만큼 다음 컨텐츠를 내림
            document.body.style.paddingTop = `${middleMenuHeight2}px`;

        } else {
            // 스크롤 위치가 요소의 초기 위치 미만이면 "fixed" 클래스 제거
            middleMenu2.classList.remove("fixed");
            topMenu2.classList.remove("fixed");

            document.body.style.paddingTop = "0";
        }
    });
} else {
    console.error('No middle-menu element found.');
}


const middleMenu3 = middleMenus[2];

if (middleMenu) {
    const middleMenuTop3 = middleMenu.offsetTop;
    const middleMenuHeight3 = middleMenu.offsetHeight;

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
        const scrollPosition3 = window.scrollY;

        // 스크롤 위치가 요소의 초기 위치 이상이면 "fixed" 클래스 추가
        if (scrollPosition3 >= middleMenuTop3) {
            middleMenu3.classList.add("fixed");
            topMenu.classList.add("fixed");

            // middleMenu 높이만큼 다음 컨텐츠를 내림
            document.body.style.paddingTop = `${middleMenuHeight3}px`;

        } else {
            // 스크롤 위치가 요소의 초기 위치 미만이면 "fixed" 클래스 제거
            middleMenu3.classList.remove("fixed");
            topMenu.classList.remove("fixed");

            document.body.style.paddingTop = "0";
        }
    });
} else {
    console.error('No middle-menu element found.');
}



const middleMenu4 = middleMenus[3];

if (middleMenu) {
    const middleMenuTop4 = middleMenu.offsetTop;
    const middleMenuHeight4 = middleMenu.offsetHeight;

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", function() {
        const scrollPosition4 = window.scrollY;

        // 스크롤 위치가 요소의 초기 위치 이상이면 "fixed" 클래스 추가
        if (scrollPosition4 >= middleMenuTop4) {
            middleMenu4.classList.add("fixed");
            topMenu.classList.add("fixed");

            // middleMenu 높이만큼 다음 컨텐츠를 내림
            document.body.style.paddingTop = `${middleMenuHeight4}px`;

        } else {
            // 스크롤 위치가 요소의 초기 위치 미만이면 "fixed" 클래스 제거
            middleMenu4.classList.remove("fixed");
            topMenu.classList.remove("fixed");

            document.body.style.paddingTop = "0";
        }
    });
} else {
    console.error('No middle-menu element found.');
}



document.addEventListener('DOMContentLoaded', function () {
    const defaultTotalTabId = 'totalcare-tab1';
    
    showTotalContent(defaultTotalTabId);

    const Totaltabs = document.querySelectorAll('.introduce-introduce-list-warp');
    Totaltabs.forEach(Totaltab => {
        Totaltab.addEventListener('click', function () {
            const TotaltabId = this.getAttribute('onclick').match(/'(.*?)'/)[1];
            showTotalContent(TotaltabId);

            // 선택된 탭에 border 추가
            Totaltabs.forEach(Totaltab => {
                Totaltab.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });

    // 페이지 로드 시에 기본 탭에 해당하는 버튼에 active 클래스 추가
    const defaultTotalTabButton = document.querySelector(`.introduce-introduce-list-warp[onclick="showTotalContent('${defaultTotalTabId}')"]`);
    if (defaultTotalTabButton) {
        defaultTotalTabButton.classList.add('active');
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



document.addEventListener('DOMContentLoaded', function () {
    // 페이지가 로드되면 실행되는 부분

    // 추가하고자 하는 클래스
    const additionalClass = 'active';

    // 클래스를 추가하고자 하는 대상 엘리먼트
    const targetElement = document.getElementById('introduce-list__icon-basic');

    if (targetElement) {
        // 클래스를 추가
        targetElement.classList.add(additionalClass);
    } else {
        console.error('대상 엘리먼트를 찾을 수 없습니다.');
    }
});



const totalcareIntroduceChoise = document.querySelectorAll(".totalcare-introduce-list-warp");
const ChoiseBasic = document.querySelectorAll(".basic");
const ChoiseContent = document.querySelectorAll(".basic_content");

function choise() {
    console.log("Clicked on:", this); // 클릭한 요소 출력

    // NodeList인 ChoiseBasic 및 ChoiseContent를 forEach로 반복하여 각 요소에 클래스 조작
    ChoiseBasic.forEach(function (element) {
        console.log("Adding 'active' class to ChoiseBasic:", element); // 각 ChoiseBasic에 클래스 추가하는 로그
        element.classList.add("active");
    });

    ChoiseContent.forEach(function (element) {
        console.log("Adding 'active' class to ChoiseContent:", element); // 각 ChoiseContent에 클래스 추가하는 로그
        element.classList.add("active");
    });
}

// 각 totalcareIntroduceChoise 요소에 대해 이벤트 리스너 등록
totalcareIntroduceChoise.forEach(function (element) {
    element.addEventListener("click", choise);
});
