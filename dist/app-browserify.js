
var clock, hour, min, sec, color;

function displayTime(){
clock=new Date();
hour=clock.getHours(),
min=clock.getMinutes(),
sec=clock.getSeconds();

//if single digit, add 0 to the left
if(hour<=9) hour='0'+hour;
if(min<=9) min='0'+min;
if(sec<=9) sec='0'+sec;


color='#'+(hour*5)+(min*5)+(sec*5);




function changeClock() {
    document.getElementById("time").innerHTML=color;
}

function returnClock() {
    document.getElementById("time").innerHTML=""+hour+":"+min+":"+sec+"";
}






//set background color
document.body.style.background= color;
document.getElementById('time').innerHTML=""+hour+":"+min+":"+sec+"";

document.getElementById("time").addEventListener("onmouseout", returnClock);

document.getElementById("time").addEventListener("mouseover",changeClock);


//set interval
setInterval(displayTime,1000);

}


displayTime();

