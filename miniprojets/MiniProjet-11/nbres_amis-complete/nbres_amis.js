const inpA = document.getElementById("a");
const inpB = document.getElementById("b");
const inpRes = document.getElementById("res");
const btn = document.getElementById("calc");
const btnSelNum = document.getElementById("sel-num");
const radAmis = document.getElementById('nbre-amis');
const radParfait = document.getElementById('nbre-parfait');

function sommeDiv(n) {
    let sd = 1;
    const maxDiv = Math.floor(1 + Math.sqrt(n));
    for (let i = 2; i <= maxDiv; i++) {
        if (n % i == 0) {
            sd += i;
            const j = n / i;
            if (i != j) {
                sd += j;
            }
        }
    }
    return sd;
}

function calcAmi(a) {
    const ami = sommeDiv(a);
    const ami2 = sommeDiv(ami);
    if (ami2 == a) {
        return ami;
    }
    return -1;
}

function calcAmis(a, b) {
    const t = [];
    for (let i = a; i <= b; i++) {
        const ami = calcAmi(i);
        if (ami != -1 && ami > i && ami >= a && ami <= b) {
            t.push(i + ", " + ami);
        }
    }
    return t;
}

function calcParfaits(a, b) {
    const t = [];
    for (let i = a; i <= b; i++) {
        const sd = sommeDiv(i);
        if (sd == i) {
            t.push(i);
        }
    }
    return t;
}

function btnCalcClicked() {
    const a = Number(inpA.value);
    const b = Number(inpB.value);
    const type = (radAmis.checked) ? "amis" : "parfaits";
    let t = [];
    inpRes.value = "Liste de nombres " + type + "\n";
    if (type == "amis") {
        t = calcAmis(a, b);
    } else {
        t = calcParfaits(a, b);
    }
    if (t.length == 0) {
        inpRes.value += "Aucun nombre trouvé dans l'intervalle [" + a + ", " + b + "].";
    } else {
        for (let i = 0; i < t.length; i++) {
            inpRes.value += t[i] + '\n';
        }
    }
}

function randint(a, b) {
    return Math.floor(a + Math.random() * (b - a + 1));
}

function selectNumbers() {
    const a = randint(100, 99998);
    const b = randint(a+1, 99999);
    inpA.value = a;
    inpB.value = b;
    inpRes.value = "";
}

selectNumbers();
btnSelNum.addEventListener('click', selectNumbers);
btn.addEventListener('click', btnCalcClicked);