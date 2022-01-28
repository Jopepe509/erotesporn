const button = document.querySelector('button')
const popup = document.querySelector('popup-wrapper')
const closeButton = document.querySelector('popup-close')

button.addEventListener('click', ()=> {
    popup.style.display = 'block'
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
});

let selectEl = document.getElementsByTagName('select');

selectEl[0].addEventListener('change', function() {
    location.href=this.value;
});
var figure = $(".videos1").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}
function thanks() {
    alert("Sua mensagem foi enviada e recebida com sucesso");
}
function contato() {
    alert("Sua mensagem foi enviada e recebida com sucesso");
}