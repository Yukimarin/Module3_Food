// let login = document.getElementById("btn-login");
let info = document.getElementById("info");
let edit = document.getElementById("edit-user");
let update = document.getElementById("update");
let purchase = document.getElementById("purchase");
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
    window.location.href = "http://localhost:3000/user-info";
  }, 1000);
});

purchase.addEventListener("click", (e) => {
  // console.log("haha");
  setTimeout(() => {
    window.location.href = "http://localhost:3000/purchase";
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
        window.location.href = "http://localhost:3000/login";
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
giaTri = quantity.innerText;
minus.onclick = function () {
  giaTri = `${Number(giaTri) - 1}`;
  if (giaTri <= 0) {
    giaTri = 0;
    quantity.innerText = giaTri;
  } else {
    quantity.innerText = giaTri;
  }
};
add.onclick = function () {
  giaTri = `${Number(giaTri) + 1}`;
  quantity.innerText = giaTri;
};
// Thêm giỏ hàng
let addBags = document.getElementById("btn-add-bags");
addBags.addEventListener("click");

// scroll to top
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
