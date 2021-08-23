gsap.registerPlugin(ScrollTrigger);/*Esto es el segundo script que esta en el html, es el plugin para el scroll */
const nave = document.querySelectorAll('.nave');
const planeta_2 = document.querySelectorAll('.planeta_2');
const planeta_3 = document.querySelectorAll('.planeta_3');
const planeta_4 = document.querySelectorAll('.planeta_4');
const planeta_5 = document.querySelectorAll('.planeta_5');
const explosion = document.querySelectorAll('.explosion');

const lineTiempo = gsap.timeline({
    scrollTrigger:{
        trigger: '.contenedor_animacion',
        pin: true,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
    },
});

lineTiempo.to(nave, {scale: .5, y: '20vh', duration: 2,})
lineTiempo.to(planeta_2,{opacity: 1, y:'-70vh', scale: 1, duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(nave, {rotate: '180deg', duration:3.5})
lineTiempo.to(planeta_2,{y: '-120vh', x:'75vh', scale: .5, duration: 5, ease:'power1.inOut'}, '-=3.5')
lineTiempo.to(nave, {rotate: '135deg', duration:3.5})
lineTiempo.to(planeta_3, {opacity: 1, y:'-80vh', scale:1, duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(planeta_3, {y: '-140vh', x: '-30vw', scale: .3, duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(nave, {rotate: '90deg', duration: 1.5})
lineTiempo.to(nave, {x:'30vw', duration: 3.5})
lineTiempo.to(nave, {rotate:'135deg', duration: 2})
lineTiempo.to(planeta_4, {opacity: 1, y: '-50vh', scale: 1.5, duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(planeta_4, {y: '-180vh', scale: .5, duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(nave, {rotate: '90deg', duration: 3.5})
lineTiempo.to(nave, {rotate: '45deg', x: '-30vw', duration: 5})
lineTiempo.to(nave, {rotate: '-45deg', duration: 3.5})
lineTiempo.to(planeta_5, {y: '110vh', opacity: 1, duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(planeta_5, {y: '230vh', duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(nave, {rotate: '0deg', x: '30vw', duration: 3.5})
lineTiempo.to(nave, {rotate: '-45deg', duration: 3.5})
lineTiempo.to(planeta_2, {y: '-200vh', ease:'power1.inOut'})
lineTiempo.to(planeta_2, {x: '-20vw', scale: 1, ease:'power1.inOut'})
lineTiempo.to(planeta_2, {y: '-80vh', duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(planeta_2, {y: '20vh', duration: 3.5, ease:'power1.inOut'})
lineTiempo.to(nave, {y: '-60vh', duration: 5})
lineTiempo.to(explosion, {opacity: 1, scale: 5, duration: 3})
lineTiempo.to(explosion, {opacity: 0, duration: 3})

const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
    console.log("hizo click")
    gsap.to(window, {scrollTo: 4700, duration:15, ease:'power1.inOut'});
}) ;