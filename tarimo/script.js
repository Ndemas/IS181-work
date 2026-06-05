
//Here we Find all skill list items on the page
var skillItems = document.querySelectorAll(".skill-item");

// Go through each skill item one by one using forEach
skillItems.forEach(function (item) {

  // add a event listener to listen onclick action when the button clicked
  item.addEventListener("click", function () {

    // Find the details paragraph that sits inside this skill item
    var details = item.querySelector(".skill-details");

    // Add or remove the "show" class to show or hide the paragraph
    details.classList.toggle("show");

  });

});



// This variable remembers whether the next sort should go up or down
// true  = ascending  (small numbers first, e.g. 2012, 2019, 2023)
// false = descending (big numbers first,   e.g. 2023, 2019, 2012)
var sortAscending = true;

// Find the sort button
var sortBtn = document.getElementById("sortYearBtn");

sortBtn.addEventListener("click", function () {

  // Find the table body by its id
  var tableBody = document.getElementById("eduTableBody");

  // Get all rows from the table body and put them in an array
  var rows = Array.from(tableBody.querySelectorAll("tr"));

  // Sort the rows by comparing the year in the 3rd column (index 2)
  rows.sort(function (rowA, rowB) {

    // Get the text content of the Year cell from each row
    var yearTextA = rowA.querySelectorAll("td")[2].textContent;
    var yearTextB = rowB.querySelectorAll("td")[2].textContent;

    // Use a Regular Expression to find the first 4-digit number in the text
    // Example: "2019 - 2022" will match "2019"
    // Example: "2025 - Present" will match "2025"
    var numA = parseInt(yearTextA.match(/\d{4}/)[0]);
    var numB = parseInt(yearTextB.match(/\d{4}/)[0]);

    // Compare the two numbers based on the current sort direction
    if (sortAscending) {
      return numA - numB;  // smaller number comes first
    } else {
      return numB - numA;  // bigger number comes first
    }

  });

  // Place the sorted rows back into the table one by one
  rows.forEach(function (row) {
    tableBody.appendChild(row);
  });

  // Flip the sort direction so the next click does the opposite
  sortAscending = !sortAscending;

  // Update the button text to tell the user what the next click will do
  if (sortAscending) {
    sortBtn.textContent = "Sort by Year - Oldest First";
  } else {
    sortBtn.textContent = "Sort by Year - Newest First";
  }

});


// Find all Read More buttons on the page
var readMoreBtns = document.querySelectorAll(".read-more-btn");

// Go through each button one by one
readMoreBtns.forEach(function (btn) {

  btn.addEventListener("click", function () {

    // The description paragraph is the element directly before this button
    // previousElementSibling means "the sibling element just before me"
    var desc = btn.previousElementSibling;

    // Toggle the "expanded" class on the description paragraph
    desc.classList.toggle("expanded");

    // Change the button label to match whether the text is expanded or not
    if (desc.classList.contains("expanded")) {
      btn.textContent = "Read Less";
    } else {
      btn.textContent = "Read More";
    }

  });

});



// Find the lightbox overlay, the image inside it, and the close button
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightboxImg");
var lightboxClose = document.getElementById("lightboxClose");

// Find all gallery images
var galleryImages = document.querySelectorAll(".gallery-img");

// When any gallery image is clicked
galleryImages.forEach(function (img) {

  img.addEventListener("click", function () {

    // Put the clicked image's address into the lightbox image element
    lightboxImg.src = img.src;

    // Show the lightbox by setting display to flex
    // flex is needed so the image is centered inside the dark overlay
    lightbox.style.display = "flex";

  });

});

// When the Close button is clicked, hide the lightbox
lightboxClose.addEventListener("click", function () {
  lightbox.style.display = "none";
});

// Also close the lightbox if the user clicks on the dark background area
// We check that the click was on the lightbox div itself, not on the image
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
});



// Find the scroll-to-top button
var scrollTopBtn = document.getElementById("scrollTopBtn");

// Listen for scroll events on the whole window
window.addEventListener("scroll", function () {

  // window.scrollY is how many pixels the user has scrolled down
  if (window.scrollY > 200) {
    // User is far down the page - show the button
    scrollTopBtn.classList.remove("hidden");
  } else {
    // User is near the top - hide the button
    scrollTopBtn.classList.add("hidden");
  }

});

// When the button is clicked, scroll smoothly to the very top of the page
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // "smooth" makes it animate, not jump instantly
  });
});


// Find the email input and the status message element
var emailInput = document.getElementById("emailInput");
var emailStatus = document.getElementById("emailStatus");

// Only run this block if the email input exists on the page
if (emailInput) {

  // Run this function every time the user types in the input field
  emailInput.addEventListener("input", function () {

    // Get whatever the user has typed so far
    var typedValue = emailInput.value;

    // Define the email pattern using a Regular Expression
    // It checks for: characters, then @, then characters, then dot, then characters
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test whether the typed value matches the pattern
    if (emailPattern.test(typedValue)) {
      // The email looks valid - show a success message
      emailStatus.textContent = "Valid email address.";
      emailStatus.style.color = "green";
    } else {
      // The email does not match the pattern - show an error message
      emailStatus.textContent = "Please enter a valid email. Example: name@example.com";
      emailStatus.style.color = "red";
    }

  });

}
