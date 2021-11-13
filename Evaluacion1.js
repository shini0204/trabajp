console.log(`Elija una opcion de las siguiente guiandose por el numero, las opciones son las siguientes:
1-Suma.
2-Resta.
3-Multipicacion.
4-Divicion.
5-Raiz cuadrada.
6-Formula general.
7-bimonio al cuadrado perfecto`);

var op= parseInt(prompt("Seleccione una opcion:"));

switch (op){
    case 1:
        var num1= parseInt(prompt("Coloque el primer numero"));
        var num2= parseInt(prompt("Coloque el segundo numero"));
            function resultadoSuma(){
                var suma= num1+parseInt(num2);
                console.log(`${suma}`);
            }
        resultadoSuma();
    break;
    
    case 2:
        var num1= parseInt(prompt("Coloque el primer numero"));
        var num2= parseInt(prompt("Coloque el segundo numero"));
            function resultadoResta(){
                var resta=num1-parseInt(num2);
                console.log(`${resta}`);
            }
        resultadoResta();
    break
    case 3:
        var num1= parseInt(prompt("Coloque el primer numero"));
        var num2= parseInt(prompt("Coloque el segundo numero"));
            function resultadoMultiplicacion(){
                var Multipicacion=num1 * parseInt(num2);
                console.log(`${Multipicacion}`)
            }
        resultadoMultiplicacion();
    break;
    case 4:
        var num1= parseInt(prompt("Coloque el primer numero"));
        var num2= parseInt(prompt("Coloque el segundo numero"));
        function resultadoDivicion(){
            var divicion=num1/parseInt(num2);
            if(num2==0){
                console.log("no se puede dividir un numero por 0");
            }
            else{
                console.log(`${divicion}`);
            }
        }
        resultadoDivicion();
    break;
    case 5:
        var num1 = parseInt(prompt("introdusca un numero"));
        function resultadoRaiz(){ 
            var Raiz= Math.sqrt(num1);
            console.log(`${Raiz}`);
        }
        resultadoRaiz();
    break;
    case 6:
        var a=parseInt(prompt("coloque el valor de a"));
        var b=parseInt(prompt("coloque el valor de b"));
        var c=parseInt(prompt("coloque el valor de c"));
        function resultadoFG(){
            var rr=(b*b)-4*(a*c);
            if(rr>0){
                R1=(-b+Math.sqrt(rr))/2*a;
                R2=(-b-Math.sqrt(rr))/2*a;
                console.log("La ecuacion tiene dos posibles resultados");
                console.log(`R1=${R1}`);
                console.log(`R2=${R2}`);
            }else if(rr==0){
                R1=(-b+Math.sqrt(rr))/2*a;
                console.log("No hay resultado");
                console.log(`R1=${R1}`);
            }else{
                console.log("No hay soluciom");
            }
        }
        resultadoFG();
        break;
        case 7:
            var a=parseInt(prompt("coloque un valor"));
            var b=parseInt(prompt("coloque un valor"));
            function bcp(){
                var r=(a*a)+(2*a*b)+(b+b);
                console.log(`${r}`);
            }
            bcp();
        break;    
     

default: 
      console.log('Opcion no valida');
}
