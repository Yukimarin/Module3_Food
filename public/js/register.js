let submit = document.getElementById("btn-submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let userName = registerPage.username.value;
  let phone = registerPage.phone.value;
  let address = registerPage.address.value;
  let emailDK = registerPage.email.value;
  let passwordDK = registerPage.password.value;
  let confirmPasswordDK = registerPage.confirmPassword.value;
  //   console.log(userName, phone, address, emailDK, passwordDK, confirmPasswordDK);
  let errUserName = document.getElementById("err-userName");
  let errEmail = document.getElementById("err-email");
  let errPhone = document.getElementById("err-phone");
  let errAddress = document.getElementById("err-address");
  let errPassword = document.getElementById("err-password");
  let errConfirm = document.getElementById("err-confirmPassword");
  if (userName === "") {
    errUserName.innerHTML = "Username không được để trống ";
    errUserName.style.display = "block";
    errUserName.style.color = "red";
  } else {
    if (emailDK === "") {
      errEmail.innerHTML = "Mail không được để trống";
      errUserName.style.display = "none";
      errEmail.style.color = "red";
      errEmail.style.display = "block";
    } else {
      if (phone === "") {
        errPhone.innerHTML = "Số điện thoại không được để trống";
        errUserName.style.display = "none";
        errEmail.style.display = "none";
        errPhone.style.color = "red";
        errPhone.style.display = "block";
      } else {
        if (address === "") {
          errAddress.innerHTML = "Địa chỉ không được để trống";
          errUserName.style.display = "none";
          errEmail.style.display = "none";
          errAddress.style.color = "red";
          errPhone.style.display = "none";
          errAddress.style.display = "block";
        } else {
          if (passwordDK === "") {
            errUserName.style.display = "none";
            errEmail.style.display = "none";
            errPhone.style.display = "none";
            errAddress.style.display = "none";
            errPassword.innerHTML = "Mật khẩu không được để trống";
            errPassword.style.display = "block";
            errPassword.style.color = "red";
          } else {
            if (confirmPasswordDK === "") {
              errConfirm.innerHTML = "Cần xác nhận lại mật khẩu";
              errUserName.style.display = "none";
              errEmail.style.display = "none";
              errPhone.style.display = "none";
              errAddress.style.display = "none";
              errPassword.style.display = "none";
              errConfirm.style.color = "red";
              errConfirm.style.display = "block";
            } else if (confirmPasswordDK !== passwordDK) {
              errConfirm.innerHTML = "Mật khẩu xác nhận không khớp";
              errUserName.style.display = "none";
              errEmail.style.display = "none";
              errPhone.style.display = "none";
              errAddress.style.display = "none";
              errPassword.style.display = "none";
              errConfirm.style.color = "red";
              errConfirm.style.display = "block";
            } else {
              errConfirm.style.display = "none";
              Swal.fire({
                icon: "success",
                title: "Chúc mừng bạn đã tạo thành công tài khoản OrderFood",
                showConfirmButton: false,
                timer: 1500,
              });
              // alert("Chúc mừng bạn đã tạo thành công tài khoản OrderFood");
              setTimeout(() => {
                window.location.href = "http://localhost:3000/login";
              }, 1000);
            }
          }
        }
      }
    }
  }
});
