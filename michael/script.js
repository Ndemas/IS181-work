function toggleSkill(id){
document.getElementById(id).classList.toggle("hidden");
}

function toggleMode(){
document.body.classList.toggle("dark-mode");
}

function openImage(src){
document.getElementById("lightbox").style.display="block";
document.getElementById("lightboxImg").src=src;
}

function closeImage(){
document.getElementById("lightbox").style.display="none";
}

window.onscroll=function(){

if(document.documentElement.scrollTop>200){
document.getElementById("topBtn").style.display="block";
}
else{
document.getElementById("topBtn").style.display="none";
}

};

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

const text =
"BIT Student | Technology Enthusiast | Future Entrepreneur";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,80);

}

}

typeWriter();

function counter(id,target){

let count=0;

let interval=setInterval(()=>{

count++;

document.getElementById(id).innerHTML=count;

if(count>=target){
clearInterval(interval);
}

},50);

}

counter("projectCount",12);
counter("skillCount",8);
counter("certCount",4);

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

        return ascending
            ? yearA - yearB
            : yearB - yearA;

    });

    ascending = !ascending;

    rows.forEach(row=>{
        table.appendChild(row);
    });

}
function readMore(){

    let more = document.getElementById("more");

    let btn = event.target;

    if(more.style.display === "none"){

        more.style.display = "inline";

        btn.innerHTML = "Read Less";

    }else{

        more.style.display = "none";

        btn.innerHTML = "Read More";

    }

}
function openImage(src){

    document.getElementById("lightbox").style.display="block";

    document.getElementById("lightboxImg").src=src;

}

function closeImage(){

    document.getElementById("lightbox").style.display="none";

}
function toggleMode(){

    document.body.classList.toggle("dark-mode");

}