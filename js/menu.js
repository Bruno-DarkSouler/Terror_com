const barra_lateral = document.getElementById("barra_lateral");
const menu = document.getElementById("menu");
const cerrar_menu = document.getElementById("cerrar_menu");

menu.onclick = () => {
    barra_lateral.classList.toggle("desplegada");
    barra_lateral.classList.toggle("no_desplegada");
}

cerrar_menu.onclick = () => {
    barra_lateral.classList.toggle("desplegada");
    barra_lateral.classList.toggle("no_desplegada");
}