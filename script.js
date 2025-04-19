let score = 0;
let scoreText = document.getElementById("scoreText");
let Button1 = document.getElementById("Button1");
let goStore = document.getElementById("goStore");
let gifButton = document.getElementById("gifButton");
let goSecret = document.getElementById("goSecret");
let goFromSecret = document.getElementById("goFromSecret");
let goHomeButton = document.getElementById("goHomeButton")
let goFromQuestions = document.getElementById("goFromQuestions");
let goToQuestions = document.getElementById("goToQuestions");
let aniimationContainer = document.getElementById("animation");
let questionText = document.getElementById("questionText");
let answerInput = document.getElementById("answerInput");
let feedback = document.getElementById("feedback");
let hasMultiplier = false;
let hasBoughtAnimation = false;

let currentQuestion = null;

let questions = [
    { question: "What is H2O commonly known as?", answer: "Water" },
    { question: "What is the longest bone in the human body?", answer: "Femur" },
    { question: "What is the first letter of the English alphabet?", answer: "A" },
    { question: "What year did the Titanic sink?", answer: "1912" },
    { question: "What is the most common gas in the Earth's atmosphere?", answer: "Nitrogen" },
    { question: "What is the rarest blood type?", answer: "AB negative" },
    { question: "What is the capital of Mongolia?", answer: "Ulaanbaatar" },
    { question: "What is the Heisenberg Uncertainty Principle?", answer: "You cannot simultaneously know the exact position and momentum of a particle" },
    { question: "Which planet is known for its rings?", answer: "Saturn" },
    { question: "What philosopher wrote 'Critique of Pure Reason'?", answer: "Immanuel Kant" },
    { question: "What shape is a stop sign?", answer: "Octagon" },
    { question: "What is the speed of light in a vacuum (m/s)?", answer: "299792458" },
    { question: "What flies in the sky and has wings?", answer: "Bird" },
    { question: "What is the square root of 256?", answer: "16" },
    { question: "What is something you drink when you’re thirsty?", answer: "Water" },
    { question: "What gas do plants absorb from the atmosphere?", answer: "Carbon dioxide" },
    { question: "What is the boiling point of water in Celsius?", answer: "100" },
    { question: "What organ pumps blood throughout the body?", answer: "Heart" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "Who was the 16th president of the United States?", answer: "Abraham Lincoln" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "What animal is known as man's best friend?", answer: "Dog" },
    { question: "What is the powerhouse of the cell?", answer: "Mitochondria" },
    { question: "What do you use to brush your teeth?", answer: "Toothbrush" },
    { question: "What fruit is known for keeping the doctor away?", answer: "Apple" },
    { question: "What is the term for an animal that eats both plants and meat?", answer: "Omnivore" },
    { question: "What is the currency of the United Kingdom?", answer: "Pound" },
    { question: "Who painted the ceiling of the Sistine Chapel?", answer: "Michelangelo" },
    { question: "What country is known for the Great Wall?", answer: "China" },
    { question: "What is the name of our planet?", answer: "Earth" },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
    { question: "What is the name of the galaxy we live in?", answer: "Milky Way" },
    { question: "What do you eat soup with?", answer: "Spoon" },
    { question: "What do chickens lay?", answer: "Eggs" },
    { question: "What is the last letter of the English alphabet?", answer: "Z" },
    { question: "What is the capital of Canada?", answer: "Ottawa" },
    { question: "What is the national flower of Japan?", answer: "Cherry blossom" },
    { question: "What is the main ingredient in traditional Japanese miso soup?", answer: "Miso" },
    { question: "Who developed the theory of general relativity?", answer: "Albert Einstein" },
    { question: "Who wrote the novel 'Crime and Punishment'?", answer: "Fyodor Dostoevsky" },
    { question: "What is the opposite of 'hot'?", answer: "Cold" },
    { question: "What is the name of Mickey Mouse's pet dog?", answer: "Pluto" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { question: "How many hours are in a day?", answer: "24" },
    { question: "What is the branch of math that deals with shapes and space?", answer: "Geometry" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "How many legs does a spider have?", answer: "8" },
    { question: "What is a group of crows called?", answer: "Murder" },
    { question: "What do you wear on your feet outside?", answer: "Shoes" },
    { question: "What is the longest river in the world?", answer: "Nile" },
    { question: "What is the square root of 81?", answer: "9" },
    { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
    { question: "What is the value of Planck’s constant?", answer: "6.62607015e-34" },
    { question: "How many legs does a lobster have?", answer: "10" },
    { question: "Who was the first president of the United States?", answer: "George Washington" },
    { question: "How many fingers do humans have?", answer: "10" },
    { question: "What is the only even prime number?", answer: "2" },
    { question: "What is the capital of Bhutan?", answer: "Thimphu" },
    { question: "How many continents are there?", answer: "7" },
    { question: "What does DNA stand for?", answer: "Deoxyribonucleic acid" },
    { question: "What do bees make?", answer: "Honey" },
    { question: "What color is the sky on a clear day?", answer: "Blue" },
    { question: "What season comes after spring?", answer: "Summer" },
    { question: "What is the derivative of sin(x)?", answer: "cos(x)" },
    { question: "What is the name of the largest moon of Saturn?", answer: "Titan" },
    { question: "Who composed the opera 'The Magic Flute'?", answer: "Mozart" },
    { question: "In what year was the first email sent?", answer: "1971" },
    { question: "What is the name of the fairy in Peter Pan?", answer: "Tinker Bell" },
    { question: "What do you write with?", answer: "Pen" },
    { question: "Which animal says 'meow'?", answer: "Cat" },
    { question: "What is the capital of Kazakhstan?", answer: "Astana" },
    { question: "What is the most abundant element in the universe?", answer: "Hydrogen" },
    { question: "What sound does a cow make?", answer: "Moo" },
    { question: "Which year did World War II end?", answer: "1945" },
    { question: "What is the currency of Poland?", answer: "Zloty" },
    { question: "What is frozen water called?", answer: "Ice" },
    { question: "Who was the first person to walk on the moon?", answer: "Neil Armstrong" },
    { question: "What is the longest-running Broadway show?", answer: "The Phantom of the Opera" },
    { question: "What is the capital city of Bhutan?", answer: "Thimphu" },
    { question: "What year did the Berlin Wall fall?", answer: "1989" },
    { question: "What instrument has keys, pedals, and strings?", answer: "Piano" },
    { question: "What color is grass?", answer: "Green" },
    { question: "Who invented the World Wide Web?", answer: "Tim Berners-Lee" },
    { question: "Which element has the atomic number 79?", answer: "Gold" },
    { question: "What does E=mc^2 represent?", answer: "Energy equals mass times the speed of light squared" },
    { question: "Which sport would you perform a slam dunk in?", answer: "Basketball" },
    { question: "What is the fifth month of the year?", answer: "May" },
    { question: "What element is needed for strong bones?", answer: "Calcium" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "Which language has the most native speakers?", answer: "Mandarin" },
    { question: "Which physicist is known for quantum mechanics?", answer: "Niels Bohr" }
  ];

function addScore () {
    let clickValue = hasMultiplier ? 5 : 1;
    score += clickValue;
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
function generateNewQuestion() {
    
    let randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

   
    questionText.innerText = currentQuestion.question;
    feedback.innerText = ''; 
}

function checkAnswer() {
    if (!currentQuestion) {
        feedback.innerText = "No question available.";
        return;
    }

    let userAnswer = answerInput.value.trim();
    
    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        feedback.innerText = "Correct! +1000 to your score.";
        score += 1000; 
        scoreText.innerText = "Score: " + score;
       
        
    } else {
        feedback.innerText = "Incorrect!";
    
        if (score >= 1000) {
            score -= 1000;
            feedback.innerText += " -1000 points from your score.";
        } else {
            score = 0;
            feedback.innerText += " Score -1000.";
        }
    
        scoreText.innerText = "Score: " + score;
        
    }
    answerInput.value = '';
   
}

generateNewQuestion();  
    


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
    document.getElementById("questionsScreen").style.display = "none";
    document.body.style.backgroundColor = "rgb(195, 0, 255)"
    document.querySelector("#secretScreen h3").style.display = "none";
}  
function goSecretPage() {
    document.getElementById("secretScreen").style.display = "inline-block";
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "none";
    document.querySelector("#secretScreen h3").style.display = "inline-block";
}
function goQuestions() {
   
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("storeScreen").style.display = "none";
    document.getElementById("secretScreen").style.display = "none";
    document.getElementById("questionsScreen").style.display = "inline-block";
    document.body.style.backgroundColor = "rgb(0, 110, 255)"
    generateNewQuestion();
}
function buyMultiplier() {
    if (score >= 50000 && !hasMultiplier) {
        score -= 50000;
        scoreText.innerText = "Score: " + score;
        hasMultiplier = true;
        alert("You bought the 5x Multiplier! Now every click is worth 5 points.");
    } else if (hasMultiplier) {
        alert("You have already bought the 5x multiplier!");
    } else {
        alert("You don't have enough clicks for the multiplier.");
    }
}
function buyAnimation() {
    if (score >= 50000 && !hasAnimation) {
        score -= 50000;
        scoreText.innerText = "Score: " + score;
        hasAnimation = true;
        alert("You bought the Funny Animal Animation! It will appear at the bottom of the screen.");
        
        // 
        const funnyAnimal = document.createElement("img");
        funnyAnimal.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"; 
        funnyAnimal.style.width = "150px";
        funnyAnimal.style.position = "fixed"; 
        funnyAnimal.style.bottom = "0"; 
        funnyAnimal.style.left = "10px"; 
        funnyAnimal.style.zIndex = "1000"; 
        funnyAnimal.alt = "Funny Cat";

        
        document.body.appendChild(funnyAnimal); 
    } else if (hasAnimation) {
        alert("You have already bought the Funny Animal Animation!");
    } else {
        alert("You don't have enough clicks for the animation.");
    }
}




Button1.onclick = addScore;
goStore.onclick = goToStore;
goHomeButton.onclick = goHome;
goFromSecret.onclick = goHome;
gifButton.onclick = goSecretPage;
goToQuestions.onclick = goQuestions;
goFromQuestions.onclick = goHome;
document.getElementById("newQuestion").onclick = generateNewQuestion;
document.getElementById("submitAnswer").onclick = checkAnswer;
document.getElementById("multButton").onclick = buyMultiplier;
document.getElementById("animationMult").onclick = buyAnimation;