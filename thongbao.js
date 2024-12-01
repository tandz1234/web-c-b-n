
function cancelOrder(index) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
  

    orders.splice(index, 1);
  

    localStorage.setItem("orders", JSON.stringify(orders));
  

    alert("Đơn hàng đã được hủy.");
    loadNotifications();
  }
  
  function loadNotifications() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const orderList = document.getElementById("order-list");
  

    orderList.innerHTML = "";
  
    if (orders.length === 0) {
      orderList.innerHTML = "<p>Không có đơn hàng nào.</p>";
      return;
    }
  

    orders.forEach((order, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("order-item");
      listItem.innerHTML = `
        <div class="order-image">
          <img src="${order.image}" alt="${order.name}">
        </div>
        <div class="order-details">
          <h3>${order.name}</h3>
          <p>Giá: ${order.price}</p>
          <p>Số lượng: ${order.quantity}</p>
          <p>Tình trạng: <em>${order.status}</em></p>
          <button class="cancel-order-btn" data-index="${index}">Hủy đơn hàng</button>
        </div>
      `;
      orderList.appendChild(listItem);
    });
  

    const cancelButtons = document.querySelectorAll(".cancel-order-btn");
    cancelButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        const orderIndex = e.target.getAttribute("data-index");
        cancelOrder(orderIndex);
      });
    });
  }

  window.onload = loadNotifications;
  

const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const userAvatar = document.querySelector("#user-avatar");
const logoutMenu = document.querySelector(".logout-menu");
const loginRegisterButtons = document.querySelectorAll(".auth-btn");
const avatarImage = document.querySelector(".avatar-img");


if (isLoggedIn) {

    userAvatar.style.display = "block";
    avatarImage.style.display = "block";
    logoutMenu.style.display = "none";
    loginRegisterButtons.forEach(button => button.style.display = "none"); 

    userAvatar.addEventListener("click", () => {
        logoutMenu.style.display = "block";
    });


    const logoutButton = document.getElementById("logoutBtn");
    if (logoutButton) {
        logoutButton.addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.setItem("isLoggedIn", "false");
            localStorage.removeItem("userName");
            alert("Bạn đã đăng xuất thành công.");
            location.reload();
        });
    }
} else {

    userAvatar.style.display = "none";
    logoutMenu.style.display = "none";
    loginRegisterButtons.forEach(button => button.style.display = "inline-block");
}

function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();


  if (searchInput) {

    window.location.href = `timkiem.html?search=${encodeURIComponent(searchInput)}`;
  } else {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
  }
}
window.onload = function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 

  if (!isLoggedIn) {
    alert("Vui lòng đăng nhập để xem thông báo!");
    window.location.href = "login.html";
  } else {

    loadNotifications();
  }
};


