// Scroll to element

function scroll() {
    var section = document.getElementById("section-two");
    section.scrollIntoView({behavior: 'smooth', block: 'center'});
}

document.getElementById("button-scroll").addEventListener("click", scroll);
