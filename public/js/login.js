const api = "http://localhost:3000";

const login = document.getElementById("btn-login");
let dk = document.getElementById("btn-dk");

// dieu huong register
dk.addEventListener("click", (e) => {
  window.location.href = api + "/register";
});
login.addEventListener("click", (e) => {
  e.preventDefault();

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
    .then((data) => {
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        window.location.href = api;
      }, 3000);
    })
    .catch((err) => console.log(err));
});
