// Funzione per mostrare il popup
function mostraPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    
    // Aggiungi un gestore di eventi per il clic sul documento
    document.addEventListener("click", chiudiPopup);
}

// Funzione per chiudere il popup se si fa clic altrove nella pagina
function chiudiPopup(event) {
    var popup = document.getElementById("popup");
    var immagine = document.querySelector(".popup-link");

    // Verifica se il clic è avvenuto all'esterno del popup o dell'immagine
    if (event.target !== popup && event.target !== immagine) {
        popup.style.display = "none";
        // Rimuovi il gestore di eventi dopo la chiusura del popup
        document.removeEventListener("click", chiudiPopup);
    }
}

function mostraFinestra(testo) {
    var overlay = document.getElementById(testo);
    overlay.style.display = "block";
}

function chiudiFinestra(testo) {
    var overlay = document.getElementById(testo);
    var window = document.getElementById("window");

    // Verifica se il clic è avvenuto sull'overlay esterno
    
    overlay.style.display = "none";
    
}