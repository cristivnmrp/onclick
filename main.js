function remove(elemento){
    elemento.closest('.boton-definition').remove();
}

document.getElementById('btn').onclick = function() {
    this.textContent = 'Logout';
}
document.getElementById('boton-likes').onclick = function(){
    alert('Ninja was liked');
}