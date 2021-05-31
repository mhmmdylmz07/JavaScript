// console.log("こんにちは、世界");
// console.log("javascriptよりJava方が易しいです");
// console.error("これは誤りです");
// console.warn("これは警告です");
// // alert kullaniciya bilgi vermek amaclidir
// alert("注意");

//===========degisken tanimlama=======
var pi = 3.14;
console.log(pi);
console.log(typeof pi);

pi = "3";
console.log(pi);
console.log(typeof pi);

pi = true;
console.log(pi);
console.log(typeof pi);

isim = "muhammed";
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

// const pisayisi = 3.14;
// console.log(pisayisi);

// ! asagidak i kod da error verir. consttan degeri degismez. baslangicta bir kere degisir
// !non primitiveler haric ama
// pisayisi = 3;
// console.log(pisayisi);

// ? Eğerki değişkenimzin değerinin değişmesi gerekiyor ise const kullanamayız. Bunun yerine LET kullanabiliriz.
// let block-scope bir degiskendir.Vae ise global-scope tanimlamadir.
// sadece tanimli oldugu alanda gecerlidir(block-scope)yanlizca fonksiyonda disardan ulasilmaz.if ise sadece if
// ama var ole degildir heryerde gecerlidir arasindaki fark budur
// ikisininde degerleri degistirilebilir

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "mustafa";
let isim2 = "muhammed";
let isim3 = `murat`;
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);

const sucuk = 40;
const sakiz = 2;
const cola = 5;
const toplam = sucuk + sakiz + cola;
console.log(toplam, cola);
console.log("toplam fiyat:" + toplam);

const ad = "can";
const soyAd = "canan";
console.log(ad + soyAd);

const s1 = 7,
  s2 = 7;
console.log(s1 + s2);

const s3 = 7,
  s4 = "7";
console.log(s3 + s4);

const isim32 = "mesut";
const yas = "55";
console.log(`benim adim ${isim32} yasim ${yas}`);

const yil = 2021;
const dogumTarihi = 1980;
const yas1 = yil - dogumTarihi;
console.log("yas:" + yas1);
console.log("yas:" + (yil - dogumTarihi));
console.log(`yasim ${yas1}`);

const taban = 2;
const us = 6;
const sonuc = taban ** us;
console.log(sonuc);

// mod alma

const sayi = 123;
console.log(
  "birler: " +
    (sayi % 10) +
    " onlar: " +
    Math.floor((sayi / 10) % 10) +
    " yuzler:" +
    Math.floor(sayi / 100)
);

const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2);

console.log(sayi1 == sayi2);
console.log(sayi1 === sayi2);

const a = null;
const b = undefined;
console.log(b && true && a);
console.log(a && true && b);

// ? ======== TERNARY=========

// * const age = +prompt("yasinizi giriniz"); ceviri islemeri stringi numbere cevir
const name1 = prompt("Adinizi giriniz");
const age = Number(prompt("yasinizi giriniz"));
// console.log(age);
// console.log(typeof age);

age >= 18
  ? console.log(`${name1} ehliyet alabilir `)
  : console.log(`${name1} ehliyet alamaz`);

const x = 41;
console.log(String(x), x);
