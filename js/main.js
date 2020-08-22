document.querySelector(".btn-cart").addEventListener("click", () => {
  document.querySelector(".cart").classList.remove("hidden");
});

document.querySelector(".btn-cart-close").addEventListener("click", () => {
  document.querySelector(".cart").classList.add("hidden");
});
