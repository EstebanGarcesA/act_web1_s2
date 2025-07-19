let a = 10;
let b = 2;
let operador = '*a';   // puede ser + - * /

if (operador === '*'){
    console.log(a*b);
} else if (operador === '+'){
    console.log(a+b);
} else if (operador === '-'){
    console.log(a-b);
}else if (operador === '/'){
    if (b === 0){
        console.log("Indeterminado");
    } else {
        console.log(a/b);
    }
}else {
    console.log("Operador no valido");
}