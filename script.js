// Obtendo referências para os elementos HTML que exibirão as horas, minutos e segundos
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Atualiza o relógio a cada segundo usando setInterval
const relogio = setInterval(function time() {
    // Atualiza para o codigo padrao do brasil
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Adiciona um zero à esquerda se a hora, minuto ou segundo for menor que 10
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    // Atualiza o conteúdo dos elementos HTML com as horas, minutos e segundos
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

}, 1000); // 1000 milissegundos = 1 segundo


set Interval é uma função fundamental para criar animações e atualizações automáticas em aplicações web.