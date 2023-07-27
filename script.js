let images = []
for (let i = 1; i <= 605; i++) {
    let paddedNumber = i.toString().padStart(3, '0');
    images.push(`../width_1260/page${paddedNumber}.png`)
}

function searchPageNumber(pagesArray, targetPage) {
    for (let i = 0; i < pagesArray.length; i++) {
        if (i === targetPage) {
            return i - 1; 
        }
    }
    return -1; 
}

function handleSearch() {
    const pageNumber = document.getElementById('inputValue').value;
    const number = parseInt(pageNumber);
    const foundPageIndex = searchPageNumber(images, number);
    if (foundPageIndex !== -1) {
        document.getElementById('slide').src = images[foundPageIndex];
        document.getElementById('page').innerText = `page ${foundPageIndex + 1}`;
    } else {
        console.log(`Page ${foundPageIndex} is not found in the array.`);
    }
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

document.getElementById("slider").addEventListener("click", function (e) {
    const modal = `<div id="modal" class="modal">
        <p id="modal-text" class="modal-text">start/left: ${e.clientX} | top: ${e.clientY}</p>
    </div>`
    const rootEl = document.getElementById('modal-div')
    if (rootEl.children.length > 0) {
        rootEl.removeChild(rootEl.firstElementChild)
    }
    else {
        rootEl.innerHTML = modal
    }
});

