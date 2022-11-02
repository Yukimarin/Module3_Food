// let login = document.getElementById("btn-login");
let info = document.getElementById("info");
let edit = document.getElementById("edit-user");
let update = document.getElementById("update");

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
  console.log("haha");
  setTimeout(() => {
    window.location.href = "http://localhost:3000/user-info";
  }, 1000);
});
