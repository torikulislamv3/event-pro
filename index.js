console.log('this is file for event option check up');

// option no.02
const makeBlue = document.getElementById('makeBlue');
makeBlue.onclick = makeYellow;

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}


const darkMode = document.getElementById('darkMode');
darkMode.onclick = makeDark;

function makeDark() {
    document.body.style.backgroundColor = 'black';
}

document.getElementById('green-color').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})