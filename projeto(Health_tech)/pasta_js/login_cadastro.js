let login= document.querySelector('#login')
let cadastro= document.querySelector('#cadastro')
let btcolor= document.querySelector('.btcolor')
let lembrar= document.querySelector('.lembrar')
let concordo= document.querySelector('.concordo')
let conectarlogin= document.querySelector('.conectar-login')
let conectarcadastro= document.querySelector('.conectar-cadastro')

let btlogin= document.querySelector('#btlogin')
btlogin.addEventListener('click',() =>{
    login.style.display='flex'
    cadastro.style.display= 'none'
    btcolor.style.left='0px'
    concordo.style.display='none'
    conectarlogin.style.display='flex'
    conectarcadastro.style.display= 'none'
    lembrar.style.display= 'flex'
})
let btcadastro= document.querySelector('#btcadastro')
btcadastro.addEventListener('click',() =>{
    login.style.display= 'none'
    cadastro.style.display= 'flex'
    btcolor.style.left='95px'
    conectarlogin.style.display= 'none'
    lembrar.style.display= 'none'
    concordo.style.display= 'flex'
    conectarcadastro.style.display= 'flex'
})

function validacaologin(){
    let email= document.getElementById("emailId")
    if (email.value== ""){
        alert("O 'E-mail' não foi informado")
        email.focus();
    }

    let senha= document.getElementById("senhaId")
    if (senha.value== "" || senha.value.lenght<8 || senha.value.lenght>10){
        alert("a 'Senha' não foi informada ou está incompleta")
        senha.focus();
    }}

function validacaocadastro(){
    let email2= document.getElementById("emailId2")
    if (email2.value== ""){
        alert("O 'E-mail' não foi informado")
        email2.focus();
    }

    let senha1= document.getElementById("senhaId1")
    if (senha1.value== "" || senha1.value.lenght<8 || senha1.value.lenght>10){
        alert("a 'Senha' não foi informada ou está incompleta")
        senha1.focus();
    }
    
    let nome=document.getElementById("nomeId")
    if (nome.value== ""){
        alert("O 'Nome' não foi informado")
        nome.focus();
    }

    let sobrenome=document.getElementById("sobrenomeId")
    if (sobrenome.value== ""){
        alert("O 'sobreome' não foi informado")
        sobrenome.focus();
    }
    
    let senha2=document.getElementById("senhaId2")
    if (senha2.value== "" || senha.value.lenght<8 || senha.value.lenght>10){
        alert("a 'Senha' não foi informada ou está incompleta")
        senha2.focus();
    }
}
