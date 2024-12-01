document.querySelector("#loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const isRegistered = localStorage.getItem("isRegistered");
  const registeredEmail = localStorage.getItem("userEmail");
  const registeredPassword = localStorage.getItem("userPassword");

  if (!isRegistered || !registeredEmail || !registeredPassword) {
      alert("Bạn chưa đăng ký tài khoản. Vui lòng đăng ký trước!");
      return;
  }
  if (email === registeredEmail && password === registeredPassword) {
      localStorage.setItem("isLoggedIn", true);
      alert("Đăng nhập thành công!");
      window.location.href = "index.html";
  } else {
      alert("Email hoặc mật khẩu không đúng. Vui lòng thử lại!");
  }
});
