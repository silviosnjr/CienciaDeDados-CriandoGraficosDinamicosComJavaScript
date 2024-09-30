const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);
    console.log("Temos "+dados.total_pessoas_mundo+" de pessoas no mundo.");
    console.log("E "+dados.total_pessoas_conectadas+" estão conectadas.");
    console.log("Ficando em média "+dados+" horas por dia na internet.");

}

vizualizarInformacoesGlobais();