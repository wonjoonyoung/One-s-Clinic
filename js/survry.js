// 질문과 각 질문의 결과 값 정의
const questions = [
    {
        question: "질문 1: 답변 1",
        resultValue: 5
    },
    {
        question: "질문 2: 답변 2",
        resultValue: 3
    },
    {
        question: "질문 3: 답변 3",
        resultValue: 2
    },
    // 추가 질문과 결과 값 정의 가능
];

// 사용자의 답변을 저장할 객체를 생성
const userAnswers = {};

// 각 질문에 대한 사용자의 답변 입력
userAnswers[questions[0].question] = "답변 1"; // 예시 답변
userAnswers[questions[1].question] = "답변 2"; // 예시 답변
userAnswers[questions[2].question] = "답변 3"; // 예시 답변

// 결과값을 초기화
let totalScore = 0;

// 각 질문에 대한 결과 값을 누적하여 계산
for (const question of questions) {
    const userAnswer = userAnswers[question.question];
    if (userAnswer === question.resultValue) {
        totalScore += question.resultValue;
    }
}

// 결과를 결과 값 누적이 높은 순서대로 정렬
questions.sort((a, b) => b.resultValue - a.resultValue);

// 결과를 보여주기
console.log("사용자의 결과값: " + totalScore);
console.log("결과 값 누적에 따른 랭크 순서:");

for (const [index, question] of questions.entries()) {
    console.log(`랭크 ${index + 1}: ${question.question} - 결과 값: ${question.resultValue}`);
}
