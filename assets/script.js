document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gameInput = document.querySelector('input[name="game"]:checked');
  const game = gameInput ? gameInput.value : "";
  const id = document.getElementById("id").value;
  const nominal = document.getElementById("nominal").value;
  const payment = document.getElementById("payment").value;
  const name = document.getElementById("name").value;

  const pesan = `🛒 Pesanan Top Up\nGame: ${game}\nID: ${id}\nNominal: ${nominal}\nPembayaran: ${payment}\nNama: ${name}`;
  const nomorAdmin = "6285713056206"; // nomor WA pakai kode negara
  const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
