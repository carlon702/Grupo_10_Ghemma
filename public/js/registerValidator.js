window.onload = function(){
    console.log("estoy eschuchando el form")

    let form = document.querySelector('.register');
   // form.nombre.focus();
   // form.apellido.focus();
   // form.email.focus();
   // form.password.focus();

    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector('#email')
    let password = document.querySelector("#password");
    

    nombre.addEventListener("blur", (e) => {
        let errores = [];
        if(nombre.value.length<2){
            errores.push("Nombre debe tener al menos 2 letras");
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })

    apellido.addEventListener("blur", (e) => {
        let errores = [];
        if(apellido.value.length<2){
            errores.push("Apellido debe tener al menos 2 letras");
            apellido.classList.add("is-invalid");
            apellido.classList.remove("is-valid");
        }else{
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })


    password.addEventListener("blur", (e) => {
        let errores = [];
        if(password.value.length<3){
            errores.push("Password debe tener al menos 3 caracteres");
            password.classList.add("is-invalid");
            password.classList.remove("is-valid");
        }else{
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })


    form.addEventListener("submit", (evento) => {
        let errores = [];
        let nombre = document.querySelector("#nombre");
        let apellido = document.querySelector("#apellido");
        let email = document.querySelector("#email");
        let password = document.querySelector("#password");
        let profileImage = document.querySelector("#profileImage");
        
        if(nombre.value.length <2){
            errores.push("Nombre debe tener al menos 2 letras");
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }
        if(apellido.value.length <2){
            errores.push("Apellido debe tener al menos 2 letras");
            apellido.classList.add("is-invalid");
            apellido.classList.remove("is-valid");
        }else{
            apellido.classList.add("is-valid");
            apellido.classList.remove("is-invalid")
        }
        if(email.value === ""){
            errores.push("Email no puede estar vacio");
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
        }else{
            email.classList.add("is-valid");
            email.classList.remove("is-invalid")
        }
        if(password.value.length <3 ){
            errores.push("Password debe tener al menos 3 caracteres");
            password.classList.add("is-invalid");
            password.classList.remove("is-valid");
        }else{
            password.classList.add("is-valid");
            password.classList.remove("is-invalid")
        }
        if(errores.length > 0){
            evento.preventDefault();
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        }
    })
}