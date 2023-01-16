// Get the input element and the search button
var searchInput = document.querySelector("input[type='search']");
var searchButton = document.querySelector("button[type='submit']");

// Add a click event listener to the search button
searchButton.addEventListener("click", function () {
  // Get the value of the input
  var searchValue = searchInput.value;

  // Perform the search
  searchFish(searchValue);
});

function searchFish(value) {
  // Get the list of fish
  var freshwaterFish = document.querySelectorAll("#fresh-water li");
  var saltwaterFish = document.querySelectorAll("#salt-water li");

  // Loop through the list of fish
  freshwaterFish.forEach(function (fish) {
    // Check if the fish name matches the search value
    if (fish.textContent.toLowerCase().includes(value.toLowerCase())) {
      fish.style.display = "block"; // Show the fish
    } else {
      fish.style.display = "none"; // Hide the fish
    }
  });
  saltwaterFish.forEach(function (fish) {
    // Check if the fish name matches the search value
    if (fish.textContent.toLowerCase().includes(value.toLowerCase())) {
      fish.style.display = "block"; // Show the fish
    } else {
      fish.style.display = "none"; // Hide the fish
    }
  });
}

$(document).ready(function () {
  var slideIndex = 0;
  var time = 2000;
  showSlides();

  function showSlides() {
    var i;
    var slides = $(".slides");
    for (i = 0; i < slides.length; i++) {
      $(slides[i]).fadeOut(1000);
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    $(slides[slideIndex - 1]).fadeIn(1000);
    setTimeout(showSlides, time);
  }
});

// Get the dropdown button
var dropdown = document.querySelector(".dropdown");

// Add a click event listener to the dropdown button
dropdown.addEventListener("click", function () {
  // Toggle the visibility of the dropdown content
  var dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.dropdownContent.style.display = "block";
  }
});

// Fresh Water Fish from Category
$(document).ready(function () {
  // Fresh Water Fish from Category
  var freshwaterCategoryLink = document.querySelector(
    "#freshwater-category-link"
  );

  // Add a click event listener to the link
  freshwaterCategoryLink.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the link from navigating away from the page

    // Get the container for the freshwater fish
    var freshwaterFish = document.querySelector("#freshwater-fish");

    // Show the freshwater fish container
    freshwaterFish.style.display = "block";
  });
});
