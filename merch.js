'use strict';

// create any needed global variables
// do I need to store new stores in an array so that they don't disappear when the page refreshes?
var allOrders = [];
var headerArray = [
  '', 'Customer Name', 'Address', 'Email',
  'Item', 'Quantity', 'Payment Method'
];

//create event listener for store form
var userOrder = document.getElementById('shop');
userOrder.addEventListener('submit', orderHandler);

//write event handler function to pull data from store form and event listener
// make sure to clear table and arrays
function orderHandler(event) {
  event.preventDefault();
  var custName = event.target.name.value; //pulling value from HTML id
  var address = event.target.address.value;
  var email = event.target.email.value;
  var item = event.target.item.value;
  var quantity = event.target.quantity.value;
  var payment = event.target.payment.value;

  if (isNaN(quantity)) {
    return alert('Please enter a numerical value.');
  };

  event.target.name.value = '';
  event.target.address.value = '';
  event.target.email.value = '';
  event.target.item.value = '';
  event.target.quantity.value = '';
  event.target.payment.value = '';

  // create new order
  var formOrder = new Order(custName, address, email, item, quantity, payment);
  allOrders.push(formOrder);

  var submissionMessage = document.createElement('p');
  submissionMessage.textContent = 'Thank you! Your order will be processed within 3-5 business days. You will receive an email shortly.';
  userOrder.appendChild(submissionMessage);
};


// create constructor 'ORDER'
function Order(name, address, email, item, quantity, payment) {
  this.name = name;
  this.address = address;
  this.email = email;
  this.item = item;
  this.quantity = quantity;
  this.payment = payment;
};

// create function/prototype to generate table for store form
Order.prototype.renderOrder = function () {
  var orderTable = document.getElementById('table-orders');
  var tRow = document.createElement('tr');
  orderTable.appendChild(tRow);
  var indexContent;

  for (var key in allOrders[i]) {
    // skip loop if the property is from prototype
    if (!Order.hasOwnProperty(key)) continue;

    var obj = Order[key];
    for (var prop in obj) {
      // skip loop if the property is from prototype
      if (!obj.hasOwnProperty(prop)) continue;
      // your code
      indexContent = obj[prop];
    }

    var orderTd = document.createElement('td');
    orderTd.textContent = indexContent;
    tRow.appendChild(orderTd);
  };
};

function renderHeader() {
  var orderTable = document.getElementById('table-orders');
  var tRow = document.createElement('tr');
  orderTable.appendChild(tRow);

  //create header cell for order number
  var orderTh = document.createElement('th');
  orderTh.textContent = 'Order #';
  tRow.appendChild(orderTh);

  for (var i = 0; i < headerArray.length; i++) {
    var titleTd = document.createElement('th');
    titleTd.textContent = headerArray[i];
    tRow.appendChild(titleTd);
  };
}

// create statements to generate multiple order objects from constructor
var firstOrder = new Order('Dave Rappoccio', 'Portland', 'djr@gmail.com', 'shirt', 1, 'Visa');
// push order to all orders array
allOrders.push(firstOrder);

// // call function!
// function renderOrderTable() {
//   renderHeader();
//   for (var i = 0; i < allOrders.length; i++) {
//     allOrders[i].renderOrder();
//   };
// };

// renderOrderTable();