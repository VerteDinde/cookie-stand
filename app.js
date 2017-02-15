'use strict';

// used in header and footer functions
var tableHours = [
  '', '6:00a', '7:00a', '8:00a', '9:00a',
  '10:00a', '11:00a', '12:00p', '1:00p',
  '2:00p', '3:00p', '4:00p', '5:00p',
  '6:00p', '7:00p', '8:00p', 'Daily Location Total'
];

// creating constructor
function Store(name, max, min, avgCookies) {
  this.name = name;
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
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

//generate header row
function renderHeader() {   //change this to just a function, not a prototype
  var hourTd;

  //create table and empty table row
  var storeTable = document.getElementById('table');
  if (storeTable) {
    console.log('grab table');
  }
  var tableHead = document.createElement('thead');
  storeTable.appendChild(tableHead);
  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);

  // push hoursTd to new table row
  for (var i = 0; i < tableHours.length; i++) {
    hourTd = document.createElement('th');
    hourTd.textContent = tableHours[i];
    tableRow.appendChild(hourTd);
  }

  //var tableBody = document.createElement('tbody');
  //storeTable.appendChild(tableBody);
};


//generate store row
Store.prototype.renderStore = function() {
  var cookieTd;
  var sumTd;
  var sumCookies = 0;

  var storeTable = document.getElementById('table');
  if (storeTable) {
    console.log('grab table');
  }
  var tableRow = document.createElement('tr');
  storeTable.appendChild(tableRow);

  // create row that begins with table cell
  var storeNameTh = document.createElement('th');
  storeNameTh.textContent = this.name;
  console.log('Store Name: ' + storeNameTh.textContent);
  tableRow.appendChild(storeNameTh);

  for (var i = 0; i < this.storeHours.length; i++) {
    var totalCookies = this.numCookies();

    cookieTd = document.createElement('td');
    cookieTd.textContent = totalCookies;
    tableRow.appendChild(cookieTd);

    this.todayResults.push(totalCookies);
    sumCookies += totalCookies;
  }

  sumTd = document.createElement('td');
  sumTd.textContent = sumCookies;
  tableRow.appendChild(sumTd);
};

//generate footer row
function renderFooter() {
  // pull from 'table' in DOM, creater tfooter, append tfooter
  var storeTable = document.getElementById('table');
  var tableFooter = document.createElement('tfooter');
  storeTable.appendChild(tableFooter);

  // append table row to footer
  var tableRow = document.createElement('tr');
  tableFooter.appendChild(tableRow);

  // add "Totals" box to table
  var totalTh = document.createElement('th');
  totalTh.textContent = 'Hourly Totals';
  tableRow.appendChild(totalTh);

  // add column totals: PSUEDOCODE BELOW
  // for loop iterating through existing row (tableHours)
  // create td element
  // math that sums values for table column
  // print textContent to td
  // append to tableRow
};

// create stores
//Store 1: 1st and Pike
var pikeStore = new Store('1st and Pike', 65, 23, 6.3, 'pike');
// Store 2: Seattle Tacoma Airport
var seaTacStore = new Store('SeaTac Airport', 24, 3, 1.2, 'seatac');
// Store 3: Seattle Center
var seaCenStore = new Store('Seattle Center', 38, 11, 3.7, 'seacen');
// Store 4: Capitol Hill
var capHillStore = new Store('Capitol Hill', 38, 20, 2.3, 'caphill');
// Store 5: Alki
var alkiStore = new Store('Alki', 16, 2, 4.6, 'alki');

// call header row
renderHeader();

// call stores
pikeStore.renderStore();
seaTacStore.renderStore();
seaCenStore.renderStore();
capHillStore.renderStore();
alkiStore.renderStore();

// call footer row
renderFooter();