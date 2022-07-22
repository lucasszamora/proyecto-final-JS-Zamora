
// ELEMENTOS HTML A TRAVÉS DE JS (CLASE DOM)

const container= document.getElementById("container")

class hotel{
    constructor(nombre,ubicacion,precio){

    this.nombre = nombre ;
    this.ubicacion = ubicacion ;
    this.precio = precio ;
}
}

const hotel1 = new hotel ("Miami Resort","Miami", 44)
const hotel2 = new hotel ("Hotel 2","Miami", 44)
const hotel3 = new hotel ("Hotel 1","Miami", 44)
const hotel4 = new hotel ("Hotel 1","Miami", 44)
const hotel5 = new hotel ("Hotel 1","Miami", 44)
const hotel6 = new hotel ("Hotel 1","Miami", 44)
const hotel7 = new hotel ("Hotel 1","Miami", 44)
const hotel8 = new hotel ("Hotel 1","Miami", 44)
const hotel9 = new hotel ("Hotel 1","Miami", 44)
const hotel10 = new hotel ("Hotel 1","Miami", 44)
const hotel11 = new hotel ("Hotel 1","Miami", 44)
const hotel12 = new hotel ("Hotel 1","Miami", 44)
const hotel13 = new hotel ("Hotel 1","Miami", 44)
const hotel14 = new hotel ("Hotel 1","Miami", 44)
const hotel15 = new hotel ("Hotel 1","Miami", 44)

const hoteles=[hotel1,hotel2,hotel3,hotel4,hotel5,hotel6,hotel7,hotel8,hotel9,hotel10,hotel11,hotel12,hotel13,hotel14,hotel15]

hoteles.forEach(hotel => {
    
    container.innerHTML += `
    <div class="alojamiento">
    <div class="img__container">
        <img src="./images/hotel4.jpg" alt="imagen hotel Windbnb" class="hotel__img">
    </div>
    <h2 class="hotel__h1">${hotel.nombre}</h2>
    <p class="hotel__ubi">Ubicación: ${hotel.ubicacion}</p>
    <p class="hotel__precio"><b>USD ${hotel.precio}</b> por noche</p>
    <button class="btn">RESERVAR</button>
</div>
    `
})


// EVENTOS addEventListener (CLASE EVENTOS)

const inputBuscador = document.getElementById("inputBuscador")

