function displayCart() {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    const cartItemsContainer = document.getElementById('cart-items');
    

    if (cart.length > 0) {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach((product, index) => {

            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="100">
                <p>Tên: ${product.name}</p>
                <p>Giá: ${product.price} VND</p>
                <button class="remove-btn" onclick="removeItem(${index})">Xóa khỏi giỏ hàng</button>
            `;
            cartItemsContainer.appendChild(productDiv);
        });
    } else {

        cartItemsContainer.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
    }
}


function removeItem(index) {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    

    cart.splice(index, 1);
    

    localStorage.setItem('cart', JSON.stringify(cart));
    

    displayCart();
}

document.addEventListener('DOMContentLoaded', displayCart);

function addToCart(button) {

    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');
    const productImage = button.getAttribute('data-image');
    let pageSource = '';
    if (window.location.pathname.includes("chitietsanpham.html")) {
        pageSource = 'chitietsanpham';
    } else if (window.location.pathname.includes("chitietsanpham1.html")) {
        pageSource = 'chitietsanpham1';
    }
    else if (window.location.pathname.includes("chitietsanpham2.html")) {
        pageSource = 'chitietsanpham2';
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    const product = {
        name: productName,
        price: productPrice,
        image: productImage,
        page: pageSource
    };
    cart.push(product);


    localStorage.setItem('cart', JSON.stringify(cart));


    window.location.href = 'giohang.html';
}
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

document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (!isLoggedIn) {
      alert("Vui lòng đăng nhập để xem giỏ hàng!");
      window.location.href = "login.html";
      return;
    }
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "Giỏ hàng của bạn hiện tại trống!";
    } else {
      cart.forEach(function(item) {
        const itemDiv = document.createElement("div");
        cartContainer.appendChild(itemDiv);
      });
    }
  });
  
  

