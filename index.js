//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per?
//Abbiamo visto qualcosa di particolare che possiamo usare?
//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”


for (let i = 1; i <= 100; i++) {

    //Dichiarazione e inizializzazione variabili
    const Fizz = i % 3;
    const Buzz = i % 5;

    //Multipli di 3 e di 5
    if (Fizz == 0 && Buzz == 0) {
        console.log ("FizzBuzz")
    //Multipli di 3
    } else if (Fizz == 0) {
        console.log ("Fizz")
    //Multipli di 5
    } else if (Buzz == 0) {
        console.log ("Buzz")
    } else {
        console.log (i)
    }
}