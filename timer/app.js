const min = document.getElementById("min");
const sec = document.getElementById("sec");

let counterSec=0;
let test;
let isStopped= false;
let start= (stop)=>{
   let counterMin= prompt("enter a number from 1 to 60");
    test = parseInt(counterMin);
    if(counterMin>60 || counterMin<1 || !test) {
    alert("I said a number between 1 to 60 -_-")
    start();
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
    
    document.getElementById("stop").addEventListener('click', ()=> {
        clearInterval(randoName)
    })

}
const reset = ()=>{
    location.reload();
}