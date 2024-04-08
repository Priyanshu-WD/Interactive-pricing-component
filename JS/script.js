const priceView = document.querySelector("#price-view");
const range = document.querySelector('input[type="range"]');
const perPagePrice = document.querySelector("#per-page-price");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.checked = false;
perPagePrice.innerHTML = `${range.value}`;

toggleBtn.addEventListener("change", () => {
  // Changed event type to "change"
  if (toggleBtn.checked === true) {
    perPagePrice.innerHTML = `${range.value * 0.75}`; // Corrected calculation
  } else {
    perPagePrice.innerHTML = `${range.value}`;
  }
});

range.oninput = function () {
  if (toggleBtn.checked === true) {
    perPagePrice.innerHTML = `${range.value * 0.75}`; // Corrected calculation
  } else {
    perPagePrice.innerHTML = `${range.value}`;
  }
};

range.addEventListener("input", function () {
  let x = ((range.value - range.min) / (range.max - range.min)) * 100;
  console.log(x)
  let color = `linear-gradient(90deg, hsl(174, 86%, 45%) ${x}%, hsl(224, 65%, 95%) ${x}%)`;
  range.style.background = color;

  switch (range.value) {
    case "8":
      priceView.innerHTML = "10K";
      break;
    case "12":
      priceView.innerHTML = "50k";
      break;
    case "16":
      priceView.innerHTML = "100k";
      break;
    case "24":
      priceView.innerHTML = "500k";
      break;
    case "36":
      priceView.innerHTML = "1M";
      break;

    default:
      break;
  }
});
