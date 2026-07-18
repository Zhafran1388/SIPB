# SIPB - Sistem Informasi Perikanan Budidaya 🐟

Aplikasi berbasis web yang dikembangkan untuk mendigitalisasi, memantau, dan melakukan rekapitulasi data sektor perikanan budidaya di wilayah Kabupaten Sumenep. Proyek ini dibuat dan diimplementasikan selama masa Praktek Kerja Lapangan (PKL) di **Dinas Perikanan Kabupaten Sumenep**.

## 🚀 Fitur Utama
* **Dashboard Interaktif:** Menampilkan metrik utama seperti total produksi (ton), jumlah tambak aktif, petani terdaftar, dan jumlah komoditas secara *real-time*.
* **Visualisasi Data:** Grafik perkembangan produksi bulanan untuk mempermudah analisis tren produksi.
* **Komoditas Unggulan:** Pemetaan daftar komoditas dengan hasil produksi tertinggi (Udang Vaname, Ikan Bandeng, Ikan Lele, dll).
* **Manajemen Data (CRUD):** Pengelolaan data ikan, lokasi tambak, laporan periodik, dan data petani.

## 🛠️ Teknologi yang Digunakan
* **Frontend:** HTML5, CSS3, JavaScript (Responsive Web Design)
* **Visualisasi Grafik:** Chart.js / CSS Custom Graphs
* **Penyimpanan Data:** JavaScript Arrays & Local Storage / Database *(sesuaikan dengan backend kamu)*

---

# 📘 PANDUAN — SIPB (Sistem Informasi Perikanan & Budidaya)

## 🗂 Struktur File Proyek
```
dinas-perikanan/
├── index.html   → Struktur halaman (HTML)
├── style.css    → Tampilan / desain (CSS)
├── app.js       → Logika program (JavaScript)
└── README.md    → Panduan ini
```
Alur Kerja Aplikasi

```

index.html (tampilan)
    ↓ memanggil
style.css (mengatur gaya/warna)
    ↕
app.js (menyimpan data & logika)
    ↓ contoh alur:
Klik "+ Tambah Ikan"
    → openModal('modal-ikan')        [buka popup]
    → isi form → klik Simpan
    → tambahIkan()                   [validasi data]
    → dataIkan.push({...})           [simpan ke array]
    → renderIkan()                   [tampilkan ulang tabel]
    → closeModal('modal-ikan')       [tutup popup]
    → showToast("✓ Berhasil")        [notifikasi]
``` 

