
function main(){
    setTime();
    setInterval(setTime,1000);
}
function getTime(){
    const time=new Date();
    let hour=doubleDigit(time.getHours());
    let mins=doubleDigit(time.getMinutes());
    let secs=doubleDigit(time.getSeconds());
    return `${hour}:${mins}:${secs}`;
}
function doubleDigit(number){
    if (number<10){
        number="0"+number;
        return (number);
    }
        return (number);
}
function setTime(){
    let value= getTime();
    let clock=document.getElementById("time");
    clock.innerHTML="<h1>"+value+"</h1>";
}

document.addEventListener("DOMContentLoaded",main);