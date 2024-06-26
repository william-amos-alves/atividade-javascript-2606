// 1. Crie uma função para calcular e retorna o IMC, 
// e outra função que recebe o valor de IMC e indica o status no terminal.
let peso = 64.0;
let altura = 1.65

function media(peso, altura){
    let imc = peso/( altura * altura);
    console.log(`O IMC é ${imc}`);
    return imc;
}

let mediaImc = media(64.0,1.65);

function statusImc(imc){
    if( imc < 18.5){
       return console.log("Baixo peso");
    } else if(imc >= 18.5 && imc <= 24.99){
       return console.log("Peso Normal");
    } else if( imc >= 25 && imc <= 29.99){
       return console.log("Sobrepeso");
    }
}

let result = statusImc(mediaImc);



// 2. Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function converterParaPorcentagem(numero){
        let porcentagem = numero*100 + "%";
        return porcentagem;
}

let p = converterParaPorcentagem(0.45);
console.log(p);





// 3. Crie uma função que recebe um número (PARÂMETRO). 
//E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true

function ehNegativo(num){
    if( num < 0){
        return true;
    }else{
        return false;
    }
}
console.log(ehNegativo(-2));
console.log(ehNegativo(1));



// 4. Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(num){
    for(let c = 1; c <= num; c++){
        console.log(c);
    }
}

contar(10);
contar(4);




// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.


function juntarNome(nome, sobrenome){
    let nomecompleto = console.log(`${nome} ${sobrenome}`);
    return nomecompleto;
}

let nomecompleto = juntarNome("William","Amós");



// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function calcularAreaCirculo(raio){
    const PI = 3.14
    let= PI * raio * raio;

    return area;
}

console.log(calcularAreaCirculo(8));



// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function mostraNivelCirculo(area){
    if(area >= 1 && area <= 20){
        console.log("Nivel I");
    }else if(area >= 21 && area <= 40){

    }else{
        console.log("Nivel inválido");
    }
}

let areaCirculo1 = mostraNivelCirculo(3);
mostraNivelCirculo(areaCirculo1);


// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.

function stringMinuscula(palavra){
    return palavra.toLowerCase();
}

console.log(stringMinuscula("FALA"));
console.log(stringMinuscula("HTML"));


// 9. Escreva uma função que receba uma string
// e um caractere e retorne o número de ocorrências desse caractere na string.

function contarCaracteres(palavra, letra){
    let ocorrencia = 0;
    for( let i = 0; i < palavra.lenght; i++){
        if( palavra[i] === letra){
            ocorrencia++;
        }
    }

    return ocorrencia;
}

console.log(contarCaracteres("FALA", "H"));