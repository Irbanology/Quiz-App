console.log('Con');


var namee = document.getElementById('name')
var email = document.getElementById('email')
var rollNo = document.getElementById('roll-no')
var techerN = document.getElementById('teach')

var mainDiv = document.getElementById('main-div')
var pt = document.getElementById('pt-2')


console.log();

function chaloo() {
    console.log("chala");
    mainDiv.classList.add('hidden')
        pt.style.display = 'flex'
        pt.children[0].children[0].innerHTML = namee.value
        pt.children[0].children[1].innerHTML = email.value
        pt.children[0].children[2].innerHTML = rollNo.value
        pt.children[0].children[3].innerHTML = techerN.value
    console.log(pt.children[0].children[0],
        pt.children[0].children[1],
        pt.children[0].children[2],
        pt.children[0].children[3]);

}