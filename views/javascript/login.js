
form_login.addEventListener("submit", e => {
    e.preventDefault()

    const form = new URLSearchParams(Object.fromEntries(new FormData(e.target))).toString()

    fetchApi('guia','login',`${form}`).then(response=>{
        
        console.log(response)
        // si el logueo es invalido
        if(response.error){
            // muestra mensaje de error
            msg_error.innerHTML=response.error
            msg_error.style.display="block"
        }
        // si el logueo es valido
        else{
            // lo redirecciona al panel
            window.location.href='./panel'
        }
    })
    
})
