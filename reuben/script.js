function toggleSkill(id){
    document.getElementById(id).classList.toggle("hidden");
}
let ascending = true;

function sortTable(){

let table = document.getElementById("eduTable");
let rows = Array.from(table.rows).slice(1);

rows.sort(function(a,b){

let yearA = parseInt(a.cells[2].innerText);
let yearB = parseInt(b.cells[2].innerText);

return ascending ? yearA - yearB : yearB - yearA;

});

ascending = !ascending;

rows.forEach(row => table.appendChild(row));
}
function readMore(){

let more = document.getElementById("more");

if(more.style.display === "none"){
    more.style.display = "inline";
}
else{
    more.style.display = "none";
}
}
const galleryImages =
document.querySelectorAll(".gallery-img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeBtn =
document.getElementById("closeBtn");

galleryImages.forEach(img => {

    img.addEventListener("click",function(){

        lightbox.style.display="flex";

        lightboxImg.src=this.src;

    });

});

closeBtn.addEventListener("click",function(){

    lightbox.style.display="none";

});

lightbox.addEventListener("click",function(e){

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
function toggleMode(){

document.body.classList.toggle("dark-mode");

}
const text = "BSc BIT Student | Innovator | Future Entrepreneur";
let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,100);
    }
}

typeWriter();

setInterval(()=>{
document.getElementById("clock").innerHTML =
new Date().toLocaleTimeString();
},1000);
function toggleHobby(){

let text = document.getElementById("hobbyText");
let btn = document.getElementById("hobbyBtn");

text.classList.toggle("collapsed");

if(text.classList.contains("collapsed")){
    btn.innerHTML = "Read More";
}
else{
    btn.innerHTML = "Read Less";
}

}