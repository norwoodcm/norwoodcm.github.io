function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

var StreetNumber = Math.floor(Math.random() * 999) + 1;
var Zip = Math.floor(Math.random() * 99999) + 10000;
var StreetName = ["Dunder Ave", "Mifflin Road", "Sabre Street"];
var City = ["Scranton", "Albony", "Binghamton", "Buffalo", "Camden", "Nashua", "Pittsfield", "Stamford"]
var State = ["PA", "IN", "AZ", "KY", "TN", "TX", "CT", "SC", "NC", "GA"];

console.log(`${StreetNumber} ${getRandomItem(StreetName)}\n${getRandomItem(City)}, ${getRandomItem(State)}, ${Zip}`);