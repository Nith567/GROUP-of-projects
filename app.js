document.addEventListener("mousemove",(e)=>{
 console.log(e);
     const x=e.clientX;
     const y=e.clientY;
    // console.log(x);
const ricky=document.getElementById("ricky");
// console.log(x,y);
const rekt=ricky.getBoundingClientRect();
const rickyx=(rekt.left+rekt.width)/2;
const rickyy=(rekt.right+rekt.height)/2;

const Angledeg=angle(x,y,rickyx,rickyy);
console.log(Angledeg);
});
function angle(cx,cy,ex,ey){

const dy=ey-cy;
const dx=ex-cx;

const rad=Math.atan2(dy/dx);
const deg=rad*180/Math.PI;
return deg;
}