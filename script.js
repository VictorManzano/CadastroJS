
const imagens = [
    'imagens/1.webp',
    'imagens/2.webp',
    'imagens/3.webp',
    'imagens/5.webp',
    'imagens/6.webp',
    'imagens/7.webp',
    'imagens/9.webp',
    'imagens/13.webp',
    'imagens/14.webp',
    'imagens/15.webp',
    'imagens/16.webp',
    'imagens/17.webp',
    'imagens/18.webp',
    'imagens/19.webp',
    'imagens/20.webp',
    'imagens/21.webp',
    'imagens/22.webp',
    'imagens/23.webp',
    'imagens/24.webp',
    'imagens/25.webp',
    'imagens/26.webp',
    'imagens/27.webp',
    'imagens/28.webp',
    'imagens/29.webp',
    'imagens/30.webp',
    'imagens/31.webp',
    'imagens/32.webp',
    'imagens/33.webp',
    'imagens/34.webp',
    'imagens/35.webp',
    'imagens/36.webp',
    'imagens/37.webp',
    'imagens/38.webp',
    'imagens/39.webp',
    'imagens/40.webp',
    'imagens/41.webp',
    'imagens/42.webp',
    'imagens/43.webp',
    'imagens/44.webp',
    'imagens/45.webp',
    'imagens/46.webp',
    'imagens/47.webp',
    'imagens/48.webp',
    'imagens/49.webp',
    'imagens/50.webp',

];



const imageContainer = document.querySelector('.image-container');
let currentIndex = 0;

let intervalID;

function changeBackgroundImage() {
    if (window.innerWidth < 700) {
        document.body.style.backgroundImage = `url(${imagens[currentIndex]})`;

        imageContainer.style.backgroundImage = 'none'; 
    } else {
        
        imageContainer.style.backgroundImage = `url(${imagens[currentIndex]})`;
        document.body.style.backgroundImage = 'none'; 
    }

    currentIndex = (currentIndex + 1) % imagens.length;
}



function resetInterval() {
    clearInterval(intervalID); 
    currentIndex = 0; 
    intervalID = setInterval(changeBackgroundImage, 5000);
}

changeBackgroundImage();
intervalID = setInterval(changeBackgroundImage, 5000);


