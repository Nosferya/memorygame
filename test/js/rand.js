var btn = document.getElementById("act");
var text3;
var textres;
var text4 = document.getElementById("resultats");

btn.addEventListener("click", ran);

function ran(min, max) {
    var i = 1;
    var min = 0;
    var max = 11;
    var res;
    var coups = 20;


    for (i; i <= coups; i++) {
        res = Math.random() * (max - min) + min;
        res = Math.trunc(res);
        text3 = " Coup " + i + " / Résultat : " + res + " //";
        console.log(text3);
        textres = text4.appendChild(document.createTextNode(text3));
        if (i == coups) {
            return res;
        }
    }
};