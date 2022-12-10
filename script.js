// alert('hey '); script ko check karne k liye

 const btn = document.querySelector("#btn")
const h6 = document.querySelector("h6")
let cursor = document.querySelector(".cursor");

window,addEventListener("mousemove",function(){
    let xValue = details.clientX;
    let yValue = details.clientY;

    // cursor.style.top = '${yvalue}px';
    // cursor.style.left =  '${xvalue}px';

    setTimeout(function(){
        cursor.style.top = '${yvalue}px';
        cursor.style.left =  '${xvalue}px';
    },  100)


})
btn.addEventListener('click',function(){
    tl.reverse();
   
})



// gsap.from(".wrapper",{
//     duration:2,
//     scale: 0.7,
//     ease: 'expo.easeInOut',
//     opacity: 0
// })


 

var tl = gsap.timeline();

tl.from('.wrapper',{
    duration:4,
    scale: 0.7,
    ease: 'Expo.easeInOut',
    opacity: 0
} )
.from('.whitestrap',{
    duration: 2,
    width: 0,
    ease: 'ExpoeaseInOut',
    opacity: 0

},'-+=2.5')

.from('#blackcard',{
    duration: 1.5,
    x:50,
    ease: 'ExpoeaseInOut',
    opacity: 0

},'-=1')

.from('#linelem',{
    duration: 1.5,
    x:50,
    ease: 'ExpoeaseInOut',
    opacity: 0

},'-=1')
.from('#linelem #line',{
    duration: 1.5,
    width:0,
    ease: 'ExpoeaseInOut',
    opacity: 0

},'-=1')

.from('#blackcard p',{
    duration: 1.5,
    y: 30,
    ease: 'ExpoeaseInOut',
    opacity: 0

},'-=1')

.from('#sidelem',{
    duration: 2,
    x: 30,
    ease: 'ExpoeaseInOut',
    opacity: 0

},'-=1')


