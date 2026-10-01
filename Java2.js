function parillinenLuku() {
    let luku = Number(document.getElementById("luku").value);

    if (isNaN(luku)) {
        document.getElementById("tulostus").innerHTML = "Syötä oikea numero.";
        return;
    }

    if (luku % 2 === 0) {
        document.getElementById("tulostus").innerHTML = "Luku on parillinen.";
    } else {
        document.getElementById("tulostus").innerHTML = "Luku on pariton.";
    }
}
