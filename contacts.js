
function myFunction() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var subject = document.getElementById("subject").value;
    var msg = document.getElementById("msg").value;

    alert('FIRST NAME : ' + fname + "\r\n" + 'LAST NAME : ' + lname + "\r\n"+ 'E-MAIL : ' + mail + "\r\n"+ 'SUBJECT : ' + subject + "\r\n"+ 'MESSAGE : ' + msg);
}

function Function() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

        

