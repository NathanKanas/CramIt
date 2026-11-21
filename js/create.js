const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

const termInput = document.getElementById("term");
const definitionInput = document.getElementById("definition");
const setTitleInput = document.getElementById("setTitle");
const previewContainer = document.getElementById("previewContainer");
const cardCount = document.getElementById("cardCount");
let cards = [];

document.getElementById("addCardBtn").addEventListener("click", () => {
    const term = termInput.value.trim();
    const definition = definitionInput.value.trim();

    if (!term || !definition){
        alert("Both Term and Definition needs to be entered!")
        return;
    }


cards.push({term,definition});

renderCards();
termInput.value = "";
definitionInput.value = "";

})

function renderCards() {
    previewContainer.innerHTML = "";

    cards.forEach(card => {
        const div = document.createElement("div");

        div.classList.add("preview-card");

        div.innerHTML = `<h3>${card.term}</h3><p>${card.definition}</p>`;
        previewContainer.appendChild(div);
    })

    cardCount.textContent = `Cards Added: ${cards.length}`;
}

document.getElementById("saveSetBtn").addEventListener("click", () => {

    const title = setTitleInput.value.trim();

    if(title===""){
        alert("Please enter a title for the study set!");
        return;
    };
    
    if (cards.length === 0){
        alert("Must add atleast one card!");
        return;
    }

    const newSet = {title, cards}
    let studySets = JSON.parse(localStorage.getItem("studySets")) || [];

    studySets.push(newSet);

    localStorage.setItem("studySets", JSON.stringify(studySets));

    let activities = JSON.parse(localStorage.getItem("activities")) || [];

    activities.push(`Created Study Set: ${title}`);

    localStorage.setItem("activities", JSON.stringify(activities));

    alert("Study Set Saved!");
    window.location.href = "sets.html"

})
