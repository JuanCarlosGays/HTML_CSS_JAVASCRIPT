let imagen=document.querySelector(".fotoj")
let destino=document.querySelector(".destino");



imagen.addEventListener('dragstart',(event)=>{
    console.log(event.dataTransfer)
    event.dataTransfer.setData("Text")
   
})


destino.addEventListener('dragover',(event)=>{
    event.preventDefault()
})



destino.addEventListener('drop',(event)=>{
    console.log(destino);
    let infoObtenida= event.dataTransfer.getData("Text");
    console.log(infoObtenida);
    destino.innerHTML=`<img src = ${infoObtenida} />`;
    imagen.style.display="none";
    event.dataTransfer.clearData("Text") 
})

