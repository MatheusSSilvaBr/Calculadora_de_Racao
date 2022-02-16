let inputPeso = document.getElementById("peso");
let inputTempo = document.getElementById("tempo");
let inputEstagio = document.getElementById("estagio");
let container = document.getElementsByClassName("container");
let hpeso = document.getElementById("hpeso");
let htempo = document.getElementById("htempo");
let hbutton = document.getElementById("hbutton");
let hreload = document.getElementById("reload");

let proximo = document.getElementById("proximo");

let resultado = document.getElementById("resultado");

function mostrar(){
    switch(inputEstagio.value) {
        case "filhote":
            hpeso.style.display = "block";
            htempo.style.display = "block";
            proximo.style.display = "none";
            break;
        case "adulto":
            hpeso.style.display = "block";
            proximo.style.display = "none";
            break;


    }

    hbutton.style.display = "block";

}

function calcular(){
    let peso = inputPeso.value;
    let tempo = inputTempo.value;
    let estagio = inputEstagio.value;

    let qdtracao = verificador(estagio, peso, tempo);

    resultado.innerHTML = "<p>"+ qdtracao + " que seu cachoro precisa para crescer sáudavel.</p>";
    resultado.innerHTML += "<p>Para maiores duvidas procure um profissional!</p>";

    hbutton.style.display = "none";
    hreload.style.display = "block";


}

function reload(){
    location.reload(); 
}

//Verificar se é adulto ou filhote

function verificador(estagio, peso, tempo){
    if (estagio = "filhote"){
        return qualfilhote(peso, tempo)
    }else{
        return adulto(peso)
    }
}

//Calculo para Ração de filhotes
function qualfilhote(peso, tempo){
    if (peso < 4){
        return filhote1(tempo);
    } else if (peso < 7){
        return filhote2(tempo) 
    } else if(peso < 12){
        return filhote3(tempo)
    } else if(peso < 23){
        return filhote4(tempo)
    }else{
        return filhote5(tempo)
    }
}


function filhote1(tempo){
    if(tempo < 80){
        return "De 77 a 128g/dia"
    } else if (tempo < 180){
        return "De 68 a 112g/dia"
    } else{
        return "De 58 a 96g/dia"
    }
}

function filhote2(tempo){
    if(tempo < 80){
        return "De 128 a 179g/dia"
    } else if (tempo < 180){
        return "De 112 a 156g/dia"
    } else{
        return "De 96 a 134g/dia"
    }

}

function filhote3(tempo){
    if(tempo < 80){
        return "De 179 a 285g/dia"
    } else if (tempo < 180){
        return "De 156 a 249g/dia"
    } else{
        return "De 134 a 214g/dia"
    }

}

function filhote4(tempo){
    if(tempo < 80){
        return "De 285 a 450g/dia"
    } else if (tempo < 180){
        return "De 249 a 394g/dia"
    } else{
        return "De 214 a 338g/dia"
    }

}

function filhote5(tempo){
    if(tempo < 80){
        return "De 450 a 540g/dia"
    } else if (tempo < 180){
        return "De 394 a 473g/dia"
    } else{
        return "De 338 a 405g/dia"
    }

}

function adulto(peso){
    if (peso < 3){
        return  "De 63 a 107g/dia"
    } else if (peso < 4){
        return  "De 107 a 174g/dia" 
    } else if(peso < 6){
        return  "De 174 a 252g/dia"
    } else if(peso < 9){
        return  "De 252 a 379g/dia"
    }else{
        return  "De 379 a 455g/dia"
    }
}
