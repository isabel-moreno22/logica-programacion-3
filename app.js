function calcularFactorial() {
    let numeroInput = document.getElementById('numero');
    let numero = parseInt(numeroInput.value);
    let mensajeError = document.getElementById('mensaje-error');
    let resultadoElemento = document.getElementById('resultado');

    mensajeError.textContent = '';
    resultadoElemento.textContent = '';

    if (isNaN(numero) || numero < 0) {
        mensajeError.textContent = "Error: La entrada no es un número válido. Por favor, ingresa un número entero no negativo.";
        numeroInput.value = '';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    resultadoElemento.textContent = `El factorial de ${numero} es ${factorial}.`;
}
