//Determinar si la persona es mayor de edad
let edad;
function DeterminarEdad(){
    edad=document.getElementById('Edad').value;
    if (edad < 18){
        console.log('La persona es menor de edad');
        alert('La persona es menor de edad');
    }else{
        console.log('La persona es mayor de edad');
        alert('La persona es mayor de edad');
    }
}

//Tabla de multiplicar del 5
document.write('La tabla de multiplicar del 5 es la siguiente: ');
console.log('La tabla de multiplicar del 5 es la siguiente:');
for(var i=1; i<=12; i++){
    document.write(i*5+' ');
    console.log(i*5);
}

//Mostrar los meses del año numerados del 1 al 12
console.log('Los meses del año son:');
document.write('Los meses del año son: ')
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nomviembre', 'Diciembre'];
meses.forEach(function(mes, index){
    console.log(`${index + 1}. ${mes}`);
    document.write(`${index + 1}. ${mes}, `);
})

//Definiendo qué tan buena fue la calificación del estudiante
let calificacion;
function ComoSali(){
    calificacion=document.getElementById('Nota').value;
    if(calificacion==10){
        console.log('Su nota fue excelente');
        alert('¿Te sacaste 10? Wow!');
    }else{
        if(calificacion<10 && calificacion>=7){
            console.log('Su nota fue buena');
            alert('¡Obtuviste una buena nota!');
        }
        if(calificacion<7 && calificacion>=0){
            console.log('Usted fue reprobado');
            alert('Hijole... Tendrás que esforzarte más para la próxima... No pasaste :(');
        }
    }
}

//Calculadora básica
        var opciones="suma";
        var Numero1=2;
        var Numero2=3;
        var Resultado=0;

        switch(opciones){

            case "suma":

                Resultado=Numero1+Numero2;
                console.log('El resultado de la suma es: ' + Resultado);
                break;

            case "resta":
            
                Resultado=Numero1-Numero2;
                console.log('El resultado de la resta es: ' + Resultado);
                break;

            case "multiplicacion":
            
                Resultado=Numero1*Numero2;
                console.log('El resultado de la multiplicación es: ' + Resultado);
                break;

            case "division":
            
                Resultado=Numero1/Numero2;
                console.log('El resultado de la división es: ' + Resultado);
                break;
        }

//NOTA: Los resultados de "Comprobar Edad" y de "Revisar Nota" se muestran al final de la consola.