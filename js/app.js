'use strict';

const hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

function Store(location , minCustomer, maxCustomer, averageSale, perHourSale = []){
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.averageSale = averageSale;
    this.perHourSale = perHourSale;
    this.getRandomNumOfCustomers = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Locations -------

var storeOne = new Store('Seattle', 23, 65, 6.3);
var storeTwo = new Store('Tokyo', 3, 24, 1.2);
var storeThree = new Store('Dubai', 11, 38, 3.7);
var storeFour = new Store('Paris', 20, 38, 2.8);
var storeFive = new Store('Lima', 2, 16, 4.6); 

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

// function displaySales(store) {
//     var parentElement = document.getElementById('salesReport');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var table = document.createElement('table');
//     table.textContent = store.location;
//     article.appendChild(table);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);


//     for (var i = 0; i < store.perHourSale.length; i++) {
//         var li = document.createElement('li');
//         li.textContent = `${hours[i]}: ${store.perHourSale[i]} cookies`;
//         ul.appendChild(li);
//     }

//         var li = document.createElement('li')
//         li.textContent = getTotalSale(store);
//         ul.appendChild(li);
    
// }


// Table 


// Create New Row Function
function createNewRow(row) {
    var row = document.createElement('tr');
    table.appendChild(row);
    
}



var parentElement = document.getElementById('salesReport');

var table = document.createElement('table');
parentElement.appendChild(table);

var tableRow = document.createElement('tr');
table.appendChild(tableRow);

for(var i = 0; i < hours.length; i++) {
    var tableHeading = document.createElement('th');
    tableRow.appendChild(tableHeading);
    tableHeading.textContent = hours[i];
}

    tableRow.appendChild(tableHeading);
    tableHeading.textContent = 'Daily Location Total';    

    var tableRow = document.createElement('tr');
    table.appendChild(tableRow);


var tableData = document.createElement('td')
tableRow.appendChild(tableData);
tableData.textContent = 'HI'


// Table data

    var tableData = document.createElement('td')


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

// displaySales(storeOne);
// displaySales(storeTwo);
// displaySales(storeThree);
// displaySales(storeFour);
// displaySales(storeFive);
