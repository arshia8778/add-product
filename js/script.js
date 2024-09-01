var allProducts = JSON.parse(localStorage.getItem("products")) || []; // بارگذاری محصولات از localStorage

var product_title_input = document.getElementById("product-title");
var product_price_input = document.getElementById("product-price");
var product_url_input = document.getElementById("product-url-img");
var add_product_btn = document.getElementById("add-product-btn");
var products = document.getElementById("products");
var delet_container = document.getElementById("delet-container");

if (add_product_btn) {
  add_product_btn.addEventListener("click", () => {
    // بررسی اینکه ورودی‌ها خالی نباشند
    if (
      !product_title_input.value ||
      !product_price_input.value ||
      !product_url_input.value
    ) {
      alert("Please fill in all fields!");
      return;
    }

    // ایجاد محصول جدید
    var product = {
      price: product_price_input.value,
      image: product_url_input.value,
      title: product_title_input.value, // مقدار عنوان را به عنوان رشته ذخیره کنید
    };

    allProducts.push(product);
    localStorage.setItem("products", JSON.stringify(allProducts)); // ذخیره محصولات در localStorage

    // پاک‌سازی ورودی‌ها
    product_title_input.value = "";
    product_price_input.value = "";
    product_url_input.value = "";

    // نمایش محصولات
    displayProducts();
  });
}

function displayProducts() {
  products.innerHTML = ""; // پاک‌سازی محصولات قبلی

  // نمایش تمام محصولات
  allProducts.forEach((element) => {
    var productDiv = document.createElement("div");
    productDiv.classList.add("product");

    var imageElem = document.createElement("img");
    imageElem.setAttribute("src", element.image);
    productDiv.appendChild(imageElem);

    var h3Elem = document.createElement("h3");
    h3Elem.innerHTML = element.title;
    h3Elem.className = "product-title";
    productDiv.appendChild(h3Elem);

    var priceTag = document.createElement("p");
    priceTag.innerHTML = "price: " + element.price + "$";
    priceTag.className = "product-price";
    productDiv.appendChild(priceTag);

    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "delet";
    removeBtn.className = "btn";
    removeBtn.addEventListener("click", () => {
      delet_container.style.display = "block";
    });
    productDiv.appendChild(removeBtn);

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "edit";
    editBtn.className = "btn";
    productDiv.appendChild(editBtn);

    products.appendChild(productDiv);
  });
}
function Yesbtnhandle(index) {
  delet_container.style.display = "none";
  allProducts.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(allProducts));
  displayProducts();
}
function Nobtnhandle() {
  delet_container.style.display = "none";
}
// نمایش محصولات در صفحه اصلی
if (products) {
  displayProducts();
}
