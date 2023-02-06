"use strict";


window.addEventListener('load', function (evento) {

    // Asigna el gestor de evento de nuestro teclado
    document.getElementById('area').addEventListener('mousemove', areaOnMouseMove);    
});

    
function areaOnMouseMove(e) {
    
    // Posición del ratón
    let x = e.offsetX;
    let y = e.offsetY;

    // Asigna el valor
    document.getElementById('x').textContent = x;
    document.getElementById('y').textContent = y;

}

function cargar(e){
    let x = e.offsetX;
    let y = e.offsetY;
 
}

function color(raton){
    
}