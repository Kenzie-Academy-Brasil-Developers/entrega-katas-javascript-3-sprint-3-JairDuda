function showResults (valor){

    let newElement = document.createElement("div");
    newElement.className = "divInterna";
    let newText = document.createTextNode("Resposta:  "  + valor)
    newElement.appendChild(newText)
    let destino = document.getElementById("d1")
    destino.appendChild(newElement)

    
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    
    let arrayValores = [];
    for(let i = 1 ; i <= 25; i++){
       arrayValores.push(" "+i)
       
    }
    
    return arrayValores
} 

showResults(kata1());


function kata2() {
    let arrayValores = [];
    for(let i = 25 ; i >= 1; i--){
       arrayValores.push(" " + i)
    }
    return arrayValores;
}

showResults(kata2());

function kata3() {
    let arrayValores = [];
    for(let i = -1 ; i >= -25; i--){
       arrayValores.push(" " + i)
    }
    return arrayValores;
}

showResults(kata3()); 

function kata4() {
    let arrayValores = [];
    for(let i = -25 ; i <= -1; i++){
        arrayValores.push(" " + i)
    }
    return arrayValores;
}

showResults(kata4()); 

function kata5() {
    let arrayValores = [];
    for(let i = 25 ; i >= -25; i--){
        if(i % 2 !== 0){
            arrayValores.push(" " + i)
        }
    }
    return arrayValores
}
showResults(kata5());


function kata6() {
    let arrayValores = [];
    for(let i = 1 ; i <= 100; i++){
        if(i % 3 === 0){
            arrayValores.push(" " + i)
        }
    }
    return arrayValores
}

showResults(kata6()) 

function kata7() {
    let arrayValores = [];
    for(let i = 1 ; i <= 100; i++){
        if(i % 7 === 0){
            arrayValores.push(" " + i)
        }
    }
    return arrayValores
}

showResults(kata7()) 

function kata8() {
    let arrayValores = [];
    for(let i = 100 ; i >= 1; i--){
        if(i % 3 === 0 || i % 7 === 0){
            arrayValores.push(" " + i)
        }
    }
    return arrayValores}

    showResults(kata8()) 

function kata9() {
    let arrayValores = [];
    for(let i = 1 ; i <= 100; i++){
        if(i % 2 !== 0 && i % 5 === 0){
            arrayValores.push(" " + i)
        }
    }
    return arrayValores
}

showResults(kata9()) 

function kata10() {
   return sampleArray
}

showResults("kata 10: " + kata10()) 

function kata11() {
    let arrayValores = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 === 0){
            arrayValores.push(sampleArray[i])
        }
        
        
    }
    return arrayValores
}

showResults(kata11());

function kata12() {
    let arrayValores = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 !== 0){
            arrayValores.push(sampleArray[i])
        }
        
        
    }
    return arrayValores
}

showResults(kata12());

function kata13() {
    let arrayValores = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 8 === 0){
            arrayValores.push(sampleArray[i])
        }
        
        
    }
    return arrayValores
}

showResults(kata13());

function kata14() {
    let arrayValores = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] > 0){
            arrayValores.push(sampleArray[i]*sampleArray[i])
        }
        
        
    }
    return arrayValores
}

showResults(kata14());


function kata15() {
    let soma = 0;
    for(let i = 1; i<=20; i++){
        soma = soma + i;
    }
    return soma
}

showResults("kata 15: " + kata15());

function kata16() {
    let soma = 0;
    for(let i = 0; i< sampleArray.length; i++){
        soma += sampleArray[i]
    }

    return soma
}

showResults(kata16());

function kata17() {
    menorValor = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] < menorValor) {
            menorValor = sampleArray[i]
        }
    }
    return menorValor
}
showResults(kata17());

function kata18() {
    maiorValor = sampleArray[0]
    for (let i = 0; i < sampleArray.length; i++) {
        if (sampleArray[i] > maiorValor) {
            maiorValor = sampleArray[i]
        }
    }
    return maiorValor

    }


    showResults(kata18());

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    
        for(let i = 0; i<20; i++){
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = 100 + "px";
        newElement.style.height = 20 + "px"
        newElement.style.background = "gray"; 
        newElement.style.margin = 10 + "px"
        newElement.style.display = "inline-block"
        let destination = document.getElementById("d2");
        destination.appendChild(newElement);
        }
}

kataBonus1()

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    for(let i = 0; i<sampleArray.length; i++){
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px"
        newElement.style.background = "gray"; 
        newElement.style.margin = 10 + "px"
        newElement.style.display = "inline-block"
        let destination = document.getElementById("d4");
        destination.appendChild(newElement);
        }
}

kataBonus3()

function kataBonus4() {
    for(let i = 0; i<sampleArray.length; i++){
        let newElement = document.createElement("div");
        newElement.className = "bar";
        newElement.style.width = sampleArray[i] + "px";
        newElement.style.height = 20 + "px"
        newElement.style.background = "gray"; 
        newElement.style.margin = 10 + "px"
        newElement.style.display = "inline-block"
        let destination = document.getElementById("d5");
        destination.appendChild(newElement);
        if(i % 2 === 0){
            newElement.style.background = "red"; 
        }
    }
}

kataBonus4()

function kataBonus5() {
    
    for(let i = 0; i<sampleArray.length; i++){
        
            let newElement = document.createElement("div");
            newElement.className = "bar";
            newElement.style.width = sampleArray[i] + "px";
            newElement.style.height = 20 + "px"
            newElement.style.background = "gray"; 
            newElement.style.margin = 10 + "px"
            newElement.style.display = "inline-block"
            let destination = document.getElementById("d6");
            destination.appendChild(newElement);
            if(sampleArray[i] % 2 === 0){
                newElement.style.background = "red"; 

            } 
    }    
}

kataBonus5()
