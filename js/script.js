// 1 - Chiedere all'utente il numero di kilometri che vuole percorrere
let km = prompt("Indicare il numero di kilometri che si vuole percorrere");
console.log("Km:" + km);
document.getElementById('km').innerHTML = km;

// 2 - Chiedere all'utente la sua età
let eta = parseInt(prompt("Indicare la propria età"));
console.log("Età:" + eta);
document.getElementById('eta').innerHTML = eta;


// 3 - Calcolare il prezzo totale del viaggio
const tariffa = 0.21;
let sconto;
let prezzo_totale;

let prezzo_km = km * tariffa;
console.log("Prezzo al km:" + prezzo_km);

if(eta < 18){
    sconto = prezzo_km * 0.2;
    console.log("Sconto:" + sconto);
    document.getElementById('sconto').innerHTML = '20%';
    prezzo_km = prezzo_km - sconto;
    console.log("Prezzo scontato:" + prezzo_km);
}
else if(eta > 65){
    sconto = prezzo_km * 0.4;
    console.log("Sconto:" + sconto);
    document.getElementById('sconto').innerHTML = '40%';
    prezzo_km = prezzo_km - sconto;
    console.log("Prezzo scontato:" + prezzo_km);
}
else{
    console.log("Prezzo al km:" + prezzo_km);
}

prezzo_totale = prezzo_km.toFixed(2);
console.log("Prezzo totale del biglietto:" + prezzo_totale + "€");
document.getElementById('prezzo-totale').innerHTML = prezzo_totale + '€';