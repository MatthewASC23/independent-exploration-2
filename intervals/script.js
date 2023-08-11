// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function add(){
    let dynamTime = time+=1;
    counterElement.innerHTML = "";
    counterElement.append(dynamTime);
    
}

setInterval(add, 1000);