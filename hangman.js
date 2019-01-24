var game;

window.onload = function () {
    game = new HangmanGame();
};

class HangmanGame {
    constructor() {
        HangmanGame.createKeypad();
        this.getWords();
        this.chooseWord();
        console.log(this.chosenWord);
    }

    chooseWord() {
        let n = Math.floor(Math.random() * this.wordsList.length);
        this.chosenWord = this.wordsList[n];

    }

    getWords() {
        let x = new XMLHttpRequest();
        x.open('GET', "words.json", false);
        let response = null;
        x.onload = function () {
             response = JSON.parse(this.response);
        };
        x.send();
        this.wordsList = response;
    }

    static createKeypad() {

        let kPad = document.getElementById("keypad");
        kPad.innerHTML = "";

        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < letters.length; i++) {
            let btn = document.createElement("BUTTON");

            let t = document.createTextNode(letters[i]);
            btn.appendChild(t);

            let idAtt = document.createAttribute("id");
            idAtt.value = "KeyPadButton-" + letters[i];
            btn.setAttributeNode(idAtt);

            let classAtt = document.createAttribute("class");
            classAtt.value = "keyButton unused";
            btn.setAttributeNode(classAtt);

            let onClickAtt = document.createAttribute("onclick");
            onClickAtt.value = "useLetter(this)";
            btn.setAttributeNode(onClickAtt);

            kPad.appendChild(btn);
        }
    }

}
