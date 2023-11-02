document.addEventListener("DOMContentLoaded", function() {
    const checkAnswersButton = document.getElementById("check-answers");
    const surveyForm = document.getElementById("survey-form");
    const answerRequiredMessage = document.getElementById("answer-required");

    checkAnswersButton.addEventListener("click", function() {
        // 여기에 설문 결과 확인 및 처리 로직 추가
        const answer1 = document.querySelector('input[name="answer1"]:checked');
        const answer2 = document.querySelector('input[name="answer2"]:checked');
        // 다른 질문들에 대한 응답도 확인

        if (answer1 && answer2 /* && 다른 질문들에 대한 응답 */) {
            // 모든 질문에 응답이 있을 때 결과 페이지로 이동
            window.location.href = "../text-result.html";
        } else {
            answerRequiredMessage.style.display = "block";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // 설문 결과를 저장할 객체
    const surveyResults = {
        '갑작스런 체중증가': ['유기산 대사균형 검사', 'HRV (Heart Rate Variability)'],
        '꾸준히 증가': ['유기산 대사균형 검사', '마이크로바이옴 검사'],
        '증가 감량 반복': ['유기산 대사균형 검사', 'NK 세포 활성도 검사'],
        // 다른 문항과 결과 추가
    };

    // 결과 값을 저장할 배열
    const finalResults = [];

    // 결과 확인 버튼 클릭 시
    document.getElementById("check-answers").addEventListener("click", function () {
        // 유저의 설문 결과, 여기에서는 예시로 갑작스런 체중증가를 선택한 것으로 가정
        const userAnswers = [];
        for (let i = 1; i <= 5; i++) {
            const answer = document.querySelector(`input[name="answer${i}"]:checked`);
            if (answer) {
                userAnswers.push(answer.value);
            }
        }

        // 설문 결과를 반복하여 결과 값에 추가
        userAnswers.forEach((answer) => {
            if (surveyResults[answer]) {
                finalResults.push(...surveyResults[answer]);
            }
        });

        // 결과 값 중 중복 횟수를 계산하고 정렬
        const resultCount = finalResults.reduce((result, value) => {
            result[value] = (result[value] || 0) + 1;
            return result;
        }, {});

        const sortedResults = Object.keys(resultCount).sort((a, b) => resultCount[b] - resultCount[a]);

        // 중복이 높은 순서대로 정렬된 결과 값을 출력
        console.log(sortedResults);
    });
});
