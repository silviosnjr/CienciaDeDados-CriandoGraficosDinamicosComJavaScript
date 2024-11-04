async function quantidadesUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    
    const nomeDasRedes = Object.keys(dados)
    const quantidadesUsuarios = Object.values(dados)

    const data = [
        {
            x : nomeDasRedes,
            y : quantidadesUsuarios,
            type: 'bar'
        }
    ]
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadesUsuarios();