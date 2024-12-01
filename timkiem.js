
  const products = [
    { name: "Mô hình Lego Doremon", price:500000, img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rbld-llz4ypqg8qxmd0.webp", url: "chitietsanpham.html" },
    { name: "Mô hình Lego Tôn Ngộ Không", price:585220, img: "https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-lla3o60tithk08@resize_w450_nl.webp", url: "chitietsanpham1.html" },
    { name: "Mô hình lego Triệu Tử Long", price:279000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2o8hci3swxm74.webp", url: "chitietsanpham2.html" },
    { name: "Mô hình Lego Robot Biết Yêu", price: 59000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2jtitbo7smq97.webp.jpg", url: "chitietsanpham3.html" },
    { name: "Mô hình Lego lâu đài", price:178000, img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rdwc-lz5yicrnb8dk5a@resize_w450_nl.webp", url: "chitietsanpham4.html" },
    { name: "Mô hình Optimus Prime, Bumblebee", price:167000, img: "https://down-vn.img.susercontent.com/file/sg-11134301-7rdy6-lz0b7y8f50f621.webp", url: "chitietsanpham5.html" },
    { name: "MÔ HÌNH MINI OPTIMUS PRIME MTST-00A", price:379000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzyjskw3wty97b@resize_w450_nl.webp", url: "chitietsanpham6.html" },
    { name: "Mô hình Transformer Megatron biến hình xe tăng", price:363000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsm76qs68ntlb9.webp", url: "chitietsanpham7.html" },
    { name: "Mô hình Transformer Baiwei TW1024B Heroes of Fire", price:323000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lswx6s81uwex38@resize_w450_nl.webp", url: "chitietsanpham8.html" },
    { name: "Mô hình Transformer Shockwave TW-1028", price:435000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw8rqwjsja3f9c@resize_w450_nl.webp", url: "chitietsanpham9.html" },
    { name: "Mô hình Dragon Ball Majin Vegeta", price:67000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m223rz4nibxa79.webp", url: "chitietsanpham10.html" },
    { name: "Mô hình Dragon Ball Rồng Thần Trái Đất", price: 182000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2uhpspbfjqy4e@resize_w450_nl.webp", url: "chitietsanpham11.html" },
    { name: "Mô Hình Dragon Ball Son Goku Sử Dụng Genkidama", price:550.000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lps5n69w5ln6b1@resize_w450_nl.webp", url: "chitietsanpham12.html" },
    { name: "Mô Hình Son Goku Bản Cao Cấp Bản Năng Vô Cực Ultra Instinct", price:899000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lkwompnmisp72b@resize_w450_nl.webp", url: "chitietsanpham13.html" },
    { name: "Goku SSJ3 - Dragon Ball - Huben Studio", price:15000000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lom24x0zgrsn5b.webp", url: "chitietsanpham14.html" },
    { name: "Mô Hình Lắp Ráp 1/100 Mecha CHARON", price:725000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwi4s6wauord0a@resize_w450_nl.webp", url: "chitietsanpham15.html" },
    { name: "Mô Hình Gundam Lắp Ráp WFM 1/144 GUNDAM SCHWARZETTE", price:89249, img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd3r-lx9cs99j3u5ce1@resize_w450_nl.webp", url: "chitietsanpham16.html" },
    { name: "Mô Hình Lắp Ráp MNPQ-XH04 Mini Gan Jiang", price:555000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lynkayuvarvl3d.webp", url: "chitietsanpham17.html" },
    { name: "Mô Hình gundam Lắp Ráp 1/144 MHF-01Ω Load Astray Omega", price:78000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lybnd9nne1lt93@resize_w450_nl.webp", url: "chitietsanpham18.html" },
    { name: "Mô Hình Gundam Lắp Ráp Astray Sengoku", price:84999, img: "https://down-vn.img.susercontent.com/file/sg-11134201-7rd3m-lx9jvx1ekq9566.webp", url: "chitietsanpham19.html" },
    { name: "Mô hình Siêu tân tinh ba Thuyền Trưởng LAW, KID, LUFFY", price:329000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ll7938u566dkd9@resize_w450_nl.webp", url: "chitietsanpham20.html" },
    { name: "Mô hình One Piece Luffy Gear 4 king kong", price:129000, img: "https://down-vn.img.susercontent.com/file/97e0ec92f8ac587cc65aeee66c10dfb9.webp", url: "chitietsanpham21.html" },
    { name: "MH53 Mô Hình Cao Cấp Enel Chúa Trời Cao", price:850000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-linyvltrd70y29.webp", url: "chitietsanpham22.html" },
    { name: "Mô Hình Cao Cấp Monkey D Luffy Gear 4 Wano", price:899000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfxm6qusic16f8@resize_w450_nl.webp", url: "chitietsanpham23.html" },
    { name: "Mô Hình One Piece Gear 5 nika Luffy Nika luffy vs kaido", price:67000, img: "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2ny1iygnkzq0b@resize_w450_nl.webp", url: "chitietsanpham24.html" }
];


const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('search') ? urlParams.get('search').toLowerCase() : '';


if (searchQuery) {

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));

    const productListElement = document.getElementById('productList');
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price.toLocaleString()} VND</p>
                <a href="${product.url}" class="detail-btn">Xem chi tiết</a>
            `;
            productListElement.appendChild(productElement);
        });
    } else {
        productListElement.innerHTML = 'Không tìm thấy sản phẩm nào phù hợp với từ khóa này.';
    }
} else {
    alert("Không có từ khóa tìm kiếm.");
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