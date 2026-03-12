console.log("\n== 1) Tipos primitivos ==");

const texto = "Olá mundo";
const numero = 42;
const verdadeiro = true;
let indefinido;
const nulo = null;
const grande = 9007199254740991n;
const simbolo = Symbol("id");

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof verdadeiro);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof grande);
console.log(typeof simbolo);



console.log("\n== 2) BigInt e Symbol ==");

const numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande);
console.log(typeof numeroGrande);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
console.log(typeof id1);



console.log("\n== 3) Operadores matemáticos, lógicos e comparação ==");

console.log(5 + 3);
console.log(10 * 2);

console.log(true && false);
console.log(true || false);

console.log(10 > 5);
console.log(5 == "5");
console.log(5 === "5");



console.log("\n== 4) Concatenação e conversão dinâmica ==");

console.log(2 + "2");
console.log(2 + (+"2"));

console.log("Idade: " + 25);



console.log("\n== 5) Escopo léxico e blocos {} ==");

{
    const dentroBloco = "Estou dentro do bloco";
    console.log(dentroBloco);
}

const fora = "Variável externa";

{
    console.log(fora);
}

if (true) {
    var vazou = "Var escapou do bloco";
}

console.log(vazou);



console.log("\n== 6) Shadowing com const ==");

const bloco = "valor";

if (true) {

    console.log(bloco);

    {
        const bloco = "outro valor";
        console.log(bloco);
    }

    console.log(bloco);
}

console.log(bloco);



console.log("\n== 7) Imutabilidade de primitivos ==");

let palavra = "javascript";

palavra.toUpperCase();
console.log(palavra);

palavra = palavra.toUpperCase();
console.log(palavra);



console.log("\n== 8) Assincronismo com setTimeout ==");

console.log("Explicação: setTimeout entra na fila do event loop e roda depois do código atual.");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("Timeout 0ms");
}, 0);

setTimeout(() => {
    console.log("Timeout 100ms");
}, 100);

console.log("Fim do código");