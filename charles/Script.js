function toggleSkills(element){
    const details = element.nextElementSibling;
    if(details.classList.contains('hidden')){
        details.classList.remove('hidden');
    } else{
        details.classList.add('hidden');
    }
}

let isAscending = true;

function sortTable(){
    const table = document.getElementById('education-table');
    const rows =table.querySelectorAll('tbody tr');
    const sortedRows = Array.from(rows).sort((A,B)=>{
        const yearA = parseInt(A.cells[2].textContent);
        const yearB = parseInt(B.cells[2].textContent);
        if(isAscending){
            return yearA-yearB;
        }else{
            return yearB-yearA;
        }
    });
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
    isAscending = !isAscending;
}

function toggleHobby(button){
    const textElement = button.previousElementSibling;
    if(textElement.classList.contains('collapsed')){
        textElement.classList.remove('collapsed');
        button.textContent = 'Read Less';
    }else{
        textElement.classList.add('collapsed');
        button.textContent = 'Read More';
    }
    }

    function openLightbox(clickedImage){
        const overlay = document.getElementById('lightbox-overlay');
        const modalImg = document.getElementById('lightbox-modal-img');
        modalImg.src = clickedImage.src;
        overlay.classList.remove('lightbox-hidden');
    }

    function closeLightbox(){
        const overlay = document.getElementById('lightbox-overlay');
        overlay.classList.add('lightbox-hidden');
    }

    window.onscroll = function(){
        scrollFunction();
    };

    function scrollFunction(){
        const topBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop >200) {
            topBtn.style.display = "block";
        }else{
            topBtn.style.display = "none";
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function toggleTheme() {
        const bodyElement = document.body;
        bodyElement.classList.toggle("dark-mode");

        const themeBtn = document.getElementById("themeToggleBtn");
        if (bodyElement.classList.contains("dark-mode")) {
            themeBtn.textContent = "Mwanga";
        } else {
            themeBtn.textContent = "Giza";
        }
    }

    




