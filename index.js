const count=document.querySelector('#cnt');
//  using event listner 
// let pos=document.querySelector('#dec');
// pos.addEventListener("click",dec);
// let neg=document.querySelector('#inc');
// neg.addEventListener("click",inc);
function inc(){
    // convert string into int pARSE INT
   let val=parseInt(count.innerText);
   val=val+1;
   count.innerText=val;
};

function dec(){
    let val=parseInt(count.innerText);
    val=val-1;
    count.innerText=val;
};