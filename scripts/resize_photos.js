
var photos = document.querySelector('.photos');
var photos__column = document.querySelector('.photos__column');
var images = photos__column.getElementsByTagName("img");

function toBigWithoutGrid() {
    photos.style.gridTemplateColumns = '33.33% 33.33% 33.33%';
    for (var i = 0; i < images.length; i++) {
        images[i].style.margin = '-2px';
    }
}

function toBigGrid() {
    photos.style.gridTemplateColumns = '32% 32% 32%';
    photos.style.justifyContent = 'space-around';
    for (var i = 0; i < images.length; i++) {
        images[i].style.margin = '4px';
    }
}

function toSmallWithoutGrid() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.margin = '-2px';
    }
}

function toSmallGrid() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.margin = '4px 20px';
    }
}

// function resize() {
//     if (window.innerWidth > 600) {
//         if (!document.querySelector('.grid')) {
//             toBigWithoutGrid();
//         }
//         else {
//             toBigGrid();
//         }
//     }
//     else {
//         if (!document.querySelector('.grid')) {                   
//             toSmallWithoutGrid();
//         }
//         else {
//             toSmallGrid();
//         }
//     }
// }