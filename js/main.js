// variables globales

let personasMax = 12;
let diasMax = 30;
let adultos;
let ninios;
let precioAdulto = 1000;
let precioNinio = precioAdulto * 0.6;

// Funciones

const precioFinal = (dias) => {
    
    if (dias <= diasMax) {
        personas = (adultos + ninios);
        let precio = (adultos*precioAdulto) + (ninios*precioNinio);
        alert('El precio final para ' + personas + ' personas por ' + dias + ' dias es de $' + dias * precio)
    } else {
        alert('La estadia maxima es de ' + diasMax + ' dias.')
    }
}

// huespedes


adultos = Number(prompt('Cuantos adultos van a hospedarse?'));
ninios = Number(prompt('Cuantos niños menores de 12 van a hospedarse?'));
if((ninios + adultos) > personasMax) {
    alert('La capacidad maxima de la casa es de ' + personasMax + ' personas')
} else if (adultos == 0) {
    alert('Debe viajar por lo menos un adulto')
} else {
    

    //  tiempo

    do {
        opcion = Number(prompt('De cuanto tiempo sera tu estadia?\n\n1 - Dos dias\n2 - Una semana\n3 - Dos semanas\n4 - Otro\n5 - Salir'));
        let dias;

        switch (opcion) {
            case 1:
                dias = 2;
                precioFinal(dias);
                break;
            case 2:
                dias = 7;
                precioFinal(dias);
                break;
            case 3:
                dias = 14;
                precioFinal(dias);
                break;
            case 4:
                dias = Number(prompt('Cuantos dias quieres quedarte'))
                precioFinal(dias);
                break;

            default:
                alert('Opcion incorrecta')
                break;
        }


    } while (opcion !== 5);

}

