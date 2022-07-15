const precioHabitacion = 20
const descuento = 0.15
let dias, personas, reserva
let nombre = (prompt("Bienvenido/a a Windbnb. Para continuar, ingrese su nombre."))

do {
    dias = parseFloat(prompt(`Que tal, ${nombre}. Aproximadamente, ¿Cuántos dias deseaba alojarse en uno de nuestros hoteles? La cuota básica es de USD 20 por día.`))
if (isNaN(dias)) {
    alert("Por favor, ingrese un número válido.")
}
} while (isNaN(dias))

    
do { 
    personas = parseFloat(prompt("¿Cuántas personas se van a hospedar en el hotel? Esto no afecta al precio final."))
if(isNaN(personas)) {
    alert("Por favor, ingrese un número válido.")
}
} while (isNaN(personas))

//descuento


do{

    cupon = (prompt("¿Le proporcionaron algún cupón de descuento en la reserva?")).toLowerCase()

if (cupon === "si") {
    total = ( precioHabitacion * dias - (precioHabitacion * dias * descuento)  )
    alert(`Excelente! su total principal era USD ${precioHabitacion*dias}, y se le hizo un 15% sobre el total de la reserva, por lo que el total final a abonar es USD ${total}.`)
}
if (cupon === "no") {
    total = (precioHabitacion * personas) * dias
    alert(`No se preocupe, el total a abonar es de USD ${total}.`)
} 

if(cupon !== "si" && cupon !== "no"){
    alert("Error, ingrese por si o por no.")
}
}while(cupon !== "si" && cupon !== "no")

do{

    reserva= (prompt("¿Desea continuar con la reserva?")).toLowerCase()

    if (reserva === "no") {
        alert("No hay ningun problema, esperemos verlo/a por aquí pronto.")
    }
    if  (reserva === "si"){
        alert("Excelente, reserva efectuada. Muchas gracias.")
    }
    if (reserva !== "si" && reserva !=="no"){
    alert("Error, ingrese por si o por no.")
    }

}while(reserva !== "si" && reserva !== "no")

class Hotel {

constructor (nombre, ubicacion, precio, estrellas, habitacionDisponible){
this.nombre = nombre
this.ubicacion = ubicacion
this.precio = precio
this.estrellas = estrellas
this.habitacionDisponible = habitacionDisponible
}

}

//FUNCIONES
function buscarHotel (hoteles) {
let nombreHotel = prompt(`Ingrese el nombre del Hotel que está buscando. Las opciones con disponibilidad en este momento son:
    Hotel Copacabana, Brasil.
    Hotel Libertad, Cuba.
    Hotel Mamma Mia, Italia.
    Hotel Spain Villa, España.
`).toLowerCase()

let hotelBuscado = hoteles.find(hoteles => hoteles.nombre == nombreHotel)

if (hotelBuscado == undefined) {
alert (`Hotel no encontrado o no disponible.`)
} else {
alert (`El hotel seleccionado está disponible`)
}
}


function buscarPrecio (hoteles) {
let precioHotel = (prompt("Ingrese el nombre del hotel y le diremos su precio. \n Recuerde, los hoteles son: \n    Copacabana\n    Libertad\n    Mamma mia\n    Spain villa"))
let precioBuscado = hoteles.filter(hoteles => hoteles.nombre <= precio)

if (precioBuscado.length == 0) {
alert ("No hay hotel disponible con ese precio.")
} else {
alert(`El precio de el Hotel seleccionado es ${precioBuscado}`)
}
}

//esto es lo único que no logré que funcionara, porque me dice que precio no esta definido, y es el tercer parámetro del constructor.


function ordenarHoteles (hoteles) {

let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor, los resultados se mostrarán por la consola"))

if (metodoOrdenamiento === 1){

console.log(hoteles.sort((a,b) => b.estrellas - a.estrellas))

}

if (metodoOrdenamiento === 2){

console.log(hoteles.sort((a,b) => a.estrellas - b.estrellas))

}
}




const hotel1 = new Hotel ( "copacabana", "Brasil", 90, 7.5, ["vistaAlMar", "terraza", "bañoCompartido"])
const hotel2 = new Hotel ( "libertad", "Cuba", 60, 8, ["vistaAlMar", "balcon", "cocinaIndividual"])
const hotel3 = new Hotel ( "mamma mia", "Italia", 150, 9.2, ["vistaAlMar", "terraza", "desayunoIncluido"])
const hotel4 = new Hotel ( "spain villa", "España", 100, 9.5, ["vistaAlMar", "balcon", "conJacuzzi"])

const hoteles = [hotel1, hotel2, hotel3, hotel4]
console.log (hoteles)   


let respuesta
//VALIDACIONES con un pequeño menú

do {
respuesta = parseInt(prompt(`Por el momento disponemos de 3 opciones, ya que es lo que sabemos aplicar hasta ahora con JS en la empresa Windbnb.

Ingrese 1 para consultar disponibilidad de Hoteles. 
Ingrese 2 para consultar Hoteles por precio.
Ingrese 3 para Ordenar de menor a mayor valoración los hoteles disponibles.`))

if(respuesta !== 1 && respuesta !== 2 && respuesta !== 3){
    alert("Error, ingrese opciones 1,2 o 3.")
}
} while (respuesta !== 1 && respuesta !==2 && respuesta !== 3)

switch (respuesta) {
case 1:
    buscarHotel(hoteles)
    break
case 2:
    buscarPrecio(hoteles)
    break
case 3: 
    ordenarHoteles (hoteles)
    break
}