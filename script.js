let menuVisible = false;

function responsiveHeader() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function select() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function skills() {
    var skills = document.getElementById("skills");
    var progressBar = window.innerHeight - skills.getBoundingClientRect().top;
    if (progressBar >= 300) {
        let skills = document.getElementsByClassName("progress");
        skills[0].classList.add("csharp");
        skills[1].classList.add("dotnet");
        skills[2].classList.add("sqlserver");
        skills[3].classList.add("oop");
        skills[4].classList.add("python");
        skills[5].classList.add("comunication");
        skills[6].classList.add("teamwork");
        skills[7].classList.add("creativity");
        skills[8].classList.add("dedication");
        skills[9].classList.add("scrum");
    }
}

window.onscroll = function () {
    skills();
} 