let login = document.getElementById("btn-login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("haha");
  let email = loginform.email.value;
  let password = loginform.password.value;
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
    } else {
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        window.location.href = "http://localhost:300/admin";
      }, 3000);
    }
  }
});
