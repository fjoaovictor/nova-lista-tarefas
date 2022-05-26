

let inputTarefa = document.querySelector(".input-tarefa")
let btnAdd = document.querySelector(".btn-add")
let lista = document.querySelector('.lista')
let container = document.querySelector('.container')
let mensagem = document.createElement('p')

function addLista() {

    if (inputTarefa.value === '') {
        mensagem.setAttribute('class', 'inputVazio')
        mensagem.innerHTML = 'Digite algo na lista...'
        container.appendChild(mensagem)
        inputTarefa.style.border = '1px solid rgb(255, 161, 161'
    }
    else {

        //Reset dos elementos
        mensagem.innerHTML = ''
        inputTarefa.style.border = ''

        //Criar elementos HTML
        let ul = document.createElement('ul')
        let liEsquerda = document.createElement('li')
        let liDireita = document.createElement('li')
        let checklista = document.createElement('input')
        let p = document.createElement('input')
        let btnEditar = document.createElement('button')
        let btnRemover = document.createElement('button')
        let iEditar = document.createElement('i')
        let iRemover = document.createElement('i')

        // Setar atributos dos elemtnos
        ul.setAttribute('class', 'lista-tarefas')
        checklista.setAttribute('type', 'checkbox')
        checklista.setAttribute('class', 'check')
        p.setAttribute('type', 'text')
        p.value = inputTarefa.value
        p.setAttribute('disabled', '')
        iEditar.setAttribute('class', 'fa fa-edit')
        iRemover.setAttribute('class', 'fa fa-trash')

        btnEditar.setAttribute('class', 'btn btn-editar')
        btnRemover.setAttribute('class', 'btn btn-remover')
        //Inserir icone nos botões
        btnEditar.appendChild(iEditar)
        btnRemover.appendChild(iRemover)

        //Inserir os elementos
        lista.appendChild(ul)
        ul.appendChild(liEsquerda)
        ul.appendChild(liDireita)
        liEsquerda.appendChild(checklista)
        liEsquerda.appendChild(p)
        liDireita.appendChild(btnEditar)
        liDireita.appendChild(btnRemover)


        //Botoes acoes
        btnRemover.addEventListener('click', removerLinha(btnRemover))
        checklista.addEventListener('click', checkTarefa(p, checklista, btnEditar, btnRemover))
        editarLinha(p, btnEditar, checklista, iEditar)


        inputTarefa.value = ''
    }
}

//Funcao remover
function removerLinha(btnRemover) {
    btnRemover.setAttribute('onclick', 'this.parentNode.parentNode.style.display="none"')
}

//funcao marcar como tarefa feita
function checkTarefa(p, checklista, btnEditar) {
    checklista.addEventListener('change', e => {
        if (e.target.checked) {
            p.setAttribute('class', 'p-sub')
            btnEditar.style.display = 'none'
        }
        else {
            p.setAttribute('class', '')
            btnEditar.style.display = ''
        }
    })
}

//funcao editar

function editarLinha(p, btnEditar, checklista, iEditar) {
    btnEditar.addEventListener('click', e => {
        e.preventDefault
        let disable = p.toggleAttribute('disabled')
        if (disable === false) {
            iEditar.setAttribute('class', 'fa fa-check')
            checklista.style.display = 'none'
            p.style.backgroundColor = 'rgb(78 78 78)'
        }
        else {
            iEditar.setAttribute('class', 'fa fa-edit')
            checklista.style.display = ''
            p.style.backgroundColor = ''
        }

    })
}

// Evento do botao add
btnAdd.addEventListener('click', addLista)

inputTarefa.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        event.preventDefault()
        addLista()
    }
})