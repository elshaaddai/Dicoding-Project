const images = ['img/baruskali.jpg','img/baru2.jpeg','img/baru3.jpeg'];

let currentIndex = 0;
const header = document.querySelector('header');

function changeHeaderImage(){
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    header.style.backgroundImage = `url(${images[currentIndex]})`;
}
setInterval(changeHeaderImage, 2000)