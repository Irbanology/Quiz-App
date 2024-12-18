console.log('Con');


var javascriptQuiz = [
    {
        num: 1,
        question: "What is the output of `console.log(typeof null)`?",
        options: {
            a: "object",
            b: "null",
            c: "undefined",
            d: "boolean",
        },
        answer: "object",
    },
    {
        num: 2,
        question: "Which of the following is not a JavaScript data type?",
        options: {
            a: "String",
            b: "Number",
            c: "Boolean",
            d: "Float",
        },
        answer: "Float",
    },
    {
        num: 3,
        question: "What does `isNaN()` function do?",
        options: {
            a: "Checks if a value is not a number",
            b: "Checks if a value is a number",
            c: "Checks if a value is null",
            d: "Checks if a value is undefined",
        },
        answer: "Checks if a value is not a number",
    },
    {
        num: 4,
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: {
            a: "/* */",
            b: "//",
            c: "#",
            d: "??//",
        },
        answer: "//",
    },
    {
        num: 5,
        question: "What is the correct extension of JavaScript?",
        options: {
            a: "script.js",
            b: "script.jsx",
            c: "script.sjs",
            d: "script.src",
        },
        answer: "script.js",
    },
    {
        num: 6,
        question: "What does the `===` operator do in JavaScript?",
        options: {
            a: "Compares both value and type",
            b: "Compares only values",
            c: "Assigns a value",
            d: "Checks for null values",
        },
        answer: "Compares both value and type",
    },
    {
        num: 7,
        question: "Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Mozilla",
            c: "Netscape",
            d: "Google",
        },
        answer: "Netscape",
    },
    {
        num: 8,
        question: "What will `console.log(2 + '2')` output?",
        options: {
            a: "4",
            b: "22",
            c: "NaN",
            d: "undefined",
        },
        answer: "22",
    },
    {
        num: 9,
        question: "How can you convert a string into a number in JavaScript?",
        options: {
            a: "Number()",
            b: "parseInt()",
            c: "+",
            d: "All of the above",
        },
        answer: "All of the above",
    },
    {
        num: 10,
        question: "Which method is used to add elements to the end of an array?",
        options: {
            a: ".push()",
            b: ".pop()",
            c: ".shift()",
            d: ".unshift()",
        },
        answer: ".push()",
    },
];


var namee = document.getElementById('name')
var email = document.getElementById('email')
var rollNo = document.getElementById('roll-no')
var techerN = document.getElementById('teach')

var mainDiv = document.getElementById('main-div')

var pt = document.getElementById('pt-2')
var pT = document.getElementById('pt-3')
var Mt = document.querySelector('.mt-1')
var NE = document.getElementById('pt-4')
var RI = document.getElementById('pt-5')
var MU = document.getElementById('pt-6')
var quesOpt = document.getElementById('quesOpt').children
var question = document.getElementById('ques')
var h2 = document.getElementById('all')
var btn = document.getElementById('btn')
var Result = document.getElementById('result-div')
var correc = document.getElementById('cAns')
var totalQ = document.getElementById('tot')
var wroong = document.getElementById('wAns')
var percentage = document.getElementById('percent')
console.log(percentage);



for (var Liopt of quesOpt) {
    Liopt.setAttribute('onclick', 'setQues(this)')
    Liopt.classList.add('cursor-pointer')
}



// if(Liopt === quesCount)

var quesCount = 0
var totalQues = javascriptQuiz.length
var correctAns = 0
var wrongAns = 0
var total;

// console.log(javascriptQuiz.answer );

// for (const Liopt of javascriptQuiz) {
//     console.log(Liopt);
// }

function setQues(ele) {
    btn.classList.add('pointer-events-none')
    console.log('This');
    if (ele.innerHTML == javascriptQuiz[quesCount].answer) {
        ele.classList.add('bg-[green]')
        // ele.classList.remove('hover:bg-[green]')
        ele.classList.add('pointer-events-none')
        correctAns = correctAns + 1
        console.log('');
        console.log(correctAns);
        btn.classList.remove('pointer-events-none')

        // cccc

    } else {
        ele.classList.add('bg-[red]')
        wrongAns = wrongAns + 1
        ele.classList.add('pointer-events-none')
        btn.classList.remove('pointer-events-none')
        console.log(wrongAns);
    }
    for (var lipt of quesOpt) {
        console.log(lipt);
        lipt.classList.add('pointer-events-none')
    }

}



