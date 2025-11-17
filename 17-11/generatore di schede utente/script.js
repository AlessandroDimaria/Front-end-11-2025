let utenti = [];
document.getElementById("btnAggiungi").onclick = aggiungiUtente;
document.getElementById("btnFiltra").onclick = () => mostraFiltro(utenti.filter(u => u.eta >= 18));
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
debugUtenti();
mostraUtenti();
}
function debugUtenti() {
  for (const utente of utenti) {
    for (const proprietà in utente) {
      console.log(`${proprietà}: ${utente[proprietà]}`);
    }
  }
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
const generaMessaggio = utente =>
  `${utente.nome} ha ${utente.eta} anni, lavora come ${utente.professione} ed é nel settore ${utente.categoria}.`;
function mostraUtenti() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  for (const utente of utenti) {
    const scheda = document.createElement("div");
    scheda.className = "scheda";
    scheda.innerHTML = `<p>${generaMessaggio(utente)}</p>`;
    lista.appendChild(scheda);
  }
}
function mostraFiltro(listaFiltrata) {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (const utente of listaFiltrata) {
    const scheda = document.createElement("div");
    scheda.className = "scheda";
    scheda.innerHTML = `<p>${generaMessaggio(utente)}</p>`;
    lista.appendChild(scheda);
  }
}
