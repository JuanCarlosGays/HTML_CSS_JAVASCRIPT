let video2=document.querySelector("#historiav");

const iniciarRep=(e)=>{
    video2.play()
    document.querySelector("#duracion").innerText="duración: "+video2.duration.toFixed(2)/60+"min" ;
}

const pausarRep=()=>{
    video2.pause()
}


const irAlOrigen=document.getElementsByClassName('animacion')[0];


irAlOrigen.addEventListener("click",function(){(window.location.href="index.html");
});