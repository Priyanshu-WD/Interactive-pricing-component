const priceView = document.querySelector("#price-view");
const range = document.querySelector("#range");
const perPagePrice = document.querySelector("#per-page-price");
const toggle = document.querySelector("#toggle");
const toggleBtn = document.querySelector("#toggle-btn");
const duration = document.querySelector("#duration");

const VIEWS_DATA = [
  {
    pageViews: "10k",
    monthlyCost: 8,
    leftPercentage: 0,
  },

  {
    pageViews: "50k",
    monthlyCost: 12,
    leftPercentage: 25,
  },
  {
    pageViews: "100k",
    monthlyCost: 16,
    leftPercentage: 50,
  },
  {
    pageViews: "500k",
    monthlyCost: 24,
    leftPercentage: 75,
  },
  {
    pageViews: "1M",
    monthlyCost: 36,
    leftPercentage: 100,
  },
];

const getData = () => {
  const currValue = range.value;
  const index = currValue - 1;
  return ({ pageViews, monthlyCost, leftPercentage } = VIEWS_DATA[index]);
};

const isAnnualFrequency = () => {
  return toggle.click;
};

const updateMonthlyCost = () => {
  const { monthlyCost } = getData();
  perPagePrice.textContent = `${monthlyCost}`;
};

const updatePageViews = () => {
  const { pageViews } = getData();
  priceView.textContent = `${pageViews}`;
};

const updateCost = () => {
  const { monthlyCost } = getData();
  const isAnnual = isAnnualFrequency();
  const price = isAnnual ? monthlyCost * 0.75 : monthlyCost;
  perPagePrice.textContent = `${price}`;
};

const updateLeftPercentage = () => {
  const { leftPercentage } = getData();
  range.style.setProperty("--left", leftPercentage);
};

const updateFormOnRangeInput = () => {
  updatePageViews();
  updateMonthlyCost();
  // updateCost();
  updateLeftPercentage();
};

range.addEventListener("input", updateFormOnRangeInput);

let active = 1;
toggle.addEventListener("click", () => {
  if (active === 1) {
    updateCost();
    toggleBtn.style.marginLeft = "1.4rem";
    toggle.style.backgroundColor = "hsl(174, 86%, 45%)";
    active = 0;
  } else {
    // perPagePrice.textContent = ``;
    toggleBtn.style.marginLeft = "0.2rem";
    toggle.style.backgroundColor = "hsl(223, 50%, 87%)";
    active = 1;
  }
});
