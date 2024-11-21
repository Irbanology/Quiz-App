console.log('Con');


var namee = document.getElementById('name')
var email = document.getElementById('email')
var rollNo = document.getElementById('roll-no')
var techerN = document.getElementById('teach')

var mainDiv = document.getElementById('main-div')
var pt = document.getElementById('pt-2')
var pT = document.getElementById('pt-3')

var spn = document.getElementsByTagName('span')
console.log(spn);

var NE = document.getElementById('pt-4')
var RI = document.getElementById('pt-5')



//  ? Only For Testing :
mainDiv.classList.add('hidden')
pt.style.display = 'block'
pT.style.display = 'block'

function chaloo() {
    console.log("chala");
    mainDiv.classList.add('hidden')
    pt.style.display = 'block'
    pT.style.display = 'block'
    NE.children[0].innerHTML = `<span class="font-bold"> Name : <span/>` + namee.value
    NE.children[1].innerHTML = `<span class="font-bold"> Email : <span/>` + email.value
    RI.children[0].innerHTML = `<span class="font-bold"> Roll No : <span/>` + rollNo.value
    RI.children[1].innerHTML = `<span class="font-bold"> Instructor : <span/>` + techerN.value
}