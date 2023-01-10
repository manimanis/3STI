const chkUpper = document.getElementById("upper");
const chkLower = document.getElementById("lower");
const chkDigit = document.getElementById("digit");
const chkSymbols = document.getElementById("symbols");
const inpLen = document.getElementById("len");
const inpNbre = document.getElementById("nbre");
const btnGen = document.getElementById("gen");

function randint(a, b) {
    return Math.floor(a + Math.random() * (b - a + 1));
}

function genPassword(chars, len) {
    let pass = "";
    for (let i = 0; i < len; i++) {
        pass += chars[randint(0, chars.length - 1)];
    }
    return pass;
}

function upperChars() {
    let s = "";
    for (let i = 65; i <= 90; i++) {
        s += String.fromCharCode(i);
    }
    return s;
}

const upper = upperChars();
const lower = upper.toLowerCase();
const digits = "0123456789";
const symbols = "~#^$£€;:/*-+<>=!";


