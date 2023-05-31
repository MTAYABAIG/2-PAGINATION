const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;//button status of pagination like 1,2,3,4

// ----------------------Next Function--------------------//
next.addEventListener('click', () => {
    currentActive++;
    
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    
    update();
})

// ----------------------Prev Function--------------------//
prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive > circles.length) {
        currentActive = 1;
    }

    update();
})


function update(){

circles.forEach((circel,idx )=>{

if(idx<currentActive){
    circel.classList.add('active')
}else{
    circel.classList.remove('active')
}

})

// ----------------------Hide/ Showing pre,next btn--------------------//
const actives = document.querySelectorAll('.active');
progress.style.width = (actives.length-1) / (circles.length-1)*100 +'%';

if(currentActive===1){
    prev.disabled = true;
}else
if(currentActive === circles.length){
    next.disabled = true;
}else{
    prev.disabled = false;
    next.disabled = false;

}

}