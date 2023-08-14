// javascript code

// function
function onPageLoad() {
    const nav = document.querySelector(".site-navigation")
    const btn = document.querySelector(".nav-button")
    // make btn clickable
    btn.addEventListener("click", function() {
        if( nav.classList.contains("open") ) {
            nav.classList.remove("open")
        }
        else {
            nav.classList.add("open")
        }
    })
}

window.addEventListener("load", onPageLoad )