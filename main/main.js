// 1 Chiedere quanti km vuole percorrere il passeggero;

var km = parseInt(prompt('Quanti km vuoi percorrere?'));

// 2 Chiedere quanti anni ha il passeggero;

var age = parseInt(prompt('Quanti anni hai?'));

// 3 Calcolare prezzo totale del viaggio sapendo che costo del biglietto = 0.21 € al km;

var price = km * 0.21 ;
var final_price = 0;
var message = 'Questo è il prezzo finale: ';
if (age <18 || age >65) {
  message = 'Questo è il prezzo scontato: ';
} else {
  
};

if (age <18 ) {
    final_price = (price - ( price * 20 / 100));
    console.log(final_price.toFixed(2));
} else if (age > 65 ) {
    final_price = (price - ( price * 40 / 100));
    console.log(final_price.toFixed(2));
}
  else {
    final_price=price;
    console.log(final_price.toFixed(2));
}

document.getElementById('ticket-price').innerHTML = message + final_price.toFixed(2);





