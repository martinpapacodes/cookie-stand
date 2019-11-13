'use strict';

const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

function Store(location , minCustomer, maxCustomer, averageSale, perHourSale=[]){
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.averageSale = averageSale;
    this.perHourSale = perHourSale;
    this.getRandomNumOfCustomers = function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    this.renderRow = function(){
        var newRow = document.createElement('tr');
        salesTable.appendChild(newRow);
        
        var rowTitle = document.createElement('td');
        rowTitle.textContent = this.location;
        newRow.appendChild(rowTitle);

        for(var i = 0; i < this.perHourSale.length; i++){
        var td = document.createElement('td');
        td.textContent = this.perHourSale[i];
        newRow.appendChild(td);
        }   

    }
}

// Locations -------

var storeOne = new Store('Seattle', 23, 65, 6.3);
var storeTwo = new Store('Tokyo', 3, 24, 1.2);
var storeThree = new Store('Dubai', 11, 38, 3.7);
var storeFour = new Store('Paris', 20, 38, 2.8);
var storeFive = new Store('Lima', 2, 16, 4.6); 

// var storeOne = {
//     location: 'Seattle',
//     minCustomer: 23,
//     maxCustomer: 65,
//     averageSale: 6.3,
//     getRandomNumberofCustomers: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
//     },
//     perHourSale: []
// };

// var storeTwo = {
//     location: 'Tokyo',
//     minCustomer: 3,
//     maxCustomer: 24,
//     averageSale: 1.2,
//     getRandomNumberofCustomers: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
//     },
//     perHourSale: []
// };

// var storeThree = {
//     location: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     averageSale: 3.7,
//     getRandomNumberofCustomers: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
//     },
//     perHourSale: []
// };

// var storeFour = {
//     location: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     averageSale: 2.3,
//     getRandomNumberofCustomers: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
//     },
//     perHourSale: []
// };

// var storeFive = {
//     location: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     averageSale: 4.6,
//     getRandomNumberofCustomers: function (min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
//     },
//     perHourSale: []
// };

// Functions

function getPerHourSale(store) {
    
    for (var i = 0; i < hours.length; i++) {
        var cookiesSalePerHour = store.averageSale * store.getRandomNumOfCustomers(store.minCustomer, store.maxCustomer);
        store.perHourSale[i] = Math.ceil(cookiesSalePerHour);
    }
    getTotalSale(store);
}

function getTotalSale(store) {
    var totalSale = 0;
    for (var i = 0; i < store.perHourSale.length; i++) {     
        totalSale += store.perHourSale[i];
    }
    return `Total: ${totalSale} cookies`;
}

function renderRow(store) {
    var newRow = document.createElement('tr');
    salesTable.appendChild(newRow);

    for(var i = 0; i < store.perHourSale.length; i++){
        var td = document.createElement('td');
        td.textContent = store.perHourSale[i];
        newRow.appendChild(td);
    }   
}

function displaySales(store) {
    var parentElement = document.getElementById('salesReport');

    var article = document.createElement('article');
    parentElement.appendChild(article)

    var storeHeading = document.createElement('h2');
    storeHeading.textContent = store.location;
    article.appendChild(storeHeading);

    var ul = document.createElement('ul');
    article.appendChild(ul);


    for (var i = 0; i < store.perHourSale.length; i++) {
        var li = document.createElement('li');
        li.textContent = `${hours[i]}: ${store.perHourSale[i]} cookies`;
        ul.appendChild(li);
    }

        var li = document.createElement('li')
        li.textContent = getTotalSale(store);
        ul.appendChild(li);
    
}
// ------- Table starts here --------
var parentElement = document.getElementById('salesReport');

var salesTable = document.createElement('table');
parentElement.appendChild(salesTable);


// --------- Table header ----------
var rowHeader = document.createElement('tr');
salesTable.appendChild(rowHeader);

// Creates an empty header on the very top left to shift the hours to the right
var emptyHeader = document.createElement('th')
emptyHeader.textContent = "";
rowHeader.appendChild(emptyHeader);

for(var i = 0; i < hours.length; i++) {
    var tableHeader = document.createElement('th');
    rowHeader.appendChild(tableHeader);
    tableHeader.textContent = hours[i];
}

// ------- Display Daily Location Total in the table

var dailyTotalHeader = document.createElement('th');
dailyTotalHeader.textContent = "Daily Location Total";
rowHeader.appendChild(dailyTotalHeader);


// Table data

// addElement(table, 'salesReport')
// function addElement(tag, container, text) {
//     var element = document.createElement(tag);
//     container.appendChild(element);
//     element.textContent = text;
//     return element;
// }
// Function Invocations

getPerHourSale(storeOne);
getPerHourSale(storeTwo);
getPerHourSale(storeThree);
getPerHourSale(storeFour);
getPerHourSale(storeFive);

storeOne.renderRow();
storeTwo.renderRow();
storeThree.renderRow();
storeFour.renderRow();
storeFive.renderRow();
// renderRow(storeOne);
// renderRow(storeTwo);
// renderRow(storeThree);
// renderRow(storeFour);
// renderRow(storeFive);

// displaySales(storeOne);
// displaySales(storeTwo);
// displaySales(storeThree);
// displaySales(storeFour);
// displaySales(storeFive);
