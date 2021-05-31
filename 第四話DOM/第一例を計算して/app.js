function hesapla() {
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;

  const sonuc = (Math.PI * r * r * h).toFixed(2);
  document.querySelector(".体積").innerHTML = sonuc;
  console.log(sonuc, r, h);
}
const bt = document.querySelector(".btn");
bt.style.color = "red";
bt.style.backgroundColor = "black";
