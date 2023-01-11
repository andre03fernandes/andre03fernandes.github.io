let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("linq");
        habilidades[1].classList.add("htmlcssjavascript");
        habilidades[2].classList.add("aspnetmvc");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("xamarin");
        habilidades[5].classList.add("comunication");
        habilidades[6].classList.add("teamwork");
        habilidades[7].classList.add("creativity");
        habilidades[8].classList.add("dedication");
        habilidades[9].classList.add("project");
    }
}


window.onscroll = function () {
    efectoHabilidades();
} 