window.onload = function(){

    let form = document.querySelector('.product-form');
    //form.nombre.focus();

    let nombre = document.querySelector("#name");
    let descripcion = document.querySelector('#description');
    let color = document.querySelector('#color');



    nombre.addEventListener("blur", (e) => {
        let errores = [];
        if(nombre.value.length<5){
            errores.push("Nombre debe tener al menos 5 caracteres");
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

    descripcion.addEventListener("blur", (e) =>{
        let errores = [];
        if(descripcion.value.length<20){
            errores.push("Descripcion debe tener al menos 20 caracteres");
            descripcion.classList.add("is-invalid");
            descripcion.classList.remove("is-valid");
        }else{
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");
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
    color.addEventListener("blur", (e) =>{
        let errores = [];
        if(color.value.length<1){
            errores.push("Color debe tener al menos 1 caracter");
            color.classList.add("is-invalid");
            color.classList.remove("is-valid");
        }else{
            color.classList.add("is-valid");
            color.classList.remove("is-invalid");
        }
        if(errores.length > 0){
            let ulError = document.querySelector(".errores");
            ulError.innerHTML === "";
            for (let i = 0; i < errores.length; i++) {
                ulError.innerHTML += "<li>" + errores[i] + "</li>"   
            }
        } else {
            let ulError = document.querySelector(".errores");
            ulError.innerHTML = "";
        }
    })

    form.addEventListener("submit", (evento) => {
        let errores =[];
        let nombre = document.querySelector("#name");
        let descripcion = document.querySelector('#description');
        let color = document.querySelector('#color');
        let precio = document.querySelector('#price');
        let descuento = document.querySelector('#discount');
        
        if(nombre.value === ""){
            errores.push("Nombre no puede estar vacio");
            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");
        }else{
            nombre.classList.add("is-valid");
            nombre.classList.remove("is-invalid");
        }
        if(descripcion.value === ""){
            errores.push("Descripcion no puede estar vacia");
            descripcion.classList.add("is-invalid");
            descripcion.classList.remove("is-valid");
        }else{
            descripcion.classList.add("is-valid");
            descripcion.classList.remove("is-invalid");

        }
        if(color.value===""){
            errores.push("Color no puede estar vacio");
            color.classList.add("is-invalid");
            color.classList.remove("is-valid");
        }else{
            color.classList.add("is-valid");
            color.classList.remove("is-invalid");
        }
        
        if(precio.value === ""){
            errores.push("Precio no puede estar vacio");
            precio.classList.add("is-invalid");
            precio.classList.remove("is-valid");
        }else{
            precio.classList.add("is-valid");
            precio.classList.remove("is-invalid")
        }
        if(descuento.value===""){
            errores.push("Nombre no puede estar vacio");
            descuento.classList.add("is-invalid");
            descuento.classList.remove("is-valid");
        }else{
            descuento.classList.add("is-valid");
            descuento.classList.remove("is-invalid");
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