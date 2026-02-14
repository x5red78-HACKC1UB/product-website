console.log("JS connected!");

    const miku = document.getElementById("mikumiku"); 
    let mikuX = 0; 
    let mikuY = 0; 
    let isHolding=false;
console.log("miku!");
miku.addEventListener("mousedown", (e) => {
 isHolding= true;
    mikuX = e.clientX - miku.offsetLeft; 
    mikuY = e.clientY - miku.offsetTop;
});
document.addEventListener("mousemove", (e) => { 
    if (isHolding) { 
    miku.style.position = "absolute"; 

    miku.style.left = (e.clientX - mikuX) + "px"; 
    miku.style.top = (e.clientY - mikuY) + "px"; 
} 
});
document.addEventListener("mouseup", () => { 
    if (isHolding) { 
    console.log("Dragging stopped"); 
} 
isHolding = false; 
});