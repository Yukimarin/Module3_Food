let registerPage = document.getElementById("registerPage");

// let alertSuccess = (message) => {
//   return Swal.fire({
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 1500,
//   });
// };

registerPage.addEventListener("click", (e) => {
  e.preventDefault();

  let userName = registerPage.username.value;
  let phone = registerPage.phone.value;
  let address = registerPage.address.value;
  let emailDK = registerPage.email.value;
  let passwordDK = registerPage.password.value;
  let confirmPasswordDK = registerPage.confirmPassword.value;

  //   console.log(userName, phone, address, emailDK, passwordDK, confirmPasswordDK);
  let erruserName = document.getElementById("err-userName");
  let erremail = document.getElementById("err-email");
  let errphone = document.getElementById("err-phone");
  let erraddress = document.getElementById("err-address");
  let errpassword = document.getElementById("err-password");
  let errconfirmPassword = document.getElementById("err-confirmPassword");
  if (userName === "") {
    erruserName.innerHTML = "Username không được bỏ trống";
    erruserName.style.display = "block";
    erruserName.style.color = "red";
  } else {
    if (emailDK === "") {
      erremail.innerHTML = "Email không được bỏ trống";
      erruserName.style.display = "none";
      erremail.style.display = "block";
      erremail.style.color = "red";
    } else {
      if (phone === "") {
        errphone.innerHTML = "Điện thoại không được bỏ trống";
        erruserName.style.display = "none";
        erremail.style.display = "none";
        errphone.style.display = "block";
        errphone.style.color = "red";
      } else {
        if (address === "") {
          erraddress.innerHTML = "Địa chỉ không được bỏ trống";
          erruserName.style.display = "none";
          erremail.style.display = "none";
          errphone.style.display = "none";
          erraddress.style.display = "block";
          erraddress.style.color = "red";
        } else {
          if (passwordDK === "") {
            errpassword.innerHTML = "Mật khẩu không được bỏ trống";
            erruserName.style.display = "none";
            erremail.style.display = "none";
            errphone.style.display = "none";
            erraddress.style.display = "none";
            errpassword.style.display = "block";
            errpassword.style.color = "red";
          } else {
            if (confirmPasswordDK === "") {
              errconfirmPassword.innerHTML = "Bạn cần xác nhận mật khẩu";
              erruserName.style.display = "none";
              erremail.style.display = "none";
              errphone.style.display = "none";
              erraddress.style.display = "none";
              errpassword.style.display = "none";
              errconfirmPassword.style.display = "block";
              errconfirmPassword.style.color = "red";
            } else if (confirmPasswordDK !== passwordDK) {
              errconfirmPassword.innerHTML =
                "Mật khẩu xác nhận không trùng khớp";
              erruserName.style.display = "none";
              erremail.style.display = "none";
              errphone.style.display = "none";
              erraddress.style.display = "none";
              errpassword.style.display = "none";
              errconfirmPassword.style.display = "block";
              errconfirmPassword.style.color = "red";
            } else {
              erruserName.style.display = "none";
              erremail.style.display = "none";
              errphone.style.display = "none";
              erraddress.style.display = "none";
              errpassword.style.display = "none";
              errconfirmPassword.style.display = "none";
              alert("Chúc mừng bạn đăng ký thành công tài khoản");
            }
          }
        }
      }
    }
  }
});
