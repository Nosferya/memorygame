var pictclick = document.getElementById("pict");
pictclick.addEventListener('click', cha);
let nb = 0;

function cha() {
    if (nb == 0) {
        pict.style.backgroundColor = 'red';
        nb = 1;
    } else {
        pict.style.backgroundColor = 'black';
        nb = 0;
    }

};