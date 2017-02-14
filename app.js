'use strict';

// Store 1: 1st and Pike object: generate store list
var pikeStore = {
  storeName: '1st and Pike',
  storeHours: [
    '6:00a', '7:00a', '8:00a', '9:00a', 
    '10:00a', '11:00a', '12:00p', '1:00p', 
    '2:00p', '3:00p', '4:00p', '5:00p', 
    '6:00p', '7:00p', '8:00p'],
  avgCookies: 6.3,
  todayResults: [],
  max: 65,
  min: 23,

  // calculate random customers
  numCustomers: function (min, max) {
    var totalCustomers = Math.floor(Math.random() * (max - min) + min);
    return totalCustomers;
  },

  // calculate number of cookies sold
  numCookies: function () {
    var totalCookies = Math.round(this.numCustomers(this.min, this.max) * this.avgCookies);
    return totalCookies;
  },

  // generate store list
  generateStoreList: function () {
    var storeList = document.getElementById('pike');
    var storeNameLi = document.createElement('h2');
    var hourLi;
    var sumLi;
    var sumCookies = 0;

    storeNameLi.textContent = this.storeName;
    storeList.appendChild(storeNameLi);

    // print hours and cookies sold to sales.html
    for (var i = 0; i < this.storeHours.length; i++) {
      var totalCookies = this.numCookies();
      var totalCustomers = this.numCustomers(this.min, this.max);

      hourLi = document.createElement('li');
      hourLi.textContent = this.storeHours[i] + ': ' + totalCustomers + ' customers and ' + totalCookies + ' cookies sold.';
      storeList.appendChild(hourLi);

      // calculate sum of daily sales
      this.todayResults.push(totalCookies);
      sumCookies += totalCookies;   // creates a total daily cookies
    }

    sumLi = document.createElement('li');
    sumLi.textContent = 'Total: ' + sumCookies + ' cookies sold today.';
    storeList.appendChild(sumLi);
  }

};

pikeStore.generateStoreList();

// Store 2: SeaTac
var seaTacStore = {
  storeName: 'SeaTac Airport',
  storeHours: [
    '6:00a', '7:00a', '8:00a', '9:00a', 
    '10:00a', '11:00a', '12:00p', '1:00p', 
    '2:00p', '3:00p', '4:00p', '5:00p', 
    '6:00p', '7:00p', '8:00p'],
  todayResults: [],
  avgCookies: 1.2,
  min: 3,
  max: 24,

  // calculate random customers
  numCustomers: function (min, max) {
    var totalCustomers = Math.floor(Math.random() * (max - min) + min);
    return totalCustomers;
  },

  // calculate number of cookies sold
  numCookies: function () {
    var totalCookies = Math.round(this.numCustomers(this.min, this.max) * this.avgCookies);
    return totalCookies;
  },

  // generate store list
  generateStoreList: function () {
    var storeList = document.getElementById('seatac');
    var storeNameLi = document.createElement('h2');
    var hourLi;
    var sumLi;
    var sumCookies = 0;

    storeNameLi.textContent = this.storeName;
    storeList.appendChild(storeNameLi);

    // print hours and cookies sold to sales.html
    for (var i = 0; i < this.storeHours.length; i++) {
      var totalCookies = this.numCookies();
      var totalCustomers = this.numCustomers(this.min, this.max);

      hourLi = document.createElement('li');
      hourLi.textContent = this.storeHours[i] + ': ' + totalCustomers + ' customers and ' + totalCookies + ' cookies sold.';
      storeList.appendChild(hourLi);

      // calculate sum of daily sales
      this.todayResults.push(totalCookies);
      sumCookies += totalCookies;   // creates a total daily cookies
    }

    sumLi = document.createElement('li');   // creates a new node
    sumLi.textContent = 'Total: ' + sumCookies + ' cookies sold today.';  // assigns value to node
    storeList.appendChild(sumLi);   // appends the newly created node to a parent node
  }
};

seaTacStore.generateStoreList();


