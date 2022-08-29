const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const assunto = document.getElementById('assunto')
const mensagem = newFunction('mensagem')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function newFunction() {
    return document.getElementById('mensagem')
}

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()

    if (usernameValue === '') {
        //Mostrar o erro
        //adicionar a classe error 
        errorValidotion(username,'Preencha esse campo')
    } else {
        // adicionar a classe de successo
        successValudation(username)
    }

    if (emailValue === '') {
        errorValidotion(email, 'Preencha esse campo')
    } else {
        successValudation(email)
    }
    if (assuntoValue === '') {
        errorValidotion(assunto, 'Preencha esse campo')

    } else {
        successValudation(assunto)
    }
    if (mensagemValue === '') {
        errorValidotion(mensagem, 'Preencha esse campo')

    } else {
        successValudation(mensagem)
    }

}

function errorValidotion(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message


    formControl.classNome = 'form-control error'
}

function successValudation(input){
    const formControl = input.parentElement;

    formControl.classNome = 'form-control success'
}