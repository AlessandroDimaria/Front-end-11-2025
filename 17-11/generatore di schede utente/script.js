let utenti = [];
document.getElementById("btnAggiungi").onclick = aggiungiUtente;
function aggiungiUtente() {
    const nome = document.getElementById('nome').value.trim();
    const eta = parseInt(document.getElementById('eta').value);
    const professione = document.getElementById('professione').value.trim();
    if (!nome){
    console.error("Nome mancante");
    return;
}

if (isNaN(eta) || eta <= 5) {
    console.warn("Età non valida");
    return;
}

if (!professione) {
    console.error("Inserisci la tua professione");
    return;
}
let messaggio = "Utente aggiunto!";
console.log(messaggio);
const nuovoUtente = creaUtente(nome, eta, professione);
utenti.push(nuovoUtente);
console.table(utenti);
debugutenti();
mostrautenti();
}

function creaUtente(nome, eta, professione = "Non specificato") {

let categoria; {
    switch (professione.toLowerCase()) {
        case "insegnante":
        case "docente":
           categoria = "Istruzione";
            break;
            case "medico":
            case "infermiere":
                categoria = "Sanità";
            break;  
            case "ingegnere":
            case "architetto":
                categoria = "Ingegneria";
            break;
        default:
            categoria = "Altro";
    }
}
return { nome, eta, professione, categoria };
}

