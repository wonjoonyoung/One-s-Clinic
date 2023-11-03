document.addEventListener("DOMContentLoaded", function() {
    // 임의의 설문 결과 (실제로는 사용자의 답변에 따라 계산)
    const surveyResults = [
        '유기산 대사균형 검사',
        'HRV (Heart Rate Variability)',
        '마이크로바이옴 검사',
        'NK 세포 활성도 검사',
    ];

    // 결과 리스트에 항목 추가
    const resultsList = document.getElementById("results-list");

    // 설문 결과 배열을 반복하며 결과 항목을 동적으로 생성
    surveyResults.forEach((result) => {
        const listItem = document.createElement("li");
        listItem.textContent = result;
        resultsList.appendChild(listItem);
    });
});
