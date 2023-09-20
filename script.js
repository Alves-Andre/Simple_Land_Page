function aumentar(){
    var input = document.getElementById("amount")
    if (input.value<99){
        input.value = parseInt(input.value)+1;
    }
}
function diminuir(){
    var input = document.getElementById("amount")
    if (input.value>0){
        input.value = parseInt(input.value)-1;
    }
}
function addCart(){
    
}
function full(objeto){
    var id_imagem = objeto.src.substr(-5, 1);
    var oculto = document.getElementsByClassName("oculto");
    oculto.style.display = 'block';
}