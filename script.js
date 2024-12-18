// UŽDUOTIS:
// 1. Naudojant Object() metodą sukurti kintamąjį įmonei apibūdinti.
let corporation = {
  // 2. Prie objekto pridėti:
  // 2.1. Property „company name" ir priskirti įmonės pavadinimo reikšmę.
  "corporation name": "Netflix",
  // 2.2. Property „opened" ir priskirti įmonės įkūrimo metų reikšmę.
  "opened": 1997,
  // 2.3. Property „companyCode" ir priskirti įmonės kodo reikšmę.
  "companyCode": "0001065280",
  // 2.4. Property „employees" ir priskirti įmonėje dirbančių darbuotojų kiekio reikšmę.
  "employees": 13000,
  // 2.5. Property „ceo" ir priskirti įmonės vadovo reikšmę.
  "ceo": "Ted Sarandos",
  // 2.6. Property „nvo" ir priskirti boolean reikšmę (ar įmonė turi NVO statusą).
  "nvo": false,
  // 2.7. Property „workingLocations" ir priskirti įmonės veiklos šalių value (turi būti bent dvi veiklos šalys).
  "workingLocations": ["USA", "Korea"],
  // 2.8. Property „activityAreas" ir priskirti įmonės veiklos sričių reikšmę (turi būti bent dvi veiklos sritys).
  "activityAreas": ["Movies-series producing", "Streaming services"],
  // 2.9. Property „contacts", kuris turės:
  //       2.9.1. „phone"
  //       2.9.2. „email"
  //       2.9.3. „address"
  "contacts": {
    "phone": "+123456788900",
    "email": "netflix@gmail.com",
    "address": {
      // kuris turės:
      // 2.9.3.1. „country"
      // 2.9.3.2. „city"
      // 2.9.3.3. „postal code"
      "country": "US",
      "city": "Los Gatos",
      "street": "Winchester Circle",
      "postal code": "CA 95032"
    }
  }
};

console.log(corporation);



// 5. Sukurti funkciją, kuri sukuria adreso string'ą: „Vilniaus st. 15, Vilnius, Lithuania.".

function addAdress() {

}
// 6. Sukurti funkcijas, kurios:
//        6.1. Pakeičia NVO statusą į true.
function positiveNvo() {
  return corporation.nvo = true
}
//        6.2. Pakeičia NVO statusą į false.
function negativeNvo() {
  return corporation.nvo = false
}
//        6.3. Keičia NVO statusą iš true į false ir iš false į true.

function reverseNvo () {
  if (corporation.nvo) {
    return corporation.nvo = false
  } else {
    return corporation.nvo = true
  }

}
// 7. Sukurti funkcijas, kurios grąžina:
//        7.1. Šalis, kuriose veikia įmonė į vieną string'ą.

function makeOneString() {
  if (corporation.workingLocations.length > 1) {
    return corporation.workingLocations.join(", ");
  } else {
    return corporation.workingLocations[0] || ""; //
  }
}



//        7.2. Veiklos sritis, kuriose veikia įmonė į vieną string'ą.

function makeOneString() {
  if (corporation.activityAreas.length > 1) {
    return corporation.activityAreas.join(", ");
  } else {
    return corporation.activityAreas[0] || ""; //
  }
}

// 8. Sukurti funkcijas, kurios prideda:
//        8.1. Naują veiklos šalį prie šalių masyvo.
function addCountry () {
  return corporation.workingLocations.splice(1, 0, "Japan")
}
//        8.2. Naują veiklos rūšį prie veiklų masyvo.
function newActivity(activity) {
  return corporation.activityAreas.splice(1, 0, `${activity}`)
}
// 9. Sukurti funkcijas, kurios pašalina:
//        9.1. Veiklos šalį iš šalių masyvo.

function removeWorkingCountry () {
  return corporation.workingLocations.pop()
}

//        9.2. Veiklos rūšį iš veiklų masyvo.

function removeArea () {
  return corporation.activityAreas.pop()
}

// addCountry()
// console.log(corporation.workingLocations)

// newActivity(`swimming`)
// console.log(corporation.activityAreas)