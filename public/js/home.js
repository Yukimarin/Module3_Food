// let login = document.getElementById("btn-login");
let info = document.getElementById("info");
let edit = document.getElementById("edit-user");
let update = document.getElementById("update");
// let purchase = document.getElementById("purchase");
let logOut = document.querySelector(".logout");
const api = "http://localhost:3000";
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

// purchase.addEventListener("click", (e) => {
//   // console.log("haha");
//   setTimeout(() => {
//     window.location.href = "http://localhost:3000/purchase";
//   }, 1000);
// });

logOut.addEventListener("click", (e) => {
  // console.log("aaa");
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
// let add = document.getElementById("btn-plus");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let bagNumber = document.getElementById("bag-number");
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
// let addBags = document.getElementById("btn-add-bags");
// addBags.addEventListener("click");
