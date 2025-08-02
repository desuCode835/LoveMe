const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Mengubah posisi tombol "No" saat mouseover
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // Memperbaiki rentang Y-axis

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Fungsionalitas tombol "Yes"
yesBtn.addEventListener("click", () => {
  // Sembunyikan pertanyaan dan tampilkan loader hati
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  // Delay selama 3 detik untuk menampilkan hasil
  const timeoutId = setTimeout(() => {
    // Sembunyikan loader hati dan tampilkan result container
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";

    // Putar video GIF
    gifResult.play();

    // Tampilkan teks "Daisuki!" setelah 3 detik
    setTimeout(() => {
      const daisukiText = document.querySelector(".daisuki-text");
      daisukiText.style.opacity = 1; // Membuat teks "Daisuki" muncul dengan animasi
    }, 3000); // Delay agar teks muncul setelah 3 detik
  }, 3000); // Delay sebelum menampilkan video GIF dan animasi "Daisuki"
});
