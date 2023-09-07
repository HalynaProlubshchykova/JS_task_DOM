// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, від яких буде залежати ціна товару.

const colorItems = document.querySelectorAll(".color");
const price = document.getElementById("outprice");

let currentPrice = parseFloat(price.textContent);

colorItems.forEach(function (colorItem) {
  colorItem.addEventListener("click", function () {
    const newPrice = parseFloat(colorItem.getAttribute("data-price"));
    if (!isNaN(newPrice)) {
      currentPrice = newPrice;
      updatePrice();
    }

    colorItems.forEach(function (item) {
      item.classList.remove("active");
    });
    colorItem.classList.add("active");
  });
});

function updatePrice() {
  price.textContent = currentPrice.toFixed(2);
}
