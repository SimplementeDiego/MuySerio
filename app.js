i = 0;
function Navidad(){
    if(i==0){
        document.querySelector('h1').innerHTML = "¡Calculadora de Navidad!";
        document.querySelector('div').innerHTML = "Este año Navidad cae el 25 de diciembre.";
        i++;
    }else{
        if(i==1){
            document.querySelector('div').innerHTML = "Ya te dije cuando cae Navidad, ¿qué más querés?";
        }
    }
}

setTimeout( ()=>{
    if (i==0){
        document.querySelector('h1').innerHTML = "¿Qué esperás?";
    }
}, 10000)

setTimeout( ()=>{
    if (i==0){
        document.querySelector('h1').innerHTML = "¡Calculá!";
    }
}, 20000)

setTimeout( ()=>{
    if (i==0){
        i=2;
        document.querySelector('h1').innerHTML = "¿Sabes qué? Ya no podés calcular.";
    }
}, 30000)

