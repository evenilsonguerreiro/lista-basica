let input = document.getElementById('input-principal')
let botao = document.getElementById('botao-add')
let lista = document.getElementById('lista-tarefa')

let arrayDetarefas = []


function mostrarNatela() {
    novaLista = ''

    arrayDetarefas.forEach(item => {

        novaLista = novaLista + `

        <li>
            <p>${item}</p>    
        </li>
        `
    })

    lista.innerHTML = novaLista

    input.value = ''
    input.focus()


}





function cliqueiNobotao() {

    arrayDetarefas.push(input.value)
    mostrarNatela()
}

botao.addEventListener('click', cliqueiNobotao)