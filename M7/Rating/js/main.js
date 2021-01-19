function estrella(estrellaNum) {

    //Torno totes les estrelles al color inicial abans de assignar el color de selecció
    elements=document.getElementsByTagName('h1');
    for(let i=0;i<elements.length;i++){
        elements[i].style.color='repowderblue';
    }

    idEstrella='estrella'+estrellaNum; //Recupero l'identificador de l'estrella
    document.getElementById(idEstrella).style.color='red'; //Canvio el color de l'estrella clicada

    //Canvio el color dels elements anteriors a l'estrella clicada
    classGrup='grup'+estrellaNum;
    elementsGrup=document.getElementsByClassName(classGrup);
    for(let i=0;i<elementsGrup.length;i++){
        elementsGrup[i].style.color='red';
    }
}

//Funció del listening del body que assigna el color original a les estrelles
function cos(evt){
    
    const outEl = document.getElementsByTagName("BODY")[0];
    let targetEl = evt.target; //Element clicat 
    do {
        if(targetEl == outEl) {
        //Click a sobre de les estrelles i per tant no es fa res
        return;
        }
        //Em desplaço cap a dalt en el DOM
        targetEl = targetEl.parentNode;
    } while (targetEl);
    //Això correspon al clic a fora de les estrelles     
    elements=document.getElementsByTagName('h1');
    for(let i=0;i<elements.length;i++){
        elements[i].style.color='powderblue';
    }
}

//Listenings del body i de les estrelels
window.addEventListener('click',cos);
document.getElementById('estrella5').addEventListener("click", () => {estrella('5');});
document.getElementById('estrella4').addEventListener("click", () => {estrella('4');});
document.getElementById('estrella3').addEventListener("click", () => {estrella('3');});
document.getElementById('estrella2').addEventListener("click", () => {estrella('2');});
document.getElementById('estrella1').addEventListener("click", () => {estrella('1');});


