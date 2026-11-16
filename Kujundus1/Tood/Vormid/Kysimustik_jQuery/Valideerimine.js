// jQuery valideerimine muusika küsimustikule
// Kõik vead kirjutatakse vormi alla ühte kohta (#vastusKoik)
$(document).ready(function () {

    // kontrollib kõik väljad läbi ja tagastab vigade nimekirja
    function kontrolli() {
        let vead = [];

        // tekstiväljad ei tohi olla tühjad
        if ($.trim($('#nimi').val()) === '') {
            vead.push('Nimi on täitmata.');
        }

        if ($('#stiil').val() === 'vali') {
            vead.push('Muusikastiil on valimata.');
        }

        // raadionupud: üks peab olema valitud
        if ($('input[name="platvorm"]:checked').length === 0) {
            vead.push('Platvorm on valimata.');
        }

        // checkboxid: vähemalt üks peab olema valitud
        if ($('input[name="lemmikud"]:checked').length === 0) {
            vead.push('Vali vähemalt üks muusik/ansambel.');
        }

        // e-mail: ei tohi olla tühi ja peab olema õiges vormis
        let email = $.trim($('#email').val());
        if (email === '') {
            vead.push('E-mail on täitmata.');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            vead.push('E-mail ei ole õiges vormis.');
        }

        if ($.trim($('#arvamus').val()) === '') {
            vead.push('Arvamus on täitmata.');
        }

        if ($('input[name="raadioValik"]:checked').length === 0) {
            vead.push('Vasta, kas kuulad raadiot (Jah/Ei).');
        }

        if ($.trim($('#jaamad').val()) === '') {
            vead.push('Raadiojaamad on nimetamata.');
        }

        return vead;
    }

    // "Saada" nupp: kõigepealt kontroll, siis andmete näitamine
    $('#saada').on('click', function () {
        let vead = kontrolli();

        if (vead.length > 0) {
            let tekst = '<div class="vead"><b>Palun paranda:</b><ul>';
            $.each(vead, function (i, viga) {
                tekst += '<li>' + viga + '</li>';
            });
            tekst += '</ul></div>';
            $('#vastusKoik').html(tekst).hide().fadeIn(400);
        } else {
            naitaKoike();   // vana funktsioon kysimustikScript.js failist
            $('#vastusKoik').hide().fadeIn(400);
        }
    });

    // "Puhasta" nupp: vana puhastus
    $('#puhasta').on('click', function () {
        puhasta();   // vana funktsioon kysimustikScript.js failist
    });
});