// =====================================
// 📦 DATA VARIAN PRODUK
// =====================================

const variants = {

matcha: {

name: "Sushi Oreo",

price: "Rp 10000",

images: [

"images/matcha1.jpg",
"images/matcha2.jpg",
"images/matcha3.jpg"

]

},

choco: {

name: "Sushi Red",

price: "Rp 10000",

images: [

"images/choco1.jpg",
"images/choco2.jpg",
"images/choco3.jpg"

]

}

};

let currentVariant = "matcha";



// =====================================
// 🎯 PILIH VARIAN
// =====================================

function selectVariant(variant) {

currentVariant = variant;

const data = variants[variant];



// Update nama produk

document.getElementById("productName")
.innerText = data.name;



// Update harga

document.getElementById("priceText")
.innerText = data.price;



// Update gambar utama

document.getElementById("mainImage")
.src = data.images[0];



// Update thumbnail

const thumbs =
document.querySelectorAll(".thumb");

thumbs.forEach((img, i) => {

img.src = data.images[i];

});



// Update tombol aktif

document
.querySelectorAll(".variant-btn")
.forEach(btn => {

btn.classList.remove("active");

});



if (variant === "matcha") {

document
.querySelectorAll(".variant-btn")[0]
.classList.add("active");

}



if (variant === "choco") {

document
.querySelectorAll(".variant-btn")[1]
.classList.add("active");

}

}



// =====================================
// 🖼️ CLICK THUMBNAIL
// =====================================

document
.querySelectorAll(".thumb")
.forEach(img => {

img.addEventListener("click", function() {

document
.getElementById("mainImage")
.src = this.src;

});

});



// =====================================
// 🛒 ORDER KE WHATSAPP (PAKAI LINK LU)
// =====================================

function orderNow() {

const data = variants[currentVariant];



// Pesan otomatis

const message =

`Halo, saya ingin pesan:

Produk: Sushi Roll
Varian: ${data.name}
Harga: ${data.price}

Terima kasih.`;



// LINK WA LU

const baseURL =
"https://wa.me/message/YOJJLJO546XKL1";



// Buka WhatsApp

window.open(

baseURL +
"?text=" +
encodeURIComponent(message),

"_blank"

);

}



// =====================================
// 🌸 HUJAN EMOJI SAKURA
// =====================================

function createSakuraEmoji() {

const sakura =
document.createElement("div");

sakura.innerHTML = "🌸";

sakura.style.position = "fixed";

sakura.style.top = "-50px";

sakura.style.left =
Math.random() * window.innerWidth + "px";

const size =
Math.random() * 20 + 16;

sakura.style.fontSize =
size + "px";

sakura.style.pointerEvents = "none";

document.body.appendChild(sakura);



const duration =
Math.random() * 3 + 4;



setTimeout(() => {

sakura.style.transition =
`transform ${duration}s linear`;

sakura.style.transform =
`translateY(${window.innerHeight + 100}px) rotate(360deg)`;

}, 10);



setTimeout(() => {

sakura.remove();

}, duration * 1000);

}



// Jalankan sakura terus

setInterval(

createSakuraEmoji,

60

);
