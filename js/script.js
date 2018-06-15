const cardsArray = [{ // créer un tableau d'image
        'name': 'canari',
        'img': 'img/canari.jpg',
    },
    {
        'name': 'chat',
        'img': 'img/chat.jpg',
    },
    {
        'name': 'cheval',
        'img': 'img/cheval.jpg',
    },
    {
        'name': 'chien',
        'img': 'img/chien.jpg',
    },
    {
        'name': 'cochondDinde',
        'img': 'img/cochoninde.jpg',
    },
    {
        'name': 'hamster',
        'img': 'img/hamster.jpg',
    },
    {
        'name': 'lapin',
        'img': 'img/lapin.jpg',
    },
    {
        'name': 'poissonrouge',
        'img': 'img/poissonrouge.jpg',
    },
    {
        'name': 'renard',
        'img': 'img/renard.jpg',
    },
    {
        'name': 'tortue',
        'img': 'img/tortue.jpg',
    },
];

const gameGrid = cardsArray .concat(cardsArray) //duplique le tableau d'image pour qu'il y ai 20 photo, soit 10 paire.
.sort(() => 0.5 - Math.random()); // randommise le game (gameGrid) avec la fonction

let firstGuess = ''; // 1 er choix avec des '' vides pour que l'image soit récupérer
let secondGuess = ''; // Pareille pour 2 eme choix
let count = 0;
let previousTarget = null;
let delay = 1200; // permet de choisir le temps avant que les image ne se retourne

const game = document.getElementById('game'); // récupère l'id game
const grid = document.createElement('section'); // créer une section dans la div game
grid.setAttribute('class', 'grid'); //attribut la class grid à la section
game.appendChild(grid); // insére la section grid dans la div 'game'

gameGrid.forEach(item => { // pour chaque item de GameGrid (ligne)
    const { name, img } = item; // définis q'un item est composé de name et de img: SOIT les 10 * 2 de la constante cardsArray.

    const card = document.createElement('div'); // créer la div card
    card.classList.add('card'); //ajoute la class card à la div
    card.dataset.name = name; //renseigne le nom comme name

    const front = document.createElement('div'); // créer le devant des carte (l'image avec le )
    front.classList.add('front'); // ajoute la class front à la div

    const back = document.createElement('div');
    back.classList.add('back'); //ajoute la clsse Back à la div
    back.style.backgroundImage = `url(${img})`; // récupère l'image back.png

    grid.appendChild(card); // place card en enfant de Grid
    card.appendChild(front);
    card.appendChild(back);
    //place front et back en enfant de card
}); // Soit une fonction qui créer pour chaque image du tableau des une carte avec un front et un back

const match = () => { //
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', event => {

    const clicked = event.target;

    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
    ) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            console.log(firstGuess);
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            console.log(secondGuess);
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }

});
