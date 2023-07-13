let images = []
for (let i = 1; i <= 604; i++) {
    let paddedNumber = i.toString().padStart(3, '0');
    images.push(`../width_1260/page${paddedNumber}.png`)
    console.log(images)
}
let i = 0;
function mySlide(param) {

    if (param === 'next') {
        i++;
        if (i === images.length) { i = images.length - 1; }
        document.getElementById('page').innerText = `page ${i + 1}`
        console.log(i + 1)
    } else {
        i--;
        if (i < 0) { i = 0; }
        document.getElementById('page').innerText = `page ${i + 1}`
    }
    document.getElementById('slide').src = images[i];
}

const element = document.getElementById("slide");
element.addEventListener("click", function (e) {
    console.log(e)
    const modal = `<div id="modal" class="modal">
        <p id="modal-text" class="modal-text">X: ${e.clientX} | Y: ${e.clientY}</p>
    </div>`
    const rootEl = document.getElementById('modal-div')
    console.log(rootEl.children)
    if (rootEl.children.length > 0) {
        rootEl.removeChild(rootEl.firstElementChild)
    }
    else {
        rootEl.innerHTML = modal
    }
});

