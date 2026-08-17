let name = "";


function startConfession() {

    name =
        document.getElementById("nameInput").value.trim();

    if (name === "") {

        alert("Please enter your name ❤️");

        return;
    }

    document.getElementById("personName").textContent = name;

    document.getElementById("nameSection").style.display = "none";

    document.getElementById("confessionSection").style.display = "block";

}


/* IF THEY SAY YES TO THE CONFESSION */

function okayAnswer() {

    document.getElementById("confessionSection").style.display = "none";

    document.getElementById("chanceSection").style.display = "block";

}


/* IF THEY SAY NO TO THE CONFESSION */

function notOkayAnswer() {

    document.getElementById("confessionSection").style.display = "none";

    document.getElementById("finalSection").style.display = "block";

    document.getElementById("finalEmoji").textContent = "🥲";

    document.getElementById("finalTitle").textContent =
        "That's okay, " + name + ".";

    document.getElementById("finalMessage").textContent =
        "Thank you for being honest with me. I respect your answer and I hope we're still okay. ❤️";

}


/* IF THEY SAY YES TO THE CHANCE */

function chanceYes() {

    document.getElementById("chanceSection").style.display = "none";

    document.getElementById("finalSection").style.display = "block";

    document.getElementById("finalEmoji").textContent = "😭❤️";

    document.getElementById("finalTitle").textContent =
        "You made me so happy!";

    document.getElementById("finalMessage").textContent =
        "Thank you for giving me a chance, " + name + ". I'll appreciate it. ❤️";

}


/* IF THEY SAY NO TO THE CHANCE */

function chanceNo() {

    document.getElementById("chanceSection").style.display = "none";

    document.getElementById("finalSection").style.display = "block";

    document.getElementById("finalEmoji").textContent = "🥲❤️";

    document.getElementById("finalTitle").textContent =
        "I understand.";

    document.getElementById("finalMessage").textContent =
        "Thank you for being honest, " + name + ". I respect your answer. ❤️";

}