function käännös() {
    let kieli = document.getElementById("kieli").value;
    let tulos = "";

    if (kieli === "englanti") {
        tulos = "Hello world";
    } else if (kieli === "ruotsi") {
        tulos = "Hej världen";
    } else if (kieli === "venäjä") {
        tulos = "Привет мир"; 
    } else {
        tulos = "Valitse kieli ensin.";
    }

    document.getElementById("tulostus").innerHTML = tulos;
}
