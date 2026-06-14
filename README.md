# 📘 PANDUAN LATIHAN — SIPB (Sistem Informasi Perikanan & Budidaya)

## 🗂 Struktur File Proyek

```
dinas-perikanan/
├── index.html   → Struktur halaman (HTML)
├── style.css    → Tampilan / desain (CSS)
├── app.js       → Logika program (JavaScript)
└── README.md    → Panduan ini
```

---

## 🚀 CARA MENJALANKAN DI VSCODE WEB

### Langkah 1 — Buka VSCode Web
- Pergi ke: https://vscode.dev
- Atau download ekstensi **"Live Server"** di VS Code desktop

### Langkah 2 — Buka Folder Proyek
1. Klik `File → Open Folder`
2. Pilih folder `dinas-perikanan`

### Langkah 3 — Jalankan Program
- Klik kanan pada `index.html`
- Pilih **"Open with Live Server"**  
- Browser akan membuka otomatis di `http://localhost:5500`

> **Alternatif:** Buka `index.html` langsung di browser (double click)

---

## 🎯 FITUR YANG BISA DICOBA

| Halaman | Apa yang bisa dilakukan |
|---------|------------------------|
| Dashboard | Lihat statistik, grafik batang, tabel aktivitas |
| Data Ikan | Tambah, edit, hapus, dan cari jenis ikan |
| Tambak & Kolam | Daftarkan tambak baru, ubah status |
| Produksi | Catat hasil panen dengan otomatis kalkulasi |
| Data Petani | Daftarkan pembudidaya, tampil sebagai kartu |
| Laporan | Generate ringkasan laporan |

---

## ✏️ LATIHAN HARIAN — TUGAS UNTUK HARI INI

### 🟢 Level Mudah
1. **Ganti nama kabupaten** di sidebar  
   - File: `index.html`, baris 24  
   - Ganti `Kab. Sidoarjo` dengan nama kabupaten Anda

2. **Ubah warna tema utama**  
   - File: `style.css`, baris 8  
   - Ganti nilai `--blue: #1a6fc4;` dengan warna favorit Anda

3. **Tambah jenis ikan baru**  
   - Buka aplikasi → halaman "Data Ikan" → klik "+ Tambah Ikan"
   - Coba tambahkan: Ikan Gurame, Ikan Mas, Ikan Patin

### 🟡 Level Menengah
4. **Tambah kolom "Stok Benih" di tabel ikan**  
   - Di `index.html`: tambah `<th>Stok Benih</th>` di thead tabel ikan  
   - Di `app.js`: tambah property `stok` di array `dataIkan`  
   - Di fungsi `renderIkan()`: tampilkan data stok di `<td>`

5. **Buat validasi NIK** (harus 16 digit angka)  
   - File: `app.js`, fungsi `tambahPetani()`  
   - Tambahkan sebelum push:
   ```javascript
   if (nik.length !== 16 || isNaN(nik)) {
     showToast("NIK harus 16 digit angka!"); return;
   }
   ```

6. **Hitung otomatis total produksi** saat input produksi baru  
   - Perbarui stat-card di dashboard setelah data berubah

### 🔴 Level Lanjut
7. **Simpan data permanen** — tambahkan data baru langsung 
   di bagian DATA_AWAL di file app.js agar data tidak hilang 
   saat refresh, karena aplikasi ini tidak menggunakan database.
   
8. **Tambah fitur Export CSV** untuk data produksi  
   - Buat fungsi `exportCSV()` yang mengubah array ke format CSV  
   - Buat link download otomatis dengan `URL.createObjectURL`

9. **Buat halaman "Peta Tambak"** dengan koordinat fiktif  
   - Integrasikan Leaflet.js dari CDN  
   - Tampilkan marker untuk tiap tambak

---

## 🐛 CARA MEMPERBAIKI ERROR UMUM

### Error: "Uncaught ReferenceError: xxx is not defined"
**Penyebab:** Fungsi atau variabel belum dideklarasikan  
**Cara fix:**
1. Buka DevTools: tekan `F12` → tab **Console**
2. Lihat baris error yang ditunjuk
3. Pastikan nama fungsi sama persis (huruf besar/kecil penting!)

### Error: Tombol klik tidak bereaksi
**Cek:**
- Apakah `app.js` sudah ter-link di `index.html`? Cari: `<script src="app.js">`
- Apakah nama fungsi di `onclick="namaFungsi()"` cocok dengan yang ada di `app.js`?

### Error: Tampilan CSS tidak berubah
**Cek:**
- Apakah browser cache perlu dikosongkan? Tekan `Ctrl+Shift+R` (hard reload)
- Apakah `style.css` sudah ter-link di `index.html`? Cari: `<link rel="stylesheet" href="style.css"/>`

### Error: Data hilang setelah refresh
**Penyebab:** Data hanya disimpan di memori (variabel JS), bukan di localStorage/database  
**Fix:** Lihat Latihan Level Lanjut no. 7

---

## 🔍 CARA MEMAHAMI KODE

### Alur Kerja Aplikasi
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

### Cara Membaca `renderIkan()`
```javascript
function renderIkan(filter = "") {
  // 1. Filter data berdasarkan pencarian
  const filtered = dataIkan.filter(i =>
    i.nama.toLowerCase().includes(filter.toLowerCase())
  );

  // 2. Ubah array menjadi HTML tabel
  document.getElementById("ikan-tbody").innerHTML =
    filtered.map((ikan, idx) => `
      <tr>
        <td>${idx + 1}</td>         // nomor urut
        <td>${ikan.nama}</td>       // nama ikan
        ...
      </tr>
    `).join("");  // gabungkan semua baris
}
```

---

## 💡 TIPS BELAJAR

1. **Gunakan Console (F12)** untuk debug — `console.log(dataIkan)` sangat membantu
2. **Ubah satu hal kecil dulu**, refresh, lihat hasilnya sebelum ubah yang lain
3. **Baca pesan error** dengan teliti — biasanya menyebutkan file dan baris yang bermasalah
4. **Gunakan Emmet** di VSCode: ketik `table>tr>td*3` lalu tekan Tab untuk buat HTML cepat
5. **Prettier extension** di VSCode untuk merapikan kode otomatis

---

## 📚 REFERENSI BELAJAR LANJUTAN

- HTML/CSS: https://developer.mozilla.org/id/docs/Web
- JavaScript: https://javascript.info  
- CSS Flexbox: https://flexboxfroggy.com (game belajar flex)
- CSS Grid: https://cssgridgarden.com (game belajar grid)

---

*Selamat belajar! 🐟 — SIPB v1.0, Latihan Dinas Perikanan & Budidaya*
