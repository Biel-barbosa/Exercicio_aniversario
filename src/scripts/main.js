// Definir a data alvo (02/09/2025)
const targetDate = new Date("September 2, 2025 00:00:00").getTime();

// Atualizar a contagem regressiva a cada 1 segundo
const countdownInterval = setInterval(function() {
    // Obter a data e hora atual
    const now = new Date().getTime();
    
    // Calcular a diferença entre a data alvo e a data atual
    const timeLeft = targetDate - now;

    // Calcular dias, horas, minutos e segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Exibir a contagem regressiva no elemento com id "countdown"
    document.getElementById("contador").innerHTML = `
        ${days}dias ${hours}horas ${minutes}min e ${seconds}s
    `;
    
    // Se a contagem regressiva terminar, mostrar uma mensagem
    if (timeLeft < 0) {
        clearInterval(countdownInterval); // Parar o intervalo
        document.getElementById("countdown").innerHTML = "A data chegou!";
    }
}, 1000);
