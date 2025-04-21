let score = 0;
let scoreText = document.getElementById("scoreText");
let Button1 = document.getElementById("Button1");
let gifButton = document.getElementById("gifButton");
let goSecret = document.getElementById("goSecret");
let goFromSecret = document.getElementById("goFromSecret");
let goFromQuestions = document.getElementById("goFromQuestions");
let goToQuestions = document.getElementById("goToQuestions");
let aniimationContainer = document.getElementById("animation");
let questionText = document.getElementById("questionText");
let secretScreen = document.getElementById("secretScreen");
let gameScreen = document.getElementById("gameScreen");
let answerInput = document.getElementById("answerInput");
let feedback = document.getElementById("feedback");
let claimButton1 = document.getElementById("claimButton1");
let submitAnswerButton = document.getElementById("submitAnswer");
let playAgainButton = document.getElementById("playAgain");
let hasClaimedCouch = false;

let currentQuestion = null;

let questions =  [
        { "question": "What is H2O commonly known as?", "answer": "Water", "used": false },
        { "question": "What is the longest bone in the human body?", "answer": "Femur", "used": false },
        { "question": "What is the first letter of the English alphabet?", "answer": "A", "used": false },
        { "question": "What year did the Titanic sink?", "answer": "1912", "used": false },
        { "question": "What is the most common gas in the Earth's atmosphere?", "answer": "Nitrogen", "used": false },
        { "question": "What is the rarest blood type?", "answer": "AB negative", "used": false },
        { "question": "What is the capital of Mongolia?", "answer": "Ulaanbaatar", "used": false },
        { "question": "What is the Heisenberg Uncertainty Principle?", "answer": "You cannot simultaneously know the exact position and momentum of a particle", "used": false },
        { "question": "Which planet is known for its rings?", "answer": "Saturn", "used": false },
        { "question": "What philosopher wrote 'Critique of Pure Reason'?", "answer": "Immanuel Kant", "used": false },
        { "question": "What shape is a stop sign?", "answer": "Octagon", "used": false },
        { "question": "What is the speed of light in a vacuum (m/s)?", "answer": "299792458", "used": false },
        { "question": "What flies in the sky and has wings?", "answer": "Bird", "used": false },
        { "question": "What is the square root of 256?", "answer": "16", "used": false },
        { "question": "What is something you drink when you’re thirsty?", "answer": "Water", "used": false },
        { "question": "What gas do plants absorb from the atmosphere?", "answer": "Carbon dioxide", "used": false },
        { "question": "What is the boiling point of water in Celsius?", "answer": "100", "used": false },
        { "question": "What organ pumps blood throughout the body?", "answer": "Heart", "used": false },
        { "question": "What is 2 + 2?", "answer": "4", "used": false },
        { "question": "Who was the 16th president of the United States?", "answer": "Abraham Lincoln", "used": false },
        { "question": "What is the chemical symbol for gold?", "answer": "Au", "used": false },
        { "question": "What animal is known as man's best friend?", "answer": "Dog", "used": false },
        { "question": "What is the powerhouse of the cell?", "answer": "Mitochondria", "used": false },
        { "question": "What do you use to brush your teeth?", "answer": "Toothbrush", "used": false },
        { "question": "What fruit is known for keeping the doctor away?", "answer": "Apple", "used": false },
        { "question": "What is the term for an animal that eats both plants and meat?", "answer": "Omnivore", "used": false },
        { "question": "What is the currency of the United Kingdom?", "answer": "Pound", "used": false },
        { "question": "Who painted the ceiling of the Sistine Chapel?", "answer": "Michelangelo", "used": false },
        { "question": "What country is known for the Great Wall?", "answer": "China", "used": false },
        { "question": "What is the name of our planet?", "answer": "Earth", "used": false },
        { "question": "What is the tallest mountain in the world?", "answer": "Mount Everest", "used": false },
        { "question": "What is the name of the galaxy we live in?", "answer": "Milky Way", "used": false },
        { "question": "What do you eat soup with?", "answer": "Spoon", "used": false },
        { "question": "What do chickens lay?", "answer": "Eggs", "used": false },
        { "question": "What is the last letter of the English alphabet?", "answer": "Z", "used": false },
        { "question": "What is the capital of Canada?", "answer": "Ottawa", "used": false },
        { "question": "What is the national flower of Japan?", "answer": "Cherry blossom", "used": false },
        { "question": "What is the main ingredient in traditional Japanese miso soup?", "answer": "Miso", "used": false },
        { "question": "Who developed the theory of general relativity?", "answer": "Albert Einstein", "used": false },
        { "question": "Who wrote the novel 'Crime and Punishment'?", "answer": "Fyodor Dostoevsky", "used": false },
        { "question": "What is the opposite of 'hot'?", "answer": "Cold", "used": false },
        { "question": "What is the name of Mickey Mouse's pet dog?", "answer": "Pluto", "used": false },
        { "question": "What is the capital of France?", "answer": "Paris", "used": false },
        { "question": "Who wrote 'Romeo and Juliet'?", "answer": "William Shakespeare", "used": false },
        { "question": "How many hours are in a day?", "answer": "24", "used": false },
        { "question": "What is the branch of math that deals with shapes and space?", "answer": "Geometry", "used": false },
        { "question": "Who painted the Mona Lisa?", "answer": "Leonardo da Vinci", "used": false },
        { "question": "How many legs does a spider have?", "answer": "8", "used": false },
        { "question": "What is a group of crows called?", "answer": "Murder", "used": false },
        { "question": "What do you wear on your feet outside?", "answer": "Shoes", "used": false },
        { "question": "What is the longest river in the world?", "answer": "Nile", "used": false },
        { "question": "What is the square root of 81?", "answer": "9", "used": false },
        {"question": "What is the best hand in poker", "answer": "Royal flush", "used": false},
        {"question": "What does the P in PEMDAS stand for in math", "answer": "Parentheses", "used": false},
        {"question": "What shape is basketball", "answer": "sphere", "used": false},
        { "question": "Which element has the atomic number 1?", "answer": "Hydrogen", "used": false },
        { "question": "Who painted 'The Starry Night'?", "answer": "Vincent van Gogh", "used": false },
        { "question": "What is the capital city of Australia?", "answer": "Canberra", "used": false },
        { "question": "In what year did World War II end?", "answer": "1945", "used": false },
        { "question": "Which animal is the largest mammal on Earth?", "answer": "Blue whale", "used": false },            
        { "question": "What part of the plant conducts photosynthesis?", "answer": "Leaf", "used": false },
        { "question": "What is the freezing point of water in Fahrenheit?", "answer": "32", "used": false},
        { "question": "Which planet is closest to the sun?", "answer": "Mercury", "used": false },
        { "question": "What is the capital of Brazil?", "answer": "Brasília", "used": false },            
        { "question": "What is the primary language spoken in Argentina?", "answer": "Spanish", "used": false },
        { "question": "How many sides does a hexagon have?", "answer": "6", "used": false },
        { "question": "What is the name of the fairy in Peter Pan?", "answer": "Tinker Bell", "used": false },
        { "question": "Which famous scientist formulated the laws of motion?", "answer": "Isaac Newton", "used": false },
        { "question": "What is the currency of Japan?", "answer": "Yen", "used": false },
        { "question": "Which sport uses a shuttlecock?", "answer": "Badminton", "used": false },
        { "question": "Which country is shaped like a boot?", "answer": "Italy", "used": false },
        { "question": "What does DNA stand for?", "answer": "Deoxyribonucleic acid", "used": false },
        { "question": "Which planet is known as the Red Planet?", "answer": "Mars", "used": false },
        { "question": "What is the tallest building in the world?", "answer": "Burj Khalifa", "used": false },
        { "question": "What is a baby goat called?", "answer": "Kid", "used": false },
        { "question": "What vitamin do you get from sunlight?", "answer": "Vitamin D", "used": false },
        { "question": "What instrument has 88 keys?", "answer": "Piano", "used": false },
        { "question": "What geometric shape has four equal sides and angles?", "answer": "Square", "used": false },
        { "question": "Which gas do humans exhale?", "answer": "Carbon dioxide", "used": false },
        { "question": "Which element is used in pencils?", "answer": "Graphite", "used": false },
        { "question": "What is the smallest unit of life?", "answer": "Cell", "used": false },
        { "question": "Which country hosted the 2016 Summer Olympics?", "answer": "Brazil", "used": false },
        { "question": "What’s the name of Harry Potter’s owl?", "answer": "Hedwig", "used": false },
        { "question": "What is the largest organ in the human body?", "answer": "Skin", "used": false },
        { "question": "Which continent is the Sahara Desert located in?", "answer": "Africa", "used": false },
        { "question": "What type of animal is a Komodo dragon?", "answer": "Lizard", "used": false },
        { "question": "How many colors are there in a rainbow?", "answer": "7", "used": false },
        { "question": "Who is the Greek god of the sea?", "answer": "Poseidon", "used": false },
        { "question": "What is the name of the toy cowboy in Toy Story?", "answer": "Woody", "used": false },
        { "question": "What is the name of the world’s largest ocean?", "answer": "Pacific", "used": false },
        { "question": "Which planet has the most moons?", "answer": "Saturn", "used": false },
        { "question": "What is the capital of Egypt?", "answer": "Cairo", "used": false },
        { "question": "What is the hardest natural substance on Earth?", "answer": "Diamond", "used": false },
        { "question": "Which bird is known for its colorful feathers and fan-shaped tail?", "answer": "Peacock", "used": false },
        { "question": "What is the most spoken language in the world?", "answer": "Mandarin", "used": false },
        { "question": "What continent is the country Kenya located in?", "answer": "Africa", "used": false },
        { "question": "Who discovered penicillin?", "answer": "Alexander Fleming", "used": false },
        { "question": "What is the main ingredient in guacamole?", "answer": "Avocado", "used": false },
        { "question": "What gas do humans need to breathe to survive?", "answer": "Oxygen", "used": false },
        { "question": "What kind of animal was Dumbo?", "answer": "Elephant", "used": false },
        { "question": "Which country is famous for its tulips?", "answer": "Netherlands", "used": false },
        { "question": "Which metal is liquid at room temperature?", "answer": "Mercury", "used": false },
        { "question": "What is the name of the large storm on Jupiter?", "answer": "Great Red Spot", "used": false },
        { "question": "Which U.S. state is known as the Sunshine State?", "answer": "Florida", "used": false },
        { "question": "What color are Smurfs?", "answer": "Blue", "used": false },
        { "question": "Which country invented pizza?", "answer": "Italy", "used": false },
        { "question": "Which tree produces acorns?", "answer": "Oak", "used": false },
        { "question": "What’s the name of the pirate in Peter Pan?", "answer": "Captain Hook", "used": false },
        { "question": "What’s the most populous country in the world?", "answer": "China", "used": false },
        { "question": "How many legs does a butterfly have?", "answer": "6", "used": false },
        { "question": "What is the name of the dog in 'The Wizard of Oz'?", "answer": "Toto", "used": false },
        { "question": "What is the smallest planet in the solar system?", "answer": "Mercury", "used": false },
        { "question": "What does a thermometer measure?", "answer": "Temperature", "used": false },
        { "question": "Which animal is known for its black and white stripes?", "answer": "Zebra", "used": false },
        { "question": "What is a baby cat called?", "answer": "Kitten", "used": false },
        { "question": "What does a barometer measure?", "answer": "Air pressure", "used": false },
        { "question": "Which Disney princess has a pet tiger?", "answer": "Jasmine", "used": false },
        { "question": "Which vegetable is known for making people cry when chopped?", "answer": "Onion", "used": false },
        { "question": "How many wheels does a tricycle have?", "answer": "3", "used": false },
        { "question": "What do bees produce?", "answer": "Honey", "used": false },
        { "question": "What month comes after August?", "answer": "September", "used": false },
        { "question": "What kind of animal is Baloo in The Jungle Book?", "answer": "Bear", "used": false },
        { "question": "What do cows drink?", "answer": "Water", "used": false },
        { "question": "How many minutes are there in an hour?", "answer": "60", "used": false },
        { "question": "Which fruit is yellow and curved?", "answer": "Banana", "used": false },
        { "question": "Which instrument is known for having strings and being played with a bow?", "answer": "Violin", "used": false },
        { "question": "What continent is Brazil in?", "answer": "South America", "used": false },
        { "question": "Which superhero is also known as the Caped Crusader?", "answer": "Batman", "used": false },
        { "question": "What is the name of the main character in 'Frozen'?", "answer": "Elsa", "used": false },
        { "question": "What is the opposite of 'up'?", "answer": "Down", "used": false },
        { "question": "Which food comes from pigs?", "answer": "Pork", "used": false },
        { "question": "How many days are in a leap year?", "answer": "366", "used": false },
        { "question": "What is the capital of Spain?", "answer": "Madrid", "used": false },
        { "question": "What is a group of lions called?", "answer": "Pride", "used": false },
        { "question": "What fruit is known for its seeds on the outside?", "answer": "Strawberry", "used": false },
        { "question": "How many toes do humans typically have?", "answer": "10", "used": false },
        { "question": "What animal is known for its pouch?", "answer": "Kangaroo", "used": false },
        { "question": "What do you call a young horse?", "answer": "Foal", "used": false },
        { "question": "What continent is Egypt located in?", "answer": "Africa", "used": false },
        { "question": "Which instrument has black and white keys?", "answer": "Piano", "used": false },
        { "question": "What day comes after Friday?", "answer": "Saturday", "used": false },
        { "question": "How many letters are in the word 'cat'?", "answer": "3", "used": false },
        { "question": "What color do you get when you mix red and white?", "answer": "Pink", "used": false },
        { "question": "What is the name of the wizard in The Lord of the Rings?", "answer": "Gandalf", "used": false },
        { "question": "What do you see with?", "answer": "Eyes", "used": false },
        { "question": "What’s the name of the galaxy nearest to ours?", "answer": "Andromeda", "used": false },
        { "question": "What is the capital city of Australia?", "answer": "Canberra", "used": false },
        { "question": "What is the capital city of Australia?", "answer": "Canberra", "used": false },
        { "question": "Which element has the chemical symbol 'O'?", "answer": "Oxygen", "used": false },
        { "question": "Who wrote the play 'Hamlet'?", "answer": "William Shakespeare", "used": false },
        { "question": "What is the largest mammal in the world?", "answer": "Blue Whale", "used": false },
        { "question": "In which year did the Berlin Wall fall?", "answer": "1989", "used": false },
        { "question": "What is the smallest prime number?", "answer": "2", "used": false },
        { "question": "Which planet is closest to the sun?", "answer": "Mercury", "used": false },
        { "question": "Who painted the 'Starry Night'?", "answer": "Vincent van Gogh", "used": false },
        { "question": "What is the currency of Japan?", "answer": "Yen", "used": false },
        { "question": "What is the tallest building in the world as of 2025?", "answer": "Burj Khalifa", "used": false },
        { "question": "Who discovered penicillin?", "answer": "Alexander Fleming", "used": false },
        { "question": "What is the main language spoken in Brazil?", "answer": "Portuguese", "used": false },
        { "question": "Which ocean is the largest?", "answer": "Pacific Ocean", "used": false },
        { "question": "Who is known as the 'Father of Computers'?", "answer": "Charles Babbage", "used": false },
        { "question": "What is the hardest natural substance on Earth?", "answer": "Diamond", "used": false },
        { "question": "Which country hosted the 2016 Summer Olympics?", "answer": "Brazil", "used": false },
        { "question": "What is the chemical symbol for sodium?", "answer": "Na", "used": false },
        { "question": "Who wrote 'Pride and Prejudice'?", "answer": "Jane Austen", "used": false },
        { "question": "What is the largest desert in the world?", "answer": "Antarctica", "used": false },
        { "question": "Which gas do humans need to breathe?", "answer": "Oxygen", "used": false },
        { "question": "What is the capital of Canada?", "answer": "Ottawa", "used": false },
        { "question": "Who painted the 'Mona Lisa'?", "answer": "Leonardo da Vinci", "used": false },
        { "question": "What is the smallest continent?", "answer": "Australia", "used": false },
        { "question": "Which planet is known as the 'Red Planet'?", "answer": "Mars", "used": false },
        { "question": "What is the chemical symbol for gold?", "answer": "Au", "used": false },
        { "question": "Who wrote '1984'?", "answer": "George Orwell", "used": false },
        { "question": "What is the capital of Italy?", "answer": "Rome", "used": false },
        { "question": "Which element has the atomic number 1?", "answer": "Hydrogen", "used": false },
        { "question": "What is the largest island in the world?", "answer": "Greenland", "used": false },
        { "question": "Who developed the theory of relativity?", "answer": "Albert Einstein", "used": false },
        { "question": "What is the main ingredient in guacamole?", "answer": "Avocado", "used": false },
        { "question": "Which country is known for the Eiffel Tower?", "answer": "France", "used": false },
        { "question": "What is the largest planet in our solar system?", "answer": "Jupiter", "used": false },
        { "question": "Who wrote 'The Great Gatsby'?", "answer": "F. Scott Fitzgerald", "used": false },
        { "question": "What is the capital of Egypt?", "answer": "Cairo", "used": false },
        { "question": "Which element is needed for strong bones?", "answer": "Calcium", "used": false },
        { "question": "What is the longest river in the world?", "answer": "Nile", "used": false },
        { "question": "Who is the author of 'Harry Potter' series?", "answer": "J.K. Rowling", "used": false },
        { "question": "What is the capital of Spain?", "answer": "Madrid", "used": false },
        { "question": "Which gas is most abundant in Earth's atmosphere?", "answer": "Nitrogen", "used": false },
        { "question": "What is the square root of 64?", "answer": "8", "used": false },
        { "question": "Who painted 'The Last Supper'?", "answer": "Leonardo da Vinci", "used": false },
        { "question": "What is the capital of Germany?", "answer": "Berlin", "used": false },
        { "question": "Which planet has the most moons?", "answer": "Saturn", "used": false },
        { "question": "What is the chemical symbol for iron?", "answer": "Fe", "used": false },
        { "question": "Who wrote 'To Kill a Mockingbird'?", "answer": "Harper Lee", "used": false },
        { "question": "What is the capital of Russia?", "answer": "Moscow", "used": false },
        { "question": "Which element is a liquid at room temperature?", "answer": "Mercury", "used": false },
        { "question": "What is the largest ocean on Earth?", "answer": "Pacific Ocean", "used": false },
        { "question": "Who is known as the 'Father of Modern Physics'?", "answer": "Galileo Galilei", "used": false },
        { "question": "What is the capital of China?", "answer": "Beijing", "used": false },
        { "question": "Which gas is essential for photosynthesis?", "answer": "Carbon dioxide", "used": false },
        { "question": "What is the chemical symbol for silver?", "answer": "Ag", "used": false },
        { "question": "Who wrote 'The Odyssey'?", "answer": "Homer", "used": false },
        { "question": "What is the capital of Mexico?", "answer": "Mexico City", "used": false },
        { "question": "Which planet is known for its rings?", "answer": "Saturn", "used": false }, 
        { "question": "What is the capital of Iowa?", "answer": "Des Moines", "used": false },
        { "question": "Which U.S. president is featured on the $2 bill?", "answer": "Thomas Jefferson", "used": false },
        { "question": "What is the most commonly spoken language in Brazil?", "answer": "Portuguese", "used": false },
        { "question": "Who was the first woman to win an Academy Award for Best Director?", "answer": "Kathryn Bigelow", "used": false },
        { "question": "What song did Tom Holland famously perform on Lip Sync Battle in 2017?", "answer": "Umbrella", "used": false },
        { "question": "Who was the top-earning Hollywood star of 2023?", "answer": "Adam Sandler", "used": false },
        { "question": "What is the rarest blood type?", "answer": "AB negative", "used": false },
        { "question": "What is the only metal that is liquid at room temperature?", "answer": "Mercury", "used": false },
        { "question": "What is the deepest known part of the ocean?", "answer": "Mariana Trench", "used": false },
        { "question": "In what year did the Titanic sink?", "answer": "1912", "used": false },
        { "question": "What was the birth name of boxing legend Muhammad Ali?", "answer": "Cassius Clay", "used": false },
        { "question": "Who composed the 'Moonlight Sonata'?", "answer": "Ludwig van Beethoven", "used": false },
        { "question": "What is the only food that does not spoil?", "answer": "Honey", "used": false },
        { "question": "How many colors are in a regular bag of M&M's?", "answer": "6", "used": false },
        { "question": "What is the term for the fear of spiders?", "answer": "Arachnophobia", "used": false },
        { "question": "Which country is known as the Land of the Rising Sun?", "answer": "Japan", "used": false },
        { "question": "What is the capital of Canada?", "answer": "Ottawa", "used": false },
        { "question": "Who painted the Mona Lisa?", "answer": "Leonardo da Vinci", "used": false },
        { "question": "What is the national sport of Canada?", "answer": "Hockey", "used": false },
        { "question": "Which element has the chemical symbol 'O'?", "answer": "Oxygen", "used": false },
        { "question": "What animal is the largest mammal on Earth?", "answer": "Blue Whale", "used": false },
        { "question": "Who wrote the novel '1984'?", "answer": "George Orwell", "used": false },
        { "question": "What is the smallest planet in our solar system?", "answer": "Mercury", "used": false },
        { "question": "Who was the first man to walk on the moon?", "answer": "Neil Armstrong", "used": false },
        { "question": "Which country is home to the Great Barrier Reef?", "answer": "Australia", "used": false },
        { "question": "What is the longest river in the world?", "answer": "Nile River", "used": false },
        { "question": "In what city would you find the Eiffel Tower?", "answer": "Paris", "used": false },
        { "question": "What is the capital of Spain?", "answer": "Madrid", "used": false },
        { "question": "What is the rarest natural element on Earth?", "answer": "Astatine", "used": false },
        { "question": "Which U.S. state is known as the Sunshine State?", "answer": "Florida", "used": false },
        { "question": "What is the capital of Italy?", "answer": "Rome", "used": false },
        { "question": "Which country invented tea?", "answer": "China", "used": false },
        { "question": "What was the first artificial Earth satellite?", "answer": "Sputnik 1", "used": false },
        { "question": "Which planet is known as the Red Planet?", "answer": "Mars", "used": false },
        { "question": "Which ocean is the largest on Earth?", "answer": "Pacific Ocean", "used": false },
        { "question": "What is the highest mountain in the world?", "answer": "Mount Everest", "used": false },
        { "question": "What is the name of the longest-running Broadway musical?", "answer": "The Phantom of the Opera", "used": false },
        { "question": "What is the largest desert in the world?", "answer": "Sahara Desert", "used": false },
        { "question": "Who was the first female prime minister of the United Kingdom?", "answer": "Margaret Thatcher", "used": false },
        { "question": "What is the longest running TV show in the U.S.?", "answer": "The Simpsons", "used": false },
        { "question": "Who is known as the father of modern physics?", "answer": "Albert Einstein", "used": false },
        { "question": "What is the capital of Egypt?", "answer": "Cairo", "used": false },
        { "question": "Which country is home to the ancient city of Petra?", "answer": "Jordan", "used": false },
        { "question": "What is the capital of Russia?", "answer": "Moscow", "used": false },
        { "question": "Which animal is known for its black and white stripes?", "answer": "Zebra", "used": false },
        { "question": "What is the largest island in the world?", "answer": "Greenland", "used": false },
        { "question": "What is the fastest land animal?", "answer": "Cheetah", "used": false },
        { "question": "Which company invented the first computer mouse?", "answer": "Xerox", "used": false },
        { "question": "Who wrote 'Pride and Prejudice'?", "answer": "Jane Austen", "used": false },
        { "question": "Which country is the largest producer of coffee?", "answer": "Brazil", "used": false },
        { "question": "What is the most expensive spice in the world?", "answer": "Saffron", "used": false },
        { "question": "What is the most famous pyramid in Egypt?", "answer": "The Great Pyramid of Giza", "used": false },
        { "question": "Which movie features a shark named Jaws?", "answer": "Jaws", "used": false },
        { "question": "What country has the longest border with the United States?", "answer": "Canada", "used": false },
        { "question": "Which U.S. state is known as the Empire State?", "answer": "New York", "used": false },
        { "question": "Who developed the theory of evolution?", "answer": "Charles Darwin", "used": false },
        { "question": "Which planet has the most moons?", "answer": "Jupiter", "used": false },
        { "question": "What is the smallest country in the world?", "answer": "Vatican City", "used": false },
        { "question": "Who wrote the Harry Potter books?", "answer": "J.K. Rowling", "used": false },
        { "question": "What was the name of the first video game?", "answer": "Pong", "used": false },
        { "question": "What is the national animal of Canada?", "answer": "Beaver", "used": false },
        { "question": "What is the largest ocean in the world?", "answer": "Pacific Ocean", "used": false },
        { "question": "Who was the first person to fly solo across the Atlantic Ocean?", "answer": "Charles Lindbergh", "used": false },
        { "question": "Which country was the first to grant women the right to vote?", "answer": "New Zealand", "used": false },
        { "question": "Which ancient civilization built the pyramids?", "answer": "Egyptians", "used": false },
        { "question": "What is the rarest flower in the world?", "answer": "Ghost Orchid", "used": false },
        { "question": "Who discovered gravity?", "answer": "Isaac Newton", "used": false },
        { "question": "What is the most expensive painting ever sold?", "answer": "Salvator Mundi", "used": false }
          ];
          

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
youWin();
}
function generateNewQuestion() {
    
    let unansweredQuestions = questions.filter(q => !q.answered);

    
    if (unansweredQuestions.length > 0) {
        let randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
        currentQuestion = unansweredQuestions[randomIndex];

        questionText.innerText = currentQuestion.question;
        feedback.innerText = ''; 
    } else {
        feedback.innerText = "All questions have been answered!";
    }
}

function submitAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswers = currentQuestion.answer;

    let isCorrect = false;

    if (Array.isArray(correctAnswers)) {
        isCorrect = correctAnswers.some(ans => userAnswer === ans.toLowerCase());
    } else {
        isCorrect = userAnswer === correctAnswers.toLowerCase();
    }

    if (isCorrect) {
        score += 1000;
        feedback.textContent = "Correct! +1000";
        feedback.style.color = "rgb(91, 196, 115)";
    } else {
        feedback.textContent = `Wrong! -1000. The correct answer is: ${currentQuestion.answer}`;
        feedback.style.color = "rgb(249, 80, 80)";
        if (score >= 1000) {
            score -= 1000;
        }
    }

    scoreText.textContent = `Score: ${score}`;
    answerInput.value = "";
}
generateNewQuestion();  

 
function goHome() {
    document.querySelector("h1").style.display = "block";
    document.getElementById("gameScreen").style.display = "inline-block";
    document.getElementById("questionsScreen").style.display = "none";
    document.getElementById("secretScreen").style.display = "none";
    document.body.style.backgroundColor = "rgb(195, 0, 255)"; 
    document.querySelector("#secretScreen h3").style.display = "none"; 
    
    
    document.getElementById("gifButtonWrapper").classList.remove("hidden");
    document.getElementById("Button1").classList.remove("hidden");
    document.getElementById("scoreText").classList.remove("hidden");
}

