function logIn() {

  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  if (username == '') {
    alert('Please Enter Your User Name!');
    username.focus(); //mouse automatically move to the input
    return false;
  }
  if (password == '') {
    alert('Please Enter Your Password!');
    password.focus();
    return false;
  }
  if (username != "admin" || password != "123456") {
    alert('User Name or Password Is Wrong');
    username.focus();
    return false;
  }
  //cache
  var arrList = [];
  localStorage.setItem("collecting", JSON.stringify(arrList));
  location.href = "main.html";
}
