let prevScrollpos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".menu").style.top = "0";
    } else {
        document.querySelector(".menu").style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
}
