document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gameInput = document.querySelector('input[name="game"]:checked');
  const game = gameInput ? gameInput.value : "";
  const id = document.getElementById("id").value;
  const payment = document.getElementById("payment").value;
  const name = document.getElementById("name").value;

  // Ambil detail nominal dari elemen detail harga
  const nominal = document.getElementById("detail-text").textContent;

  // Hitung total harga dari item yang dipilih
  let total = 0;
  selectedItems.forEach(item => {
    const match = item.match(/Rp([\d.]+)/);
    if (match) {
      const angka = parseInt(match[1].replace(/\./g, ''));
      total += angka;
    }
  });

  const pesan = `🛒 Pesanan Top Up\nGame: ${game}\nID: ${id}\nNominal: ${nominal}\nTotal: Rp${total.toLocaleString("id-ID")}\nPembayaran: ${payment}\nNama: ${name}`;
  const nomorAdmin = "6285713056206";
  const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
