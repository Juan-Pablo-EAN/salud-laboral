const barra = document.querySelector(".barra");
const carga = document.querySelector(".carga");
const botonUp = document.querySelector(".subir");
const referencias = document.querySelector(".references");
const largoPagina = document.documentElement.scrollHeight;
const largoPantalla = window.screen.height;

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let loading = (scroll * 100) / largoPagina;
    carga.style.width = `${loading}%`;

    (scroll > largoPantalla) ?
        (scroll > referencias.offsetTop) ? botonUp.style.display = "none"
            : botonUp.style.display = "flex"
        : botonUp.style.display = "none";
});