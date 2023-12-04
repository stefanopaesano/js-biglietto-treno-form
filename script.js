function calcolaPrezzo() {
    const chilometri = (document.getElementById('chilometri').value);
    const eta = (document.getElementById('eta').value);

    // Calcola il prezzo del biglietto
    let prezzoBase = 0.21 * chilometri;

    // Applica gli sconti in base all'età
    if (eta < 18) {
        prezzoBase *= 0.8; // Sconto del 20% per i minorenni
    } else if (eta >= 65) {
        prezzoBase *= 0.6; // Sconto del 40% per gli over 65
    }

    // Mostra il risultato nella pagina
    const risultatoElement = document.getElementById('risultato');
    risultatoElement.innerHTML = `Il prezzo finale del biglietto è: ${prezzoBase.toFixed(2)} €`;
}