let selectedItems = [];

function selectItem(element, detail) {
  const isSelected = element.classList.contains('selected');
  if (isSelected) {
    element.classList.remove('selected');
    selectedItems = selectedItems.filter(item => item !== detail);
  } else {
    element.classList.add('selected');
    selectedItems.push(detail);
  }
  updateDetail();
}

function updateDetail() {
  const detailBox = document.getElementById("price-detail");
  const detailList = document.getElementById("detail-list");
  const totalHargaSpan = document.getElementById("total-harga");

  detailList.innerHTML = "";

  if (selectedItems.length > 0) {
    detailBox.style.display = "block";

    let total = 0;
    selectedItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      detailList.appendChild(li);

      const match = item.match(/Rp([\d.]+)/);
      if (match) {
        total += parseInt(match[1].replace(/\./g, ''));
      }
    });

    totalHargaSpan.textContent = "Rp" + total.toLocaleString('id-ID');
  } else {
    detailBox.style.display = "none";
    totalHargaSpan.textContent = "Rp0";
  }
}

document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const gameInput = document.querySelector('input[name="game"]');
  const game = gameInput ? gameInput.value : "";
  const id = document.getElementById("id").value;
  const payment = document.getElementById("payment").value;
  const name = document.getElementById("name").value;

  let total = 0;
  let nominal = "";

  if (selectedItems.length > 0) {
    nominal = selectedItems.join('\n');
    selectedItems.forEach(item => {
      const match = item.match(/Rp([\d.]+)/);
      if (match) {
        total += parseInt(match[1].replace(/\./g, ''));
      }
    });
  }

  const pesan = `🛒 Pesanan Top Up\nGame: ${game}\nID: ${id}\nNominal:\n${nominal}\nTotal: Rp${total.toLocaleString("id-ID")}\nPembayaran: ${payment}\nNama: ${name}`;
  const nomorAdmin = "6285713056206";
  const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");
});
