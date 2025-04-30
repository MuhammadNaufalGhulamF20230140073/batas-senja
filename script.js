document.addEventListener("DOMContentLoaded", () => {
    // Buat elemen popup
    const popup = document.createElement("div");
    popup.textContent = "🎵 Selamat datang di halaman Batas Senja!";
    popup.classList.add("popup");

    // Tambahkan popup ke body
    document.body.appendChild(popup);

    // Hapus popup setelah 3 detik
    setTimeout(() => {
        popup.remove();
    }, 3000);
});