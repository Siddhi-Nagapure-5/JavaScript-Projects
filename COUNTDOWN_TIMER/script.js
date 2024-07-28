let hourBox=document.querySelector("#hour");
let minuteBox=document.querySelector("#minute");
let secondBox=document.querySelector("#second");

const changeTime=()=>{
    const date=new Date();
   const hours=date.getHours();
   const minutes=date.getMinutes();
   const seconds=date.getSeconds();
//    console.log(hours,minutes,seconds);
   hourBox.innerText=hours+"";
   minuteBox.innerText=minutes+"";
   secondBox.innerText=seconds+"";
}

setInterval(changeTime, 1000);
