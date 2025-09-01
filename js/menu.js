const barra_lateral = document.getElementById("barra_lateral");
const menu = document.getElementById("menu");

menu.onclick = () => {
    barra_lateral.classList.toggle("desplegada");
    barra_lateral.classList.toggle("no_desplegada");
}