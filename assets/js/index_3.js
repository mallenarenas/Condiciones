button = document.querySelector('#button');
button.addEventListener("click", ()=>{
    hundred = document.querySelector('#hundred');
    ten = document.querySelector('#ten');
    unit = document.querySelector('#unit');
    password = hundred.value+ten.value+unit.value;
    message = document.querySelector('.message');
    if (password == 911){
        message.innerHTML = 'password 1 correcto'
    }
    else if (password == 714){
        message.innerHTML = 'password 2 correcto'
    }
    else{
        message.innerHTML = 'password incorrecto'
    }
})