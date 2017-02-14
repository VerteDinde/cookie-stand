'use strict';

// creating constructor
function Store(name, max, min, avgCookies, divId) {
  this.name = name;
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
  this.divId = divId;
  this.todayResults = [];
  this.storeHours = [
    '6:00a', '7:00a', '8:00a', '9:00a',
    '10:00a', '11:00a', '12:00p', '1:00p',
    '2:00p', '3:00p', '4:00p', '5:00p',
    '6:00p', '7:00p', '8:00p'
  ];
};

Store.prototype.numCustomers = function() {   // make sure to write " = function () {"
  var totalCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
  console.log('Total Customers: ' + totalCustomers);
  return totalCustomers;
};

Store.prototype.numCookies = function() {
  var totalCookies = Math.round(this.numCustomers() * this.avgCookies);
  console.log('Total Cookies: ' + totalCookies);
  return totalCookies;
};

Store.prototype.generateStoreList = function() {
  var storeList = document.getElementById(this.divId);
  var storeNameLi = document.createElement('h2');
  var hourLi;
  var sumLi;
  var sumCookies = 0;

  storeNameLi.textContent = this.name;
  storeList.appendChild(storeNameLi);

  for (var i = 0; i < this.storeHours.length; i++) {
    var totalCookies = this.numCookies();
    var totalCustomers = this.numCustomers();

    hourLi = document.createElement('li');
    hourLi.textContent = this.storeHours[i] + ': ' + totalCustomers + ' customers and ' + totalCookies + ' cookies sold.';
    storeList.appendChild(hourLi);

    this.todayResults.push(totalCookies);
    sumCookies += totalCookies;
  }

  sumLi = document.createElement('li');
  sumLi.textContent = 'Total: ' + sumCookies + ' cookies sold today.';
  storeList.appendChild(sumLi);
};

//Store 1: 1st and Pike
var pikeStore = new Store('1st and Pike', 65, 23, 6.3, 'pike');
pikeStore.generateStoreList();

// Store 2: Seattle Tacoma Airport
var seaTacStore = new Store('SeaTac Airport', 24, 3, 1.2, 'seatac');
seaTacStore.generateStoreList();

// Store 3: Seattle Center
var seaCenStore = new Store('Seattle Center', 38, 11, 3.7, 'seacenter');
seaCenStore.generateStoreList();

// Store 4: Capitol Hill
var capHillStore = new Store('Capitol Hill', 38, 20, 2.3, 'caphill');
capHillStore.generateStoreList();

// Store 5: Alki
var alkiStore = new Store('Alki', 16, 2, 4.6, 'alki');
alkiStore.generateStoreList();