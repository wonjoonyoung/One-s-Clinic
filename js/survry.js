document.addEventListener("DOMContentLoaded", function () {
    const checkAnswersButton = document.getElementById("check-answers");
    //결과값 확인 버튼//
    const surveyForm = document.getElementById("survey-form");
    //폼//
    const answerRequiredMessage = document.getElementById("answer-required");
    //모든 답변을 완성해야한다는 답변

    checkAnswersButton.addEventListener("click", function () {
        // 설문조사 페이지에서 유저의 응답을 확인하는 로직
        const answer1 = document.querySelector('input[name="answer1"]:checked');
        const answer2 = document.querySelector('input[name="answer2"]:checked');
        // 다른 질문들에 대한 응답도 확인 여기에 질문 전부 넣어야함!!!!!!!!!

        if (answer1 && answer2 /* && 다른 질문들에 대한 응답 */) {
            // 모든 질문에 응답이 있을 때 결과 확인 페이지로 이동
            const answer1Value = answer1.value;
            const answer2Value = answer2.value;

            console.log(answer1Value);
            console.log(answer2Value);

            let result1Value, result2Value;

            if (answer1Value === '갑작스런 체중증가') {
                result1Value = ["유기산 대사균형 검사", "HRV (Heart Rate Variability)"];
            } else if (answer1Value === '꾸준히 증가') {
                result1Value = ["유기산 대사균형 검사", "마이크로바이옴 검사"];
            } else {
                result1Value = ["유기산 대사균형 검사", "NK 세포 활성도 검사"];
            }

            if (answer2Value === '있다 (약 복용)') {
                result2Value = ["유기산 대사균형 검사", "HRV (Heart Rate Variability)"];
            } else if (answer2Value === '있다 (한약 복용)') {
                result2Value = ["유기산 대사균형 검사", "HRV (Heart Rate Variability)", "모발 미네랄 검사"];
            } else if (answer2Value === '있다 (식단/운동)') {
                result2Value = ["유기산 대사균형 검사"];
            } else if (answer2Value === '있다 (약/한약/식단/운동)') {
                result2Value = ["유기산 대사균형 검사", "HRV (Heart Rate Variability)", "모발 미네랄 검사"];
            } 
            else {
                result2Value = ['결과 없음'];
            }

            const resultCounts = {};

            [result1Value, result2Value].forEach((resultArray) => {
                resultArray.forEach((result) => {
                    if (resultCounts[result]) {
                        resultCounts[result] += 1;
                    } else {
                        resultCounts[result] = 1;
                    }
                });
            });

            console.log(resultCounts);



            // window.location.href = "text-result.html";
        } else {
            answerRequiredMessage.style.display = "block";
        }
    });
});



// const urlParams = new URLSearchParams();

// for (const key in userAnswers) {
//     urlParams.append(key, userAnswers[key]);
// }

// const url = `text-result.html?${urlParams.toString()}`;
// window.location.href = url;





// document.addEventListener("DOMContentLoaded", function() {
//     const checkAnswersButton = document.getElementById("check-answers");
//     ///버튼

//     const surveyForm = document.getElementById("survey-form");

//     checkAnswersButton.addEventListener("click", function() {
//         // 사용자의 답변을 수집
//         const userAnswers = {};

//         // 문항을 5까지 가져옴 문항에 따라 수정해야함 (문항이 아니고 질문지에 따라)
//         for (let i = 1; i <= 5; i++) {
//               // 문항을 5까지 가져옴 문항에 따라 input[name="answer${i} 수정해야함 (문항이 아니고 질문지에 따라)
//             const answer = document.querySelector(`input[name="answer${i}"]:checked`);
//             if (answer) {
//                 userAnswers[`answer${i}`] = answer.value;
//             }
//         }

//         // 이제 userAnswers 객체에 사용자의 답변이 저장됨
//         // 이를 기반으로 원하는 로직을 수행할 수 있음
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     // ...

//     checkAnswersButton.addEventListener("click", function() {
//         // ...

//         // 결과 페이지로 이동하지 않고 결과를 표시하는 부분 추가
//         const resultsList = document.getElementById("results-list");
//         resultsList.innerHTML = ''; // 결과를 초기화

//         for (const key in userAnswers) {
//             const resultItem = document.createElement("li");
//             resultItem.textContent = `${key}: ${userAnswers[key]}`;
//             resultsList.appendChild(resultItem);
//         }

//         // 결과 페이지로 스크롤
//         window.location.href = "#results-list";
//     });
// });