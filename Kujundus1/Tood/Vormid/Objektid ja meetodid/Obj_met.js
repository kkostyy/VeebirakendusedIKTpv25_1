// ===================== 1. AUTO OBJEKT =====================
let auto = {
    //omadused
    mark: "Toyota",
    mudel: "Corolla",
    aasta: 2022,
    varv: "punane",
    lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],

    //meetodid
    taisnimi: function() {
        return this.mark + " " + this.mudel;
    },

    kuvaOmadused() {
        // NB! omaduse nimi on lisavarustus, mitte omadused
        this.lisavarustus.forEach(omadus => console.log(omadus));
    }
};

console.log(auto);
console.log(auto.mark);
console.log(auto.taisnimi());
auto.kuvaOmadused();

let tulemus1 = `
    <p><b>Mark:</b> ${auto.mark}<br>
    <b>Mudel:</b> ${auto.mudel}<br>
    <b>Aasta:</b> ${auto.aasta}<br>
    <b>Värv:</b> ${auto.varv}</p>
    <p><b>Täisnimi (meetod):</b> ${auto.taisnimi()}</p>
    <p><b>Lisavarustus:</b></p>
    <ul>
`;
auto.lisavarustus.forEach(omadus => {
    tulemus1 += `<li>${omadus}</li>`;
});
tulemus1 += `</ul>`;

let vastus1 = document.getElementById("vastus1");
vastus1.innerHTML = tulemus1;


// ===================== 2. AUTODE MASSIIV =====================
let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];

console.log(autod);
console.log(autod[0]);
console.log(autod[0].mark);

let tulemus = "";

autod.forEach((auto) => {
    console.log(`Mark: ${auto.mark}, Mudel: ${auto.mudel}, Aasta: ${auto.aasta}`);
    tulemus += `
    <p>
      <b>Mark:</b> ${auto.mark}<br>
      <b>Mudel:</b> ${auto.mudel}<br>
      <b>Aasta:</b> ${auto.aasta}
    </p>
    <hr>
  `;
});

let vastus2 = document.getElementById("vastus2");
vastus2.innerHTML = tulemus;


// ===================== 3. MASSIIVI MEETODID =====================
// Abifunktsioon: teeb autode massiivist HTML-nimekirja
function autodNimekiri(massiiv) {
    let html = "<ul>";
    massiiv.forEach(a => {
        html += `<li>${a.mark} ${a.mudel} (${a.aasta})</li>`;
    });
    return html + "</ul>";
}

let tulemus3 = "";

autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });       // lõppu
autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });  // algusesse
console.log("push + unshift:", autod);
tulemus3 += `<h3>push ja unshift</h3>` + autodNimekiri(autod);

autod.splice(0, 1);                                              // eemaldab esimese
autod.splice(1, 0, { mark: 'Audi', mudel: 'A4', aasta: 2018 });  // lisab indeksile 1
console.log("splice:", autod);
tulemus3 += `<h3>splice</h3>` + autodNimekiri(autod);

let otsing = autod.find(auto => auto.aasta > 2018);
console.log("find:", otsing);
tulemus3 += `<h3>find (aasta > 2018)</h3><p>${otsing.mark} ${otsing.mudel} (${otsing.aasta})</p>`;

let arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paaris = arvud.filter(arv => arv % 2 === 0);
console.log("paarisarvud:", paaris);
tulemus3 += `<h3>filter (paarisarvud)</h3><p>${paaris.join(", ")}</p>`;

let uued = autod.filter(auto => auto.aasta > 2018);
console.log("filter:", uued);
tulemus3 += `<h3>filter (aasta > 2018)</h3>` + autodNimekiri(uued);

autod.sort((a, b) => a.aasta - b.aasta);
console.log("sort:", autod);
tulemus3 += `<h3>sort (aasta järgi)</h3>` + autodNimekiri(autod);

let vastus3 = document.getElementById("vastus3");
vastus3.innerHTML = tulemus3;

