$(document).ready(function() {
    
    let calabazaBtns = document.getElementsByClassName("boton-calabaza");
    let imperialBtns = document.getElementsByClassName("boton-imperial");

    // Seleccionar el primer botón de cada tipo
    let primerCalabazaBtn = calabazaBtns[0];
    let primerImperialBtn = imperialBtns[0];

    let imgchange = document.getElementById("img_mate_0");

    var BLcalabaza = true;
    var BLImperial = false;

    ///////////////////////////////////// TIPO DE MATE /////////////////////////////////////
    primerCalabazaBtn.onclick = function() {
        if (BLcalabaza == true) {
            imgchange.src = "./imagenes/Mates/Mate_0.png";
            BLImperial = false;
        }
    }

    primerImperialBtn.onclick = function() {
        if (BLImperial == true) {
            imgchange.src = "./imagenes/Mates/Mate_B0.png";
            BLcalabaza = false;
        }
    }

    /////////////////////////////////// COLOR DE MATE /////////////////////////////////////
    ColorMarronBTN.onclick = function(){
        BLColorMarron = true;
        BLColorNegro = false;

        if(BLcalabaza == true){
            imgchange.src = "./imagenes/Mates/Mate_A.png";
        }
        if(BLImperial == true){
            imgchange.src = "./imagenes/Mates/Mate_B1.png";
        }
    }
    ColorNegroBTN.onclick = function(){
        BLColorNegro = true;
        BLColorMarron = false;

        if(BLcalabaza == true){
            imgchange.src = "./imagenes/Mates/Mate_C.png";
        }
        if(BLImperial == true){
            imgchange.src = "./imagenes/Mates/Mate_B2.png";
        }
    }
    //////////////////////////////////// VIROLA DE MATE /////////////////////////////////////
    PlateadoBTN.onclick = function(){
        if(BLcalabaza == true && BLColorMarron == true){
            imgchange.src = "./imagenes/Mates/Mate_A.png";
        }
        else if(BLcalabaza == true && BLColorNegro == true){
            imgchange.src = "./imagenes/Mates/Mate_C.png";
        }

        if(BLImperial == true && BLColorMarron == true){
            imgchange.src = "./imagenes/Mates/Mate_B1.png";
        }
        else if(BLImperial == true && BLColorNegro == true){
            imgchange.src = "./imagenes/Mates/Mate_B2.png";
        }
    }
    DoradoBTN.onclick = function(){
        if(BLcalabaza == true && BLColorMarron == true){
            imgchange.src = "./imagenes/Mates/Mate_B.png";
        }
        else if(BLcalabaza == true && BLColorNegro == true){
            imgchange.src = "./imagenes/Mates/Mate_D.png";
        }
        if(BLImperial == true && BLColorMarron == true){
            imgchange.src = "./imagenes/Mates/Mate_B3.png";
        }
        else if(BLImperial == true && BLColorNegro == true){
            imgchange.src = "./imagenes/Mates/Mate_B4.png";
        }
    };
});