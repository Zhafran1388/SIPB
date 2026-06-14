// =============================================
//   SIPB — Sistem Informasi Perikanan & Budidaya
//   app.js — Logika Utama Aplikasi
// =============================================
 
// ===== DATA AWAL LENGKAP =====
const DATA_AWAL = {
  dataIkan: [
    { id: 1, nama: "Udang Vaname",   latin: "Litopenaeus vannamei",  kategori: "Air Payau", musim: "Apr – Okt",       harga: 55000,  stok: 5000 },
    { id: 2, nama: "Ikan Bandeng",   latin: "Chanos chanos",         kategori: "Air Payau", musim: "Mar – Sep",       harga: 28000,  stok: 3200 },
    { id: 3, nama: "Ikan Lele",      latin: "Clarias gariepinus",    kategori: "Air Tawar", musim: "Sepanjang tahun", harga: 22000,  stok: 8000 },
    { id: 4, nama: "Ikan Nila",      latin: "Oreochromis niloticus", kategori: "Air Tawar", musim: "Sepanjang tahun", harga: 25000,  stok: 6500 },
    { id: 5, nama: "Kepiting Bakau", latin: "Scylla serrata",        kategori: "Air Laut",  musim: "Jun – Agt",       harga: 120000, stok: 1200 },
    { id: 6, nama: "Ikan Kerapu",    latin: "Epinephelus sp.",       kategori: "Air Laut",  musim: "Jan – Mei",       harga: 85000,  stok: 2000 },
  ],
  dataTambak: [
    { id: "TBK-001", nama: "Tambak Maju Sejahtera", luas: 3.5, jenis: "Tambak",  pemilik: "Pak Slamet",  desa: "Ds. Kalianget",           status: "Aktif",    lat: -7.0521, lng: 113.9412 },
    { id: "TBK-002", nama: "Kolam Ikan Lestari",    luas: 0.8, jenis: "Kolam",   pemilik: "Bu Siti R.",  desa: "Ds. Batang-Batang",       status: "Aktif",    lat: -6.9876, lng: 114.0234 },
    { id: "TBK-003", nama: "Tambak Berkah Abadi",   luas: 5.2, jenis: "Tambak",  pemilik: "Pak Hendra",  desa: "Ds. Dungkek",             status: "Aktif",    lat: -7.0234, lng: 113.9876 },
    { id: "TBK-004", nama: "Keramba Apung Jaya",    luas: 1.0, jenis: "Keramba", pemilik: "Pak Ridwan",  desa: "Ds. Gapura",              status: "Pending",  lat: -7.0678, lng: 113.9123 },
    { id: "TBK-005", nama: "Tambak Cahaya Timur",   luas: 4.1, jenis: "Tambak",  pemilik: "Bu Nur H.",   desa: "Ds. Lenteng",             status: "Nonaktif", lat: -7.0345, lng: 113.8765 },
  ],
  dataPetani: [
    { id: 1, nama: "Slamet Raharjo",  nik: "3515010101800001", telp: "081234567890", desa: "Ds. Kalianget",           komoditas: "Udang Vaname",  warna: "#0d9e78" },
    { id: 2, nama: "Siti Rahayu",     nik: "3515020203820002", telp: "082345678901", desa: "Ds. Batang-Batang",       komoditas: "Ikan Bandeng",  warna: "#1a6fc4" },
    { id: 3, nama: "Hendra Gunawan",  nik: "3515030105780003", telp: "083456789012", desa: "Ds. Dungkek",             komoditas: "Ikan Lele",     warna: "#d85a30" },
    { id: 4, nama: "Ridwan Santoso",  nik: "3515040208850004", telp: "084567890123", desa: "Ds. Gapura",              komoditas: "Ikan Kerapu",   warna: "#c47c12" },
    { id: 5, nama: "Nur Halimah",     nik: "3515050301790005", telp: "085678901234", desa: "Ds. Lenteng",             komoditas: "Ikan Nila",     warna: "#7c3abd" },
    { id: 6, nama: "Ahmad Fauzi",     nik: "3515060102830006", telp: "086789012345", desa: "Ds. Tarik",               komoditas: "Kepiting Bakau",warna: "#0d9e78" },
  ],
  dataProduksi: [
    { tanggal: "2024-06-01", petani: "Slamet Raharjo",  tambak: "Tambak Maju Sejahtera", ikan: "Udang Vaname",   berat: 1200, harga: 55000  },
    { tanggal: "2024-06-08", petani: "Siti Rahayu",     tambak: "Kolam Ikan Lestari",    ikan: "Ikan Bandeng",   berat: 800,  harga: 28000  },
    { tanggal: "2024-06-14", petani: "Hendra Gunawan",  tambak: "Tambak Berkah Abadi",   ikan: "Ikan Lele",      berat: 650,  harga: 22000  },
    { tanggal: "2024-06-20", petani: "Ridwan Santoso",  tambak: "Keramba Apung Jaya",    ikan: "Ikan Kerapu",    berat: 300,  harga: 85000  },
    { tanggal: "2024-06-25", petani: "Ahmad Fauzi",     tambak: "Tambak Maju Sejahtera", ikan: "Kepiting Bakau", berat: 180,  harga: 120000 },
  ],
  koordinatTambak: [
    { id: "TBK-001", nama: "Tambak Maju Sejahtera", pemilik: "Pak Slamet",  lat: -7.0521, lng: 113.9412, jenis: "Tambak",  status: "Aktif"    },
    { id: "TBK-002", nama: "Kolam Ikan Lestari",    pemilik: "Bu Siti R.",  lat: -6.9876, lng: 114.0234, jenis: "Kolam",   status: "Aktif"    },
    { id: "TBK-003", nama: "Tambak Berkah Abadi",   pemilik: "Pak Hendra",  lat: -7.0234, lng: 113.9876, jenis: "Tambak",  status: "Aktif"    },
    { id: "TBK-004", nama: "Keramba Apung Jaya",    pemilik: "Pak Ridwan",  lat: -7.0678, lng: 113.9123, jenis: "Keramba", status: "Pending"  },
    { id: "TBK-005", nama: "Tambak Cahaya Timur",   pemilik: "Bu Nur H.",   lat: -7.0345, lng: 113.8765, jenis: "Tambak",  status: "Nonaktif" },
  ],
};
 
