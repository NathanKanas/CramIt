console.log("main.js loaded");

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

if (localStorage.getItem("cardsStudied") === null) {
    localStorage.setItem("cardsStudied", 0);
}

if (localStorage.getItem("streak") === null) {
    localStorage.setItem("streak", 0);
}

if(localStorage.getItem("quizAverage") === null) {
    localStorage.setItem("quizAverage", 0);
}

if(localStorage.getItem("studySets") === null) {
    localStorage.setItem("studySets", JSON.stringify([]));
}

if(localStorage.getItem("activities") === null) {
    localStorage.setItem("activities", JSON.stringify([]));
}

const cardsStudied = localStorage.getItem("cardsStudied");
const streak = localStorage.getItem("streak");
const average = localStorage.getItem("quizAverage");
const studySets = JSON.parse(localStorage.getItem("studySets"));
console.log("Average =", average);
document.getElementById("cardsStudied").textContent = cardsStudied;
document.getElementById("streak").textContent = streak;
document.getElementById("setCount").textContent = studySets.length;
console.log("Updating quizAverage element");
document.getElementById("quizAverage").textContent = average + "%";

const challenges = [
    "Review 20 Flashcards",
    "Complete 2 Quizzes",
    "Study for 15 minutes",
    "Create a New Study Set",
    "Master 10 terms"
];

const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

document.getElementById("dailyChallenge").textContent = randomChallenge;

const activities = JSON.parse(localStorage.getItem("activities"));
const activityList = document.getElementById("activityList");

if (activities.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No activities, Start studying!";
    activityList.appendChild(li);
} else {
    activities.slice().reverse().forEach(activity => {
        const li = document.createElement("li");
        li.textContent = activity;
        activityList.appendChild(li);
    });
}