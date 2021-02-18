const message = document.querySelector(".message");
const guess = document.querySelector("input");
const btn = document.getElementById("btn")
const myArray = ["apple", "orange", "banana", "kiwi", "ananas", "watermelon", "papaya"];

//it means that currently the user is not playing.
let inPlay = false;
let cluttered = "";
let ordered = "";
let score = 0;

//start to play

btn.addEventListener("click", function () {
    //check the event
    //console.log("clicked");

    if (!inPlay) {
        inPlay = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle("hide");
        guess.value = "";
        //    console.log(createWord());
        ordered = createWord();
        cluttered = randomArray(ordered.split("")).join("-");
        message.innerHTML = cluttered;
    } else {
        let wordGuess = guess.value;
        score++;
        if (wordGuess == ordered) {
            inPlay = false;
            message.innerHTML = "Yes! The correct word is " + ordered + "." + "You won with " + score + " guesses."
            button.innerHTML = "Start";
            guess.classList.toggle("hide");
        } else {
            message.innerHTML = "Wrong. Guess again " + cluttered;
        }
    }


});

function createWord() {
    let randomWord = Math.floor(Math.random() * myArray.length);
    let theWord = myArray[randomWord];
    //console.log(theWord);
    let word = randomArray(theWord.split(""));
    //console.log(word.join(""));
    message.innerHTML = word.join("");
    return theWord;
};

function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];

        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

