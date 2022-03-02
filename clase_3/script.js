const matricula = 900000
let creditos, descuento, totalM;
function leerdatos() {
    creditos = Number(prompt('ingrese la cantidad de creditos'))
    
}
leerdatos()
calcular(creditos)

function calcular(creditos) {
    if(creditos <= 6){
    descuento = matricula * 0.5;
    }
    else if(creditos  > 6 && creditos  <=10 ) {
    descuento = matricula * 0.25
    }
    else if(creditos > 10) {
        descuento = 0;
    }
    else{
        alert( 'opcion no valida' )
    }
 totalM = matricula - descuento
 return totalM
}

console.log(`el valor de la matricula es;${totalM}`)