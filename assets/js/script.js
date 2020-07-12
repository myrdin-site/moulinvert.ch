// Scroll to element

function scroll() {
    var section = document.getElementById("section-two");
    section.scrollIntoView();
}

document.getElementById("button-scroll").addEventListener("click", scroll);
