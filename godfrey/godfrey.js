
document.querySelectorAll('.skill').forEach(function(skillItem) {
    skillItem.addEventListener('click', function() {
        var currentDetails = this.querySelector('.details');
        var allSkills = document.querySelectorAll('.skill');
        
        
        //1.closs other all description that was open automatically
        allSkills.forEach(function(item) {
            if (item !== skillItem) {
                item.classList.remove('active');
                var otherDetails = item.querySelector('.details');
                if (otherDetails) otherDetails.classList.add('hidden');
            }
        });

        // 2. TOGGLE ACTIVE STATE: 
        this.classList.toggle('active');

        // 3. AUTOMATED TYPING EFFECT: 
        if (currentDetails && currentDetails.classList.contains('hidden')) {
            currentDetails.classList.remove('hidden');
            var originalText = currentDetails.innerText.trim();
            currentDetails.innerText = '';
            var index = 0;
            

            var typingInterval = setInterval(function() {
                if (index < originalText.length) {
                    currentDetails.innerText += originalText.charAt(index);
                    index++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 30); //speed of writing the verb
            
        } else if (currentDetails) {
            currentDetails.classList.add('hidden');
        }
    })
});




// SECTION 5: NAVIGATION (Scroll-to-Top Butto-top)

// AUTOMATION: 
var topButton = document.createElement('button');
topButton.id = 'scrollTopBtn';
topButton.innerHTML = '&#9650; Top'; 
document.body.appendChild(topButton);

// AUTOMATION TRACKER:
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        topButton.style.display = 'block'; 
    } else {
        topButton.style.display = 'none'; 
    }
});

// AUTOMATION SMOOTH SCROLL: 
topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 
    });
});



// education section of table
var isAscendingOrder = true;


// arrange the table of educttion automatically according to number of year.
document.getElementById('sortBtn').addEventListener('click', function() {
    var table = document.getElementById('educationTable');
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.querySelectorAll('tr'));
    var button = this;
    
    
//1.automation:arrange according to year.
    rows.sort(function(rowA, rowB) {
        var yearA = parseInt(rowA.cells[2].textContent.trim());
        var yearB = parseInt(rowB.cells[2].textContent.trim());
        return isAscendingOrder ? yearA - yearB : yearB - yearA;
    });
    
    // 2. RE-APPEND & ANIMATE: 
    rows.forEach(function(row) {
        tbody.appendChild(row);
        row.classList.add('row-flash');
        
        
        // remove the light automatically after the milsecond 500.
        setTimeout(function() {
            row.classList.remove('row-flash');
        }, 500);
    });
    
    // 3. AUTO-UPDATE BUTTON TEXT:
    if (isAscendingOrder) {
        button.textContent = "Sort By Year ▲ (Descending)";
        button.style.backgroundColor = "#dc2626"; 
    } else {
        button.textContent = "Sort By Year ▼ (Ascending)";
        button.style.backgroundColor = "#2563EB"; 
    }
    
    
    isAscendingOrder = !isAscendingOrder;
});




document.querySelectorAll('.toggle-btn').forEach(function(button) {
    button.addEventListener('click', function() {
    
        //find the text which apper at the top low of button
        var description = this.previousElementSibling;
        
        if (description && description.classList.contains('hobby-desc')) {
            // open or closs 
            description.classList.toggle('hidden');
            
        
            // find the checkbox which is at top in DOM structure
            var checkbox = description.previousElementSibling ? description.previousElementSibling.previousElementSibling : null;
            
            // AUTOMATION: 
            if (!description.classList.contains('hidden')) {
                this.textContent = 'Read Less';
                this.style.backgroundColor = '#ef4444'; //  (Read Less)
                
                
                if (checkbox && checkbox.type === 'checkbox') {
                    checkbox.checked = true;
                }
            } else {
                // AUTOMATION: 
                this.textContent = 'Read More';
                this.style.backgroundColor = '#10b981'; 
            }
        }
    });
});



