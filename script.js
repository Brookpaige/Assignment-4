function showMenu(){
    console.log("showing menu");
    var myMenu = document.getElementById("hamburger-menu");
    var myIcon = document.getElementById("hamburger-icon");
    myMenu.style.display = "block";
    myIcon.onclick = hideMenu;
}

function hideMenu(){
    console.log("hiding menu");
    var myMenu = document.getElementById("hamburger-menu");
    var myIcon = document.getElementById("hamburger-icon");
    myMenu.style.display = "none";
    myIcon.onclick = showMenu;

}


window.onload = function () {
    var myIcon = document.getElementById("hamburger-icon");
    myIcon.onclick = showMenu;
}