// ===== VARIABEL DATA AKTIF =====
let dataIkan        = JSON.parse(JSON.stringify(DATA_AWAL.dataIkan));
let dataTambak      = JSON.parse(JSON.stringify(DATA_AWAL.dataTambak));
let dataPetani      = JSON.parse(JSON.stringify(DATA_AWAL.dataPetani));
let dataProduksi    = JSON.parse(JSON.stringify(DATA_AWAL.dataProduksi));
let koordinatTambak = JSON.parse(JSON.stringify(DATA_AWAL.koordinatTambak));
 
const bulanLabel    = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
const produksiBulan = [55, 62, 70, 80, 88, 105, 95, 78, 72, 68, 60, 74];
 
// ===== INISIALISASI =====
document.addEventListener("DOMContentLoaded", () => {
  muatTheme();
  setTanggal();
  renderDashboard();
  renderIkan();
  renderTambak();
  renderProduksi();
  renderPetani();
  populateSelectIkan();
});
 
// ===== NAVIGASI =====
function showPage(nama) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
 
  document.getElementById("page-" + nama).classList.add("active");
  document.getElementById("page-title").textContent = getTitlePage(nama);
 
  const navBtns = document.querySelectorAll(".nav-item");
  navBtns.forEach(btn => {
    if (btn.getAttribute("onclick") === `showPage('${nama}')`) btn.classList.add("active");
  });
 
  if (window.innerWidth <= 768) {
    document.getElementById("sidebar").classList.remove("open");
  }
 
  if (nama === "peta") {
    setTimeout(() => renderPeta(), 100);
  }
}
 
