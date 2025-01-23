// Lấy phần tử có class "text-container"
const textContainer = document.querySelector('.text-container');

// Đếm ngược từ 5 giây
let countdown = 5;

// Cập nhật nội dung đếm ngược mỗi giây
const interval = setInterval(() => {
    textContainer.textContent = `Chuyển trang sau ${countdown} giây...`;
    countdown--;

    // Khi đếm ngược kết thúc, dừng interval
    if (countdown < 0) {
        clearInterval(interval);
    }
}, 1000);
