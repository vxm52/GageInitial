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
      document.getElementById("recordBehaviorTab1").style.display = "";
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
      document.getElementById("recordBehaviorTab2").style.display = "";
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
      document.getElementById("recordBehaviorTab3").style.display = "";
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

function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "";
  if(tabName == "studentListTab1")
  {
    document.getElementById("studentListButton1").classList.add("selectedTab");
    document.getElementById("recordBehaviorButton1").classList.remove("selectedTab");
  }
  else if(tabName == "recordBehaviorTab1")
  {
    document.getElementById("recordBehaviorButton1").classList.add("selectedTab");
    document.getElementById("studentListButton1").classList.remove("selectedTab");
  }

  if(tabName == "studentListTab2")
  {
    document.getElementById("studentListButton2").classList.add("selectedTab");
    document.getElementById("recordBehaviorButton2").classList.remove("selectedTab");
  }
  else if(tabName == "recordBehaviorTab2")
  {
    document.getElementById("recordBehaviorButton2").classList.add("selectedTab");
    document.getElementById("studentListButton2").classList.remove("selectedTab");
  }

  if(tabName == "studentListTab3")
  {
    document.getElementById("studentListButton3").classList.add("selectedTab");
    document.getElementById("recordBehaviorButton3").classList.remove("selectedTab");
  }
  else if(tabName == "recordBehaviorTab3")
  {
    document.getElementById("recordBehaviorButton3").classList.add("selectedTab");
    document.getElementById("studentListButton3").classList.remove("selectedTab");
  }
}

// **********   BEHAVIOR COUNTERS  *************//
//
// //Out of Seat Counter
//
// //Create one dimensional array
// var p = new Array(2);
//
// //Loop to create 2D array using 1D array
// for (var i = 0; i < p.length; i++)
// {
//   p[j] = new Array(2);
// }
//
// var h = 0;
//
// //Loop to create 2D array elements
// for (var i = 0; i < 2; i++)
// {
//   for (var j = 0; j < 2>; j++)
//   {
//     p[i][j] = h++;
//   }
// }


function student (varName, name, classNumber, outOfSeat, talkedOutOfTurn, staredAway)
{
  this.varName = varName;
  this.name = name;
  this.classNumber= classNumber;
  this.outOfSeat = outOfSeat;
  this.talkedOutOfTurn = talkedOutOfTurn;
  this.staredAway = staredAway;
}

var studentArray = [];

var johnnyRicka = new student ("johnnyRicka", "Johnny Ricka", 1, 0, 0, 0);
studentArray.push(johnnyRicka);
var kyleeOkei = new student ("kyleeOkei", "Kylee Okei", 1, 0, 0, 0);
studentArray.push(kyleeOkei);
var odenOdentra = new student ("odenOdentra", "Oden Odentra", 1, 0, 0, 0);
studentArray.push(odenOdentra);

var samuelJackson = new student ("samuelJackson", "Samuel L. Jackson", 2, 0, 0, 0);
studentArray.push(samuelJackson);
var alaska = new student ("alaska", "Alaska", 2, 0, 0, 0);
studentArray.push(alaska);
var cristianoRonaldo = new student ("cristianoRonaldo", "CristianRonaldo", 2, 0, 0, 0);
studentArray.push(cristianoRonaldo);

var souljaBoy = new student ("souljaBoy", "Soulja Boy", 3, 0, 0, 0);
studentArray.push(souljaBoy);
var tupac = new student ("tupac", "Tupac", 3, 0, 0, 0);
studentArray.push(tupac);
var biggie = new student ("biggie", "Biggie", 3, 0, 0, 0);
studentArray.push(biggie);


//Loop for displaying student's names on card header

function displayStudentName()
{
  for (var i = 0; i < student.length; i++)
  {
    document.getElementsByClassName("student" + (i + 1))[0].innerHTML = "" + studentArray[i].name;
  }
}


function addOutOfSeat(studentName) {
  studentName.outOfSeat++; //Add to counter
  console.log(studentName.outOfSeat);
  document.getElementById("outOfSeat-count-" + studentName.varName).innerHTML= "" + studentName.outOfSeat;
}

function addTalkedOutOfTurn(studentName) {
  studentName.talkedOutOfTurn++; //Add to counter
  console.log(studentName.talkedOutOfTurn);
  document.getElementById("talkedOutOfTurn-count-" + studentName.varName).innerHTML= "" + studentName.talkedOutOfTurn;
}

function addStaredAway(studentName) {
  studentName.staredAway++; //Add to counter
  console.log(studentName.staredAway);
  document.getElementById("staredAway-count-" + studentName.varName).innerHTML= "" + studentName.staredAway;
}
displayStudentName();
