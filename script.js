// Get the input element and the search button
var searchInput = document.querySelector("input[type='search']");
var searchButton = document.querySelector("button[type='submit']");

// Add a click event listener to the search button
searchButton.addEventListener("click", function() {
  // Get the value of the input
  var searchValue = searchInput.value;
  
  // Perform the search
  searchFish(searchValue);
});

function searchFish(value) {
  // Get the list of fish
  var freshwaterFish = document.querySelectorAll("#freshwater-fish li");
  var saltwaterFish = document.querySelectorAll("#saltwater-fish li");

  // Loop through the list of fish
  freshwaterFish.forEach(function(fish) {
    // Check if the fish name matches the search value
    if(fish.textContent.toLowerCase().includes(value.toLowerCase())) {
      fish.style.display = "block"; // Show the fish
    } else {
      fish.style.display = "none"; // Hide the fish
    }
  });
  saltwaterFish.forEach(function(fish) {
    // Check if the fish name matches the search value
    if(fish.textContent.toLowerCase().includes(value.toLowerCase())) {
      fish.style.display = "block"; // Show the fish
    } else {
      fish.style.display = "none"; // Hide the fish
    }
    });
    }