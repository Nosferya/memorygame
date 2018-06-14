var btn = document.getElementById("act");

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
        document.write("<p>Coup " + i + " / Résultat : " + res + "</p>");
        if (i == coups) {
            return res;
        }
    }
};