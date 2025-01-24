document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const link = document.getElementById("myLink");
    link.classList.add("show"); // Sử dụng lớp CSS để hiển thị lại
  }, 5000);
  console.log("Successfully loaded");
});

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('myAudio');
  const muteButton = document.getElementById('muteButton');
  const muteIcon = document.getElementById('muteIcon');

  muteButton.addEventListener('click', () => {
      if (audio.muted) {
          audio.muted = false; // Bật âm
          muteIcon.className = 'fas fa-volume-up'; // Đổi icon thành loa bật
      } else {
          audio.muted = true; // Tắt âm
          muteIcon.className = 'fas fa-volume-mute'; // Đổi icon thành loa tắt
      }
  });
});

