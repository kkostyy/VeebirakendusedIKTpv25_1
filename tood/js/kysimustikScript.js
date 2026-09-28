function nimiLugemineKastist() {
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi").value;

    vastus1.innerHTML = nimi ? "Sisestatud nimi on: " + nimi : "";
    return nimi;
}

function radioValik() {
    let vastus2 = document.getElementById("vastus2");
    let spotify = document.getElementById("spotify");
    let raadio = document.getElementById("raadio");
    let vinyl = document.getElementById("vinüülplaat");

    let valik = "";
    if (spotify.checked) {
        valik = spotify.value;
    } else if (raadio.checked) {
        valik = raadio.value;
    } else if (vinyl.checked) {
        valik = vinyl.value;
    } else {
        valik = "Palun tee oma valik!";
    }

    vastus2.innerHTML = "Valik on: " + valik;
    return valik;
}

function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");
    let Radiohead = document.getElementById("Radiohead");
    let rollingstones = document.getElementById("rollingstones");
    let thesmiths = document.getElementById("thesmiths");
    let thesmashingpumpkins = document.getElementById("thesmashingpumpkins");

    let valikud = [];
    if (Radiohead.checked) valikud.push(Radiohead.value);
    if (rollingstones.checked) valikud.push(rollingstones.value);
    if (thesmiths.checked) valikud.push(thesmiths.value);
    if (thesmashingpumpkins.checked) valikud.push(thesmashingpumpkins.value);

    let tulemus = valikud.length > 0 ? valikud.join(", ") : "Tee oma valik!";

    vastus3.innerHTML = "Sinu lemmikud on: " + tulemus;
    vastus3.style.backgroundColor = "lightblue";

    return tulemus;
}

function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund").value;

    vastus4.innerHTML = "Sa kuulad muusikat: " + tund + " tundi";
    return tund;
}

function sellectValik(){
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    if (stiil.selectedIndex !== 0) {
        vastus5.innerHTML = "Sa valisid " + stiil.value;
        return stiil.value;
    } else {
        vastus5.innerHTML = "palun tee oma valik!";
        return "valimata";
    }
}

function emailValik() {
    let vastusEmail = document.getElementById("vastusEmail");
    let email = document.getElementById("email").value;

    vastusEmail.innerHTML = email ? "Sinu e-mail: " + email : "";
    return email;
}

function arvamusValik() {
    let vastusArvamus = document.getElementById("vastusArvamus");
    let arvamus = document.getElementById("arvamus").value;

    vastusArvamus.innerHTML = arvamus ? "Sinu arvamus: " + arvamus : "";
    return arvamus;
}

function radioValik2() {
    let vastus6 = document.getElementById("vastus6");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let valik3 = "";
    if (jah.checked) {
        valik3 = jah.value;
    } else if (ei.checked) {
        valik3 = ei.value;
    } else {
        valik3 = "Palun tee oma valik!";
    }

    vastus6.innerHTML = "Valik on: " + valik3;
    return valik3;
}

function jaamadValik() {
    let vastus7 = document.getElementById("vastus7");
    let jaamad = document.getElementById("jaamad").value;

    vastus7.innerHTML = jaamad ? "Sinu nimetatud jaamad: " + jaamad : "";
    return jaamad;
}

function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");
    let nimi = nimiLugemineKastist();
    let valik = radioValik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = sellectValik();
    let email = emailValik();
    let arvamus = arvamusValik();
    let valik3 = radioValik2();
    let jaamad = jaamadValik();

    vastusKoik.innerHTML =
        "Sinu nimi on: " + nimi + "<br>" +
        "Stiil: " + stiil + "<br>" +
        "Platvorm: " + valik + "<br>" +
        "Lemmikud: " + valik2 + "<br>" +
        "Aeg: " + tund + " tundi<br>" +
        "E-mail: " + email + "<br>" +
        "Arvamus: " + arvamus + "<br>" +
        "Raadio kuulamine: " + valik3 + "<br>" +
        "Nimetatud jaamad: " + jaamad;
}

function puhasta() {
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus3").style.backgroundColor = "transparent";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastusEmail").innerHTML = "";
    document.getElementById("vastusArvamus").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";
    document.getElementById("vastus7").innerHTML = "";
    document.getElementById("vastusKoik").innerHTML = "";
}