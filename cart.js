// add to cart button

// Get the button element
var addToCartBtn = document.getElementById("add-to-cart-btn");

// Add an event listener to the button to listen for clicks
addToCartBtn.addEventListener("click", function() {
  // Code to add the item to the cart goes here
  console.log("Item added to cart!");
});


// Add to cart Function

// Define a variable to hold the number of items in the cart
let cartCount = 0;

// Select the "add to cart" button
const addToCartBtn = document.querySelector("#add-to-cart-btn");

// Add an event listener to the button to listen for clicks
addToCartBtn.addEventListener("click", function() {
  // Increase the cart count by 1
  cartCount++;
  // Update the cart count on the page
  document.querySelector("#cart-count").innerHTML = cartCount;
});


// navigate to cart page when button is pressed
function navigateToCart() {
  window.location.href = "cart_page.html";
}