function getTitlePage(nama) {
  const map = {
    dashboard:   "Dashboard",
    "data-ikan": "Data Ikan Budidaya",
    tambak:      "Tambak & Kolam",
    produksi:    "Catatan Produksi",
    petani:      "Data Petani",
    laporan:     "Laporan",
    peta:        "Peta Tambak",
  };
  return map[nama] || nama;
}
 
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
}
 
// ===== TANGGAL =====
function setTanggal() {
  const hari = new Date();
  const opt = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("tanggal").textContent = hari.toLocaleDateString("id-ID", opt);
}
 
// ===== DARK MODE =====
function toggleTheme() {
  const body = document.body;
  const btn  = document.getElementById("theme-btn");
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    btn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}
 
function muatTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.textContent = "☀️";
  }
}
 
// ===== DASHBOARD =====
function renderDashboard() {
  animateCount("stat-produksi", 847);
  animateCount("stat-tambak", dataTambak.length);
  animateCount("stat-petani", dataPetani.length);
  animateCount("stat-ikan", dataIkan.length);
 
  const chartEl  = document.getElementById("bar-chart");
  const labelsEl = document.getElementById("bar-labels");
  const maxVal   = Math.max(...produksiBulan);
  chartEl.innerHTML  = "";
  labelsEl.innerHTML = "";
 
  produksiBulan.forEach((val, i) => {
    const pct = (val / maxVal) * 100;
    const bar = document.createElement("div");
    bar.className  = "bar";
    bar.style.height = "0%";
    bar.title = `${bulanLabel[i]}: ${val} ton`;
    chartEl.appendChild(bar);
    setTimeout(() => { bar.style.height = pct + "%"; }, 100 + i * 40);
 
    const label = document.createElement("div");
    label.className   = "bar-label";
    label.textContent = bulanLabel[i];
    labelsEl.appendChild(label);
  });
 
  const rankEl = document.getElementById("rank-list");
  const top = [
    { nama: "Udang Vaname",   ton: 312 },
    { nama: "Ikan Bandeng",   ton: 198 },
    { nama: "Ikan Lele",      ton: 145 },
    { nama: "Ikan Nila",      ton: 102 },
    { nama: "Kepiting Bakau", ton: 90  },
  ];
  rankEl.innerHTML = top.map((k, i) => `
    <li>
      <span class="rank-num">${i+1}</span>
      <span class="rank-name">${k.nama}</span>
      <span class="rank-ton">${k.ton} ton</span>
    </li>`).join("");
 
  const aktivitas = [
    { tgl: "25 Jun 2024", kegiatan: "Panen Kepiting Bakau",  petani: "Ahmad Fauzi",    lokasi: "Tambak Maju Sejahtera", status: "Selesai" },
    { tgl: "20 Jun 2024", kegiatan: "Panen Ikan Kerapu",     petani: "Ridwan Santoso", lokasi: "Keramba Apung Jaya",    status: "Selesai" },
    { tgl: "15 Jun 2024", kegiatan: "Pendaftaran Tambak",    petani: "Nur Halimah",    lokasi: "Ds. Wonoayu",           status: "Pending" },
    { tgl: "10 Jun 2024", kegiatan: "Panen Ikan Lele",       petani: "Hendra Gunawan", lokasi: "Tambak Berkah Abadi",   status: "Selesai" },
    { tgl: "05 Jun 2024", kegiatan: "Penebaran Benih Udang", petani: "Slamet Raharjo", lokasi: "Tambak Maju Sejahtera", status: "Aktif"   },
  ];
 
  document.getElementById("aktivitas-tbody").innerHTML = aktivitas.map(a => `
    <tr>
      <td>${a.tgl}</td>
      <td>${a.kegiatan}</td>
      <td>${a.petani}</td>
      <td>${a.lokasi}</td>
      <td><span class="badge badge-${a.status.toLowerCase()}">${a.status}</span></td>
    </tr>`).join("");
}
 
