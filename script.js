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

// Salt Water Fish from Category
$(document).ready(function () {
  // Salt Water Fish from Category
  var saltwaterCategoryLink = document.querySelector(
    "#saltwater-category-link"
  );

  // Add a click event listener to the link
  saltwaterCategoryLink.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the link from navigating away from the page

    // Get the container for the saltwater fish
    var saltwaterFish = document.querySelector("#saltwater-fish");

    // Show the saltwater fish container
    saltwaterFish.style.display = "block";
  });
});


// contact us from Category
$(document).ready(function () {
  // contact us from Category
  var contactusCategoryLink = document.querySelector(
    "#contactus-category-link"
  );

  // Add a click event listener to the link
  contactusCategoryLink.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the link from navigating away from the page

    // Get the container for the contact us
    var contactus = document.querySelector("#contactus");

    // Show the contact us container
    contactus.style.display = "block";
  });
});

// aquarium-gallery from Category
$(document).ready(function () {
  // aquarium gallery from Category
  var aquariumgalleryCategoryLink = document.querySelector(
    "#aquarium-gallery-category-link"
  );

  // Add a click event listener to the link
  aquariumgalleryCategoryLink.addEventListener("click", function (event) {
    event.preventDefault(); // prevent the link from navigating away from the page

    // Get the container for the aquarium gallery
    var aquariumgallery = document.querySelector("#aquarium-gallery");

    // Show the aquarium gallery container
    aquariumgallery.style.display = "block";
  });
});

