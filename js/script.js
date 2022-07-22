
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

const hotel1 = new hotel ("./images/hotel1.png","Miami Resort","Miami, EE. UU.", 34)
const hotel2 = new hotel ("./images/hotel2.jpg","Vistas do Praia Hotel","Lisboa, Portugal.", 42)
const hotel3 = new hotel ("./images/hotel3.jpg","Buenos Aires Hilton","Buenos Aires, Argentina.", 27)
const hotel4 = new hotel ("./images/hotel4.jpg","Moonlight Suite","New York, EE. UU.", 30)
const hotel5 = new hotel ("./images/hotel5.png","Sekhmet Hotel","El Cairo, Egipto.", 48)
const hotel6 = new hotel ("./images/hotel6.jpg","Hotel Luz y Fuerza","Mar del Plata, Argentina.",22)
const hotel7 = new hotel ("./images/hotel7.jpg","Apple Playroom","California, EE. UU.", 50)
const hotel8 = new hotel ("./images/hotel8.png","Hotel Taquito","Isla del Carmen, Mexico.", 69)
const hotel9 = new hotel ("./images/hotel9.jpg","Budha Resort & Spa","Sidney, Australia.", 61)
const hotel10 = new hotel ("./images/hotel10.jpg","Pharaoh Paradise","Alexandría, Egipto.", 52)
const hotel11 = new hotel ("./images/hotel11.jpg","Pachamama Resort","La Paz, Bolivia.", 47)
const hotel12 = new hotel ("./images/hotel12.png","Saranda","Bora Bora, French Polynesia.", 188)
const hotel13 = new hotel ("./images/hotel13.jpg","Arrayanes Experience","Bariloche, Argentina.", 88)
const hotel14 = new hotel ("./images/hotel14.jpg","Restare Fortunato","Napoles, Italia.", 238)
const hotel15 = new hotel ("./images/hotel15.jpg","Amazonas Resort","Amazonas, Brasil.", 43)

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

// ESTO LO PUSE COMO PARA QUE LAS BUSQUEDAS QUE HAGA EL USUARIO QUEDEN GUARDADAS, Y EN OCASIONES FUTURAS LE LLEGUEN PROMOS U OFERTAS QUE COINCIDAN CON SU BUSQUEDA

boton.addEventListener("click", () =>{ console.log (inputBuscador.value)})


// 
// 
 

document.addEventListener("keyup", e=>{

if (e.target.matches("#inputBuscador")){  

if (e.key ==="Escape")e.target.value = ""

document.querySelectorAll(".alojamiento").forEach(palabra =>{
  
palabra.textContent.toLowerCase().includes(e.target.value.toLowerCase())

?palabra.classList.remove("filtro")

:palabra.classList.add("filtro")

})
}
})
