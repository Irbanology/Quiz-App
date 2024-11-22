console.log('Con');

var namee = document.getElementById('name')
var email = document.getElementById('email')
var rollNo = document.getElementById('roll-no')
var techerN = document.getElementById('teach')

var mainDiv = document.getElementById('main-div')

var pt = document.getElementById('pt-2')
var pT = document.getElementById('pt-3')

var NE = document.getElementById('pt-4')
var RI = document.getElementById('pt-5')
var MU = document.getElementById('pt-6')

const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
        explanation: "Paris is the capital of France."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
        explanation: "Mars is known as the Red Planet due to its reddish appearance."
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        correctAnswer: "Shakespeare",
        explanation: "William Shakespeare wrote the tragedy 'Romeo and Juliet'."
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correctAnswer: "Blue Whale",
        explanation: "The blue whale is the largest mammal, growing up to 100 feet long."
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
        correctAnswer: "Carbon Dioxide",
        explanation: "Plants absorb carbon dioxide during photosynthesis."
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
        explanation: "Albert Einstein developed the theory of relativity, revolutionizing our understanding of space and time."
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2",
        explanation: "2 is the smallest prime number, as it's only divisible by 1 and itself."
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctAnswer: "Yen",
        explanation: "The currency of Japan is the Japanese Yen (¥)."
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        correctAnswer: "100°C",
        explanation: "Water boils at 100°C (212°F) at sea level."
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correctAnswer: "Oxygen",
        explanation: "The chemical symbol 'O' stands for Oxygen, a vital element for respiration."
    }
];
console.log(quizQuestions[0].question);


function chaloo() {
    console.log("chala");
    if (!namee.value || !email.value || !rollNo.value || !techerN.value) {
        alert("Fill Out Everything Pleae!")
        return
    }
    mainDiv.classList.add('hidden')
    pt.style.display = 'block'
    pT.style.display = 'block'
    MU.style.display = 'flex'
    NE.children[0].innerHTML = `<span class="font-bold"> Name: </span>` + namee.value
    RI.children[0].innerHTML = `<span class="font-bold"> Email: </span>` + email.value
    RI.children[1].innerHTML = `<span class="font-bold"> Roll No: </span>` + rollNo.value
    NE.children[1].innerHTML = `<span class="font-bold"> Instructor: </span>` + techerN.value


}