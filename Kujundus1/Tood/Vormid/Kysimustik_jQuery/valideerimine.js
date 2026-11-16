// jQuery valideerimine muusika küsimustikule
$(document).ready(function () {

    // näitab välja juures punast hoiatust ja teeb välja punaseks
    function naitaViga(vali, tekst) {
        let lahter = $(vali).first().closest('td');
        lahter.find('.viga').remove();
        lahter.append('<div class="viga">' + tekst + '</div>');
        $(vali).addClass('vigane');
    }

    // eemaldab välja juurest hoiatuse
    function eemaldaViga(vali) {
        $(vali).first().closest('td').find('.viga').remove();
        $(vali).removeClass('vigane');
    }

    // kontrollib kõik väljad läbi, tagastab vigade arvu
    function kontrolli() {
        let vead = 0;

        // tekstiväljad ei tohi olla tühjad
        let tekstivaljad = [
            { vali: '#nimi',    tekst: 'Kirjuta oma nimi!' },
            { vali: '#arvamus', tekst: 'Kirjuta oma arvamus!' },
            { vali: '#jaamad',  tekst: 'Nimeta vähemalt üks raadiojaam!' }
        ];
        $.each(tekstivaljad, function (i, vali) {
            if ($.trim($(vali.vali).val()) === '') {
                naitaViga(vali.vali, vali.tekst);
                vead++;
            } else {
                eemaldaViga(vali.vali);
            }
        });

        // e-mail: ei tohi olla tühi ja peab olema õiges vormis
        let email = $.trim($('#email').val());
        if (email === '') {
            naitaViga('#email', 'Kirjuta oma e-mail!');
            vead++;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            naitaViga('#email', 'E-mail ei ole õiges vormis!');
            vead++;
        } else {
            eemaldaViga('#email');
        }

        // rippmenüü: "Vali..." ei sobi
        if ($('#stiil').val() === 'vali') {
            naitaViga('#stiil', 'Vali muusikastiil!');
            vead++;
        } else {
            eemaldaViga('#stiil');
        }

        // raadionupud: üks peab olema valitud
        if ($('input[name="platvorm"]:checked').length === 0) {
            naitaViga('input[name="platvorm"]', 'Vali üks platvorm!');
            vead++;
        } else {
            eemaldaViga('input[name="platvorm"]');
        }

        if ($('input[name="raadioValik"]:checked').length === 0) {
            naitaViga('input[name="raadioValik"]', 'Vali Jah või Ei!');
            vead++;
        } else {
            eemaldaViga('input[name="raadioValik"]');
        }

        // checkboxid: vähemalt üks peab olema valitud
        if ($('input[name="lemmikud"]:checked').length === 0) {
            naitaViga('input[name="lemmikud"]', 'Vali vähemalt üks ansambel!');
            vead++;
        } else {
            eemaldaViga('input[name="lemmikud"]');
        }

        return vead;
    }

    // "Saada" nupp: kõigepealt kontroll, siis andmete näitamine
    $('#saada').on('click', function () {
        let vead = kontrolli();

        if (vead > 0) {
            $('#vastusKoik').html('');
            $('#koondviga')
                .removeClass('korras')
                .html('Vormis on ' + vead + ' viga. Paranda punasega märgitud väljad!')
                .hide().fadeIn(400);
            // kursor esimesse vigasesse välja
            $('.vigane').first().focus();
        } else {
            $('#koondviga')
                .addClass('korras')
                .html('Kõik väljad on täidetud. Aitäh!')
                .hide().fadeIn(400);
            naitaKoike();   // vana funktsioon kysimustikScript.js failist
        }
    });

    // kui kasutaja parandab välja, kaob hoiatus kohe ära
    $('#nimi, #email, #arvamus, #jaamad').on('input', function () {
        if ($.trim($(this).val()) !== '') {
            eemaldaViga(this);
        }
    });
    $('#stiil').on('change', function () {
        if ($(this).val() !== 'vali') {
            eemaldaViga(this);
        }
    });
    $('input[type="radio"], input[type="checkbox"]').on('change', function () {
        let nimi = $(this).attr('name');
        if ($('input[name="' + nimi + '"]:checked').length > 0) {
            eemaldaViga('input[name="' + nimi + '"]');
        }
    });

    // "Puhasta" nupp: vana puhastus + hoiatuste eemaldamine
    $('#puhasta').on('click', function () {
        puhasta();   // vana funktsioon kysimustikScript.js failist
        $('.viga').remove();
        $('.vigane').removeClass('vigane');
        $('#koondviga').html('').removeClass('korras');
    });
});
