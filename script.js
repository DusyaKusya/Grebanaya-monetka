// Инициализация Telegram Web App
window.Telegram.WebApp.ready();

const coin = document.querySelector(".coin-inner");
const flipButton = document.querySelector(".flip-button");
const result = document.getElementById("result");

// Расширение окна приложения в Telegram
window.Telegram.WebApp.expand();

flipButton.addEventListener("click", () => {
  coin.classList.add("flip");
  result.textContent = "";

  setTimeout(() => {
    const isHeads = Math.random() < 0.5;
    if (isHeads) {
      coin.style.transform = "rotateY(0deg)";
      result.textContent = "Выпал Орёл!";
    } else {
      coin.style.transform = "rotateY(180deg)";
      result.textContent = "Выпала Решка!";
    }
    coin.classList.remove("flip");
  }, 1500);
});
