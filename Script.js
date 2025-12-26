// Author: H.D.M
// Status: Bucin aktif, logika nonaktif

// 🌸 BUNGA JALAN TERUS
const flowers = document.getElementById("flowers");
const bunga = ["🌸","🌺","🌷","💐"];

function createFlower() {
    const f = document.createElement("div");
    f.className = "flower";
    f.innerText = bunga[Math.floor(Math.random() * bunga.length)];
    f.style.left = Math.random() * 100 + "vw";
    f.style.animationDuration = (5 + Math.random() * 5) + "s";
    flowers.appendChild(f);
    setTimeout(() => f.remove(), 10000);
}
setInterval(createFlower, 400);

// 🎬 OPENING VIDEO CONTROL
const opening = document.getElementById("opening");
const video = document.getElementById("openingVideo");
const card = document.querySelector(".card");
const skipBtn = document.getElementById("skipBtn");

video.onended = masuk;
skipBtn.onclick = masuk;

function masuk() {
    opening.style.display = "none";
    card.classList.remove("hidden");
    video.pause();
}

// fallback
setTimeout(() => {
    if (opening.style.display !== "none") masuk();
}, 9000);

// 💌 BUCIN
function bucin() {
    const pesan = document.getElementById("pesan");
    const kalimat = [
        "Aku pura-pura kuat, padahal butuh pijitan mu.",
        "Kalau kamu error, maka aku lebih eror ayin.",
        "Aku nggak butuh GPS, karna nyasarnya sama sama kamu juga kok.",
        "Logikaku kalah karna kau gk pernah pakek logikaku."
    ];
    pesan.innerText = kalimat[Math.floor(Math.random() * kalimat.length)];
}