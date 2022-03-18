var nome = window.document.querySelector('#nome')
var okNome = false
let email = document.querySelector('#email')
var okEmail = false
let assunto = document.querySelector('#assunto')
var okAssunto = false
let mapa = document.querySelector('#mapa')

function validarNome(){
    let txtNome = document.getElementById('txtNome')
    if(nome.value.length < 2) {
        //alert('Ola Mundo!!')
        txtNome.innerHTML = 'nome invalido'
        txtNome.style.color = 'red'
        okNome = false
    }else{
        txtNome.innerHTML = 'nome valido'
        txtNome.style.color = 'green'
        okNome = true
    }

}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'email invalido'
        txtEmail.style.color = 'red'
        okEmail = false
    }else {
        txtEmail.innerHTML = 'email valido'
        txtEmail.style.color = 'green'
        okEmail = true
    }

}

function validarAssunto() {
    let txtAssunto =document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande(max 100 caracteres)'
        txtAssunto.style.color = 'red'
        okAssunto = false
    }else {
        txtAssunto.innerHTML = 'Texto valido'
        txtAssunto.style.color = 'green'
        okAssunto = true
    }
}

function enviar() {
    if(okNome == true && okEmail == true && okAssunto == true){
        alert('mensagem enviada com sucesso')
    }else{
        alert('preencha corretamente')
    }
}

function mapaZoom() {
        mapa.style.width = '800px'
        mapa.style.height = '600px'
}
function mapaNormal() {
        mapa.style.width = '250px'
        mapa.style.height = '200px'
}