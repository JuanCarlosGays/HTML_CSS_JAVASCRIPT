let video2=document.querySelector("#historiav");

const iniciarRep=(e)=>{
    video2.play()
    elVideo=video2.duration/60
    document.querySelector("#duracion").innerText="duración: "+elVideo.toFixed(2)+" min" ;
}

const pausarRep=()=>{
    video2.pause()
}


const irAlOrigen=document.getElementsByClassName('animacion')[0];


irAlOrigen.addEventListener("click",function(){(window.location.href="index.html");
});