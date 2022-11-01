let dk = document.getElementById("btn-dk");
let submit = document.getElementById("btn-submit");
// dieu huong register
dk.addEventListener("click", (e) => {
  console.log("hahah");
  window.location.href = "http://localhost:3000/register";
});

// dieu huong home
submit.addEventListener("click", (e) => {
  console.log("haha");
  window.location.href = "http://localhost:3000/";
});
