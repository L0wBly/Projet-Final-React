import "./style.css";
function Api() {
    fetch("https://api.adviceslip.com/advice")
.then(function(reponse) {
    return reponse.json();
}).then(function(data) {
        const citation = document.querySelector("#citation");
        const container = document.createElement("article");
        const titre = document.createElement("h2");
        const phrase = document.createElement("p");
        titre.textContent = "Citation du jour";
        phrase.textContent = data.slip.advice;
        container.appendChild(titre);
        container.appendChild(phrase);
        citation.appendChild(container);
});

fetch("https://official-joke-api.appspot.com/random_joke")
.then(function(reponse) {
    return reponse.json();
}).then(function(data) {
        const citation = document.querySelector("#blague");
        const container = document.createElement("article");
        const titre = document.createElement("h2");
        const blague = document.createElement("p");
        const chute = document.createElement("p");
        titre.textContent = "Blague du jour";
        blague.textContent = data.setup;
        chute.textContent = data.punchline;
        chute.classList.add("hide");
        container.appendChild(titre);
        container.appendChild(blague);
        container.appendChild(chute);
        citation.appendChild(container);
        if (document.querySelector('#monbouton').addEventListener('click', function() {
            chute.classList.remove("hide");
        }));
});
};

export default Api;