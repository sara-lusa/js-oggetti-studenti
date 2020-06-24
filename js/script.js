var studente = {
  "nome": "Tommaso",
  "cognome": "Rossi",
  "eta": 21,
}

// console.log(studente);

for (var chiave in studente ) {
  // console.log(studente[chiave]);
}

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

for (var i = 0; i < arrayStudenti.length; i++) {
  // console.log(arrayStudenti[i]);
  var singoloStudente = arrayStudenti[i];

  console.log(singoloStudente.nome);
  console.log(singoloStudente.cognome);
}
