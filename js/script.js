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
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1000;

const jeu = document.getElementById('jeu'); // récupère l'id Jeu
const grid = document.createElement('section'); // créer une grille
grid.setAttribute('class', 'grid');
jeu.appendChild(grid); // met la grille en enfant de la div jeu

gameGrid.forEach(item => { //pour chaque item de la grille de carte = créer une div
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;

  // Create front of card
 const front = document.createElement('div');
 front.classList.add('front');

 // Create back of card, which contains
 const back = document.createElement('div');
 back.classList.add('back');
 back.style.backgroundImage = `url(${item.img})`;

 // Append card to grid, and front and back to each card
 grid.appendChild(card);
 card.appendChild(front);
 card.appendChild(back);
});


grid.addEventListener('click', function (event) {

  let clicked = event.target;
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget) { return; }
  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    } else {
      // Assign second guess
      secondGuess = clicked.dataset.name;
      clicked.classList.add('selected');
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
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
