const min = document.getElementById("min");
const sec = document.getElementById("sec");

let counterSec=0;
let start= ()=>{
    let counterMin= prompt("enter a number from 1 to 60");
    if(counterMin>60 || counterMin<1) {
    alert("I said between 1 to 60 -_-")
    return;}
    min.innerHTML=counterMin;
 let randoName =   setInterval(()=>{
        if(counterSec === 0){
        counterMin--;
        min.innerHTML= counterMin.toString();
        counterSec = 59
    }
        if(counterSec<10){ sec.innerHTML= "0"+counterSec.toString();}else{
        sec.innerHTML= counterSec.toString();
        }
        counterSec--;
        if(counterMin ==0 && counterSec ==0){
            sec.innerHTML="00"
            console.log("timer is done")
            if(sec.innerHTML ="00"){ clearInterval(randoName);
                setTimeout(()=>{
                    alert("Timer is Done!")
                }, 100)
            }
            }
    },1000)
}
const reset = ()=>{
    location.reload();
}