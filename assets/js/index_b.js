button = document.querySelector("#button").addEventListener("click", ()=>{
    sticker1 = document.querySelector('#st1');
    sticker2 = document.querySelector('#st2');
    sticker3 = document.querySelector('#st3');
    total = Number(sticker1.value)+Number(sticker2.value)+Number(sticker3.value);
    message = document.querySelector('p .message');
    if ( total >10 ){
        message.innerHTML = 'Llevas demasiados stickers'
        }
    else{
        message.innerHTML = 'Llevas '+ total +' stickers'
    }    
})