// Write your solution in this file!
// Step 1: Declare customerName in global scope
var customerName = 'bob';

// Step 2: Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Step 3: Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Implicitly declares global variable
}

// Step 4: Function to overwrite bestCustomer
function overwriteBestCustomer(newCustomer) {
  bestCustomer = newCustomer;
}

// Step 5: Declare leastFavoriteCustomer and implement changeLeastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'anyone'; // This will throw an error
}
