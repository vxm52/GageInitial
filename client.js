function logIn() {

  let username = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  if (username == '') {
    alert('Please enter your user name!');
    username.focus(); //mouse automatically move to the input
    return false;
  }
  if (password == '') {
    alert('Please enter your password!');
    password.focus();
    return false;
  }
  if (username != "admin" || password != "123456") {
    alert('User name or Password is wrong');
    username.focus();
    return false;
  }
  //cache
  var arrList = [];
  localStorage.setItem("collecting", JSON.stringify(arrList));
  location.href = "classrooms.html";
}





// Page traversals

function viewClass1()
{
  document.getElementById('homePage').style.display = 'none';
  var hp = document.getElementById("homePage");
  var cr1 = document.getElementById("class1Page");
  if ("none" == cr1.style.display)
  {
      cr1.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
      hp.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
  }
}

function viewClass2()
{
  document.getElementById('homePage').style.display = 'none';
  var hp = document.getElementById("homePage");
  var cr2 = document.getElementById("class2Page");
  if ("none" == cr2.style.display)
  {
      cr2.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
      hp.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
  }
}

function viewClass3()
{
  document.getElementById('homePage').style.display = 'none';
  var hp = document.getElementById("homePage");
  var cr3 = document.getElementById("class3Page");
  if ("none" == cr3.style.display)
  {
      cr3.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
      hp.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
  }
}


function addClassroom()
{
  document.getElementById('homePage').style.display = 'none';
  var hp = document.getElementById("homePage");
  var acr = document.getElementById("addClassroomPage");
  if ("none" == acr.style.display)
  {
      acr.style.display = "block"; //Sets visible on. Cancels the initial "none" style display setting of page 2 div in HTML
      hp.style.display = "none"; //Sets visible off. Sets display style to "none" for page 1 div in HTML
  }
}

function backToHome()
{
  document.getElementById('homePage').style.display = 'none';
  var hp = document.getElementById("homePage");

  var currentPage =["class1Page", "class2Page", "class3Page", "addClassroomPage"];
  var i;
  for(i = 0; i < currentPage.length; i++)
  {
    var status = document.getElementById(currentPage[i]);
    if ("block" == status.style.display)
    {
      hp.style.display = "block";
      status.style.display = "none";
    }
  }
}

function logOut()
{
  location.href = "index.html";
}
