
// ELEMENTOS HTML A TRAVÉS DE JS (CLASE DOM)

const container= document.getElementById("container")

// class hotel{
//     constructor(foto,nombre,ubicacion,precio){
//     this.foto= foto ;
//     this.nombre = nombre ;
//     this.ubicacion = ubicacion ;
//     this.precio = precio ;
// }
// }

// const hotel1 = new hotel ("./images/hotel1.png","Miami Resort","Miami, EE. UU.", 34)
// const hotel2 = new hotel ("./images/hotel2.jpg","Vistas do Praia Hotel","Lisboa, Portugal.", 42)
// const hotel3 = new hotel ("./images/hotel3.jpg","Buenos Aires Hilton","Buenos Aires, Argentina.", 27)
// const hotel4 = new hotel ("./images/hotel4.jpg","Moonlight Suite","New York, EE. UU.", 30)
// const hotel5 = new hotel ("./images/hotel5.png","Sekhmet Hotel","El Cairo, Egipto.", 48)
// const hotel6 = new hotel ("./images/hotel6.jpg","Hotel Luz y Fuerza","Mar del Plata, Argentina.",22)
// const hotel7 = new hotel ("./images/hotel7.jpg","Apple Playroom","California, EE. UU.", 50)
// const hotel8 = new hotel ("./images/hotel8.png","Hotel Taquito","Isla del Carmen, Mexico.", 69)
// const hotel9 = new hotel ("./images/hotel9.jpg","Budha Resort & Spa","Sidney, Australia.", 61)
// const hotel10 = new hotel ("./images/hotel10.jpg","Pharaoh Paradise","Alexandría, Egipto.", 52)
// const hotel11 = new hotel ("./images/hotel11.jpg","Pachamama Resort","La Paz, Bolivia.", 47)
// const hotel12 = new hotel ("./images/hotel12.png","Saranda","Bora Bora, French Polynesia.", 188)
// const hotel13 = new hotel ("./images/hotel13.jpg","Arrayanes Experience","Bariloche, Argentina.", 88)
// const hotel14 = new hotel ("./images/hotel14.jpg","Restare Fortunato","Napoles, Italia.", 238)
// const hotel15 = new hotel ("./images/hotel15.jpg","Amazonas Resort","Amazonas, Brasil.", 43)
// const hoteles=[hotel1,hotel2,hotel3,hotel4,hotel5,hotel6,hotel7,hotel8,hotel9,hotel10,hotel11,hotel12,hotel13,hotel14,hotel15]

fetch("../hotels.json")
.then(response=> response.json())
.then(hoteles => {
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
})

setTimeout(() => {
    console.log ("pedazo de gato de mierda")
}, 3000);







// EVENTOS addEventListener (CLASE EVENTOS)

const inputBuscador = document.getElementById("inputBuscador")
const boton= document.getElementById("button")


// ESTO LO PUSE COMO PARA QUE LAS BUSQUEDAS QUE HAGA EL USUARIO QUEDEN GUARDADAS, Y EN OCASIONES FUTURAS LE LLEGUEN PROMOS U OFERTAS QUE COINCIDAN CON SU BUSQUEDA
// 
// 
inputBuscador.addEventListener("change", () => { console.log(inputBuscador.value) })
boton.addEventListener("click", () =>{ console.log (inputBuscador.value)})
// 
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


// DARK MODE - DARK MODE - DARK MODE -DARK MODE
// DARK MODE - DARK MODE - DARK MODE -DARK MODE
// DARK MODE - DARK MODE - DARK MODE -DARK MODE

// 
// VARIABLES
// 

const alojamientoDivs= document.querySelectorAll(".alojamiento")
const h1s= document.querySelectorAll(".hotel__h1")
const ubis= document.querySelectorAll(".hotel__ubi")
const precios= document.querySelectorAll(".hotel__precio")
const darkBtn= document.getElementById("darkBtn")
let darkMode

// 
// LOCAL STORAGE
// 


if(localStorage.getItem("theme")) {
    darkMode= localStorage.getItem("theme")
} else{
    localStorage.setItem("theme", "light")
}

if (darkMode == "dark") {

document.querySelector(".title").classList.add("darkFont")

document.querySelector(".maindiv").classList.add("darkMain")

document.getElementById("container").classList.add("darkModeContainer")

document.getElementById("button").classList.add("darkInput")

document.getElementById("footer").classList.add("darkfooter")

document.getElementById("inputBuscador").classList.add("darkInput")

alojamientoDivs.forEach(element => { element.classList.add("darkModeAlojamiento")});

h1s.forEach(element => { element.classList.add("darkFont")});

ubis.forEach(element => { element.classList.add("darkFont")});

precios.forEach(element => { element.classList.add("darkFont")});

}

// 
// MODO OSCURO BOTÓN
// 
darkBtn.addEventListener("click", ()=>{

document.querySelector(".title").classList.add("darkFont")

document.querySelector(".maindiv").classList.add("darkMain")

document.getElementById("container").classList.add("darkModeContainer")

document.getElementById("button").classList.add("darkInput")

document.getElementById("footer").classList.add("darkfooter")

document.getElementById("inputBuscador").classList.add("darkInput")

alojamientoDivs.forEach(element => { element.classList.add("darkModeAlojamiento")});

h1s.forEach(element => { element.classList.add("darkFont")});

ubis.forEach(element => { element.classList.add("darkFont")});

precios.forEach(element => { element.classList.add("darkFont")});

localStorage.setItem("theme","dark")

})

// 
// MODO CLARO BOTÓN
// 
const lightBtn= document.getElementById("lightBtn")

lightBtn.addEventListener("click", ()=>{

    document.querySelector(".title").classList.remove("darkFont")    

    document.querySelector(".maindiv").classList.remove("darkMain")

    document.getElementById("container").classList.remove("darkModeContainer")

    document.getElementById("button").classList.remove("darkInput")

    document.getElementById("footer").classList.remove("darkfooter")   

    document.getElementById("inputBuscador").classList.remove("darkInput")

    alojamientoDivs.forEach(element => { element.classList.remove("darkModeAlojamiento")});

    h1s.forEach(element => { element.classList.remove("darkFont")});

    ubis.forEach(element => { element.classList.remove("darkFont")});

    precios.forEach(element => { element.classList.remove("darkFont")});

    localStorage.setItem("theme","light")

})


// LIBRERIAS
