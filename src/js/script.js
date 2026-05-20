
const vinicola = [
    { nome: "Alma Única", tipo: "tinto", safra: 2020, estoque: 15 },
    { nome: "Casa Valduga Chardonnay", tipo: "branco", safra: 2022, estoque: 3 },
    { nome: "Miolo Seleção", tipo: "rosé", safra: 2023, estoque: 8 },
    { nome: "Guatambu Cabernet", tipo: "tinto", safra: 2019, estoque: 2 }
];


function adicionarVinho(nome, tipo, safra, estoque) {
    vinicola.push({ nome, tipo, safra, estoque });
}


function listarVinhos() {
    console.log("--- LISTA COMPLETA DE VINHOS ---");
    vinicola.forEach(vinho => {
        console.log(`Nome: ${vinho.nome} | Tipo: ${vinho.tipo} | Safra: ${vinho.safra} | Estoque: ${vinho.estoque}`);
    });
}

function filtrarEstoqueBaixo() {
    console.log("\n--- VINHOS COM ESTOQUE BAIXO (MENOS DE 5 UNIDADES) ---");
    const estoqueBaixo = vinicola.filter(vinho => vinho.estoque < 5);
    
    estoqueBaixo.forEach(vinho => {
        console.log(`⚠️ ALERTA: ${vinho.nome} possui apenas ${vinho.estoque} unidades.`);
    });
}


function calcularEstoqueTotal() {
    const estoqueTotal = vinicola.reduce((acumulador, vinho) => acumulador + vinho.estoque, 0);
    console.log(`\n📦 Estoque total da vinícola: ${estoqueTotal} garrafas.`);
}


function exibirNomesEmCaixaAlta() {
    console.log("\n--- NOMES DOS VINHOS (CAIXA ALTA) ---");
    const nomesFormatados = vinicola.map(vinho => vinho.nome.toUpperCase());
    
    nomesFormatados.forEach(nome => console.log(`• ${nome}`));
}




adicionarVinho("Salton Intenso", "tinto", 2021, 12);


listarVinhos();
filtrarEstoqueBaixo();
calcularEstoqueTotal();
exibirNomesEmCaixaAlta();