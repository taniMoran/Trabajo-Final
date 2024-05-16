let calabazaBTN = document.getElementById("calabaza");
let ImperialBTN = document.getElementById("Imperial");

let ColorMarronBTN = document.getElementById("Color_Marron");
let ColorNegroBTN = document.getElementById("Color_Negro");

let PlateadoBTN = document.getElementById("Color_Plateado");
let DoradoBTN = document.getElementById("Color_Dorado");

let imgchange = document.getElementById("img_mate_0");

var BLcalabaza = true;
var BLImperial = false;
var BLColorMarron=false;
var BLColorNegro=false;
///////////////////////////////////// TIPO DE MATE /////////////////////////////////
calabazaBTN.onclick = function(){
    if(BLcalabaza = true){
        imgchange.src="./imagenes/Mates/Mate_0.png";
        BLImperial = false;
    }
}
ImperialBTN.onclick=function() {
    if(BLImperial=true){
        imgchange.src="./imagenes/Mates/Mate_B0.png";
        BLcalabaza = false;
    }
}
/////////////////////////////////// COLOR DE MATE /////////////////////////////////
ColorMarronBTN.onclick=function(){
    BLColorMarron= true
    BLColorNegro=false;

    if(BLcalabaza == true){
        imgchange.src="./imagenes/Mates/Mate_A.png";
    }
    if(BLImperial == true){
        imgchange.src="./imagenes/Mates/Mate_B1.png"
    }
}
ColorNegroBTN.onclick=function(){
    BLColorNegro=true;
    BLColorMarron= false;

    if(BLcalabaza == true){
        imgchange.src="./imagenes/Mates/Mate_C.png";
    }
    if(BLImperial == true){
        imgchange.src="./imagenes/Mates/Mate_B2.png"
    }
}
//////////////////////////////////// VIROLA DE MATE /////////////////////////////////
PlateadoBTN.onclick=function(){
    if(BLcalabaza == true & BLColorMarron == true){
        imgchange.src="./imagenes/Mates/Mate_A.png";
    }
    else if(BLcalabaza == true & BLColorNegro == true){
        imgchange.src="./imagenes/Mates/Mate_C.png";
    }

    if(BLImperial == true & BLColorMarron == true){
        imgchange.src="./imagenes/Mates/Mate_B1.png";
    }
    else if(BLImperial == true & BLColorNegro == true){
        imgchange.src="./imagenes/Mates/Mate_B2.png";
    }
}
DoradoBTN.onclick=function(){
    if(BLcalabaza == true & BLColorMarron == true){
        imgchange.src="./imagenes/Mates/Mate_B.png";
    }
    else if(BLcalabaza == true & BLColorNegro == true){
        imgchange.src="./imagenes/Mates/Mate_D.png";
    }
    if(BLImperial == true & BLColorMarron == true){
        imgchange.src="./imagenes/Mates/Mate_B3.png";
    }
    else if(BLImperial == true & BLColorNegro == true){
        imgchange.src="./imagenes/Mates/Mate_B4.png";
    }
}