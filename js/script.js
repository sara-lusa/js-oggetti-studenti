$(document).ready(function() {

  // Creazione oggetto studente con proprietà
  var studente = {
    "nome": "Tommaso",
    "cognome": "Rossi",
    "eta": 21,
  }

  // Stampo con ciclo for tutte i valori delle proprietà
  for (var chiave in studente) {
    console.log(studente[chiave]);
  }
  
  // // PROVA CON HANDLEBARS
  // // Stampo a schermo con Handlebars
  // var source = $('.template').html();
  // var template = Handlebars.compile(source);
  //
  // var context = {
  //   nome: studente.nome,
  //   cognome: studente.cognome,
  //   eta: studente["eta"],
  // }
  //
  // var html = template(context);
  // $('.studenti').append(html);




  // Creazione array con oggetti studenti
  var arrayStudenti = [
    {
      "nome": "Carlo",
      "cognome": "Verdi",
      "eta": 20,
    },
    {
      "nome": "Alessio",
      "cognome": "Bianchi",
      "eta": 22,
    },
    {
      "nome": "Lorenzo",
      "cognome": "Neri",
      "eta": 21,
    }
  ];

  // Ciclo for per stampare o valori delle chiavi nome e cognome degli ogg.
  for (var i = 0; i < arrayStudenti.length; i++) {
    var singoloStudente = arrayStudenti[i];

    console.log(singoloStudente.nome);
    console.log(singoloStudente.cognome);
  }




  // Richiesta dati all'utente
  var chiaveNomeUtente = prompt('Scrivi un nome.');
  var chiaveCognomeUtente = prompt('Scrivi un cognome.');
  var chiaveEtaUtente = prompt('Scrivi una età.');

  // Aggiunta dati dell'utente
  var oggettoAggiunto = {
    "nome": chiaveNomeUtente,
    "cognome": chiaveCognomeUtente,
    "eta": chiaveEtaUtente,
  }

  // Push all'arrayStudenti
  arrayStudenti.push(oggettoAggiunto);
  console.log(arrayStudenti);

  // // PROVA CON HANDLEBARS
  // // Stampo a schermo con Handlebars
  // var chiaveNomeUtente = prompt('Scrivi un nome.');
  // var chiaveCognomeUtente = prompt('Scrivi un cognome.');
  // var chiaveEtaUtente = prompt('Scrivi una età.');
  //
  //
  // var source = $('.template').html();
  // var template = Handlebars.compile(source);
  //
  // var context = {
  //   nome: chiaveNomeUtente,
  //   cognome: chiaveCognomeUtente,
  //   eta: chiaveEtaUtente,
  // }
  //
  // var html = template(context);
  // $('.studenti').append(html);


});
