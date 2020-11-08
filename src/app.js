function displayTarot(response){ 
    let reading = response.data.cards[0].meaning_up;
    let cardName = response.data.cards[0].name;
    let cardFace = document.getElementById("cardFace");
    let description = document.querySelector(".tarotDescription");
    let cardNamed = document.querySelector(".cardTitle");
    cardNamed.innerHTML = `${cardName}`;
    description.innerHTML = `${reading};`
    cardFace.setAttribute("src", `media/${cardName}.jpg`);
    cardFace.setAttribute("alt", `${cardName}`);
    cardFace.classList.add("cardFaceActive");
    cardFace.style.animationPlayState="running";
    description.style.animationPlayState="running";
    cardNamed.style.animationPlayState="running";
}

function showTarot(response){
let apiURL ="https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1";
axios.get(apiURL).then(displayTarot);}

let card = document.querySelector(".card");
card.addEventListener("click", showTarot, { once: true }) 