/*se ha añadido este archivo js para marcar la zona del menú en la que me encueentro*/
let hipervinculos = document.querySelectorAll(".divNav a");

hipervinculos.forEach(element => {
    if (element.href === document.URL) {
        element.className = "active";
    }
});
