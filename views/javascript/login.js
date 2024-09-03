
document.querySelector("#btn-login").addEventListener("click", element => {

    element.preventDefault()

    let carnet = document.querySelector("#carn").value
    let dni = document.querySelector("#dni").value

    fetchApi('guia','login',`carnet=${carnet}&dni=${dni}`).then(response=>{
        
        console.log(response)
        // si el logueo es invalido
        if(response.error){
            // muestra mensaje de error
            document.getElementById('msg_error').innerHTML=response.error
        }
        // si el logueo es valido
        else{
            // lo redirecciona al panel
            window.location.href='./panel'
        }
    })
    
})