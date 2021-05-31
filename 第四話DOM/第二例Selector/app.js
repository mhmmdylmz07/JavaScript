const para = document.getElementById("tokyo");
console.log(tokyo);
para.style.backgroundColor = "blue";
para.style.color = "white";
para.style.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "130px";
buton.style.height = "30px";
buton.style.backgroundColor = "yellow";
buton.style.color = "red";
buton.style.borderRadius = "70px";
buton.style.fontSize = "18px";

const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "200px";
resim[1].style.border = "3px solid black";

const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";
//?=================================================================
const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM Selector💋";

const bo = document.querySelector("#body");
bo.style.backgroundImage = "linear-gradient(pink,red)";
//?================================================================
const header = document.querySelector(".h1");
const eskirenk = header.style.color;

document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "blue";
  h1.style.backgroundColor = "yellow";
};
document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = eskirenk;
  h1.style.backgroundColor = "transParent";
};
//?=================================================================================
document.querySelector("#btn").addEventListener("mouseover", function () {
  document.querySelector("#btn").style.width = "350px";
});
document.querySelector("#btn").addEventListener("mouseout", function () {
  document.querySelector("#btn").style.width = "150px";
});
//?===============================================================================
