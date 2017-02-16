'use strict';

var allStores = [];
var storeHours = [
  '6:00a', '7:00a', '8:00a', '9:00a',
  '10:00a', '11:00a', '12:00p', '1:00p',
  '2:00p', '3:00p', '4:00p', '5:00p',
  '6:00p', '7:00p', '8:00p'
];
var totalCookiesPerHour = [];

//function to clear table when new table is added
function clearTables() {
  document.getElementById('table-sales').textContent = '';
  document.getElementById('table-staffing').textContent = '';
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].todayResults = [];
    allStores[i].todayCustomers = [];
    allStores[i].cookieTosserArray = [];
  }
  totalCookiesPerHour = [];
};

// write eventListener to submit new row to page
var userForm = document.getElementById('new_store');
userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  var storeName = event.target.store_name.value;
  console.log(storeName);
  var maxCus = parseInt(event.target.max_cus.value);
  console.log(maxCus);
  var minCus = parseInt(event.target.min_cus.value);
  console.log(minCus);
  var avgCookies = parseInt(event.target.avg_cookies.value);
  console.log(avgCookies);

  //create new table and push it to the allStores array
  var formStore = new Store(storeName, maxCus, minCus, avgCookies);
  allStores.push(formStore);
  // call functions to clear table and render a new table
  clearTables();
  renderSalesTable();
  renderStaffTable();

  event.target.store_name.value = '';
  event.target.max_cus.value = '';
  event.target.min_cus.value = '';
  event.target.avg_cookies.value = '';
};

// creating constructor
function Store(name, max, min, avgCookies) {
  this.name = name;
  this.max = max;
  this.min = min;
  this.avgCookies = avgCookies;
  this.todayResults = [];
  this.todayCustomers = [];
  this.cookieTosserArray = [];
  this.storeHours = [
    '6:00a', '7:00a', '8:00a', '9:00a',
    '10:00a', '11:00a', '12:00p', '1:00p',
    '2:00p', '3:00p', '4:00p', '5:00p',
    '6:00p', '7:00p', '8:00p'
  ];
};

Store.prototype.numCustomers = function () {   // make sure to write " = function () {"
  var totalCustomers = Math.floor(Math.random() * (this.max - this.min) + this.min);
  console.log('Total Customers: ', totalCustomers);
  this.todayCustomers.push(totalCustomers);
  console.log('Customer Array: ', this.todayCustomers);
  return totalCustomers;
};

Store.prototype.numCookies = function () {
  var totalCookies = Math.round(this.numCustomers() * this.avgCookies);
  console.log('Total Cookies: ' + totalCookies);
  return totalCookies;
};