// Store 3: Seattle Center
var seaCenStore = {
  storeName: 'Seattle Center',
  storeHours: ['6:00a', '7:00a', '8:00a', '9:00a', '10:00a', '11:00a', '12:00p', '1:00p', '2:00p', '3:00p', '4:00p', '5:00p', '6:00p', '7:00p', '8:00p'],
  avgCookies: 3.7,
  todayResults: [],
  max: 38,
  min: 11,

  // calculate random customers
  numCustomers: function (min, max) {
    var totalCustomers = Math.floor(Math.random() * (max - min) + min);
    return totalCustomers;
  },

  // calculate number of cookies sold
  numCookies: function () {
    var totalCookies = Math.round(this.numCustomers(this.min, this.max) * this.avgCookies);
    return totalCookies;
  },

  // generate store list
  generateStoreList: function () {
    var storeList = document.getElementById('seacenter');
    var storeNameLi = document.createElement('h2');
    var hourLi;
    var sumLi;
    var sumCookies = 0;

    storeNameLi.textContent = this.storeName;
    storeList.appendChild(storeNameLi);

    // print hours and cookies sold to sales.html
    for (var i = 0; i < this.storeHours.length; i++) {
      var totalCookies = this.numCookies();
      var totalCustomers = this.numCustomers(this.min, this.max);

      hourLi = document.createElement('li');
      hourLi.textContent = this.storeHours[i] + ': ' + totalCustomers + ' customers and ' + totalCookies + ' cookies sold.';
      storeList.appendChild(hourLi);

      // calculate sum of daily sales
      this.todayResults.push(totalCookies);
      sumCookies += totalCookies;   // creates a total daily cookies
    }

    sumLi = document.createElement('li');
    sumLi.textContent = 'Total: ' + sumCookies + ' cookies sold today.';
    storeList.appendChild(sumLi);
  }

};

seaCenStore.generateStoreList();


// Store 4: Capitol Hill
var capHillStore = {
  storeName: 'Capitol Hill',
  storeHours: ['6:00a', '7:00a', '8:00a', '9:00a', '10:00a', '11:00a', '12:00p', '1:00p', '2:00p', '3:00p', '4:00p', '5:00p', '6:00p', '7:00p', '8:00p'],
  avgCookies: 2.3,
  todayResults: [],
  max: 38,
  min: 20,

  // calculate random customers
  numCustomers: function (min, max) {
    var totalCustomers = Math.floor(Math.random() * (max - min) + min);
    return totalCustomers;
  },

  // calculate number of cookies sold
  numCookies: function () {
    var totalCookies = Math.round(this.numCustomers(this.min, this.max) * this.avgCookies);
    return totalCookies;
  },

  // generate store list
  generateStoreList: function () {
    var storeList = document.getElementById('caphill');
    var storeNameLi = document.createElement('h2');
    var hourLi;
    var sumLi;
    var sumCookies = 0;

    storeNameLi.textContent = this.storeName;
    storeList.appendChild(storeNameLi);

    // print hours and cookies sold to sales.html
    for (var i = 0; i < this.storeHours.length; i++) {
      var totalCookies = this.numCookies();
      var totalCustomers = this.numCustomers(this.min, this.max);

      hourLi = document.createElement('li');
      hourLi.textContent = this.storeHours[i] + ': ' + totalCustomers + ' customers and ' + totalCookies + ' cookies sold.';
      storeList.appendChild(hourLi);

      // calculate sum of daily sales
      this.todayResults.push(totalCookies);
      sumCookies += totalCookies;   // creates a total daily cookies
    }

    sumLi = document.createElement('li');
    sumLi.textContent = 'Total: ' + sumCookies + ' cookies sold today.';
    storeList.appendChild(sumLi);
  }

};

capHillStore.generateStoreList();

// Store 4: Alki
var alkiStore = {
  storeName: 'Alki',
  storeHours: ['6:00a', '7:00a', '8:00a', '9:00a', '10:00a', '11:00a', '12:00p', '1:00p', '2:00p', '3:00p', '4:00p', '5:00p', '6:00p', '7:00p', '8:00p'],
  avgCookies: 4.6,
  todayResults: [],
  max: 16,
  min: 2,

  // calculate random customers
  numCustomers: function (min, max) {
    var totalCustomers = Math.floor(Math.random() * (max - min) + min);
    return totalCustomers;
  },

  // calculate number of cookies sold
  numCookies: function () {
    var totalCookies = Math.round(this.numCustomers(this.min, this.max) * this.avgCookies);
    return totalCookies;
  },

  // generate store list
  generateStoreList: function () {
    var storeList = document.getElementById('alki');
    var storeNameLi = document.createElement('h2');
    var hourLi;
    var sumLi;
    var sumCookies = 0;

    storeNameLi.textContent = this.storeName;
    storeList.appendChild(storeNameLi);

    // print hours and cookies sold to sales.html
    for (var i = 0; i < this.storeHours.length; i++) {
      var totalCookies = this.numCookies();
      var totalCustomers = this.numCustomers(this.min, this.max);

      hourLi = document.createElement('li');
      hourLi.textContent = this.storeHours[i] + ': ' + totalCustomers + ' customers and ' + totalCookies + ' cookies sold.';
      storeList.appendChild(hourLi);

      // calculate sum of daily sales
      this.todayResults.push(totalCookies);
      sumCookies += totalCookies;   // creates a total daily cookies
    }

    sumLi = document.createElement('li');
    sumLi.textContent = 'Total: ' + sumCookies + ' cookies sold today.';
    storeList.appendChild(sumLi);
  }

};

alkiStore.generateStoreList();