const now = new Date();

const paev = now.getDate();
console.log("Tänane päev " + paev + "päev");

const kuu = now.getMonth();
console.log("Kuu number on " + kuu);

const aasta = now.getFullYear();
console.log("Aasta on: " + aasta);

const nadalapaev = now.getDay();
console.log("Nadalapaeva number on: " + nadalapaev);

function tana(){
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on "+paev+"."+kuu+"."+aasta;
}

const konsultatsioon = new Date(2026, 10, 2);
const vahe = konsultatsioon.getTime() - now.getTime();
const konspaev = vahe / (1000 * 60 * 60 * 24);

console.log("Konsultatsiooni nädalani "+konspaev.toFixed(0) +" päeva");

function Synnipaevani(){
    let vastus2 = document.getElementById("vastus2");

    let synnipaev = new Date(2026, 11, 2);

    if (now > synnipaev) {
        synnipaev.setFullYear(aasta + 1);
    }

    let vaheSynni = synnipaev.getTime() - now.getTime();
    let synnipaevaPaevad = vaheSynni / (1000 * 60 * 60 * 24);

    vastus2.innerHTML = "Sünnipäevani on jäänud " + synnipaevaPaevad.toFixed(0) + " päeva";
}