// BEGIN SALES TABLE
// Sales: generate header row
function renderHeader() {   //change this to just a function, not a prototype
  var hourTd;
  var tableHours = [
    '', '6:00a', '7:00a', '8:00a', '9:00a',
    '10:00a', '11:00a', '12:00p', '1:00p',
    '2:00p', '3:00p', '4:00p', '5:00p',
    '6:00p', '7:00p', '8:00p', 'Daily Location Total'
  ];

  //create table and empty table row
  var storeTable = document.getElementById('table-sales');
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

// Sales: generate store row
Store.prototype.renderStore = function () {
  var cookieTd;
  var sumTd;
  var sumCookies = 0;

  var storeTable = document.getElementById('table-sales');
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

// Sales: generate footer row
function renderFooter() {
  // pull from 'table' in DOM, creater tfooter, append tfooter
  var storeTable = document.getElementById('table-sales');
  var tableFooter = document.createElement('tfooter');
  storeTable.appendChild(tableFooter);

  // append table row to footer
  var tableRow = document.createElement('tr');
  tableFooter.appendChild(tableRow);

  // add "Totals" box to table
  var totalTh = document.createElement('th');
  totalTh.textContent = 'Hourly Totals';
  tableRow.appendChild(totalTh);

    // for loop iterating through each value of todayResults for all stores and summing them
    // math that sums values for table column
  var totalAllStores = 0;
  var hourTotal;
  var hourTd;
  var dailyTotalTd;
  
  for (var i = 0; i < storeHours.length; i++) {
    hourTotal = 0;

    for (var j = 0; j < allStores.length; j++) {
      hourTotal += allStores[j].todayResults[i];
      console.log(hourTotal);
    }
    totalCookiesPerHour.push(hourTotal);
    console.log(totalCookiesPerHour);
    // create td element and append to tableRow
    hourTd = document.createElement('td');
    hourTd.textContent = hourTotal;
    tableRow.appendChild(hourTd);

    totalAllStores += hourTotal;
  }
  
  dailyTotalTd = document.createElement('td');
  dailyTotalTd.textContent = totalAllStores;
  tableRow.appendChild(dailyTotalTd);
};

// BEGIN STAFFING TABLE
// Staffing: generate header row
function renderStaffHeader() {   //change this to just a function, not a prototype
  var hourTd;
  var tableHours = [
    '', '6:00a', '7:00a', '8:00a', '9:00a',
    '10:00a', '11:00a', '12:00p', '1:00p',
    '2:00p', '3:00p', '4:00p', '5:00p',
    '6:00p', '7:00p', '8:00p', 'Daily Staff Total'
  ];

  //create table and empty table row
  var storeTable = document.getElementById('table-staffing');
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

// Staffing: generate store row
Store.prototype.renderStaffStore = function () {
  var staffTd;
  var sumTd;
  var sumStaff = 0;

  var storeTable = document.getElementById('table-staffing');
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

  for (var i = 0; i < this.todayCustomers.length; i++) {
    // create equation for pulling number of staff per store per hour
    console.log('Print array:', this.todayCustomers);
    var cookieTossers = this.todayCustomers[i] / 10;
    if (cookieTossers <= 2) {
      cookieTossers = 2;
    } else {
      cookieTossers = Math.ceil(cookieTossers);   //rounds up to next integer if decimel is present
    };
    console.log('cookie tosser: ' + cookieTossers);

    staffTd = document.createElement('td');
    staffTd.textContent = cookieTossers;
    tableRow.appendChild(staffTd);

    this.cookieTosserArray.push(cookieTossers);
    console.log('Cookie Tosser Array: ', this.cookieTosserArray);
    sumStaff += cookieTossers;
  }

  sumTd = document.createElement('td');
  sumTd.textContent = sumStaff;
  tableRow.appendChild(sumTd);
};

//generate footer row
function renderStaffFooter() {
  // pull from 'table' in DOM, creater tfooter, append tfooter
  var storeTable = document.getElementById('table-staffing');
  var tableFooter = document.createElement('tfooter');
  storeTable.appendChild(tableFooter);

  // append table row to footer
  var tableRow = document.createElement('tr');
  tableFooter.appendChild(tableRow);

  // add "Totals" box to table
  var totalTh = document.createElement('th');
  totalTh.textContent = 'Total Staff Per Hour';
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
allStores.push(pikeStore);
// Store 2: Seattle Tacoma Airport
var seaTacStore = new Store('SeaTac Airport', 24, 3, 1.2, 'seatac');
allStores.push(seaTacStore);
// Store 3: Seattle Center
var seaCenStore = new Store('Seattle Center', 38, 11, 3.7, 'seacen');
allStores.push(seaCenStore);
// Store 4: Capitol Hill
var capHillStore = new Store('Capitol Hill', 38, 20, 2.3, 'caphill');
allStores.push(capHillStore);
// Store 5: Alki
var alkiStore = new Store('Alki', 16, 2, 4.6, 'alki');
allStores.push(alkiStore);


// CALL STORES
// create table: sales/cookies
function renderSalesTable() {
  renderHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].renderStore();
  }
  renderFooter();
}

renderSalesTable();

// create table: staff
function renderStaffTable() {
  renderStaffHeader();
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].renderStaffStore();
  }
  renderStaffFooter();
}

renderStaffTable();