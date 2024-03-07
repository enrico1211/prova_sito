if (window.matchMedia("(max-width: 768px)").matches) {
    // Attendi 1 secondo (1000 millisecondi) prima di far scorrere la finestra del browser
    setTimeout(function() {
        // Seleziona l'elemento a cui vuoi far scorrere la finestra del browser
        var targetElement = document.getElementById('puntatore');

        // Controlla se l'elemento è stato trovato
        if (targetElement) {
            // Utilizza la funzione scrollIntoView() per far scorrere la finestra del browser fino all'elemento desiderato
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 1000); // 1000 millisecondi = 1 secondo
}