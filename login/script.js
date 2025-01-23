document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn trang reload

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Dữ liệu mẫu
    const validUsername = "bongbong";
    const validPassword = "123456";

    if (username === validUsername && password === validPassword) {
        // Lưu trạng thái đăng nhập vào localStorage
        localStorage.setItem("isLoggedIn", "true");
        alert("Đăng nhập thành công!");
        window.location.href = "../main/index.html"; // Chuyển hướng
    } else {
        alert("Tên người dùng hoặc mật khẩu không đúng!");
    }
});
