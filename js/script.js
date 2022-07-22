
// ELEMENTOS HTML A TRAVÉS DE JS (CLASE DOM)

const container= document.getElementById("container")

class hotel{
    constructor(foto,nombre,ubicacion,precio){
    this.foto= foto ;
    this.nombre = nombre ;
    this.ubicacion = ubicacion ;
    this.precio = precio ;
}
}

const hotel1 = new hotel ("./images/hotel1.png","Miami Resort","Miami", 44)
const hotel2 = new hotel ("./images/hotel2.jpg","Hotel 1","Miami", 44)
const hotel3 = new hotel ("./images/hotel3.jpg","Hotel 1","Miami", 44)
const hotel4 = new hotel ("./images/hotel4.jpg","Hotel 1","Miami", 44)
const hotel5 = new hotel ("./images/hotel5.png","Hotel 1","Miami", 44)
const hotel6 = new hotel ("./images/hotel6.jpg","Hotel 1","Miami", 44)
const hotel7 = new hotel ("./images/hotel7.jpg","Hotel 1","Miami", 44)
const hotel8 = new hotel ("./images/hotel8.png","Hotel 1","Miami", 44)
const hotel9 = new hotel ("./images/hotel9.jpg","Hotel 1","Miami", 44)
const hotel10 = new hotel ("./images/hotel10.jpg","Hotel 1","Miami", 44)
const hotel11 = new hotel ("./images/hotel11.jpg","Hotel 1","Miami", 44)
const hotel12 = new hotel ("./images/hotel12.png","Hotel 1","Miami", 44)
const hotel13 = new hotel ("./images/hotel13.jpg","Hotel 1","Miami", 44)
const hotel14 = new hotel ("./images/hotel14.jpg","Hotel 1","Miami", 44)
const hotel15 = new hotel ("./images/hotel15.jpg","Hotel 1","Miami", 44)

const hoteles=[hotel1,hotel2,hotel3,hotel4,hotel5,hotel6,hotel7,hotel8,hotel9,hotel10,hotel11,hotel12,hotel13,hotel14,hotel15]

hoteles.forEach(hotel => {
    
    container.innerHTML += `
    <div class="alojamiento">
    <div class="img__container">
        <img src="${hotel.foto}" alt="imagen hotel Windbnb" class="hotel__img">
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
const boton= document.getElementById("button")

inputBuscador.addEventListener("input", () => { console.log(inputBuscador.value) })

inputBuscador.addEventListener("change", () => { console.log(inputBuscador.value) })

boton.addEventListener("click", () =>{ console.log (inputBuscador.value)})


