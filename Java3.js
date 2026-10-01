function käyttäjänIkä() {
    let ika = Number(document.getElementById("luku").value);

    if (isNaN(ika) || ika < 0) {
        document.getElementById("tulostus").innerHTML = "Syötä kelvollinen ikä.";
        return;
    }

    let viesti = "";

    if (ika < 12) {
        viesti = "Saat ajaa pyörällä.";
    } else if (ika < 18) {
        viesti = "Saat ajaa pyörällä ja mopolla.";
    } else {
        viesti = "Saat ajaa pyörällä, mopolla ja autolla.";
    }

    document.getElementById("tulostus").innerHTML = viesti;
}
