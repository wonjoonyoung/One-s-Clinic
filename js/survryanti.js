


//DOM이 로드 되었는지 확인하고 함수를 실행
document.addEventListener("DOMContentLoaded", function () {
    //결과값 확인 버튼 지정
    const checkAnswersButton = document.getElementById("check-answers");
    //설문지 폼 html 지정   
    const surveyForm = document.getElementById("test-survey-for");
    //모든 답변을 답변하지 않았을 떄 안내 멘트 노출을 위한 p 태그
    const answerRequiredMessage = document.getElementById("answer-required");

    // 설문조사 페이지에서 유저의 응답을 확인하는 로직
    checkAnswersButton.addEventListener("click", function () {
        const answer1 = document.querySelector('input[name="answer1"]:checked');
        const answer2 = document.querySelector('input[name="answer2"]:checked');
        const answer3 = document.querySelector('input[name="answer3"]:checked');
        const answer4 = document.querySelector('input[name="answer4"]:checked');
        const answer5 = document.querySelector('input[name="answer5"]:checked');
        const answer6 = document.querySelector('input[name="answer6"]:checked');
        const answer7 = document.querySelector('input[name="answer7"]:checked');
        const answer8 = document.querySelector('input[name="answer8"]:checked');
        const answer9 = document.querySelector('input[name="answer9"]:checked');
        const answer10 = document.querySelector('input[name="answer10"]:checked');
        const answer11 = document.querySelector('input[name="answer11"]:checked');
        const answer12 = document.querySelector('input[name="answer12"]:checked');
        const answer13 = document.querySelector('input[name="answer13"]:checked');
        const answer14 = document.querySelector('input[name="answer14"]:checked');
        const answer15 = document.querySelector('input[name="answer15"]:checked');
        const answer16 = document.querySelector('input[name="answer16"]:checked');
        const answer17 = document.querySelector('input[name="answer17"]:checked');
        const answer18 = document.querySelector('input[name="answer18"]:checked');
        const answer19 = document.querySelector('input[name="answer19"]:checked');
        const answer20 = document.querySelector('input[name="answer20"]:checked');
        const answer21 = document.querySelector('input[name="answer21"]:checked');
        const answer22 = document.querySelector('input[name="answer22"]:checked');

        
        // !!!! 다른 질문들에 대한 응답도 확인 여기에 질문 전부 넣어야함

        if (answer1 && answer2 && answer3 && answer4 && answer5 && answer6 && answer7 && answer8 && answer9 && answer10 && answer11 && answer12 && answer13 && answer14 && answer15 && answer16 && answer17 && answer18 && answer19 && answer20 && answer21 && answer22 /* && !!!! 다른 질문들에 대한 응답으로 여기에 문항 만큼 name를 다 넣어야함 */) {

            // !!!! 설문지에 대한 답변 value = 유저가 선택하는 답변이랑 동일, 문항만큼 const를 정의해야함
            const answer1Value = answer1.value;
            const answer2Value = answer2.value;
            const answer3Value = answer3.value;
            const answer4Value = answer4.value;
            const answer5Value = answer5.value;
            const answer6Value = answer6.value;
            const answer7Value = answer7.value;
            const answer8Value = answer8.value;
            const answer9Value = answer9.value;
            const answer10Value = answer10.value;
            const answer11Value = answer11.value;
            const answer12Value = answer12.value;
            const answer13Value = answer13.value;
            const answer14Value = answer14.value;
            const answer15Value = answer15.value;
            const answer16Value = answer16.value;
            const answer17Value = answer17.value;
            const answer18Value = answer18.value;
            const answer19Value = answer19.value;
            const answer20Value = answer20.value;
            const answer21Value = answer21.value;
            const answer22Value = answer22.value;



            console.log(answer1Value);
            console.log(answer2Value);


            // !!!! 답변에 따른 검사항목 매칭. 문항 만큼 let 넣어야함
            let result1Value, result2Value;

            // !!!! 문항 1
            if (answer1Value === '20대') {
                result1Value = ["결과 없음"];
            } else if (answer1Value === '30~40대') {
                result1Value = ["유전자 검사", "유기산 대사균형 검사"];
            } else if (answer1Value === '50대') {
                result1Value = ["텔로미어 검사(생체나이 검사)", "유기산 대사균형 검사"];
            } 
            else {
                result1Value = ["유기산 대사균형 검사", "NK 세포 활성도 검사"];
            }

            // !!!! 문항 2
            if (answer2Value === '있다') {
                result2Value = ["유기산 대사균형 검사", "유전자 검사"];
            } 
            else {
                result2Value = ['결과 없음'];
            }

            // !!!! 문항 3
            if (answer3Value === '있다') {
                result3Value = ["유전자 검사"];
            }
            else {
                result3Value = ["결과 없음"];
            }

            // !!!! 문항 4
            if (answer4Value === '주 3회 이상') {
                result4Value = ['결과 없음'];
            }  else if (answer4Value === '주 1~2회') {
                result4Value = ["유기산 대사균형 검사"];
            }  else if (answer4Value === '주 1회 미만') {
                result4Value = ["유기산 대사균형 검사", "NK 세포 활성도 검사"];
            } 
            else {
                result4Value = ["유기산 대사균형 검사", "NK 세포 활성도 검사", "HRV (Heart Rate Variability)"];
            }

            // !!!! 문항 5
            if (answer5Value === '주 3회 이상') {
                result5Value = ["유기산 대사균형 검사","음식물 알레르기 검사 (IgG4)"];
            } else if (answer5Value === '주 1~2회') {
                result5Value = ['유기산 대사균형 검사'];
            } 
            else {
                result5Value = ["결과 없음"];
            }

            // !!!! 문항 6
            if (answer6Value === '전혀 안피움') {
                result6Value = ['결과 없음'];
            } else if (answer6Value === '1갑 미만') {
                result6Value = ['모발 미네랄 검사','활성산소 및 항산화력 검사'];
            } else if (answer6Value === '1~2갑') {
                result6Value = ['모발 미네랄 검사','활성산소 및 항산화력 검사'];
            } 
            else {
                result6Value = ['모발 미네랄 검사','활성산소 및 항산화력 검사','텔로미어 검사(생체나이 검사)'];
            }

            // !!!! 문항 7
            if (answer7Value === '정상') {
                result7Value = ['결과 없음'];
            } else if (answer7Value === '과체중') {
                result7Value = ['유기산 대사균형 검사'];
            } else if (answer7Value === '비만') {
                result7Value = ['유기산 대사균형 검사','음식물 알레르기 검사 (IgG4)'];
            } 
            else {
                result7Value = ['유기산 대사균형 검사','음식물 알레르기 검사 (IgG4)','오메가 3 정밀검사'];
            }

            // !!!! 문항 8
            if (answer8Value === '쾌적한편') {
                result8Value = ['결과 없음'];
            } else if (answer8Value === '보통') {
                result8Value = ['모발 미네랄 검사'];
            } 
            else {
                result8Value = ['모발 미네랄 검사','활성산소 및 항산화력 검사'];
            }
            
            // !!!! 문항 9
            if (answer9Value === '예') {
                result9Value = ['결과 없음'];
            } 
            else {
                result9Value = ['활성산소 및 항산화력 검사','유기산 대사균형 검사'];
            }

            // !!!! 문항 10
            if (answer10Value === '예') {
                result10Value = ['유기산 대사균형 검사'];
            } 
            else {
                result10Value = ['결과 없음'];
            }

            // !!!! 문항 11
            if (answer11Value === '전혀 그렇지 않다') {
                result11Value = ['결과 없음'];
            } else if (answer11Value === '약간 그렇다') {
                result11Value = ['HRV (Heart Rate Variability)','텔로미어 검사(생체나이 검사)'];
            } 
            else {
                result11Value = ['HRV (Heart Rate Variability)','텔로미어 검사(생체나이 검사)','유전자 검사'];
            }

            // !!!! 문항 12
            if (answer12Value === '수면시간도 충분하고 수면의 질도 좋다') {
                result12Value = ['결과 없음'];
            } else if (answer12Value === '수면시간은 충분하나 수면의 질이 나쁘다') {
                result12Value = ['HRV (Heart Rate Variability)','NK 세포 활성도 검사'];
            } else if (answer12Value === '수면시간은 부족하나 수면의 질은 좋다') {
                result12Value = ['HRV (Heart Rate Variability)','NK 세포 활성도 검사'];
            } 
            else {
                result12Value = ['HRV (Heart Rate Variability)','NK 세포 활성도 검사','모발 미네랄 검사'];
            }

            // !!!! 문항 13
            if (answer13Value === '예') {
                result13Value = ['오메가 3'];
            }
            else {
                result13Value = ['결과 없음'];
            }

            // !!!! 문항 14
            if (answer14Value === '예') {
                result14Value = ['유기산 대사균형 검사','활성산소 및 항산화력 검사'];
            }
            else {
                result14Value = ['결과 없음'];
            }

            // !!!! 문항 15
            if (answer15Value === '예') {
                result15Value = ['결과 없음'];
            }
            else {
                result15Value = ['유기산 대사균형 검사'];
            }

            // !!!! 문항 16
            if (answer16Value === '동년배에 비해 색소침착과 주름, 탄력저하가 적다') {
                result16Value = ['결과 없음'];
            } else if (answer16Value === '동년배와 비슷하다') {
                result16Value = ['결과 없음'];
            }
            else {
                result16Value = ['활성산소 및 항산화력 검사','텔로미어 검사(생체나이 검사)','유전자 검사'];
            }

                        // !!!! 문항 17
            if (answer17Value === '예') {
                result17Value = ['HRV (Heart Rate Variability)','유기산 대사균형 검사','모발 미네랄 검사'];
            } else if (answer17Value === '보통') {
                result17Value = ['HRV (Heart Rate Variability)'];
            }
            else {
                result17Value = ['결과 없음'];
            }

                        // !!!! 문항 18
            if (answer18Value === '예') {
                result18Value = ['결과 없음'];
            } else if (answer18Value === '보통') {
                result18Value = ['HRV (Heart Rate Variability)'];
            }
            else {
                result18Value = ['모발 미네랄 검사'];
            }

                        // !!!! 문항 19
            if (answer19Value === '거의 안한다') {
                result19Value = ['결과 없음'];
            } else if (answer19Value === '주 2회 이하') {
                result19Value = ['결과 없음'];
            } else if (answer19Value === '주 3회 이상') {
                result19Value = ['유기산 대사균형 검사'];
            }
            else {
                result19Value = ['유기산 대사균형 검사','모발 미네랄 검사'];
            }

                        // !!!! 문항 20
            if (answer20Value === '규칙적') {
                result20Value = ['결과 없음'];
            } else if (answer20Value === '불규칙적') {
                result20Value = ['HRV (Heart Rate Variability)'];
            } else if (answer20Value === '폐경') {
                result20Value = ['HRV (Heart Rate Variability)', '유기산 대사균형 검사', '오메가 3'];
            }
            else {
                result20Value = ['결과 없음'];
            }

            // !!!! 문항 21
            if (answer21Value === '없다') {
                result21Value = ['결과 없음'];
            }
            else {
                result21Value = ['유기산 대사균형 검사','텔로미어 검사(생체나이 검사)'];
            }
            
                        // !!!! 문항 22
            if (answer22Value === '그렇지 않다') {
                result22Value = ['결과 없음'];
            } else if (answer22Value === '종종 느낀다') {
                result22Value = ['유기산 대사균형 검사'];
            }
            else {
                result22Value = ['유기산 대사균형 검사','NK 세포 활성도 검사','HRV (Heart Rate Variability)'];
            }



            // !!!! 매칭된 검사 결과의 가중치를 계산
            const resultCounts = {};

            // !!!! 매칭된 검사 결과값 만큼 넣어 줘야함
            [result1Value, result2Value, result3Value, result4Value, result5Value, result6Value, result7Value, result8Value, result9Value, result10Value, result11Value, result12Value, result13Value, result14Value, result15Value, result16Value, result17Value, result18Value, result19Value, result20Value, result21Value, result22Value].forEach((resultArray) => {
                resultArray.forEach((result) => {
                    if (resultCounts[result]) {
                        resultCounts[result] += 1;
                    } else {
                        resultCounts[result] = 1;
                    }
                });
            });

            console.log(resultCounts)

            // !!!! 결과값 중 결과 없음 항목을 제외
            if (resultCounts.hasOwnProperty('결과 없음')) {
                delete resultCounts['결과 없음'];
            }
            const sortedResults = Object.keys(resultCounts)
            .sort((a, b) => resultCounts[b] - resultCounts[a]);

            // !!!! 로컬스토리지에 결과 값을 저장
            console.log(sortedResults)
            
            localStorage.setItem("sortedResults", JSON.stringify(sortedResults));

            // !!!! 결과 페이지로 이동
            window.location.href = "text-result.html";

            // 뒤로가거나 새로 고침 시 라디오 버튼 초기화
            const radioButtons = document.querySelectorAll('input[type="radio"]');
            
            radioButtons.forEach(function (radio) {
                radio.checked = false;
            });


        } else {
            // 모든 답변을 안했을 때 안내 p 태그 노출
            answerRequiredMessage.style.display = "block";
        }
    });
});

const scrollToTopButton = document.getElementById('scroll-to-top');

// 스크롤 이벤트를 체크하여 버튼 가시성 제어
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollToTopButton.style.display = 'flex'; // 페이지 내용이 아래로 스크롤되면 버튼을 보이게 함
    } else {
        scrollToTopButton.style.display = 'none'; // 페이지가 상단에 있을 때 버튼을 숨김
    }
});

// 버튼을 클릭하여 맨 위로 스크롤
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 맨 위로 스무스하게 스크롤
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