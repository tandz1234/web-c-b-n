
const buyButtons = document.querySelectorAll(".buy-now-btn");

buyButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để mua hàng!");
      window.location.href = "login.html";
    } 
  });
});
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityInput = document.getElementById("quantity");
quantityInput.value = 1;
decreaseBtn.addEventListener("click", () => {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

increaseBtn.addEventListener("click", () => {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});
document.querySelector(".buy-now-btn").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantity").value);
    if (quantity > 0) {

    }
  });

document.addEventListener("DOMContentLoaded", function () {

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
});

let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }


    setInterval(nextSlide, 3000);


    showSlide(currentIndex);

const buyNowButton = document.querySelector(".buy-now-btn");
const modal = document.getElementById("order-modal");
const closeButton = document.querySelector(".close-btn");
const orderForm = document.getElementById("order-form");


buyNowButton.addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").value);
  if (quantity > 0) {
    modal.style.display = "flex";
  }
});


closeButton.addEventListener("click", () => {
  modal.style.display = "none"; 
});


orderForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const quantity = parseInt(document.getElementById("quantity").value);


  if (name && phone && address && quantity > 0) {
    alert(`Đơn hàng của bạn đã được đặt thành công!
Tên: ${name}
Số điện thoại: ${phone}
Địa chỉ: ${address}
Số lượng: ${quantity}`);
    modal.style.display = "none"; 
  } else {
    alert("Vui lòng nhập đầy đủ thông tin!");
  }
});
function addToCart(button) {
 
  const productName = button.getAttribute('data-name');
  const productPrice = button.getAttribute('data-price');
  const productImage = button.getAttribute('data-image');


  let cart = JSON.parse(localStorage.getItem('cart')) || [];


  const product = {
      name: productName,
      price: productPrice,
      image: productImage
  };
  cart.push(product);


  localStorage.setItem('cart', JSON.stringify(cart));

 
  window.location.href = 'giohang.html';
}
function addOrder(name, price) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
        name: name,
        price: price,
        status: "Đơn hàng đang được xử lý",
    });
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Mua hàng thành công! Đơn hàng của bạn đang được xử lý.");
}

