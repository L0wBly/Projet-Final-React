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
}).then(function(data2) {
        const blague = document.querySelector("#blague");
        const container2 = document.createElement("article");
        const titre2 = document.createElement("h2");
        const blague2 = document.createElement("p");
        const chute = document.createElement("p");
        titre2.textContent = "Blague du jour";
        blague2.textContent = data2.setup;
        chute.textContent = data2.punchline;
        chute.classList.add("hide");
        container2.appendChild(titre2);
        container2.appendChild(blague2);
        container2.appendChild(chute);
        blague.appendChild(container2);
        if (document.querySelector('#monbouton').addEventListener('click', function() {
            chute.classList.remove("hide");
        }));
});

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
.then(function(reponse) {
    return reponse.json();
}).then(function(data3) {
        const mocktail = document.querySelector("#mocktail");
        const container3 = document.createElement("article");
        const titre3 = document.createElement("h2");
        const phrase3 = document.createElement("p");
        const image = document.createElement("img");
        titre3.textContent = "Mocktail du jour";
        const aleatoire2 = (min, max) => {
            return Math.random() * (max - min) + min
          }
          const aleatoire = aleatoire2(1, 57)
        phrase3.textContent = data3.drinks[parseInt(aleatoire)].strDrink;
        image.src = data3.drinks[parseInt(aleatoire)].strDrinkThumb;
        container3.appendChild(titre3);
        container3.appendChild(phrase3);
        container3.appendChild(image);
        mocktail.appendChild(container3);
});

fetch("https://history.muffinlabs.com/date")
.then(function(reponse) {
    return reponse.json();
}).then(function(data4) {
        const event = document.querySelector("#event");
        const container4 = document.createElement("article");
        const titre4 = document.createElement("h2");
        const phrase4 = document.createElement("p");
        const phrase5 = document.createElement("p");
        titre4.textContent = "Événement historique du jour";
        const aleatoire2 = (min, max) => {
            return Math.random() * (max - min) + min
          }
          const aleatoire = aleatoire2(1, 57)
        phrase4.textContent = `${data4.date} ${data4.data.Events[parseInt(aleatoire)].year}`;
        phrase5.textContent = data4.data.Events[parseInt(aleatoire)].text;
        container4.appendChild(titre4);
        container4.appendChild(phrase4);
        container4.appendChild(phrase5);
        event.appendChild(container4);
});
};

export default Api;