// import mongoose from "mongoose";
// import User from "../../controllers/auth.controller.js";
const api = "http://localhost:3000";

const login = document.getElementById("btn-login");
let dk = document.getElementById("btn-dk");
let submit = document.getElementById("btn-submit");
// dieu huong register
dk.addEventListener("click", (e) => {
  console.log("hahah");
  window.location.href = "/register";
});
login.addEventListener("click", (e) => {
  const email = document.getElementById("input-email").value;
  const password = document.getElementById("input-pass").value;
  let data = {
    email,
    password,
  };
  fetch(api + "/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

// dieu huong home
submit.addEventListener("click", (e) => {
  console.log("haha");
  window.location.href = "http://localhost:3000/";
});
