function jookideValik() {
    let vastus2 = document.getElementById('vastus2');
    let joogiValik = document.getElementById('JoogiValik');
    let kogus = document.getElementById('kogus');

    const kohv = 1.50;
    const cola = 2.20;
    const fanta = 2.00;

    if (joogiValik.selectedIndex == 1) {
        vastus2.innerHTML = kogus.value + ' Kohvi hind on ' + (kogus.value * kohv) + '€';
        vastus2.style.color = "green";
    }
    else if (joogiValik.selectedIndex == 2) {
        vastus2.innerHTML = "vesi on tasuta!";
        vastus2.style.color = "green";
    }
    else if (joogiValik.selectedIndex == 3) {
        vastus2.innerHTML = kogus.value + ' Coca-cola hind on ' + (kogus.value * cola) + '€';
        vastus2.style.color = "green";
    }
    else if (joogiValik.selectedIndex == 4) {
        vastus2.innerHTML = kogus.value + ' Fanta hind on ' + (kogus.value * fanta) + '€';
        vastus2.style.color = "green";
    }
    else {
        vastus2.innerHTML = "VALE!";
        vastus2.style.color = "red";
    }
}