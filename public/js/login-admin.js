const api = "http://localhost:3000";
let login = document.getElementById("loginform");

login.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = login.email.value;
  const password = login.password.value;

  let errEmail = document.getElementById("err-email");
  let errPassword = document.getElementById("err-password");
  if (email === "") {
    errEmail.innerHTML = "Email không được để trống ";
    errEmail.style.display = "block";
    errEmail.style.color = "red";
  } else {
    if (password === "") {
      errPassword.innerHTML = "Password không được để trống ";
      errEmail.style.display = "none";
      errPassword.style.display = "block";
      errPassword.style.color = "red";
    }
  }
  let data = {
    email,
    password,
  };

  fetch(api + "/auth/login-admin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      Swal.fire({
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        window.location.href = "http://localhost:3000/admin";
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
    });
});
