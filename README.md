<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Helin ve Yusuf ile Kaç Gündür Tanışıyoruz?</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #1c1c1c;
      font-family: 'Arial', sans-serif;
      color: #ffffff;
      overflow: hidden;
    }
    .container {
      text-align: center;
      border: 2px solid #4caf50;
      border-radius: 20px;
      padding: 40px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    }
    h1 {
      font-size: 2rem;
      color: #4caf50;
      margin-bottom: 20px;
      text-shadow: 0 2px 10px rgba(76, 175, 80, 0.8);
    }
    #counter { font-size: 2.5rem; font-weight: bold; margin-top: 20px; letter-spacing: 2px; text-shadow: 0 2px 5px rgba(255, 255, 255, 0.5); }
    .time-unit { display: inline-block; margin: 0 10px; text-align: center; }
    .value { font-size: 3rem; font-weight: bold; text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); }
    .label { font-size: 1rem; text-transform: uppercase; }
    #days { color: #ff5722; } #days ~ .label { color: #ff5722; }
    #hours { color: #03a9f4; } #hours ~ .label { color: #03a9f4; }
    #minutes { color: #ffeb3b; } #minutes ~ .label { color: #ffeb3b; }
    #seconds { color: #e91e63; } #seconds ~ .label { color: #e91e63; }
    #celebration { display: none; margin-top: 30px; font-size: 1.8rem; color: gold; text-shadow: 0 0 10px white, 0 0 20px gold; font-weight: bold; animation: glow 1s infinite alternate; }
    @keyframes glow { from { text-shadow: 0 0 10px white, 0 0 20px gold; } to { text-shadow: 0 0 20px gold, 0 0 30px white; } }
    .confetti { position: fixed; width: 10px; height: 10px; background-color: red; top: -10px; animation: fall linear forwards; z-index: 9999; }
    @keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }
  </style>
</head>
<body>
  <div class="container">
    <h1>💖 Helin & Yusuf 💖<br>Aşkımızın Başladığı Andan Beri...</h1>
    <div id="counter">
      <div class="time-unit"><div class="value" id="days">0</div><div class="label">Gün</div></div>
      <div class="time-unit"><div class="value" id="hours">0</div><div class="label">Saat</div></div>
      <div class="time-unit"><div class="value" id="minutes">0</div><div class="label">Dakika</div></div>
      <div class="time-unit"><div class="value" id="seconds">0</div><div class="label">Saniye</div></div>
    </div>
    <div id="celebration">🎉 Yıl Dönümümüz Kutlu Olsun Aşkım! 🎉</div>
  </div>

  <script>
    let confettiInterval;
    function updateTime() {
      const startDate = new Date("2026-01-21T21:30:00");
      const now = new Date();
      const difference = now - startDate;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
      if (days % 365 === 0 && days > 0) {
        document.getElementById("celebration").style.display = "block";
        if (!confettiInterval) { confettiInterval = setInterval(startConfetti, 1000); }
      } else {
        document.getElementById("celebration").style.display = "none";
        clearInterval(confettiInterval);
        confettiInterval = null;
      }
    }
    function startConfetti() {
      for (let i = 0; i < 20; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
      }
    }
    function getRandomColor() {
      const colors = ["#ff5722", "#03a9f4", "#ffeb3b", "#e91e63", "#4caf50", "gold", "white"];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    setInterval(updateTime, 1000);

    // Vercel Telegram bildirim çağrısı
    fetch("/api/notify");
  </script>
</body>
</html>
