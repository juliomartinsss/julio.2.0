function julioDiv(){
    const texto = prompt('digite um número:')
    var numero = parseInt(texto)
    const minhaDiv = document.getElementById('div')
    while (numero >= 0 ){
        const Div2 = document.createElement('div')
        Div2.innerHTML = numero
        minhaDiv.appendChild(Div2)
        numero -=1
    }
}
    