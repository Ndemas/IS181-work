document.addEventListener("DOMContentLoaded", function () {

    // wait untill the page loads first before running any js

    let skillItem = document.querySelectorAll(".skill");

    // add click event to every skill item
    skillItem.forEach(function (skill) {
        skill.addEventListener("click", showDescription);
    });

    // shows or hides the skill description when clicked
    function showDescription() {
        this.querySelector(".description").classList.toggle("hidden");
    }


    // HOBBIES SECTION

    // get all read more buttons from hobbies section
    const hobbyButtons = document.querySelectorAll(".read-more");

    hobbyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // find the text that belongs to this button only
            const text =
                this.parentElement.querySelector(".hobby-text");

            // expand or collapse the text
            text.classList.toggle("expanded");

            // change button text depending on state
            if (text.classList.contains("expanded")) {
                this.textContent = "Read Less";
            }
            else {
                this.textContent = "....Read More";
            }

        });

    });


    // DARK MODE 

    // button for switching between light and dark themes
    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        // update the button text so user knows current mode
        if (document.body.classList.contains("light-mode")) {
            this.textContent = "🌙 Dark Mode";
        }
        else {
            this.textContent = "☀ Light Mode";
        }

    });


    // EDUCATION TABLE SORTING 

    // this variable keeps track of which order we are sorting
    let ascending = true;

    const sortBtn = document.getElementById("sortBtn");

    sortBtn.addEventListener("click", function () {

        const table = document.querySelector(".education table");

        // skip the header row
        const rows = Array.from(table.rows).slice(1);

        // sort by graduation year
        rows.sort(function (a, b) {

            const yearA = Number(a.cells[2].textContent);
            const yearB = Number(b.cells[2].textContent);

            return ascending
                ? yearB - yearA
                : yearA - yearB;

        });

        // put rows back into the table after sorting
        rows.forEach(function (row) {
            table.appendChild(row);
        });

        // switch sorting direction for next click
        ascending = !ascending;

    });


    //  SCROLL TO TOP BUTTON 

    const toTop = document.getElementById("toTop");

    // show button only after scrolling down a bit
    window.addEventListener("scroll", () => {

        if (window.scrollY > 200) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }

    });

    // smooth scroll back to top of page
    toTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    //  IMAGE GALLERY 

    const gallery = document.getElementById("gallery");
    const xButton = document.getElementById("close");

    // closes the popup gallery when X is clicked
    xButton.addEventListener("click", function () {

        gallery.style.visibility = "hidden";
        gallery.style.opacity = "0";

    });

    const galleryImg = document.getElementById("gallery-img");
    const images = document.querySelectorAll(".image-item");

    // add click event to all gallery images
    images.forEach(function (img) {

        img.addEventListener("click", function () {

            // get image source path
            const imgPath = this.getAttribute("src");

            // send image to gallery viewer
            setGalleryImage(imgPath);

        });

    });

    // updates gallery image and opens popup
    function setGalleryImage(imgPath) {

        galleryImg.setAttribute("src", imgPath);

        gallery.style.visibility = "visible";

        // make it visible again after opening
        gallery.style.opacity = "100%";

    };

});