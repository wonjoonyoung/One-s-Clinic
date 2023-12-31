function showContent(tabId) {
  // 모든 탭 내용 감추기
  const tabContents = document.querySelectorAll('.about-space-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // 선택한 탭에 해당하는 내용 표시
  const selectedTabContent = document.getElementById(tabId);
  if (selectedTabContent) {
    selectedTabContent.classList.add('active');

    // 캐러셀 리셋 - 첫 번째 캐러셀
    if (tabId === 'about-space-content__tab1') {
      const container = selectedTabContent.querySelector(".about-space-content__tab1__items");
      if (container) {
        container.style.transitionDuration = '0ms';
        container.style.left = '-100%'; // 처음 로딩된 사진이 보이도록 수정
        setTimeout(() => {
          container.removeAttribute('style');
        }, 0);
      }
    }

    // 캐러셀 리셋 - 두 번째 캐러셀
    const container2 = selectedTabContent.querySelector(".about-space-content__tab2__items");
    if (container2) {
      container2.style.transitionDuration = '0ms';
      container2.style.left = '-100%'; // 처음 로딩된 사진이 보이도록 수정
      setTimeout(() => {
        container2.removeAttribute('style');
      }, 0);
    }
  }
}



document.addEventListener('DOMContentLoaded', function () {
  // 기본으로 선택되는 탭 설정
  const defaultTabId = 'about-space-content__tab1';
  showContent(defaultTabId);

  // 각 탭을 클릭할 때의 동작
  const tabs = document.querySelectorAll('.about-space_menu__btn');
  tabs.forEach(tab => {
      tab.addEventListener('click', function (event) {
          // 이벤트 전파 중단과 기본 동작 방지
          event.stopPropagation();
          event.preventDefault();

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
  const defaultTabButton = document.querySelector(`.about-space_menu__btn[onclick="showContent('${defaultTabId}')"]`);
  if (defaultTabButton) {
      defaultTabButton.classList.add('active');
  }
});







const container = document.querySelector(".about-space-content__tab1__items");
const prevBtn = document.querySelector(".about-space-content__tab1__img__arrows_up");
const nextBtn = document.querySelector(".about-space-content__tab1__img__arrows_down");
let intervalId; // 변수 추가

function addEvent() {
  prevBtn.addEventListener('click', () => {
    translateContainer(1);
    resetInterval(); // prevBtn 클릭 시 setInterval 초기화
  });
  nextBtn.addEventListener('click', () => {
    translateContainer(-1);
    resetInterval(); // nextBtn 클릭 시 setInterval 초기화
  });
}

function resetInterval() {
  clearInterval(intervalId); // 현재 동작 중인 setInterval을 초기화
  intervalId = setInterval(() => {
    nextBtn.click();
  }, 6000);
}

function translateContainer(direction) {
  const selectedBtn = (direction === 1) ? 'prev' : 'next';
  container.style.transitionDuration = '1000ms';
  container.style.transform = `translateX(${direction * (100 / 11)}%)`;
  container.ontransitionend = () => reorganizeEl(selectedBtn);
}

function reorganizeEl(selectedBtn) {
  container.removeAttribute('style');
  (selectedBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild) : container.appendChild(container.firstElementChild);
}

// addEvent2 함수 호출
addEvent();

// addEvent2 함수 호출 이후 6000으로 설정된 setInterval
intervalId = setInterval(() => {
  nextBtn.click();
}, 6000);



const container2 = document.querySelector(".about-space-content__tab2__items");
const prevBtn2 = document.querySelector(".about-space-content__tab2__img__arrows_up");
const nextBtn2 = document.querySelector(".about-space-content__tab2__img__arrows_down");
let intervalId2; // 변수 추가

function addEvent2() {
  prevBtn2.addEventListener('click', () => {
    translateContainer2(1);
    resetInterval2(); // prevBtn2 클릭 시 setInterval 초기화
  });
  nextBtn2.addEventListener('click', () => {
    translateContainer2(-1);
    resetInterval2(); // nextBtn2 클릭 시 setInterval 초기화
  });
}

function resetInterval2() {
  clearInterval(intervalId2); // 현재 동작 중인 setInterval을 초기화
  intervalId2 = setInterval(() => {
    nextBtn2.click();
  }, 6000);
}

function translateContainer2(direction2) {
  const selectedBtn2 = (direction2 === 1) ? 'prev2' : 'next2';
  container2.style.transitionDuration = '1000ms';
  container2.style.transform = `translateX(${direction2 * (100 / 6)}%)`;
  container2.ontransitionend = () => reorganizeEl2(selectedBtn2);
}

function reorganizeEl2(selectedBtn2) {
  container2.removeAttribute('style');
  (selectedBtn2 === 'prev2') ? container2.insertBefore(container2.lastElementChild, container2.firstElementChild) : container2.appendChild(container2.firstElementChild);
}

// addEvent2 함수 호출
addEvent2();

// addEvent2 함수 호출 이후 6000으로 설정된 setInterval
intervalId2 = setInterval(() => {
  nextBtn2.click();
}, 6000);

  
  



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




