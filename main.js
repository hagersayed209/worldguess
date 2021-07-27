const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);


let lettersContainer = document.getElementsByClassName("letters")[0];

lettersArray.forEach(letter => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = 'letterBox';
  lettersContainer.appendChild(span);

});




const words = {
  fruits: ["apple", "orange", "banana", "Mango", "peach", "fig", "strawberry", "watermelon"],
  Animales: ["cat", "lion", "kangroo", "monkey", "camel"],
  vegetables: ["carrot", "Potato", "Onion", "Tomato", "Cabbage", "Eggplant"]
}



let allKeys = Object.keys(words);


let randomkeyNumber = Math.floor(Math.random() * allKeys.length);


let randomkeyName = allKeys[randomkeyNumber];


let randomKeyValue = words[randomkeyName];


let randomValueNumber = Math.floor(Math.random() * randomKeyValue.length);


let randomValueValue = randomKeyValue[randomValueNumber];

document.getElementById("category").innerHTML = randomkeyName;


let lettersGuessContainer = document.querySelector(".letters-guess");

let letters1 = Array.from(randomValueValue);


letters1.forEach(letter => {


  let Span1 = document.createElement("span");




  lettersGuessContainer.appendChild(Span1);

});
let arr2 = [];

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongTries = 0;


let tries = document.querySelector(".draw");

document.addEventListener("click", (e) => {


  let theStatus = false;

  if (e.target.className === 'letterBox') {

    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let worldguess = Array.from(randomValueValue.toLowerCase());



    worldguess.forEach((wordLetter, WordIndex) => {

      if (theClickedLetter == wordLetter) {
        theStatus = true;
        arr2.push(theClickedLetter);
        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }

    });

    if (theStatus !== true) {
      document.getElementsByClassName("tries")[wrongTries].style.display = 'none';

      wrongTries++;

      document.getElementById("maxguess").innerHTML = wrongTries;
      document.getElementById("fail").play();


      if (wrongTries === 5) {

        endGame();


        lettersContainer.classList.add("finished");

      }

    } else {
      document.getElementById("success").play();

      if (letters1.toString() === arr2.toString()) {

        
        win();
        lettersContainer.classList.add("finished");

      }

    }

  }

});


function endGame() {


  let div = document.createElement("div");

  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);


  div.appendChild(divText);

  div.className = 'popup';


  document.body.appendChild(div);

}
function win() {


  let div = document.createElement("div");

  let divText = document.createTextNode ("Congratulations You did well!!!!");
  div.appendChild(divText);

  div.className = 'win';


  document.body.appendChild(div);

}
function playAgin() {
  location.reload();
}

function login(){
  window.location="login.html";
}