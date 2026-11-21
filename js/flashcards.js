const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

const selector = document.getElementById("setSelector");
const flashcard = document.getElementById("flashcard");
const tracker = document.getElementById("cardTracker");

let studySets = JSON.parse(localStorage.getItem("studySets")) || [];
let currentCardIndex = 0;
let currentSet = null;
let showingDefinition = false;

studySets.forEach((set, index) => {
    const option = document.createElement("option");

    option.value = index;
    option.textContent = set.title;

    selector.appendChild(option);
}); 

if(studySets.length > 0) {
    loadSet(0);
}

selector.addEventListener("change", () => {
    loadSet(selector.value);
});

function loadSet(setIndex) {
    currentSet = studySets[setIndex];
    currentCardIndex = 0;
    showingDefinition = false;
    updateCard();
}

function updateCard() {
    if(!currentSet) return;

    flashcard.textContent = currentSet.cards[currentCardIndex].term;

    tracker.textContent = `Card ${currentCardIndex + 1} / ${currentSet.cards.length}`;
}

flashcard.addEventListener("click", () => {
    if(!currentSet) return;

    const card = currentSet.cards[currentCardIndex];

    if(showingDefinition){
        flashcard.textContent = card.term;
    }else{
        flashcard.textContent = card.definition;
    }

    showingDefinition = !showingDefinition;
});

document.getElementById("nextBtn").addEventListener("click", () => {
    if(!currentSet) return;
    currentCardIndex++;

    if(currentCardIndex >= currentSet.cards.length){
        currentCardIndex=0;
    }
    showingDefinition = false;
    updateCard();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if(!currentSet) return;
    currentCardIndex--;

    if(currentCardIndex < 0){
        currentCardIndex = currentSet.cards.length - 1;
    }

    showingDefinition = false;
    updateCard();
})