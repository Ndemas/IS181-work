// =========================================================================
// EXISTING CODE (Preserved functionality with added full support)
// =========================================================================

// Function to loop through all skill items and toggle their nested lists on click [cite: 60]
document.querySelectorAll('.skills-container .skill-item').forEach(function(item) {
  item.addEventListener('click', function() {
    var details = this.querySelector('.skills-list');
    if(details) {
        details.classList.toggle('hidden');
    }
  });
});

// Function to toggle between light and dark mode themes using the main toggle button [cite: 51, 52]
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Function to expand or hide secondary web development skill details text on click [cite: 46]
document.querySelectorAll('.hero > .skill-item').forEach(item => {
    item.addEventListener('click', () => {
        var details = item.querySelector('.skill-details');
        if(details) details.classList.toggle('hidden');
    });
});

// Function to sort education table rows in ascending or descending order by the Year column [cite: 47]
let asc = true;
document.getElementById('sort-btn').addEventListener('click', () => {
    const tbody = document.querySelector('#edu-table tbody');
    const rows = Array.from(tbody.rows);
    // Remove the header row from sorting process if it is part of the array
    const header = rows.shift(); 
    
    rows.sort((a, b) => {
        const valA = parseInt(a.cells[2].textContent);
        const valB = parseInt(b.cells[2].textContent);
        return asc ? valA - valB : valB - valA;
    });
    
    tbody.innerHTML = '';
    tbody.appendChild(header);
    rows.forEach(row => tbody.appendChild(row));
    asc = !asc; 
});

// Function to toggle long hobby text descriptions using Read More / Read Less buttons [cite: 48]
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Stops parent container click triggers
        const details = this.previousElementSibling;
        details.classList.toggle('hidden');
        this.textContent = details.classList.contains('hidden') ? 'Read More' : 'Read Less';
    });
});

// Get DOM elements for Lightbox interface [cite: 49]
const images = document.querySelectorAll('.lightbox-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// Function to open selected gallery images inside a centered lightbox preview overlay [cite: 49]
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

// Function to close the active lightbox overlay when clicking the X close button [cite: 49]
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Function to close the active lightbox overlay if a user clicks on the empty background layer [cite: 49]
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});


// =========================================================================
// PART 5 ADDITIONS: NAVIGATION & CLEANED THEME LISTENERS
// =========================================================================

// Safe selector handle for the secondary custom theme button
const themeToggleBtn = document.getElementById('themeToggleBtn');
const scrollTopBtn = document.getElementById('scroll-top-btn');

// Function to toggle body styling class via secondary header button to support dark mode options [cite: 51, 52]
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// Function to track viewport scrolling positions and show navigation button past 200px depths [cite: 50]
function handleScroll() {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.remove('hidden-btn');
    } else {
        scrollTopBtn.classList.add('hidden-btn');
    }
}

// Function to smoothly animate viewport layout coordinate parameters back up to absolute zero heights [cite: 50]
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Connect global structural navigation listeners directly into designated page action tracking components [cite: 23, 50]
window.addEventListener('scroll', handleScroll);
scrollTopBtn.addEventListener('click', scrollToTop);