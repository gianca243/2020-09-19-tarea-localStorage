const formRegistro = document.getElementById('formRegistro')

let listaDeUsuario = [];


formRegistro.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputCharacter = document.getElementById('avatar').value
    const inputName = document.getElementById('name').value
    const inputCel = document.getElementById('cel').value
    const inputEmail = document.getElementById('email').value

    const usuario = {
        personaje: inputCharacter,
        nombre: inputName,
        celular: inputCel,
        correo: inputEmail
    }
    guardarEnStorage(usuario)
})

const guardarEnStorage =  (usuario)=>{
    if(localStorage.getItem('usuarios') == null){
            listaDeUsuario.push(usuario)
            const usuariosString = JSON.stringify(listaDeUsuario)
            localStorage.setItem('usuarios', usuariosString)
    }else{
        listaEnStorage = JSON.parse(localStorage.getItem("usuarios"))
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuariosString)
    }
}