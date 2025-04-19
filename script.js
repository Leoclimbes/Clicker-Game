let score = 0;
let scoreText = document.getElementById("scoreText");
let Button1 = document.getElementById("Button1");
let Button2 = document.getElementById("Button2");
let goStore = document.getElementById("goStore");
let gifButton = document.getElementById("gifButton");
let goSecret = document.getElementById("goSecret");
let goFromSecret = document.getElementById("goFromSecret");
let aniimationContainer = document.getElementById("animation");
function addScore () {
    score += 1;
    scoreText.innerText = "Score: " + score;
    
    let plusOne = document.createElement("div");
plusOne.className = "floating-plus";
plusOne.innerText = "+1";
plusOne.style.left = "50%";
plusOne.style.top = "50%";
plusOne.style.transform = "translate(-50%, -50%)";

aniimationContainer.appendChild(plusOne);

void plusOne.offsetWidth;

let angle = Math.random() * 2 * Math.PI;
let distance = 60 + Math.random() * 60;
let dx = Math.cos(angle) * distance;
let dy = Math.sin(angle) * distance;

plusOne.style.transform = `translate(${dx}px, ${dy}px) scale(1.2) rotate(${(Math.random() - 0.5) * 45}deg)`;
plusOne.style.opacity = "0";
setTimeout(() => {
aniimationContainer.removeChild(plusOne);
}, 1000);
}
function goToStore() {

    document.querySelector("h1").style.display = "none";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "inline-block";

    document.body.style.backgroundColor = "lightblue";;
    
}  
function goHome () {
    document.querySelector("h1").style.display = "block";
    document.getElementById("storeScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "inline-block";
    document.getElementById("secretScreen").style.display = "none";
    document.body.style.backgroundColor = "rgb(195, 0, 255)"
    document.querySelector("#secretScreen h3").style.display = "none";
}  
function goSecretPage() {
    document.getElementById("secretScreen").style.display = "inline-block";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "none";
    document.querySelector("#secretScreen h3").style.display = "inline-block";
}

Button1.onclick = addScore;
goStore.onclick = goToStore;
goHomeButton.onclick = goHome;
goFromSecret.onclick = goHome;
gifButton.onclick = goSecretPage;

