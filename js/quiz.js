const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

const selector = document.getElementById("quizSelector");
const quizContainer = document.getElementById("quizContainer");
const studySets = JSON.parse(localStorage.getItem("studySets")) || [];

studySets.forEach((set, index) => {
    const option = document.createElement("option");

    option.value = index;

    option.textContent = set.title;

    selector.appendChild(option);
})

let currentSet;
let currentQuestion = 0;
let score = 0;

document.getElementById("startQuizBtn").addEventListener("click", startQuiz);

function startQuiz(){
    currentSet = studySets[selector.value];
    currentQuestion = 0;
    score = 0;

    showQuestion();
}

function showQuestion(){
    if(currentQuestion >= currentSet.cards.length) {
        finishQuiz();
        return;
    }

    const card = currentSet.cards[currentQuestion];

    quizContainer.innerHTML = `<h2>Question ${currentQuestion + 1} / ${currentSet.cards.length}</h2> <p> What is "${card.term}"?</p>`;

    const correct = card.definition;
    const answers = [correct];

    while (answers.length < 4 && currentSet.cards.length > answers.length) {
        const randomCard = currentSet.cards[Math.floor(Math.random() * currentSet.cards.length)];

        if(!answers.includes(randomCard.definition)){
            answers.push(randomCard.definition);
        }
    }

    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {
        const btn = document.createElement("button");

        btn.classList.add("answer-btn");

        btn.textContent = answer;

        btn.addEventListener("click", () => {
            if(answer === correct){
                score++;
            }

            currentQuestion++;
            showQuestion();
        });
        quizContainer.appendChild(btn);
    });

}

function finishQuiz() {
    const percent = Math.round((score / currentSet.cards.length) * 100)


let cardsStudied = Number(localStorage.getItem("cardsStudied")) || 0;

cardsStudied += currentSet.cards.length;

localStorage.setItem("cardsStudied", cardsStudied);
localStorage.setItem("quizAverage", percent);

const activities = JSON.parse(localStorage.getItem("activities")) || [];

activities.push(`Completed Quiz: ${currentSet.title} (${percent}%)`);
localStorage.setItem("activities",JSON.stringify(activities));

quizContainer.innerHTML = `<h2>Quiz Complete!</h2> <h3> ${score} / ${currentSet.cards.length}</h3> <p>${percent}%`;

};