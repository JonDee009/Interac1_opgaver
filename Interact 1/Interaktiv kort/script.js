document.addEventListener("DOMContentLoaded", function () {
  var divKassePunkt1 = document.querySelector("#DivKassePunkt1");
  var divKassePunkt2 = document.querySelector("#DivKassePunkt2");
  var pTag1 = document.querySelector("#PTag1");
  var pTag2 = document.querySelector("#PTag2");

  divKassePunkt1.addEventListener("mouseover", function (vispunkt1info) {
    pTag1.style.display = "block";
  });

  divKassePunkt1.addEventListener("mouseout", function (gempunkt1info) {
    pTag1.style.display = "none";
  });

  divKassePunkt2.addEventListener("mouseover", function (vispunk2info) {
    pTag2.style.display = "block";
  });

  divKassePunkt2.addEventListener("mouseout", function (gempunkt2info) {
    pTag2.style.display = "none";
  });
});

function vispunkt1info()
{
	document.querySelector("#PTag1").style.display = 'inline-block';
}
function gempunkt1info()
{
	document.querySelector("#PTag1").style.display = 'none';
}

function vispunkt2info()
{
	document.querySelector("#PTag2").style.display = 'inline-block';
}
function gempunkt2info()
{
	document.querySelector("#PTag2").style.display = 'none';
}