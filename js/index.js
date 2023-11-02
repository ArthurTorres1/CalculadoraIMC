const form = document.getElementById('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const nomeUsuario = document.getElementById('nome').value
    const pesoUsuario = document.getElementById('peso').value
    const alturaUsuario = document.getElementById('altura').value
    let descricao = document.getElementById('respostaFinal')

    const imc = (pesoUsuario / (alturaUsuario * alturaUsuario)).toFixed(2)
    
    if(imc < 18.5){
        descricao.innerHTML = nomeUsuario + " o seu IMC é de " + imc + " abaixo do peso"
    }
    else if(imc >= 18.5 && imc <= 24.9){
        descricao.innerHTML = nomeUsuario + " o seu IMC é de " + imc + " no peso ideal"
    }
    else if(imc >= 25 && imc <= 29.9){
        descricao.innerHTML = nomeUsuario + " o seu IMC é de " + imc + " sobrepeso"
    }
    else if(imc >= 30 && imc <= 34.9){
        descricao.innerHTML = nomeUsuario + " o seu IMC é de " + imc + " obesidade grau | "
    }
    else if(imc >= 35 && imc <= 39.9){
        descricao.innerHTML = nomeUsuario + " o seu IMC é de " + imc + " obesidade grau ||"
    }
    else {
        descricao.innerHTML = nomeUsuario + " o seu IMC é de " + imc + " obesidade grau |||"
    } 
    
})