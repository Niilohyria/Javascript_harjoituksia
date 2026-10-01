function suurinLuku() {
    
    let luvut = [
        Number(document.getElementById("luku1").value),
        Number(document.getElementById("luku2").value),
        Number(document.getElementById("luku3").value),
        Number(document.getElementById("luku4").value),
        Number(document.getElementById("luku5").value)
    ];

    
    if (luvut.some(isNaN)) {
        document.getElementById("tulostus").innerHTML = "Anna vain numeroita kaikkiin kenttiin.";
        return;
    }

    
    let suurin = Math.max(...luvut);

   
    document.getElementById("tulostus").innerHTML = "Suurin luku on: " + suurin;
}
