'use strict';

const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
const allStores = [];
const totalSalesforAllStores = [];

function Store(location, minCustomer, maxCustomer, averageSale, perHourSale = []) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.averageSale = averageSale;
    this.perHourSale = perHourSale;
    this.renderRow = function () {
       
        var newRow = document.createElement('tr');
        salesTable.appendChild(tBody);
        tBody.appendChild(newRow);

        //rowTitle - First column of the table(location name)
        var rowTitle = document.createElement('td');
        newRow.appendChild(rowTitle);
        rowTitle.textContent = this.location;

        for (var i = 0; i < this.perHourSale.length; i++) {
            var td = document.createElement('td');
            newRow.appendChild(td);
            td.textContent = this.perHourSale[i];
        }
        // Adds the total per day per store and display in last column
        var tdTotalPerDay = document.createElement('td');
        tdTotalPerDay.textContent = this.getTotalSalePerDay();
        newRow.appendChild(tdTotalPerDay);
    }
    this.getTotalSalePerDay = function () {
        var totalSale = 0;
        for (var i = 0; i < this.perHourSale.length; i++) {
            totalSale += this.perHourSale[i];
        }
        return totalSale;
    }
}

// Locations 

var storeOne = new Store('Seattle', 23, 65, 6.3);
var storeTwo = new Store('Tokyo', 3, 24, 1.2);
var storeThree = new Store('Dubai', 11, 38, 3.7);
var storeFour = new Store('Paris', 20, 38, 2.8);
var storeFive = new Store('Lima', 2, 16, 4.6);

allStores.push(storeOne);
allStores.push(storeTwo);
allStores.push(storeThree);
allStores.push(storeFour);
allStores.push(storeFive);

// Form 

var formSales = document.getElementById('formSales');

function submitHandler(event) {
    event.preventDefault();
    var store = new Store(event.target.location.value, event.target.minCustomer.value, event.target.maxCustomer.value, event.target.averageSale.value);
    console.log(store);
    allStores.push(store);

    event.target.reset();
    
getPerHourSale(store);
store.renderRow();
}

formSales.addEventListener('submit', submitHandler);

//Global Functions

function getRandomNumOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPerHourSale(store) {
    for (var i = 0; i < hours.length; i++) {
        var cookiesSalePerHour = store.averageSale * getRandomNumOfCustomers(store.minCustomer, store.maxCustomer);
        store.perHourSale[i] = Math.ceil(cookiesSalePerHour);
    }
}

// function getTotalSalePerDay(store) {
//     var totalSale = 0;
//     for (var i = 0; i < store.perHourSale.length; i++) {
//         totalSale += store.perHourSale[i];
//     }
//     return totalSale;
// }

// ------- Table rendering starts here --------

var parentElement = document.getElementById('salesReport');
var salesTable = document.createElement('table');
parentElement.appendChild(salesTable);

function renderHeader() {

    // --------- Table header ----------
    // var rowHeader = document.createElement('tr');
    var tHead = document.createElement('thead');
    // salesTable.appendChild(rowHeader);
       salesTable.appendChild(tHead);

    // Creates an empty header on the very top left to shift the hours to the right
    var emptyHeader = document.createElement('th')
    emptyHeader.textContent = "";
    tHead.appendChild(emptyHeader);

    // Loops through the hours array and render in table header
    for (var i = 0; i < hours.length; i++) {
        var tableHeader = document.createElement('th');
        tHead.appendChild(tableHeader);
        tableHeader.textContent = hours[i];
    }

    // Display Daily Location Total in the header
    var dailyTotalHeader = document.createElement('th');
    dailyTotalHeader.textContent = 'Daily Location Total';
    tHead.appendChild(dailyTotalHeader);
}

// Creates row for sales totals per hour a.k.a footer

function renderFooter(num) {

    var totalSalesPerHour = 0;
    // var arrTotalSalesPerHour = [];
    totalSalesPerHour = storeOne.perHourSale[num];
    totalSalesPerHour += storeTwo.perHourSale[num];
    totalSalesPerHour += storeThree.perHourSale[num];
    totalSalesPerHour += storeFour.perHourSale[num];
    totalSalesPerHour += storeFive.perHourSale[num];

    var tdTotalSalesPerHour = document.createElement('td');
    tdTotalSalesPerHour.textContent = totalSalesPerHour;
    rowTotalSalesPerHour.appendChild(tdTotalSalesPerHour);
}

// Total sales of all stores

function getTotalSalesAllStores() {

    for (var i = 0; i < allStores.length; i++) {
        totalSalesforAllStores.push(allStores[i].getTotalSalePerDay())
    }

    var totalSales = 0;
    for (var i = 0; i < totalSalesforAllStores.length; i++) {
        totalSales += totalSalesforAllStores[i]
    }

    return totalSales;
}


// function renderFooter(num) {

//     var totalSalesPerHour = 0;

//     for(var i = 0; i < allStores.length; i++){
//         totalSalesPerHour += allStores[i].perHourSale[i];
//     }

//     var tdTotalSalesPerHour = document.createElement('td');
//     tdTotalSalesPerHour.textContent = totalSalesPerHour;
//     rowTotalSalesPerHour.appendChild(tdTotalSalesPerHour);
// }

// Function Invocations

// Header
renderHeader();

getPerHourSale(storeOne);
getPerHourSale(storeTwo);
getPerHourSale(storeThree);
getPerHourSale(storeFour);
getPerHourSale(storeFive);

// storeOne.getTotalSalePerDay();
// storeTwo.getTotalSalePerDay();
// storeThree.getTotalSalePerDay();
// storeFour.getTotalSalePerDay();
// storeFive.getTotalSalePerDay();
var tBody = document.createElement('tbody');

storeOne.renderRow();
storeTwo.renderRow();
storeThree.renderRow();
storeFour.renderRow();
storeFive.renderRow();

// Needs to be refactored later, will create an addElement function
var tFoot = document.createElement('tfoot');
var rowTotalSalesPerHour = document.createElement('tr');
var rowTotal = document.createElement('td');

salesTable.appendChild(tFoot);
tFoot.appendChild(rowTotalSalesPerHour);
rowTotalSalesPerHour.appendChild(rowTotal);
rowTotal.textContent = 'Totals';

// Footer
for (var i = 0; i < hours.length; i++) {
    renderFooter(i);
}
getTotalSalesAllStores();
var tdTotalOfTotals = document.createElement('td');
rowTotalSalesPerHour.appendChild(tdTotalOfTotals);
tdTotalOfTotals.textContent = getTotalSalesAllStores();