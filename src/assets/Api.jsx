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

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
.then(function(reponse) {
    return reponse.json();
}).then(function(data2) {
        const mocktail = document.querySelector("#mocktail");
        const container2 = document.createElement("article");
        const titre2 = document.createElement("h2");
        const phrase2 = document.createElement("p");
        const image = document.createElement("img");
        titre2.textContent = "Mocktail du jour";
        const aleatoire2 = (min, max) => {
            return Math.random() * (max - min) + min
          }
          const aleatoire = aleatoire2(1, 57)
        phrase2.textContent = data2.drinks[parseInt(aleatoire)].strDrink;
        image.src = data2.drinks[parseInt(aleatoire)].strDrinkThumb;
        container2.appendChild(titre2);
        container2.appendChild(phrase2);
        container2.appendChild(image);
        mocktail.appendChild(container2);
});
};

export default Api;