function loadNotifications() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const notificationContainer = document.getElementById("notification-container");
    const orderList = document.getElementById("order-list");

    if (orders.length === 0) {
        notificationContainer.style.display = "none";
        return;
    }

    notificationContainer.style.display = "block";
    orderList.innerHTML = ""; 

    orders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${order.name}</strong> - ${order.price} <br>
            <em>${order.status}</em>
        `;
        orderList.appendChild(listItem);
    });
}

window.onload = function () {
    loadNotifications();
};
document.querySelector(".buy-now-btn").addEventListener("click", function () {
  const quantity = parseInt(document.getElementById("quantity").value);

  if (quantity > 0) {
    let productName, productPrice, productImage;
    if (window.location.pathname.includes("chitietsanpham.html")) {
      productName = "Mô hình lego Doraemon thần tài, mèo thần tài";
      productPrice = "500,000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/sg-11134201-7rbld-llz4ypqg8qxmd0.webp";
    }
    else if (window.location.pathname.includes("chitietsanpham1.html")) {
      productName = "Mô hình lego Tôn Ngộ Không";
      productPrice = "585.220 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lla3o60tithk08@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham2.html")) {
      productName = "Mô hình lego Triệu Tử Long Mech Warrior Người Máy Robot Mecha";
      productPrice = "279.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2o8hci3swxm74@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham3.html")) {
      productName = "Mô hình lắp ráp Lego Robot Biết Yêu Wall E Mini 217CT";
      productPrice = "59.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2jtitbo7smq97.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham4.html")) {
      productName = "Khối Xây Dựng 3D - Lắp Ráp Mô Hình Nhà, LEGO Lâu Đài, Đồ Chơi Giáo Dục Cho Trẻ Em Và Người Lớn";
      productPrice = "178.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/sg-11134201-7rdwc-lz5yicrnb8dk5a@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham5.html")) {
      productName = "Mô hình Transformers(Robot biến hình)Optimus Prime, Bumblebee";
      productPrice = "167.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/sg-11134301-7rdy6-lz0b7y8f50f621@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham6.html")) {
      productName = "MÔ HÌNH MINI OPTIMUS PRIME MTST-00A";
      productPrice = "379.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzyjskw3wty97b@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham7.html")) {
      productName = "Mô hình Transformers Revenge of The Fallen ROTF - Megatron";
      productPrice = "363.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsm76qs68ntlb9.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham8.html")) {
      productName = "Mô hình Transformer Baiwei TW1024B Heroes of Fire";
      productPrice = "323.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lswx6s81uwex38@resize_w450_nl.webp";
    }
    else if (window.location.pathname.includes("chitietsanpham9.html")) {
      productName = "Mô hình Robot biến hình Transformer Shockwave TW-1028";
      productPrice = "435.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw8rqwjsja3f9c@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham10.html")) {
      productName = "Mô hình Dragon Ball Majin Vegeta";
      productPrice = "67.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m223rz4nibxa79.webp";
    }
    else if (window.location.pathname.includes("chitietsanpham11.html")) {
      productName = "Mô hình Dragon Ball Rồng Thần Trái Đất";
      productPrice = "182.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2uhpspbfjqy4e@resize_w450_nl.webp";
    }
    else if (window.location.pathname.includes("chitietsanpham12.html")) {
      productName = "Mô Hình Dragon Ball Son Goku Sử Dụng Genkidama";
      productPrice = "550.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lps5n69w5ln6b1@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham13.html")) {
      productName = "Mô Hình Son Goku Bản Cao Cấp Bản Năng Vô Cực Ultra Instinct";
      productPrice = "899.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkwompnmisp72b@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham14.html")) {
      productName = "Goku SSJ3 - Dragon Ball - Huben Studio";
      productPrice = "15.000.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lom24x0zgrsn5b.webp";
    }
    else if (window.location.pathname.includes("chitietsanpham15.html")) {
      productName = "Mô Hình Lắp Ráp 1/100 Mecha CHARON";
      productPrice = "725.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwi4s6wauord0a.webp";
    }
    else if (window.location.pathname.includes("chitietsanpham16.html")) {
      productName = "Mô Hình Gundam Lắp Ráp WFM 1/144 GUNDAM SCHWARZETTE";
      productPrice = "89.249 VND";
      productImage = "https://down-vn.img.susercontent.com/file/sg-11134201-7rd3r-lx9cs99j3u5ce1@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham17.html")) {
      productName = "Mô Hình Lắp Ráp MNPQ-XH04 Mini Gan Jiang";
      productPrice = "555.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lynkayuvarvl3d@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham18.html")) {
      productName = "Mô Hình gundam Lắp Ráp 1/144 MHF-01Ω Load Astray Omega";
      productPrice = "78.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lybnd9nne1lt93@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham19.html")) {
      productName = "Mô Hình Gundam Lắp Ráp Astray Sengoku";
      productPrice = "84.999 VND";
      productImage = "https://down-vn.img.susercontent.com/file/sg-11134201-7rd3m-lx9jvx1ekq9566.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham20.html")) {
      productName = "Mô hình Siêu tân tinh ba Thuyền Trưởng LAW KID LUFFY";
      productPrice = "329.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll7938u566dkd9@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham21.html")) {
      productName = "Mô hình One Piece Luffy Gear 4 king kong";
      productPrice = "129.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/97e0ec92f8ac587cc65aeee66c10dfb9.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham22.html")) {
      productName = "MH53 Mô Hình Cao Cấp Enel Chúa Trời Cao";
      productPrice = "850.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-linyvltht1cc2f.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham23.html")) {
      productName = "Mô Hình Cao Cấp Monkey D Luffy Gear 4 Wano";
      productPrice = "899.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfxm6qusic16f8@resize_w450_nl.webp"; 
    }
    else if (window.location.pathname.includes("chitietsanpham24.html")) {
      productName = "Mô Hình One Piece Gear 5 nika Luffy Nika luffy vs kaido";
      productPrice = "67.000 VND";
      productImage = "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2ny1iygnkzq0b@resize_w450_nl.webp"; 
    }

    const order = {
      name: productName,
      price: productPrice,
      image: productImage,
      status: "Đang xử lý",
      quantity: quantity
    };


    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

  }
});

function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();


  if (searchInput) {

    window.location.href = `timkiem.html?search=${encodeURIComponent(searchInput)}`;
  } else {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
  }
}








