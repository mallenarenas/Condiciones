imagen = document.querySelector('img');
imagen.style.border = '0px '+'solid '+'black';
boton = document.querySelector('#boton');
boton.addEventListener("click" , ()=>{
    if(imagen.style.border =='0px '+'solid '+'black'){
    imagen.style.border ='2px '+'solid '+'red';
    console.log(imagen.style.border);
}
    else {
    imagen.style.border ='0px '+'solid '+'black';
    console.log(imagen.style.border);
}
    })