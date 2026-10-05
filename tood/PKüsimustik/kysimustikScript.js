function keeledValik() {
    let vastusKeeled = document.getElementById("vastusKeeled");

    let lang_js = document.getElementById("lang_js");
    let lang_py = document.getElementById("lang_py");
    let lang_java = document.getElementById("lang_java");
    let lang_cs = document.getElementById("lang_cs");
    let lang_php = document.getElementById("lang_php");

    let valik = "";

    if (lang_js.checked) {
        valik += lang_js.value + " ";
    }
    if (lang_py.checked) {
        valik += lang_py.value + " ";
    }
    if (lang_java.checked) {
        valik += lang_java.value + " ";
    }
    if (lang_cs.checked) {
        valik += lang_cs.value + " ";
    }
    if (lang_php.checked) {
        valik += lang_php.value + " ";
    }

    if (valik !== "") {
        vastusKeeled.innerHTML = "Sinu valitud programmeerimiskeeled: " + valik;
    } else {
        vastusKeeled.innerHTML = "";
    }

    return valik;
}

function arvamusValik() {
    let vastusArvamus = document.getElementById("vastusArvamus");
    let arvamus = document.getElementById("arvamus").value;

    if (arvamus !== "") {
        vastusArvamus.innerHTML = "Sinu arvamus: " + arvamus;
    } else {
        vastusArvamus.innerHTML = "";
    }
    return arvamus;
}

function tunnidValik() {
    let vastusTunnid = document.getElementById("vastusTunnid");
    let tunnid = document.getElementById("tunnid").value;

    if (tunnid !== "") {
        vastusTunnid.innerHTML = "Tegeled programmeerimisega " + tunnid + " tundi nädalas.";
    } else {
        vastusTunnid.innerHTML = "";
    }
    return tunnid;
}

function meeldivusValik() {
    let vastusMeeldivus = document.getElementById("vastusMeeldivus");
    let meeldib_jah = document.getElementById("meeldib_jah");
    let meeldib_ei = document.getElementById("meeldib_ei");

    let valik = "";
    const pildid = [
        'Smile.png',
        'Neutral.png',
    ];
    const Pilt = document.getElementById('Pilt');

    if (meeldib_jah.checked) {
        valik = meeldib_jah.value;
        vastusMeeldivus.innerHTML = 'Programmeerimine meeldib! ';
        Pilt.src = pildid[0];
        Pilt.style.display = "inline";

    } else if (meeldib_ei.checked) {
        valik = meeldib_ei.value;
        vastusMeeldivus.innerHTML = 'Programmeerimine ei meeldi.';
        Pilt.src = pildid[1];
        Pilt.style.display = "inline";

    } else {
        vastusMeeldivus.innerHTML = "";
        Pilt.src = "";
        Pilt.style.display = "none";
    }
    return valik;
}

function tooriistadValik() {
    let vastusTooriistad = document.getElementById("vastusTooriistad");
    let tooriistad = document.getElementById("tooriistad").value;

    if (tooriistad !== "") {
        vastusTooriistad.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad;
    } else {
        vastusTooriistad.innerHTML = "";
    }
    return tooriistad;
}

function soovitudKeelValik() {
    let vastusSoovitudKeel = document.getElementById("vastusSoovitudKeel");
    let soovitudKeel = document.getElementById("soovitudKeel");

    let valik = "";

    if (soovitudKeel.selectedIndex !== 0) {
        valik = soovitudKeel.value;
        vastusSoovitudKeel.innerHTML = "Sinu valik: " + valik;
    } else {
        vastusSoovitudKeel.innerHTML = "";
    }

    return valik;
}

function naitaKokkuvote() {
    let vastusKoik = document.getElementById("vastusKoik");

    let keeled = keeledValik();
    let arvamus = arvamusValik();
    let tunnid = tunnidValik();
    let meeldivus = meeldivusValik();
    let tooriistad = tooriistadValik();
    let soovitudKeel = soovitudKeelValik();

    vastusKoik.innerHTML =
        "Sinu valitud programmeerimiskeeled: " + keeled + "<br>" +
        "Sinu arvamus: " + arvamus + "<br>" +
        "Tegeled programmeerimisega: " + tunnid + " tundi nädalas<br>" +
        "Kas meeldib: " + meeldivus + "<br>" +
        "Tööriistad: " + tooriistad + "<br>" +
        "Soovitud keel: " + soovitudKeel;
}

function puhastaKoik() {
    document.getElementById("kysimustikForm").reset();

    document.getElementById("vastusKeeled").innerHTML = "";
    document.getElementById("vastusArvamus").innerHTML = "";
    document.getElementById("vastusTunnid").innerHTML = "";
    document.getElementById("vastusMeeldivus").innerHTML = "";
    document.getElementById("vastusTooriistad").innerHTML = "";
    document.getElementById("vastusSoovitudKeel").innerHTML = "";
    document.getElementById("vastusKoik").innerHTML = "";
}