function goSecretPage() {
     document.querySelector("h1").style.display = "none"
    document.getElementById("secretScreen").style.display = "inline-block";
    document.getElementById("gameScreen").style.display = "none";
    document.querySelector("#secretScreen h3").style.display = "inline-block";
    document.getElementById("questionsScreen").style.display = "none";
    
    document.getElementById("gifButtonWrapper").classList.add("hidden");
    document.getElementById("Button1").classList.add("hidden");
    document.getElementById("scoreText").classList.add("hidden");

}

function goQuestions() {
     document.querySelector("h1").style.display = "none"
    document.getElementById("gameScreen").style.display = "none";
    document.getElementById("secretScreen").style.display = "none";
    document.getElementById("questionsScreen").style.display = "inline-block";
    document.body.style.backgroundColor = "rgb(0, 110, 255)";
    generateNewQuestion();

   
    document.getElementById("gifButtonWrapper").classList.add("hidden");
    document.getElementById("Button1").classList.add("hidden");
    document.getElementById("scoreText").classList.add("hidden");
   ;
}

claimButton1.addEventListener("click", claimDoubleDecker);

function claimDoubleDecker() {
    if (hasClaimedCouch) {
        return;
    }

    hasClaimedCouch = true; 

    score += 10000;
    scoreText.innerText = "Score: " + score;
    youWin();


    document.getElementById("secretScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "inline-block";

    document.body.style.backgroundColor = "rgb(195, 0, 255)";
    document.querySelector("h1").style.display = "block";
    document.getElementById("gifButtonWrapper").classList.remove("hidden");
    document.getElementById("Button1").classList.remove("hidden");
    document.getElementById("scoreText").classList.remove("hidden");
}
function youWin() {
    if (score >= 100000) {
        
        document.getElementById("win-screen").style.display ="block";
        document.getElementById("gameScreen").style.display = "none";
        document.getElementById("questionsScreen").style.display = "none";
        document.getElementById("secretScreen").style.display = "none";
        document.querySelector("h1").style.display = "none";
    }
}

function playAgain() {
    score = 0;
    scoreText.innerText = 0;
    document.getElementById("win-screen").style.display = "none"; 
    document.getElementById("gameScreen").style.display = "inline-block";
    document.querySelector("h1").style.display = "block";
}


Button1.onclick = addScore;
goFromSecret.onclick = goHome;
gifButton.onclick = goSecretPage;
goToQuestions.onclick = goQuestions;
goFromQuestions.onclick = goHome;
document.getElementById("newQuestion").onclick = generateNewQuestion;
submitAnswerButton.onclick = submitAnswer;
claimButton1.onclick = claimDoubleDecker;
playAgainButton.onclick = playAgain;