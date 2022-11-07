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
let bagNumber = document.getElementById("bag-number");
let giaTri = 0;
// giaTri = quantity.innerText;
// minus.onclick = function () {
//   giaTri = `${Number(giaTri) - 1}`;
//   if (giaTri <= 0) {
//     giaTri = 0;
//     quantity.innerText = giaTri;
//   } else {
//     quantity.innerText = giaTri;
//   }
// };
// add.onclick = function () {
//   giaTri = `${Number(giaTri) + 1}`;
//   quantity.innerText = giaTri;
// };
// Thêm giỏ hàng
let addBags = document.getElementById("bags");
let addFoods = document.querySelectorAll("#btn-add-food");
// console.log(addFoods);
addFoods.forEach((e) => {
  e.addEventListener("click", (event) => {
    console.log(event.target.parentElement.innerHTML);
    // console.log("haha");
    // console.log(addFoods);
    let div = document.createElement("div");
    div.classList.add("bag-detail-menu");
    div.innerHTML = `${event.target.parentElement.innerHTML.replace(
      `<button id="btn-add-food" class="add-number">+</button>`,
      ""
    )}`;
    console.log(div.children[2]);
    div.children[2].innerHTML = ` <div id="bag-number" class="bag-number-food">
        <span
          ><button id="btn-minus" class="btn-quantity">-</button>
        <span id="quantity">${giaTri}</span>
           <button id="btn-plus" class="btn-quantity">+</button>
         </span>
       </div>`;

    addBags.appendChild(div);
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
  });
});
