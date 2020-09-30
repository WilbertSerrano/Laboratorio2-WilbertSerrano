//Verificar edad
let edad;
function VerificarEdad(){
    if(edad >= 18){
        console.log('Eres mayor de edad');
    }else{
        console.log('Eres menor de edad');
    }
}
VerificarEdad();

//Tabla de multiplicar del 5
console.log('La tabla de multiplicar del 5 es la siguiente:');
for(var i=1; i<=12; i++){
    console.log(i*5);
}

//Mostrar los meses del año numerados del 1 al 12
console.log('Los meses del año son:');
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nomviembre', 'Diciembre'];
meses.forEach(function(mes, index){
    console.log(`${index + 1}. ${mes}`);
})

//Calificacion
let calificacion;
function ComoSali(){
    if(calificacion==10){
        console.log('Su nota fue excelente');
    }else{
        if(calificacion<10){
            console.log('Su nota fue buena');
        }
        if(calificacion<7){
            console.log('Usted fue reprobado');
        }
    }
}
ComoSali(calificacion=10);

//Calculadora
var opciones='';
switch(opciones){
    case '+':
        function suma(num1, num2){
            const resultado = num1 + num2;
            console.log(`La suma de ${num1} y ${num2} es igual a ${resultado}`);
        }
        suma(1,2);
        break;
    case '-':
        function resta(num1, num2){
            const resultado = num1 - num2;
            console.log(`La resta de ${num1} y ${num2} es igual a ${resultado}`);
        }
        resta(6,1);
        break;
    case '*':
        function multiplicacion(num1, num2){
            const resultado = num1 * num2;
            console.log(`La multiplicación de ${num1} y ${num2} es igual a ${resultado}`);
        }
        multiplicacion(3,5);
        break;
    case '/':
        function division(num1, num2){
            const resultado = num1 / num2;
            console.log(`La división de ${num1} y ${num2} es igual a ${resultado}`);
        }
        division(20,2);
        break;
    default: 
        console.log('Seleccione una operación');
}