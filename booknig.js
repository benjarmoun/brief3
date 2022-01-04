var typ = 0;
var boite = 0;
var carbu = 0;
var prix = 1;
let type = [
  "moto",
  "citadine",
  "compact",
  "berline",
  "utilitaire",
  "engin de chantier",
  "camion",
];
let bav = ["manuelle", "automatique"];
let carburant = ["electrique", "hybride", "essence", "diesel"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");
let slct3 = document.getElementById("slct3");

type.forEach(function addtype(item) {
  let option = document.createElement("option");
  option.text = item;
  option.value = item;
  slct1.appendChild(option);
});

slct1.onchange = function () {
  slct2.innerHTML = "<option></option>";
  if (this.value === "moto") {
  }
  if (this.value === "citadine") {
    slct2.innerHTML = "<option>manuelle</option>";
  }
  if (this.value === "compact") {
    slct2.innerHTML = "<option>manuelle</option>";
  }
  if (this.value === "berline") {
    slct2.innerHTML = "<option>auto</option>";
  }
  if (this.value === "utilitaire") {
    slct2.innerHTML = "<option>manuelle</option>";
  }
  if (this.value === "engin de chantier") {
    slct2.innerHTML = "<option>manuelle</option>";
  }
  if (this.value === "camion") {
    slct2.innerHTML = "<option>automatique</option>";
  }

  slct3.innerHTML = "<option></option>";
  if (this.value === "moto") {
    slct3.innerHTML =
      "<option>electrique</option><option>essence</option>";

  }
  if (this.value === "citadine") {
    slct3.innerHTML =
      "<option>electrique</option><option>essence</option><option>hybride</option><option>gasoil</option>";

  }
  if (this.value === "compact") {
    slct3.innerHTML =
      "<option>essence</option><option>gasoil</option><option>hybride</option>";

  }
  if (this.value === "berline") {
    slct3.innerHTML =
      "<option>essence</option><option>gasoil</option><option>hybride</option>";

  }
  if (this.value === "utilitaire") {
    slct3.innerHTML = "<option>gasoil</option>";
  }
  if (this.value === "engin de chantier") {
    slct3.innerHTML = "<option>gasoil</option><option>essence</option>";

  }
  if (this.value === "camion") {
    slct3.innerHTML = "<option>gasoil</option>";
  }
};

function addtoslct2(arr) {
  arr.forEach(function (item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option);
  });
}


  function myFunction() {
    var ndays = document.getElementById("ndays").value;
    var tp = document.getElementById("slct1").value;
    console.log(tp);
    var crb = document.getElementById("slct3").value;
    var bv = document.getElementById("slct2").value;

    if (tp === "moto") {
        typ = 10;
    } else
    if (tp === "citadine") {
        typ = 12;
    } else
    if (tp === "compact") {
        typ = 14;
    } else
    if (tp === "berline") {
        typ = 20;
    } else
    if (tp === "utilitaire") {
        typ = 16;
    } else
    if (tp === "engin de chantier") {
        typ = 900;
    } else
    if (tp === "camion") {
        typ = 250;
    }

    if (bv === "automatique") {
        boite = 19;
    }

    if (crb === "electrique") {
        carbu = 5;
    }
    if (crb === "hybride") {
        carbu = 9;
    }
    if (crb === "essence") {
        carbu = 14;
    }
    if (crb === "gasoil") {
        carbu = 21;
    }
    
    var prix = ndays * (typ + (typ * boite / 100) + (typ * carbu / 100));

    alert("prix : " + prix + "\r\n" + 'ndays : ' + ndays + "\r\n"+ 'typ : ' + typ + "\r\n"+ 'carbu : ' + carbu);
    document.getElementById("demo").innerHTML = prix;
  }
  