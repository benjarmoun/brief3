function myFunction() {
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


// function populate(s1,s2){
//   var s1 = document.getElementById(s1);
//   var s2 = document.getElementById(s2);
//   // var s3 = document.getElementById(s3);
  

//   s2.innerHTML = "";
//   // s3.innerHTML = "";

//   // if(s1.value == "moto"){
//   //     var optionarray = [''];
//   // }
//   // else 
//   if(s1.value == "citadine"){
//       var optionarray = ['manuelle|Manuelle' , 'auto|Auto'];
//   }
// }