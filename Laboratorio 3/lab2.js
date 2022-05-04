const product = { count: 3, price: 12.55, type: "libros"}

let total;
if (product.count > 0)
{total = product.count * product.price}
else {total = 0};

console.log (total + "€ Sin IVA")

let tipoIva = 0.21;

switch (product.type) {
    case "alimentacion": 
        tipoIva = 0.10; break;
        
    case "libros":
        tipoIva = 0.04; break;
    default: tipoIva = 0.21;
}

console.log (tipoIva*100+ "%" + " IVA aplicado");

const iva = total * tipoIva;
console.log (iva + "€ Total IVA")

console.log (iva + total + "€ Total con IVA");


// Pueba avanzada: calculo de sueldo neto en nomina tramos de rentencion 2022.
// 0 a 12450 19%
// 12450 a 20200 24%
// 20200 a 35200 30%
// 35200 a 60000 37%
// 60000 a 300000 45%
// 300000 a mas 47%

console.log ("´EJERCICIO AVANZADO TRAMOS DE RENTENCION IRPF 2022´")

const empleado = {
    bruto: 300000,
    hijos: 1,
    pagas: 14,
   }

let sueldoBruto = empleado.bruto;

let puntosRetencion;
if (sueldoBruto < 12450) {
    puntosRetencion = 0.19;
} else if (sueldoBruto >= 12450 && sueldoBruto < 20200) {
    puntosRetencion = 0.24;
} else if (sueldoBruto >= 20200 && sueldoBruto < 35200) {
    puntosRetencion = 0.30;
} else if (sueldoBruto >= 35200 && sueldoBruto < 60000) {
    puntosRetencion = 0.37;
} else if (sueldoBruto >= 60000 && sueldoBruto < 300000) {
    puntosRetencion = 0.45;
} else if (sueldoBruto >= 300000) {
    puntosRetencion = 0.47;
}


if (empleado.hijos <= 0 ) {
    puntosRetencion = puntosRetencion;
} else if (empleado.hijos > 0) {
    puntosRetencion = puntosRetencion - 0.02*empleado.hijos;
}

console.log(puntosRetencion*100 + "      % de retencion aplicada");

let retencion = sueldoBruto * (puntosRetencion);

let sueldoNetoAnual = sueldoBruto - retencion;
console.log (sueldoNetoAnual + "  € Sueldo neto anual");

let sueldoNetoMensual = sueldoNetoAnual/empleado.pagas;
console.log (sueldoNetoMensual + "   € Sueldo neto mensual"+ " en " + empleado.pagas + " pagas")

