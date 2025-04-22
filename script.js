function atualizarContador() {
  const dataInicial = new Date("2025-03-30T00:00:00");
  const agora = new Date();
  const diff = agora - dataInicial;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").textContent =
    `Estamos juntos há: ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

function compartilhar() {
  if (navigator.share) {
    navigator.share({
      title: 'Eduardo e Sabrina',
      text: 'Olha que site lindo que fiz pra nós dois!',
      url: window.location.href,
    });
  } else {
    alert("Seu navegador não suporta compartilhamento direto.");
  }
}