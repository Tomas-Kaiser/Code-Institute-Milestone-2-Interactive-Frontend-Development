// Capital cities of Europe

let capitalCities = [
   ["Prague", "The Czech Republic"],
   ["London", "England"],
   ["Edinburgh", "Scottland"],
   ["Cardiff", "Wales"],
   ["Belfast", "North Ireland"],
   ["Paris", "France"],
   ["Dublin, IE", "Ireland"],
   ["Madrid", "Spain"],
   ["Lisbon", "Portugal"],
   ["Berlin", "Germany"],
   ["Tirana", "Albanie"],
   ["Andorra la Vella", "Andora"],
   ["Vienna", "Austria"],
   ["Minsk", "Belarus"],
   ["Sarajevo", "Bosnia and Herzegovina"],
   ["Sofia", "Bulgaria"],
   ["Zagreb", "Croatia"],
   ["Nicosia", "Cyprus"],
   ["Copenhagen", "Denmark"],
   ["Tallinn", "Estonia"],
   ["Helsinki", "Finland"],
   ["Budapest", "Hungary"],
   ["Reykjavik", "Iceland"],
   ["Rome", "Italy"],
   ["Pristina", "Kosovo"],
   ["Riga", "Litvia"],
   ["Vaduz", "Liechtenstein"],
   ["Vilnius", "Lithuania"],
   ["Luxembourg", "Luxembourg"],
   ["Skopje", "Macedonia"],
   ["Valletta", "Malta"],
   ["Chisinau", "Moldava"],
   ["Monaco", "Monaco"],
   ["Podgorica", "Montenegro"],
   ["Amsterdam", "Netherlands"],
   ["Oslo", "Norway"],
   ["Warsaw", "Poland"],
   ["Moscow", "Russia"],
   ["San Marino", "San Marino"],
   ["Belgrade", "Serbia"],
   ["Bratislava", "Slovakia"],
   ["Ljubljana", "Slovenia"],
   ["Stockholm", "Sweden"],
   ["Bern", "Switzerland"],
   ["Ankara", "Turkey"],
   ["Kyiv", "Ukraine"]
];

function sortCities(capitals) {
   capitals.sort();

   capitals.map((capital) => $("#capitalCities").append(`<option value="${capital[0]}">${capital[1]}</option>`));
} 

// Rendering capital cities
sortCities(capitalCities);

