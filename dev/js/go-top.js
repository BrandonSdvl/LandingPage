const goTop = document.getElementById("goTop")

window.onscroll = function() {
    if(document.documentElement.scrollTop > 300) {
        goTop.classList.add("go-top--show");
    } else {
        goTop.classList.remove("go-top--show");
    }
}