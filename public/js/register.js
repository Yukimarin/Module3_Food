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
  }
});
