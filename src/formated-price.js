const priceInput = document.getElementById("price-input");
const formatedPrice = document.getElementById("formated-price");

priceInput.addEventListener("input", () => {
  const price = parseFloat(priceInput.value);
  if (!isNaN(price)) {
    formatedPrice.textContent = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  } else {
    formatedPrice.textContent = "0.00";
  }
});
