var legalb = document.getElementById("legalt");
var closeb = document.getElementById("closebtn");
var begind = document.getElementById("begin");
var legald = document.getElementById("legaltxt");

legalb.addEventListener("click", open);
closeb.addEventListener("click", close);

function open() {
    begind.style.display = "none";
    legald.style.display = "inline-block";
}

function close() {
    begind.style.display = "inline-block";
    legald.style.display = "none";
}