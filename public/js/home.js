let login = document.getElementById("btn-login");
let info = document.getElementById("info");
let edit = document.getElementById("edit-user");
let update = document.getElementById("update");

login.addEventListener("click", (e) => {
  window.location.href = "http://localhost:3000/login";
});

info.addEventListener("click", (e) => {
  edit.style.display = "block";
});

update.addEventListener("click", (e) => {
  setTimeout(() => {
    window.location.href = "http://localhost:3000/user-info";
  }, 1000);
});
