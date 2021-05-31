// const sayi1 = Number(prompt("sayi giriniz"));
// const islem = prompt("islemi giriniz");
// const sayi2 = Number(prompt("sayi2 giriniz"));
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = sayi1 + sayi2;
// } else if (islem == "-") {
//   sonuc = sayi1 - sayi2;
// } else if (islem == "*") {
//   sonuc = sayi1 * sayi2;
// } else if (islem == "/") {
//   sonuc = sayi1 / sayi2;
// } else {
//   alert("yanlis islem yaptiniz");
// }
// console.log(`${sayi1} ${islem} ${sayi2}=${sonuc}`);

// const yas = Number(prompt("yasinizi giriniz"));
// const healt = prompt("sagliklimisiniz h/e");
// const sonuc1 = yas > 18 && healt == "e" ? "askere gitsin" : "askere gidemez";
// console.log(sonuc1);

// const gunNo = +prompt("gun sayisini giriniz");
// switch (gunNo) {
//   case 1:
//     gun = "Pazartesi";
//     break;
//   case 2:
//     gun = "Salı";
//     break;
//   case 3:
//     gun = "Çarşamba";
//     break;
//   case 4:
//     gun = "Perşembe";
//     break;
//   case 5:
//     gun = "Cuma";
//     break;
//   case 6:
//     gun = "Cumartesi";
//     break;
//   case 7:
//     gun = "Pazar";
//     break;
//   default:
//     alert("gun 1-7 arasında olmalıdır");
//     break;
// }
// console.log(`gun adi ${gun}`);
// ?==============================================================================
// const maas = prompt("maasi giriniz");
// const sure = prompt("calisma suresini giriniz");

// const zamli =
//   sure < 5
//     ? maas * 0.1 + maas
//     : sure > 10
//     ? maas * 0.2 + maas
//     : maas * 0.3 + maas;

// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 😎" : "Kredi Alamaz 👀");
// ?===============================================================================
// const sayi = prompt("dngu miktarini yaziniz");
// for (let index = 1; index < sayi; index++) {
//   console.log(`${index}-mehmet`);
// }
// ?==================================================================================
// asal sayi bulmaz icin
// const number = prompt("sayi giriniz");
// let asal = false;
// for (let index = 2; index < number; index++) {
//   if (number % iindex == 0) {
//     asal = false;
//   }
//   asal = true;
// }
// const sonuc = asal ? "asal" : "asal degil";
// console.log(sonuc);
// ?===================================================================
// let not;
// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Giridiğiniz not 0-100 arasındadır");
// ?=======================================================================
// let not;
// not = +prompt("not giriniz");
// while (not < 0 || not > 100) {
//   console.error("girilen not 0-100 arasinda olmalidir");
//   not = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Giridiğiniz not 0-100 arasındadır");
// ?======================================================================

let not1;
let i = 1;
while (true) {
  not1 = prompt(i + ".kisinin notunu giriniz:");
  not1 = not1.toLocaleLowerCase();
  console.log(not1);
  if (not1 == "Q") break;
  i++;
  console.log(Number(not1));
}
