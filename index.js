let scoreH = 0;
let scoreG = 0;
let homeScore = document.getElementById("score1");
let guestScore = document.getElementById("score2");

function homeOne() {
    scoreH += 1;
    homeScore.textContent = scoreH;
}

function homeTwo() {
    scoreH += 2;
    homeScore.textContent = scoreH;
}

function homeThree() {
    scoreH += 3;
    homeScore.textContent = scoreH;
}

function guestOne() {
    scoreG += 1;
    guestScore.textContent = scoreG;
}

function guestTwo() {
    scoreG += 2;
    guestScore.textContent = scoreG;
}

function guestThree() {
    scoreG += 3;
    guestScore.textContent = scoreG;
}

function scoreReset() {
    homeScore.textContent = "";
    guestScore.textContent = "";
	location.reload();
}