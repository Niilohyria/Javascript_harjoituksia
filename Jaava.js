function tulostaParilliset() {
   
    let syote = document.getElementById("luku").value;
    let luku = parseInt(syote);

    
    if (isNaN(luku) || luku <= 0 || luku % 2 !== 0) {
        alert("Ei oo parillinen.");
        return;
    }

    
    let tulos = "";
    for (let i = 2; i <= luku; i += 2) {
        tulos += i + " ";
    }

    
    alert("Parilliset luvut: " + tulos);
    document.getElementById("tulostus").innerText = "Parilliset luvut: " + tulos;

}
