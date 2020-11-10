function display3Tarot(response){ 
    let pastReading = response.data.cards[0].meaning_up;
    let pastCardName  = response.data.cards[0].name;
    let pastCardFace = document.getElementById("pastCardFace");
    let pastCardDescription = document.querySelector(".pastCardDescription");
    let pastCardNamed = document.querySelector(".pastCardName");
    pastCardNamed.innerHTML = `${pastCardName}`;
    pastCardDescription.innerHTML = `${pastReading}`;
    pastCardFace.setAttribute("src", `media/${pastCardName}.jpg`);
    pastCardFace.setAttribute("alt", `${pastCardName}`);
    pastCardFace.classList.add("pastCardFaceActive");
    pastCardFace.style.animationPlayState="running";
    pastCardDescription.style.animationPlayState="running";
    pastCardNamed.style.animationPlayState="running";
    let presentReading = response.data.cards[1].meaning_up;
    let presentCardName  = response.data.cards[1].name;
    let presentCardFace = document.getElementById("presentCardFace");
    let presentCardDescription = document.querySelector(".presentCardDescription");
    let presentCardNamed = document.querySelector(".presentCardName");
    presentCardNamed.innerHTML = `${presentCardName}`;
    presentCardDescription.innerHTML = `${presentReading}`;
    presentCardFace.setAttribute("src", `media/${presentCardName}.jpg`);
    presentCardFace.setAttribute("alt", `${presentCardName}`);
   presentCardFace.classList.add("presentCardFaceActive");
    presentCardFace.style.animationPlayState="running";
    presentCardDescription.style.animationPlayState="running";
    presentCardNamed.style.animationPlayState="running";
    let futureReading = response.data.cards[2].meaning_up;
    let futureCardName  = response.data.cards[2].name;
    let futureCardFace = document.getElementById("futureCardFace");
    let futureCardDescription = document.querySelector(".futureCardDescription");
    let futureCardNamed = document.querySelector(".futureCardName");
    futureCardNamed.innerHTML = `${futureCardName}`;
    futureCardDescription.innerHTML = `${futureReading}`;
    futureCardFace.setAttribute("src", `media/${futureCardName}.jpg`);
    futureCardFace.setAttribute("alt", `${futureCardName}`);
    futureCardFace.classList.add("futureCardFaceActive");
    futureCardFace.style.animationPlayState="running";
    futureCardDescription.style.animationPlayState="running";
    futureCardNamed.style.animationPlayState="running";
    let instructions = document.querySelector(".instructions");
    instructions.innerHTML = "If no cards are dealt, refresh and try again.";
}


function show3Tarot(){
    let apiURL ="https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3";
    axios.get(apiURL).then(display3Tarot);
   }

let threeCards = document.getElementById("cardBlank3");
threeCards.addEventListener("click", show3Tarot)