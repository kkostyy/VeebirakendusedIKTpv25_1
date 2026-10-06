function juhuslikPilt() {
    const pildid = [
        'Pildid/smile.png',
        'Pildid/kurb.png',
        'Pildid/neutral.png',
        'Pildid/lill.png'
    ];

    const randomPilt = document.getElementById('randomPilt');
    const pilt = pildid[Math.floor(Math.random() * pildid.length)];

    randomPilt.setAttribute('src', pilt);

    document.getElementById('vastus').innerHTML = "Siia tuleb vastus";
    document.getElementById('vastus').style.color = "black";
    document.getElementById('valik').value = "vali...";
}

function selectValik() {
    let vastus = document.getElementById('vastus');
    let valik = document.getElementById('valik');
    let randomPilt = document.getElementById('randomPilt');

    if (randomPilt.getAttribute('src') === valik.value) {
        vastus.innerHTML = "ÕIGE!";
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "VALE!";
        vastus.style.color = "red";
    }
}

function radioValik() {
    let piltValik = document.getElementsByName('piltValik');
    let valitudPilt = document.getElementById('valitudPilt');

    for (let i = 0; i < piltValik.length; i++) {
        if (piltValik[i].checked) {
            valitudPilt.src = piltValik[i].value;
            break;
        }
    }
}