// Result.style.display = 'block'
// mainDiv.classList.add('hidden')
// pt.style.display = 'hidden'
// pT.style.display = 'hidden'
// MU.style.display = 'hidden'
// NE.children[0].innerHTML = `<span class="font-bold"> Name: </span>` + namee.value
// RI.children[0].innerHTML = `<span class="font-bold"> Email: </span>` + email.value
// RI.children[1].innerHTML = `<span class="font-bold"> Roll No: </span>` + rollNo.value
// NE.children[1].innerHTML = `<span class="font-bold"> Instructor: </span>` + techerN.value

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
    btn.classList.add('pointer-events-none')
    // btn.classList.add('cursor-no-drop')
    NE.children[0].innerHTML = `<span class="font-bold"> Name: </span>` + namee.value
    RI.children[0].innerHTML = `<span class="font-bold"> Email: </span>` + email.value
    RI.children[1].innerHTML = `<span class="font-bold"> Roll No: </span>` + rollNo.value
    NE.children[1].innerHTML = `<span class="font-bold"> Instructor: </span>` + techerN.value

    question.innerHTML = `<span class="font-bold">Q:${javascriptQuiz[quesCount].num}</span> ${javascriptQuiz[quesCount].question}`
    quesOpt[0].innerHTML = javascriptQuiz[quesCount].options.a
    quesOpt[1].innerHTML = javascriptQuiz[quesCount].options.b
    quesOpt[2].innerHTML = javascriptQuiz[quesCount].options.c
    quesOpt[3].innerHTML = javascriptQuiz[quesCount].options.d
    h2.innerHTML = `${quesCount + 1} of ${javascriptQuiz.length}`
    timer()
}

console.log(quesCount);

// ADDING TIMER :
var num = 0
function timer() {
    var flg = true
    var inter = setInterval(function hello() {
        num++
        console.log(num);
        if (num === 60) {
            clearInterval(inter)
            nextquestion()
            num = 0
            flg = false
            console.log(flg);
            if (flg == false) {
                timer()
            }
            return
        }

    }, 1000)
}





function nextquestion() {
    
    console.log("chala");
    num = 0
    console.log("Num" + num);

    timer()
    if (quesCount < javascriptQuiz.length - 1) {
        quesCount = quesCount + 1
        question.innerHTML = `Q${javascriptQuiz[quesCount].num}: ${javascriptQuiz[quesCount].question}`
        quesOpt[0].innerHTML = javascriptQuiz[quesCount].options.a
        quesOpt[1].innerHTML = javascriptQuiz[quesCount].options.b
        quesOpt[2].innerHTML = javascriptQuiz[quesCount].options.c
        quesOpt[3].innerHTML = javascriptQuiz[quesCount].options.d
        h2.innerHTML = `${quesCount + 1} of ${javascriptQuiz.length}`
        Liopt.classList.add('pointer-events-none')
        btn.classList.add('pointer-events-none')
    } else {
        console.log("Khtam Question");
        mainDiv.classList.add('hidden')
        pt.style.display = 'none'
        pT.style.display = 'none'
        MU.style.display = 'none'
        Result.style.display = 'block'
        btn.classList.add('pointer-events-none')

        total = (correctAns / totalQues) * 100;
        totalQ.innerHTML = totalQues;
        wroong.innerHTML = wrongAns;
        correc.innerHTML = correctAns;
        if (total >= 70) {
            percentage.classList.add('bg-[green]')
        } else {
            percentage.classList.add('bg-[red]')
        }
        percentage.innerHTML = `${total}%`
        percentage.style.width = total + '%'    
    }
    for (var liOption of quesOpt) {
        liOption.classList.remove('bg-[red]', 'bg-[green]', 'text-white', 'pointer-events-none')
        console.log(liOption);
    }

}

percentage.innerText = total + "%"
percentage.style.width = total + '%'

console.log(quesCount);