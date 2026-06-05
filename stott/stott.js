
document.addEventListener("DOMContentLoaded",function(){


let skillItem=document.querySelectorAll(".skill");
skillItem.forEach(function(skill){
skill.addEventListener("click",showDescription)

})

function showDescription(){
    this.querySelector(".description").classList.toggle("hidden")
   
}




const hobbyButtons = document.querySelectorAll(".read-more");

hobbyButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const text =
            this.parentElement.querySelector(".hobby-text");

        text.classList.toggle("expanded");

        if(text.classList.contains("expanded")){
            this.textContent = "Read Less";
        }
        else{
            this.textContent = "....Read More";
        }

    });






});

//this is for the dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        this.textContent = "🌙 Dark Mode";
    }
    else{
        this.textContent = "☀ Light Mode";
    }

});

/*This is for sorting*/
let ascending = true;
const sortBtn = document.getElementById("sortBtn");
sortBtn.addEventListener("click", function(){
    const table = document.querySelector(".education table");
    const rows = Array.from(table.rows).slice(1);
    rows.sort(function(a,b){
        const yearA = Number(a.cells[2].textContent);
        const yearB = Number(b.cells[2].textContent);
        return ascending
            ? yearB - yearA
            : yearA - yearB;
    });
    rows.forEach(function(row){
        table.appendChild(row);
    });
    ascending = !ascending;
});

/*scroll*/
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 200) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }

});

toTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const gallery = document.getElementById("gallery");
const xButton = document.getElementById("close");

xButton.addEventListener("click", function () {
    gallery.style.visibility = "hidden";
    gallery.style.opacity = "0";
});

const galleryImg = document.getElementById("gallery-img");
const images = document.querySelectorAll(".image-item");

images.forEach(function (img) {
    img.addEventListener("click", function () {
        const imgPath = this.getAttribute("src"); // ✅ correct
        setGalleryImage(imgPath);
    });
});

function setGalleryImage(imgPath) {
    galleryImg.setAttribute("src", imgPath);
    gallery.style.visibility = "visible";
    gallery.style.opacity="100%"
}




})