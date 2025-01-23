// Kiểm tra trạng thái đăng nhập
if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Bạn cần đăng nhập để truy cập trang này!");
    window.location.href = "../login/index.html"; // Chuyển hướng về trang đăng nhập
}
// Chờ 15 giây sau khi trang load xong
window.onload = function() {
    setTimeout(function() {
      // Hiển thị thẻ div
      document.getElementById('myDiv').style.display = 'flex';
    }, 15000); // 15000 milliseconds = 15 giây
  };

    