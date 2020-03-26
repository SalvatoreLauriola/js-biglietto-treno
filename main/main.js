// 1 Chiedere quanti km vuole percorrere il passeggero;

var km = parseInt(prompt('Quanti km vuoi percorrere?'));

// 2 Chiedere quanti anni ha il passeggero;

var age = parseInt(prompt('Quanti anni hai?'));

// 3 Calcolare prezzo totale del viaggio sapendo che costo del biglietto = 0.21 € al km;

var price = ( km * 0.21 );

var final_price;


// 4 Applicare sconto del 20 % per i minorenni;

if (age <18 ) {
    final_price = (price - ( price * 20 / 100)); + 'Questo è il prezzo scontato';
    console.log(final_price.toFixed(2));
} else if (age > 65 ) {
    final_price = (price - ( price * 40 / 100)) + 'Questo è il prezzo scontato';
    console.log(final_price.toFixed(2));
}
    else {
      var totale = price;
      console.log(final_price.toFixed(2));
}

document.getElementById('ticket-price').innerHTML = final_price.toFixed(2);

// 5 Applicare sconto del 40 % per gli over 65;




// 6 Mostrare a schermo il prezzo del biglietto specificando se è stato applicato un eventuale sconto.

