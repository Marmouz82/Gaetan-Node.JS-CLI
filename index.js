
// #!/usr/bin/env node

//déclarer les modules pr qu'il trouve les fonctions
//require appele les extensions installées dans le terminal
const { getCode } = require('country-list');
const axios = require('axios').default;

let ArgsInput = process.argv.slice(2);
//2 renvoie le pays  -> node . Belgium dans la console doit renvoyer Belgium
//2 prend l'attribut
// 1 renvoie le chemin du dossier
let CountryInput = ArgsInput[0];
let YearInput = ArgsInput[1];
//0 -> veut dire que ça doit prendre la première valeur de array
console.log(CountryInput);

//node . Belgium dans la console doit renvoyer Belgium
//converti le nom du pays en code à 2 chiffres qui est utilisé pr l'url
let CountryCode = getCode(CountryInput);
console.log(CountryCode);

//génère l'url avec l'année des congés et sur quel pays
let CurrentYear = new Date().getFullYear()
console.log(CurrentYear);

let URLApi = "https://date.nager.at/Api/v2/PublicHolidays/" + CurrentYear + "/" + CountryCode;
console.log(URLApi);

axios.get(URLApi)
.then(function (response){
    let items = response.data;
    items.forEach((item, index) => {
        console.log(
            `${index + 1} : ${item.date} - ${item.name} (${item.localName})`
        );
    });
})

// raccourci -> librairie de la requete -> httpRequest.open('GET', '/demo.php?city=montpellier', true)
// axios.get("https://date.nager.at/Api/v2/PublicHolidays/2021/BE");
// axios prends les valeurs de ce doc et les retournes -> https://date.nager.at/api/v2/PublicHolidays/2002/BE


// DOC:
// https://practicalprogramming.fr/node-js-api/
// https://github.com/JustFS/node-api/blob/master/index.js

// API:
// https://date.nager.at/Api
