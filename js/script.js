const cardsArray = [{ //tableau d'image
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

let gameGrid = cardsArray.concat(cardsArray); //duplique le tableau d'image
gameGrid.sort(() => 0.5 - Math.random()); // randommise le jeu (gameGrid) avec la foonction

let firstGuess = ''; // 1 er choix avec des '' vides pour que l'image soit récupérer
let secondGuess = '';// Pareille pour 2 eme choix
let count = 0;
let previousTarget = null;
let delay = 1000;

const jeu = document.getElementById('jeu'); // récupère l'id Jeu
const grid = document.createElement('section'); // créer une grille
grid.setAttribute('class', 'grid'); //donne la class Grid à la section
jeu.appendChild(grid); // met la grille en enfant de la div jeu

gameGrid.forEach(item => { //pour chaque item de la grille de carte = créer une div
  const card = document.createElement('div'); // la constante
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;

 const front = document.createElement('div');
 front.classList.add('front');

 const back = document.createElement('div');
 back.classList.add('back');
 back.style.backgroundImage = `url(${item.img})`;


 grid.appendChild(card);
 card.appendChild(front);
 card.appendChild(back);
});

const match = () => {
 var selected = document.querySelectorAll('.selected');
 selected.forEach(card => {
   card.classList.add('match');
 });
}

const resetGuesses = () => {
 firstGuess = '';
 secondGuess = '';
 count = 0;

 var selected = document.querySelectorAll('.selected');
 selected.forEach(card => {
   card.classList.remove('selected');
 });
};

grid.addEventListener('click', function (event) {

  let clicked = event.target;
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) { return; }
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
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      }
      else {
        setTimeout(resetGuesses, delay);
      }
    }
     previousTarget = clicked;
  }
});
