document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "img/lamba_on.gif";
};

document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
};

document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "img/lamba_on.gif";
});

document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});

document.querySelector(".textbox").onkeyup = function () {
  const textbox = document.querySelector(".textbox");
  const checkbox = document.querySelector(".checkbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const h1Yazi = document.createTextNode("コンピュータープログラミング言語");
h1.appendChild(h1Yazi);
sonDiv.after(h1);
// *sonDiv.before(h1);
h1.style.marginTop = "20px";
h1.style.color = "red";
h1.style.textAlign = "left";

document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".dil").value;
  const liste = document.querySelector(".liste");
  const yenilist = document.createElement("li");
  const yenieleman = document.createTextNode(satir);
  yenilist.appendChild(yenieleman);
  liste.appendChild(yenilist);
};
