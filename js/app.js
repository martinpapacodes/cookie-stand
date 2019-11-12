'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var perHourSale = [];

// Locations -------

var storeOne = {
    location: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    averageSale: 6.3,
    getRandomNumberofCustomers: function (min, max){
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    
    perHourSale: []
};

var storeTwo = {
    location: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    averageSale: 1.2,
    getRandomNumberofCustomers: function (min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    perHourSale: []
};

var storeThree = {
    location: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    averageSale: 3.7,
    getRandomNumberofCustomers: function (min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    perHourSale: []
};

var storeFour = {
    location: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    averageSale: 2.3,
    getRandomNumberofCustomers: function (min, max){
        min = Math.ceil(propertymin);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    perHourSale: []
};

var storeFive = {
    location: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    averageSale: 4.6,
    getRandomNumberofCustomers: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    perHourSale: []
};

function getPerHourSale(store) {

    for(var i = 0; i < hours.length; i++) {
        var cookiesSalePerHour  = store.averageSale * store.getRandomNumberofCustomers(store.minCustomer, store.maxCustomer);
        // var totalSale;   
        store.perHourSale[i] = Math.ceil(cookiesSalePerHour);
    
        console.log(hours[i], store.perHourSale[i]);


    }
}

function getTotalSale(store){
    var totalSale;
    for(var i = 0; i < store.perHourSale.length; i++ ) {
         totalSale += store.perHourSale[i];
    }
    console.log('Total Sale:', totalSale);

}
getPerHourSale(storeOne);
getTotalSale(storeOne);
// getPerHourSale(storeTwo);
// getPerHourSale(storeThree);
