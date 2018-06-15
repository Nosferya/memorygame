var pictclick2 = document.getElementById("pictclick");

pictclick2.addEventListener('click', cha2);
let nb2 = 0;
var nbc = 0;
var matr;
var text2;
var texthtml = 0;


function cha2() {
    var text = document.getElementById("pclick");

    while (text.firstChild) {
        text.removeChild(text.firstChild);
    }
    if (nb2 == 0) {
        pictclick2.style.backgroundColor = 'red';
        nb2 = 1;
    } else {
        pictclick2.style.backgroundColor = 'black';
        nb2 = 0;
    }
    nbc++;
    matr = nbc + " Click."
    text2 = matr;
    console.log(text2);
    texthtml.textContent = text.appendChild(document.createTextNode(text2));
};