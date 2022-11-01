let registerPage = document.getElementById("registerPage");

registerPage.addEventListener("click", (e) => {
  e.preventDefault();
  let info = {
    userName: registerPage.username.value,
    phone: registerPage.phone.value,
    address: registerPage.address.value,
    emailDK: registerPage.email.value,
    passwordDK: registerPage.password.value,
    confirmPasswordDK: registerPage.confirmPassword.value,
  };
  //   console.log(userName, phone, address, emailDK, passwordDK, confirmPasswordDK);
  if (
    (userName === "") &
    (phone === "") &
    (address === "") &
    (emailDK === "") &
    (passwordDK === "") &
    (confirmPasswordDK === "")
  ) {
    errUserName.innerHTML = "Họ và tên không được bỏ trống";
    errEmailDK.innerHTML = "Họ và tên không được bỏ trống";
    errPhone.innerHTML = "Họ và tên không được bỏ trống";
    errPassWord.innerHTML = "Họ và tên không được bỏ trống";
    errAddress.innerHTML = "Họ và tên không được bỏ trống";
    errConfirmPassWord.innerHTML = "Họ và tên không được bỏ trống";
    errUserName.style.display = "block";
  } else {
  }
});