// make the morror at the top(lightbox overlay)for use of modern javascript
function openLightbox(event) {
    var overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    
    var enlargedImg = document.createElement('img');
    enlargedImg.src = event.target.src;
    enlargedImg.style.width = 'auto';
    enlargedImg.style.maxHeight = '80%';
    enlargedImg.style.borderRadius = '10px';
    enlargedImg.style.border = '6px solid white';
    
    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox-close';
    closeBtn.innerHTML = '&times;';
    
    
    function closeLightbox() {
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', handleEscapeKey);
    }
    
    // AUTOMATION:
    function handleEscapeKey(e) {
        if (e.key === 'Escape') closeLightbox();
    }
    
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', handleEscapeKey);
    
    overlay.appendChild(enlargedImg);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    
    
    //giveout the appearance of mirror slowly for time 
    setTimeout(function() {
        overlay.style.opacity = '1';
    }, 10);
}

// AUTOMATION FILTER:
document.querySelectorAll('img').forEach(function(imageElement) {
    var imageSource = imageElement.getAttribute('src');
    
    if (imageSource && !imageSource.includes('images.png')) {
        imageElement.addEventListener('click', openLightbox);
    }
});




// SECTION 5: NAVIGATION (Scroll-to-Top Button)
// AUTOMATION:
var topButton = document.createElement('button');
topButton.id = 'scrollTopBtn';
topButton.innerHTML = '&#9650; Top'; // 
document.body.appendChild(topButton);

// AUTOMATION TRACKER
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        topButton.style.display = 'block'; 
    } else {
        topButton.style.display = 'none'; 
    }
});

// AUTOMATION SMOOTH SCROLL: 
topButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});




// -------------------------------------------------------------------------
// SECTION 6: DARK/LIGHT MODE TOGGLE (Fixed & Automated)
// -------------------------------------------------------------------------

// AUTOMATION: Hutengeneza kitufe cha muonekano wa giza kwa kutumia JavaScript pekee.
var themeButton = document.createElement('button');
themeButton.id = 'themeModeToggle';
themeButton.innerHTML = '🌙 Dark Mode'; 

// MITINDO YA KISASA (Inline CSS): Inaweka mitindo ya kitufe kiotomatiki ili kisionekane cha kizamani.
themeButton.style.position = 'fixed';
themeButton.style.top = '20px';
themeButton.style.right = '20px';
themeButton.style.zIndex = '99999';
themeButton.style.padding = '10px 16px';
themeButton.style.fontSize = '13px';
themeButton.style.fontWeight = 'bold';
themeButton.style.borderRadius = '30px';
themeButton.style.border = '2px solid #2563EB';
themeButton.style.backgroundColor = '#1e293b';
themeButton.style.color = '#f8fafc';
themeButton.style.cursor = 'pointer';
themeButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
themeButton.style.transition = 'all 0.3s ease';

// AUTOMATION INJECTION: Kinaweka kitufe hiki juu kabisa ya ukurasa wako mzima kikifunguka.
document.body.prepend(themeButton);

// AUTOMATION SWITCH: Inalazimisha mwili wa ukurasa kubadili rangi bila kutegemea faili la nje la CSS.
themeButton.addEventListener('click', function() {
    // Hugeuza hali ya darasa la giza kwenye lebo ya body
    document.body.classList.toggle('dark-theme');
    
    // Inalazimisha mabadiliko ya rangi papo hapo kwa kutumia mtindo wa ndani wa JavaScript
    if (document.body.classList.contains('dark-theme')) {
        this.innerHTML = '☀️ Light Mode'; // Inabadilisha mbaramwezi kuwa jua
        document.body.style.setProperty('background-color', '#0f172a', 'important'); // Giza totoro
        document.body.style.setProperty('color', '#f8fafc', 'important'); // Maandishi meupe
        this.style.backgroundColor = '#f8fafc';
        this.style.color = '#1e293b';
    } else {
        this.innerHTML = '🌙 Dark Mode'; // Inarudi kuwa mbaramwezi
        document.body.style.setProperty('background-color', 'aquamarine', 'important'); // Rangi yako ya asili
        document.body.style.setProperty('color', 'black', 'important'); // Maandishi meusi
        this.style.backgroundColor = '#1e293b';
        this.style.color = '#f8fafc';
    }
});


