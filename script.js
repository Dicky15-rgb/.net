
const API_URL = 'https://bukaolshop.net/api/v1/produk';
const API_KEY = 'eyJhcHAiOiIxNzQ4MDciLCJhdXRoIjoiMjAyNTA2MDciLCJzaWduIjoicSswd0lQTmxGbFpuZ0tkUW9MMUJmdz09In0='; // Ganti dengan API Key asli

fetch(API_URL, {
  headers: {
    'Authorization': 'Bearer ' + API_KEY
  }
})
.then(response => response.json())
.then(data => {
  const container = document.getElementById('produk-list');
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = '<p>Tidak ada produk tersedia.</p>';
    return;
  }

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${item.nama_barang}</h3>
      <p>Harga: Rp${item.harga}</p>
      <p>${item.deskripsi_singkat || ''}</p>
      <a href="https://wa.me/6281234567890?text=Saya%20ingin%20order%20${encodeURIComponent(item.nama_barang)}" class="btn-order">Order via WA</a>
    `;
    container.appendChild(card);
  });
})
.catch(err => {
  document.getElementById('produk-list').innerHTML = '<p>Gagal memuat data produk.</p>';
  console.error(err);
});
