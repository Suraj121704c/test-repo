import { cart_navbar } from "./navBar/components/cartnav.js";
let nav = document.getElementById("navbar");
nav.innerHTML = cart_navbar();

let data = JSON.parse(localStorage.getItem("item"));

let item_image = document.getElementById("item-image");
item_image.src = data.image;

let price = document.getElementById("price");
price.innerText = data["list-price"];

let total = document.getElementById("total");
total.innerText = data["list-price"];

let total1 = document.getElementById("total1");
total1.innerText = data["list-price"];

let details = document.getElementById("discription");
details.innerText = data.pro_title;

let del = document.getElementById("operation");
del.addEventListener("click", () => {
  document.querySelector("#tablerow").innerHTML = null;
  document.querySelector("#total1").innerHTML = "0";
  document.getElementById("price1").innerHTML = "0";
  document.getElementById("total2").innerHTML = "0";
});
//checkout section
let price1 = document.getElementById("price1");
price1.innerText = data["list-price"];

let total2 = document.getElementById("total2");
total2.innerText = data["list-price"];

let details2 = document.getElementById("discription2");
details2.innerText = data.pro_title;

let item_image2 = document.getElementById("item-image2");
item_image2.src = data.image;

let price3 = document.getElementById("price3");
price3.innerText = data["list-price"];

let total3 = document.getElementById("total3");
total3.innerText = data["list-price"];

let checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
  document.getElementById("cart-section").style.display = "none";
});

let save = document.getElementById("save");
save.addEventListener("click", function () {
  alert(" Your Details added Successfuly");
});

let place = document.getElementById("place");
place.addEventListener("click", function () {
  window.location.href = "payment.html";
});
