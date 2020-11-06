function displayTarot(response){ 
    let reading = response.data.cards[0].meaning_up;
    let cardName = response.data.cards[0].name;
    let cardFace = document.getElementById("cardFace");
    cardFace.setAttribute("src", `media/${cardName}.jpg`);
}

function showTarot(response){
let apiURL ="https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1";
axios.get(apiURL).then(displayTarot);}

let card = document.querySelector(".card");
card.addEventListener("click", showTarot)