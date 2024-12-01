

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

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; 
  slides[slideIndex - 1].style.display = "block"; 
  setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
  slideIndex += n;
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => (slide.style.display = "none")); 
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;
  slides[slideIndex - 1].style.display = "block";
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
