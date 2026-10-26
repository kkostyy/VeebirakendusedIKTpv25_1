let raamat = {
    pealkiri: "Tõde ja õigus",
    autor: "A. H. Tammsaare",
    aasta: 1926,

    kirjeldus() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    },

    muudaAastat(uusAasta) {
        let vana = this.aasta;
        this.aasta = uusAasta;
        console.log("Aasta muudetud: " + vana + " -> " + this.aasta);
        console.log(this.kirjeldus());
        return `<p>Aasta muudetud: ${vana} -> ${this.aasta}</p><p>${this.kirjeldus()}</p>`;
    }
};

let tulemus = "";

console.log(raamat.kirjeldus());
tulemus += `<h3>Kirjeldus</h3><p>${raamat.kirjeldus()}</p>`;
tulemus += `<h3>Aasta muutmine</h3>`;
tulemus += raamat.muudaAastat(2005);

let raamatVastus = document.getElementById("raamatVastus");
raamatVastus.innerHTML = tulemus;


let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Puhastus", autor: "Sofi Oksanen", aasta: 2008 }
    ],

    kuvaRaamatud() {
        let html = "<ol>";
        this.raamatud.forEach((r) => {
            console.log(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
            html += `<li><b>${r.pealkiri}</b> - ${r.autor} (${r.aasta})</li>`;
        });
        html += "</ol>";
        return html;
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        console.log("Lisatud: " + pealkiri);
        return `<p>Lisatud: <b>${pealkiri}</b> - ${autor} (${aasta})</p>`;
    },

    koguarv() {
        return this.raamatud.length;
    },

    parast2000() {
        let uued = this.raamatud.filter((r) => r.aasta > 2000);
        return uued.length;
    },

    otsiAutorit(autor) {
        return this.raamatud.filter((r) => r.autor == autor);
    }
};

let tulemus2 = "";

console.log("Kõik raamatud:");
tulemus2 += `<h3>Kõik raamatud</h3>`;
tulemus2 += raamatukogu.kuvaRaamatud();

tulemus2 += `<h3>Uus raamat</h3>`;
tulemus2 += raamatukogu.lisaRaamat("Seltsimees laps ja suured inimesed", "Leelo Tungal", 2008);
tulemus2 += raamatukogu.kuvaRaamatud();

console.log("Raamatuid kokku: " + raamatukogu.koguarv());
tulemus2 += `<h3>Raamatuid kokku</h3><p>${raamatukogu.koguarv()}</p>`;

console.log("Pärast 2000. aastat: " + raamatukogu.parast2000());
tulemus2 += `<h3>Pärast 2000. aastat</h3><p>${raamatukogu.parast2000()}</p>`;

let leitud = raamatukogu.otsiAutorit("Andrus Kivirähk");
console.log(leitud);
tulemus2 += `<h3>otsiAutorit()</h3>`;
tulemus2 += `<p>Otsib raamatukogust kõik ühe autori raamatud.</p>`;
tulemus2 += `<p>Andrus Kivirähk:</p><ul>`;
leitud.forEach((r) => {
    tulemus2 += `<li>${r.pealkiri} (${r.aasta})</li>`;
});
tulemus2 += "</ul>";

let raamatukoguVastus = document.getElementById("raamatukoguVastus");
raamatukoguVastus.innerHTML = tulemus2;
