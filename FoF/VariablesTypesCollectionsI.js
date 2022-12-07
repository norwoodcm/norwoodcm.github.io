//assign multiple key:value pairs to a variable

// let account = {
//     name: 'accountname',
//     state: 'kentucky',
//     personnel: 50
// }

// console.log(account);

//////////////////////////////////////////////////////////////////

//using object literal to define an object

// var animal = {
//     type: 'dog',
//     sound: function() {
//         console.log('woof!');
//     }
// }

//using object constructor to define an object

// var animal = new Object();
// animal.type = "dog";
// animal.sound = function() {
//     console.log('woof!');
// }

// animal.sound();

////////////////////////////////////////////////////////////////////////

//using an object literal AND object constructor

// var animal = {
//     type: 'dog'
// }

// animal.sound = function() {
//     console.log('woof!');
// }

// animal.sound();

////////////////////////////////////////////////////////

//defining an array literally

// let brands = ["Grace", "Rebecca", "Addelynn", "Arizona", "Jayce"];

// //arrays can also be defined using constructor method

// let brands = new Array("Jayce", "Arizona", "Addelynn", "Rebecca", "Grace");
// let cars = new Array ("Kia", "Dodge", "Toyota", "Chevy");

// console.log(cars);

//to call a specific value in an array indicate the index no in a bracket (ex. [1])

/////////////////////////////////////////////////////

//Sets

// let TestSet = new Set ([1990, 1990, 2001, 2005, 2010, 2020]);

// console.log(TestSet);

//Maps

// let cars = new Map();
// cars.set('chevys', ['Camaro', 'Silverado']);
// cars.set('dodge', ['Charger', 'Journey']);
// cars.set('toyota', ['Carolla', 'Highlander']);

// console.log(cars.get('chevys'));

/////////////////////////////////////////////////////////////

//Assignment Destructuring Arrays

// const dimensions = [23, 57, 60];

// let [height, width, length] = dimensions;

// console.log(height, width, length);

//Assignment Destructuring Objects

// const exam = {
//     score: 87,
//     duration: 115,
//     cert: 'JS1'
// }

// let {duration, score, cert} = exam;
// console.log(duration, score, cert);

/////////////////////////////////////

//Scenerio

var numEmployees = 0

const maxEmployees = 50

let name = "";

let salary = null;

let address = new Object();
    address.number = null;
    address.street = null;
    address.city = null;
    address.state = null;
    address.zip = null;
    address.country = "United States";

let active = ;
let retrieved = false;

console.log(address.country);