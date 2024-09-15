function cambiarColor(color){
    document.body.style.backgroundColor= color;
}
document.getElementById('square1').addEventListener('click', function(){
cambiarColor('#FF5733');
})

document.getElementById('square2').addEventListener('click', function(){
    cambiarColor('#33FF57');
})

document.getElementById('square3').addEventListener('click', function(){
cambiarColor('#3357FF');
})