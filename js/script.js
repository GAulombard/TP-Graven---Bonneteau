
let button = document.getElementById("button");
button.addEventListener("click", shuffle);

let redcard = 0;

shuffle();

function shuffle() {
    let allCards = document.getElementsByClassName("card-img");
    allCards[redcard].setAttribute("src", "images/black.png");
    let random = Math.floor(Math.random() * allCards.length);
    let card = allCards[random];
    card.setAttribute("src","images/red.png");
    redcard = random ;
}

function flip(event) {
    let element = event.currentTarget;
    if (element.className === "card") {
        if(element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }else {
        element.style.transform = "rotateY(180deg)";
        
    }
    }
    

}