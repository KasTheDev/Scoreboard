let homeCountEl = document.getElementById("homeCount-el");
let guestCountEl = document.getElementById("guestCount-el");
let homeCount = 0;
let guestCount = 0;

function add1Home(){
    homeCount += 1;
    homeCountEl.textContent = homeCount;
}
function add2Home(){
    homeCount += 2;
    homeCountEl.textContent = homeCount;
}
function add3Home(){
    homeCount += 3;
    homeCountEl.textContent = homeCount;
}
function add1Guest(){
    guestCount += 1;
    guestCountEl.textContent = guestCount;
}
function add2Guest(){
    guestCount += 2;
    guestCountEl.textContent = guestCount;
}
function add3Guest(){
    guestCount += 3;
    guestCountEl.textContent = guestCount;
}
function clearScore(){
    homeCount=0;
    guestCount=0;
    homeCountEl.textContent = homeCount;
    guestCountEl.textContent = guestCount;
}
