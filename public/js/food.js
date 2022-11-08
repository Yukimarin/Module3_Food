// let login = document.getElementById("btn-login");
let info = document.getElementById("info");
let edit = document.getElementById("edit-user");
let update = document.getElementById("update");
let purchase = document.getElementById("purchase");
let logOut = document.querySelector(".logout");
const api = "http://localhost:3000";
// import{show} from ("../../controllers/food.controller.js")
// login.addEventListener("click", (e) => {
//   window.location.href = "http://localhost:3000/login";
// });
info.addEventListener("click", (e) => {
  if (edit.classList.contains("off")) {
    edit.classList.remove("off");
  } else {
    edit.classList.add("off");
  }
});

update.addEventListener("click", (e) => {
  // console.log("haha");
  setTimeout(() => {
    window.location.href = api + "/user-info";
  }, 1000);
});

purchase.addEventListener("click", (e) => {
  // console.log("haha");
  setTimeout(() => {
    window.location.href = api + "/purchase";
  }, 1000);
});

logOut.addEventListener("click", (e) => {
  fetch(api + "/auth/logout", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        window.location.href = api + "/login";
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// dom them gio hang
// thêm số lượng trong giỏ hàng
let minus = document.getElementById("btn-minus");
let add = document.getElementById("btn-plus");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let giaTri = 0;
// Thêm giỏ hàng
let addBags = document.getElementById("bags");
let addFoods = document.querySelectorAll("#btn-add-food");

// console.log(addFoods);
addFoods.forEach((e) => {
  e.addEventListener("click", (event) => {
    // console.log(event.target.parentElement.innerHTML);
    // console.log("haha");
    // console.log(addFoods);
    let div = document.createElement("div");
    div.classList.add("bag-detail-menu");
    div.innerHTML = `${event.target.parentElement.innerHTML.replace(
      `<button id="btn-add-food" class="add-number">+</button>`,
      ""
    )}`;
    // console.log(div.children[2]);
    div.children[2].innerHTML = ` <div id="bag-number" class="bag-number-food">
       </div>`;

    addBags.appendChild(div);
    // let bagNumber = document.getElementById("bag-number");
    // console.log(bagNumber);

    // `<div class="bag-detail-menu">
    //   <div class="bag-img-food">
    //     <img
    //       src="<%= relatedFoods[i].image %>"
    //       alt=""
    //     />
    //   </div>
    //   <div class="bag-name-food"><%= relatedFoods[i].foodname %></div>
    //   <div id="bag-number" class="bag-number-food">
    //     <span
    //       ><button id="btn-minus" class="btn-quantity">-</button>
    //       <span id="quantity">${giaTri}</span>
    //       <button id="btn-plus" class="btn-quantity">+</button>
    //     </span>
    //   </div>
    //   <div id="price" class="bag-price-food"><%= relatedFoods[i].price %></div>
    // </div>`;
    let bagItems = document.querySelectorAll(".bag-detail-menu");
    let total = 0;
    bagItems.forEach((e1) => {
      total += Number(e1.children[3].innerText.replace(" VND", ""));
    });
    console.log(total);
    document.getElementById(
      "total-price"
    ).innerText = `Tong Tien: ${total} VND `;
  });
});
