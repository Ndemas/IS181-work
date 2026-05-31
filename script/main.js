
function main(){
    setTime();
    setInterval(setTime,1000);/*updates the time each second*/
    let message=document.getElementById("welcome-txt").textContent;
    document.getElementById("welcome-txt").textContent=" ";
    typeWriter(message,0);
}
/*the function main is used to start the script. we used this 
 because of the eventlistner "DomContent loaded" so that script it only
 the page is fully loaded*/




function getTime(){
    const time=new Date();
    let hour=doubleDigit(time.getHours());
    let mins=doubleDigit(time.getMinutes());
    let secs=doubleDigit(time.getSeconds());
    return `${hour}:${mins}:${secs}`;
} /* The function getTime creates a date object and assigns the hour mins
    and secs to the variables. after calling Double Digit on each.*/



    function doubleDigit(number){
    if (number<10){
        number="0"+number;
        return (number);
    }
        return (number);
}
/*The Function doubleDigit is used to turn single digits into
 double digits by adding a leading zero.*/


function setTime(){
    let value= getTime();
    let clock=document.getElementById("time");
    clock.innerHTML="<h1>"+value+"</h1>";
}
/*Function setTime gets the time and then outputs it onto the Html element with the id time*/

function typeWriter(strArr,i){
    let length=strArr.length;
    if (i<length){
        document.getElementById("welcome-txt").textContent+=strArr[i];
        i++
        setTimeout(()=>{typeWriter(strArr,i)},100);
    }
   

}








document.addEventListener("DOMContentLoaded",main);
/*calls the main function only when the full pag has loaded*/