function animateCount(id, target) {
  const el   = document.getElementById(id);
  let current = 0;
  const step  = Math.ceil(target / 40);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString("id-ID");
    if (current >= target) clearInterval(timer);
  }, 30);
}
 
// ===== DATA IKAN =====
function renderIkan(filter = "") {
  const filtered = dataIkan.filter(i =>
    i.nama.toLowerCase().includes(filter.toLowerCase())
  );
  document.getElementById("ikan-tbody").innerHTML = filtered.map((ikan, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${ikan.nama}</strong></td>
      <td><em style="color:var(--text-3)">${ikan.latin}</em></td>
      <td>${ikan.kategori}</td>
      <td>${ikan.musim}</td>
      <td>Rp ${ikan.harga.toLocaleString("id-ID")}</td>
      <td>${ikan.stok ? ikan.stok.toLocaleString("id-ID") + " ekor" : "-"}</td>
      <td>
        <button class="btn-sm btn-edit" onclick="editIkan(${ikan.id})">Edit</button>
        <button class="btn-sm btn-delete" onclick="hapusIkan(${ikan.id})">Hapus</button>
      </td>
    </tr>`).join("");
}
 
function filterIkan() {
  renderIkan(document.getElementById("search-ikan").value);
}
 
function tambahIkan() {
  const nama  = document.getElementById("f-ikan-nama").value.trim();
  const latin = document.getElementById("f-ikan-latin").value.trim();
  const kat   = document.getElementById("f-ikan-kategori").value;
  const musim = document.getElementById("f-ikan-musim").value.trim();
  const harga = parseInt(document.getElementById("f-ikan-harga").value);
  const stok  = parseInt(document.getElementById("f-ikan-stok").value) || 0;
 
  if (!nama) { showToast("Nama ikan wajib diisi!"); return; }
  if (!harga || isNaN(harga)) { showToast("Harga harus berupa angka!"); return; }
 
  const newId = dataIkan.length ? Math.max(...dataIkan.map(i => i.id)) + 1 : 1;
  dataIkan.push({ id: newId, nama, latin, kategori: kat, musim, harga, stok });
 
  renderIkan();
  populateSelectIkan();
  closeModal("modal-ikan");
  clearForm(["f-ikan-nama","f-ikan-latin","f-ikan-musim","f-ikan-harga","f-ikan-stok"]);
  showToast(`✓ Ikan "${nama}" berhasil ditambahkan`);
}
 
function hapusIkan(id) {
  if (!confirm("Hapus data ikan ini?")) return;
  const ikan = dataIkan.find(i => i.id === id);
  dataIkan = dataIkan.filter(i => i.id !== id);
  renderIkan();
  showToast(`🗑 Ikan "${ikan.nama}" dihapus`);
}
 
function editIkan(id) {
  const ikan  = dataIkan.find(i => i.id === id);
  const nama  = prompt("Edit nama ikan:", ikan.nama);
  if (nama === null) return;
  const harga = prompt("Edit harga per kg (Rp):", ikan.harga);
  if (harga === null) return;
  ikan.nama  = nama.trim() || ikan.nama;
  ikan.harga = parseInt(harga) || ikan.harga;
  renderIkan();
  showToast(`✓ Data ikan "${ikan.nama}" diperbarui`);
}
 
// ===== DATA TAMBAK =====
function renderTambak() {
  document.getElementById("tambak-tbody").innerHTML = dataTambak.map(t => `
    <tr>
      <td><code>${t.id}</code></td>
      <td><strong>${t.nama}</strong></td>
      <td>${t.luas} ha</td>
      <td>${t.jenis}</td>
      <td>${t.pemilik}</td>
      <td>${t.desa}</td>
      <td><span class="badge badge-${t.status.toLowerCase()}">${t.status}</span></td>
      <td>
        <button class="btn-sm btn-edit" onclick="editStatusTambak('${t.id}')">Status</button>
        <button class="btn-sm btn-delete" onclick="hapusTambak('${t.id}')">Hapus</button>
      </td>
    </tr>`).join("");
}
 
function tambahTambak() {
  const nama    = document.getElementById("f-tambak-nama").value.trim();
  const luas    = parseFloat(document.getElementById("f-tambak-luas").value);
  const jenis   = document.getElementById("f-tambak-jenis").value;
  const pemilik = document.getElementById("f-tambak-pemilik").value.trim();
  const desa    = document.getElementById("f-tambak-desa").value.trim();
  const lat     = parseFloat(document.getElementById("f-tambak-lat").value);
  const lng     = parseFloat(document.getElementById("f-tambak-lng").value);
 
  if (!nama || !pemilik) { showToast("Nama tambak dan pemilik wajib diisi!"); return; }
 
  const newId = "TBK-" + String(dataTambak.length + 1).padStart(3, "0");
  dataTambak.push({ id: newId, nama, luas: luas || 0, jenis, pemilik, desa, status: "Aktif", lat, lng });
 
  if (lat && lng) {
    koordinatTambak.push({ id: newId, nama, pemilik, lat, lng, jenis, status: "Aktif" });
  }
 
  renderTambak();
  closeModal("modal-tambak");
  clearForm(["f-tambak-nama","f-tambak-luas","f-tambak-pemilik","f-tambak-desa","f-tambak-lat","f-tambak-lng"]);
  showToast(`✓ Tambak "${nama}" berhasil didaftarkan`);
}
 
function hapusTambak(id) {
  if (!confirm("Hapus data tambak ini?")) return;
  const t = dataTambak.find(x => x.id === id);
  dataTambak      = dataTambak.filter(x => x.id !== id);
  koordinatTambak = koordinatTambak.filter(x => x.id !== id);
  renderTambak();
  showToast(`🗑 Tambak "${t.nama}" dihapus`);
}
 
function editStatusTambak(id) {
  const t        = dataTambak.find(x => x.id === id);
  const statuses = ["Aktif", "Pending", "Nonaktif"];
  const idx      = statuses.indexOf(t.status);
  t.status       = statuses[(idx + 1) % statuses.length];
  const k = koordinatTambak.find(x => x.id === id);
  if (k) k.status = t.status;
  renderTambak();
  showToast(`✓ Status "${t.nama}" → ${t.status}`);
}
 
// ===== PRODUKSI =====
function renderProduksi() {
  document.getElementById("produksi-tbody").innerHTML = dataProduksi.map(p => `
    <tr>
      <td>${formatTanggal(p.tanggal)}</td>
      <td>${p.petani}</td>
      <td>${p.tambak}</td>
      <td>${p.ikan}</td>
      <td>${p.berat.toLocaleString("id-ID")} kg</td>
      <td>Rp ${p.harga.toLocaleString("id-ID")}</td>
      <td><strong>Rp ${(p.berat * p.harga).toLocaleString("id-ID")}</strong></td>
    </tr>`).join("");
}
 
function tambahProduksi() {
  const tgl    = document.getElementById("f-prod-tanggal").value;
  const petani = document.getElementById("f-prod-petani").value.trim();
  const tambak = document.getElementById("f-prod-tambak").value.trim();
  const ikan   = document.getElementById("f-prod-ikan").value;
  const berat  = parseInt(document.getElementById("f-prod-berat").value);
  const harga  = parseInt(document.getElementById("f-prod-harga").value);
 
  if (!tgl || !petani || !berat) { showToast("Lengkapi semua field!"); return; }
 
  dataProduksi.unshift({ tanggal: tgl, petani, tambak, ikan, berat, harga: harga || 0 });
  renderProduksi();
  closeModal("modal-produksi");
  clearForm(["f-prod-tanggal","f-prod-petani","f-prod-tambak","f-prod-berat","f-prod-harga"]);
  showToast(`✓ Produksi ${berat} kg ${ikan} berhasil dicatat`);
}
 
// ===== PETANI =====
function renderPetani(filter = "") {
  const filtered = dataPetani.filter(p =>
    p.nama.toLowerCase().includes(filter.toLowerCase())
  );
  document.getElementById("petani-grid").innerHTML = filtered.map(p => `
    <div class="petani-card">
      <div class="petani-avatar" style="background:${p.warna}">${initials(p.nama)}</div>
      <div class="petani-nama">${p.nama}</div>
      <div class="petani-info">📍 ${p.desa}</div>
      <div class="petani-info">📞 ${p.telp}</div>
      <div class="petani-tag">${p.komoditas}</div>
    </div>`).join("");
}
 
function filterPetani() {
  renderPetani(document.getElementById("search-petani").value);
}
 
function tambahPetani() {
  const nama      = document.getElementById("f-pet-nama").value.trim();
  const nik       = document.getElementById("f-pet-nik").value.trim();
  const telp      = document.getElementById("f-pet-telp").value.trim();
  const desa      = document.getElementById("f-pet-desa").value.trim();
  const komoditas = document.getElementById("f-pet-komoditas").value;
  const lat       = parseFloat(document.getElementById("f-pet-lat").value);
  const lng       = parseFloat(document.getElementById("f-pet-lng").value);
 
  if (!nama) { showToast("Nama petani wajib diisi!"); return; }
  if (nik.length !== 16 || isNaN(nik)) { showToast("❌ NIK harus 16 digit angka!"); return; }
 
  const warna = ["#0d9e78","#1a6fc4","#d85a30","#c47c12","#7c3abd"][dataPetani.length % 5];
  const newId = dataPetani.length ? Math.max(...dataPetani.map(p => p.id)) + 1 : 1;
  dataPetani.push({ id: newId, nama, nik, telp, desa, komoditas, warna, lat, lng });
 
  if (lat && lng) {
    koordinatTambak.push({ id: "PTN-" + newId, nama, pemilik: komoditas, lat, lng, jenis: "Petani", status: "Aktif" });
  }
 
  renderPetani();
  closeModal("modal-petani");
  clearForm(["f-pet-nama","f-pet-nik","f-pet-telp","f-pet-desa","f-pet-lat","f-pet-lng"]);
  showToast(`✓ Petani "${nama}" berhasil didaftarkan`);
}
 
// ===== LAPORAN =====
function generateLaporan() {
  const tahun = document.getElementById("lap-tahun").value;
  const bulan = document.getElementById("lap-bulan").value;
  const jenis = document.getElementById("lap-jenis").value;
 
  let html = `<div style="margin-bottom:12px"><strong>${jenis}</strong> — ${bulan || "Semua Bulan"} ${tahun}</div>`;
  html += `<div class="lap-row"><span>Total Produksi</span><span class="lap-total">847 ton</span></div>`;
  html += `<div class="lap-row"><span>Jumlah Petani Aktif</span><span>${dataPetani.length} orang</span></div>`;
  html += `<div class="lap-row"><span>Jumlah Tambak</span><span>${dataTambak.filter(t=>t.status==="Aktif").length} lokasi</span></div>`;
  html += `<div class="lap-row"><span>Komoditas Terbanyak</span><span>Udang Vaname</span></div>`;
  html += `<div class="lap-row"><span>Nilai Produksi (Est.)</span><span class="lap-total">Rp 42,6 Miliar</span></div>`;
 
  document.getElementById("laporan-output").innerHTML = html;
  showToast("✓ Laporan berhasil dibuat");
}
 
// ===== EXPORT CSV =====
function exportCSV() {
  if (dataProduksi.length === 0) { showToast("❌ Tidak ada data produksi!"); return; }
 
  const header = ["No","Tanggal","Petani","Tambak","Jenis Ikan","Berat (kg)","Harga/kg (Rp)","Total (Rp)"];
 
  const baris = dataProduksi.map((p, i) => [
    i + 1,
    formatTanggal(p.tanggal),
    p.petani, p.tambak, p.ikan,
    p.berat, p.harga,
    p.berat * p.harga
  ]);
 
  const totalBerat = dataProduksi.reduce((sum, p) => sum + p.berat, 0);
  const totalNilai = dataProduksi.reduce((sum, p) => sum + (p.berat * p.harga), 0);
  const barisTotal = ["","","","","TOTAL", totalBerat, "", totalNilai];
 
  const isiCSV = [header, ...baris, barisTotal].map(b => b.join(";")).join("\n");
  const BOM    = "\uFEFF";
  const blob   = new Blob([BOM + isiCSV], { type: "text/csv;charset=utf-8;" });
  const url    = URL.createObjectURL(blob);
  const link   = document.createElement("a");
  link.href     = url;
  link.download = `produksi-perikanan-${new Date().toISOString().slice(0,10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("✅ Data berhasil diexport ke Excel!");
}
 
// ===== PETA TAMBAK =====
let mapInstance = null;
 
function warnaMarker(status) {
  if (status === "Aktif")   return "#0d9e78";
  if (status === "Pending") return "#c47c12";
  return "#d85a30";
}
 
function renderPeta() {
  if (mapInstance) { mapInstance.remove(); mapInstance = null; }
 
  mapInstance = L.map("map").setView([-7.0521, 112.7188], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(mapInstance);
 
  koordinatTambak.forEach(t => {
    const warna = warnaMarker(t.status);
    const icon  = L.divIcon({
      className: "",
      html: `<div style="background:${warna};width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.4);"></div>`,
      iconSize: [14, 14], iconAnchor: [7, 7]
    });
    L.marker([t.lat, t.lng], { icon }).addTo(mapInstance).bindPopup(`
      <div style="font-family:'Sora',sans-serif;min-width:180px;">
        <strong style="font-size:14px">${t.nama}</strong><br/>
        <span style="font-size:12px;color:#666">${t.id} · ${t.jenis}</span><br/><br/>
        <span style="font-size:13px">👤 ${t.pemilik}</span><br/>
        <span style="font-size:13px">📍 ${t.status}</span>
      </div>`);
  });
 
  const legenda = L.control({ position: "bottomright" });
  legenda.onAdd = () => {
    const div = L.DomUtil.create("div");
    div.style.cssText = "background:white;padding:10px;border-radius:8px;font-family:'Sora',sans-serif;font-size:12px;box-shadow:0 2px 8px rgba(0,0,0,0.2)";
    div.innerHTML = `
      <strong style="display:block;margin-bottom:6px">Keterangan</strong>
      <span style="color:#0d9e78">● </span> Aktif<br/>
      <span style="color:#c47c12">● </span> Pending<br/>
      <span style="color:#d85a30">● </span> Nonaktif`;
    return div;
  };
  legenda.addTo(mapInstance);
}
 
// ===== HELPER =====
function populateSelectIkan() {
  ["f-prod-ikan","f-pet-komoditas"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = dataIkan.map(i => `<option>${i.nama}</option>`).join("");
  });
}
 
function openModal(id)  { document.getElementById(id).classList.add("open"); }
function closeModal(id) { document.getElementById(id).classList.remove("open"); }
 
function closeModalOutside(event, id) {
  if (event.target === document.getElementById(id)) closeModal(id);
}
 
function clearForm(ids) {
  ids.forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
}
 
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
 
function formatTanggal(str) {
  if (!str) return "-";
  const d = new Date(str);
  return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
}
 
function initials(nama) {
  return nama.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}