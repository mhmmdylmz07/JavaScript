// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================
// ! parametresiz yazdirma
// function yazdir() {
//   console.log("muhammed");
// }

// yazdir();

// // ! parameretli cagirma

// function yazdir2(ad, yas) {
//   console.log(`adiniz ${ad} yasiniz ${yas}`);
// }
// yazdir2("mehmet", 23);
// yazdir2("john", 21);
// // ?==========================================================
// function yasHesapla(dogum) {
//   return 2021 - dogum;
// }

// const yas = yasHesapla(1034);
// console.log(yas);

// console.log(yasHesapla(1034));

// // !

// let sayi = prompt("sayinizi giriniz");

// function tekMiciftMi(sayi) {
//   const sonuc = sayi % 2 == 0 ? "cifttir" : "tektir";
//   return sonuc;
// }

// console.log(tekMiciftMi(sayi));

// const tekMiciftMi1 = function (sayi) {
//   return sayi % 2 == 0 ? "cift" : "tek";
// };
// console.log(tekMiciftMi1(5));

// // ? buyuk bulma

// const buyuk = function (x, y, z) {
//   let enbuyuk;
//   if (x > y && x > z) {
//     enbuyuk = x;
//   } else if (y > x && y > z) {
//     enbuyuk = y;
//   } else if (z > x && z > y) {
//     enbuyuk = z;
//   }
//   return enbuyuk;
// };

// console.log(buyuk(3, 5, 29));

//  ust alma

// const taban = prompt("taban giriniz");
// const us = prompt("us griniz");
// const usAl = (t, u) => t ** u;

// console.log(usAl(taban, us));

// const manu = () => {
//   console.log("---------------------------");
//   console.log("         java script       ");
//   console.log("---------------------------");
// };
// manu();

// // const a = (ad, soy, yas) => {
// //   const sonuc = `adim ${ad} soyadim ${soy} yasim ${2021 - yas}`;
// //   return sonuc;
// // };
// // console.log(a("muhammed", "yilmaz", 1589));

// const a = (ad, soy, yas) => `adim ${ad} soyadim ${soy} yasim ${2021 - yas}`;

// console.log(a("muhammed", "yilmaz", 1589));

// const r = prompt("yari capi giriniz");
// const h = prompt("yuksekligi  giriniz");
// const hacimHesapla = (r, h) => Math.PI * r * r * h;
// console.log(`silindirin hacmi: ${hacimHesapla(r, h)}`);
let yas;
for (let index = 1; index < 5; index++) {
  dogum = prompt(index + "dogum tarihini giriniz");
  yas = 2020 - dogum;
  yasortlama(yas);
}
function yasortlama(yas) {}
