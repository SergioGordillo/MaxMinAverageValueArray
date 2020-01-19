let array=[1,2,3,4,5];
var resultado=""; 

function calcular(){
    let mayor=Math.max.apply(null, array); //Calcula el mayor del array
    let menor=Math.min.apply(null, array); //Calcula el menor del array

    resultado="El mayor número del array es " + mayor + " y el menor número del array es " + menor + " . La media de los números que componen el array es de ";
    resultado+=calcularMedia(); 
    resultado+="."; 
    output.innerHTML=resultado;
}

function calcularMedia(){

    var tamanioArray=array.length; //Saco el tamaño del array
    var sumatorioNumeros=0; 
    var media=0;

    for (let i = 0; array[i] <= array.length; i++) {
        var sumatorioNumeros=sumatorioNumeros+array[i];
        media=sumatorioNumeros/tamanioArray;
        
    }

    return media; 
}


