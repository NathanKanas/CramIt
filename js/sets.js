const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

const searchInput = document.getElementById("searchInput");
const container = document.getElementById("setsContainer");

if(localStorage.getItem("studySets") === null) {
    localStorage.setItem("studySets", JSON.stringify([]));
}

let studySets = JSON.parse(localStorage.getItem("studySets"));

function renderSets(sets) {
    container.innerHTML = "";
    
    if(sets.length === 0) {
        container.innerHTML = '<div class="set-card"><h3>No study sets Found</h3><p>Create one to start studying</p></div>';
        return;
    }

    sets.forEach(set => {
        const card = document.createElement("div");
        card.classList.add("set-card");
        card.innerHTML = `<h3>${set.title}</h3><p>${set.cards.length} Cards</p>`;
        container.appendChild(card);
    })

}

renderSets(studySets);

searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLocaleLowerCase();

    const filteredSets = studySets.filter(set => set.title.toLocaleLowerCase().includes(search));
    renderSets(filteredSets);
});