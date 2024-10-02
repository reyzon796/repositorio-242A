function promediar() {
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const salida = document.querySelector('#salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.30);
    
    if (nota1 < 1 || nota1 > 10 || nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10) {
        salida.textContent = 'Incluya únicamente notas en el rango de 1 a 10';
        return;
    }

    if (promedio >= 6) {
        salida.textContent = promedio.toFixed(2) + ' está aprobado';
    } else {
        salida.textContent = promedio.toFixed(2) + ' está reprobado';
    }
}
