/* SLIDE CONTROL */
let current = 0;
const slides = document.querySelectorAll('.slide');
let lock = false;

function show(i){
    slides[current].classList.remove('active');
    slides[current].scrollTop = 0;

    current = (i + slides.length) % slides.length;

    slides[current].classList.add('active');
}

function goTo(i){ show(i); }

/* DESKTOP SCROLL */
window.addEventListener('wheel', e=>{
    if(lock) return;

    lock = true;

    if(e.deltaY > 0){
        show(current+1);
    } else {
        show(current-1);
    }

    setTimeout(()=>lock=false,700);
},{passive:true});


/* ✅ MOBILE SWIPE SUPPORT */
let touchStartY = 0;
let touchEndY = 0;

window.addEventListener("touchstart", e=>{
    touchStartY = e.changedTouches[0].screenY;
});

window.addEventListener("touchend", e=>{
    if(lock) return;

    touchEndY = e.changedTouches[0].screenY;

    let diff = touchStartY - touchEndY;

    if(Math.abs(diff) < 50) return; // ignore small swipe

    lock = true;

    if(diff > 0){
        // swipe up
        show(current+1);
    } else {
        // swipe down
        show(current-1);
    }

    setTimeout(()=>lock=false,700);
});


/* TYPING EFFECT */
const nameText="Vishal Kumar";
let i=0;
const target=document.getElementById("typingName");

(function type(){
    if(i<nameText.length){
        target.textContent+=nameText.charAt(i++);
        setTimeout(type,120);
    }
})();
