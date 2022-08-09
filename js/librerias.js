// LIBRERIAS

const reservas = document.getElementsByClassName(".btn")

reservas.forEach(addEventListener("click", ()=>{

    Toastify({
        text: "Hotel no disponible",
        duration: 2000,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
          background: "linear-gradient(to left, #8E011A, #FF2D53)",
        },
      }).showToast();
}))