// Intersection Observer - animações de entrada (igual à home)
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries)=> {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); });
}, { threshold: 0.2 });
reveals.forEach(el => io.observe(el));

// (Opcional) Defina um link de compra em um só lugar:
const HOTMART_URL = "https://hotmart.com/seu-produto"; // TROCAR p/ o link do caso
document.querySelectorAll(".js-buy").forEach(a => a.href = HOTMART_URL);

// Timer de desconto: mostra após 10s e inicia contagem regressiva de 5:00
(function(){
  const bubble = document.getElementById('discount-timer');
  const timeEl = document.getElementById('discount-time');
  if (!bubble || !timeEl) return;

  // Mostra após 10 segundos
  setTimeout(() => {
    bubble.classList.remove('hidden');
    iniciarContagem(8 * 60, timeEl, bubble); // 8 minutos
  }, 10000); // 10.000 ms = 10s

  function iniciarContagem(totalSegundos, outputEl, container){
    let restante = totalSegundos;

    function tick(){
      const m = String(Math.floor(restante / 60)).padStart(2, '0');
      const s = String(restante % 60).padStart(2, '0');
      outputEl.textContent = `${m}:${s}`;
    }

    tick();
    const iv = setInterval(() => {
      restante--;
      if (restante <= 0){
        clearInterval(iv);
        outputEl.textContent = '00:00';
        container.classList.add('expired');
        const label = container.querySelector('.label');
        if (label) label.textContent = 'Desconto encerrado:';
        return;
      }
      tick();
    }, 1000);
  }
})();