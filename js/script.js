// toggle class active Hamburger
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar Element
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
function toggleShare(event) {
  event.preventDefault();
  const popup = document.getElementById("sharePopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function copyLink() {
  const dummy = document.createElement("input");
  dummy.value = window.location.href;
  document.body.appendChild(dummy);
  dummy.select();
  document.exeCommand("copy");
  document.body.removeChild(dummy);
  alert("Link berhasil disalin!");
}

// Tutup pop-up jika klik di luar
window.addEventListener("click", function (e) {
  const popup = document.getElementById("sharePopup");
  if (
    !popup.contains(e.target) &&
    !e.target.closest('a[onclick*="toggleShare"]')
  ) {
    popup.style.display = "none";
  }
});
window.toggleShare = function (event) {
  event.preventDefault();
  const popup = document.getElementById("sharePopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
};

window.copyLink = function () {
  const dummy = document.createElement("input");
  dummy.value = window.location.href;
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Link berhasil disalin!");
};

window.addEventListener("click", function (e) {
  const popup = document.getElementById("sharePopup");
  if (
    !popup.contains(e.target) &&
    !e.target.closest('a[onclick*="toggleShare"]')
  ) {
    popup.style.display = "none";
  }
});
