# 📄 Personal Curriculum Vitae & Portfolio Resmi
## Etika Ismatus Zahra
**Data Analyst | Information Systems & Front-End Web Developer**

Sebuah website Curriculum Vitae dan Portofolio Digital formal, modern, elegan, dan bersih yang dibangun secara murni menggunakan **HTML5**, **CSS3**, dan **JavaScript Vanilla**.

---

## 🎨 Konsep Desain & Palet Warna (Full Nuansa Biru Tanpa Abu-abu)

Sesuai standar formal korporat dan teknologi modern, website ini mengusung palet warna biru eksklusif tanpa elemen warna abu-abu:
- **Primary Dark Blue (`#06283D`)**: Digunakan untuk latar belakang sidebar profil utama, heading, dan navigasi.
- **Secondary Accent Blue (`#1363DF`)**: Digunakan untuk tombol utama, indikator aktif, progress bar kompetensi, dan ikon.
- **Soft Blue Tint (`#DFF6FF` & `#3B6998`)**: Latar belakang kartu/kontainer sekunder, garis batas tipis, serta teks pendukung yang berbobot dan kontras tinggi.
- **Pure White (`#FFFFFF`)**: Latar belakang utama kolom kanan untuk kenyamanan membaca (*readability*).
- **Tipografi**: Heading menggunakan **Poppins** (bobot 500, 600, 700, 800) dan teks paragraf menggunakan **Inter** (bobot 300, 400, 500, 600, 700).

---

## 🖥️ Layout Dua Kolom & Responsivitas

1. **Desktop (> 992px)**:
   - **Kolom Kiri (35%)**: Berlatar *Deep Navy* (`#06283D`) yang *sticky*. Memuat foto profil formal (`profile.jpg`) dengan bingkai lingkaran *Ice Blue*, nama lengkap, headline profesi, *quote tagline*, highlight statistik (3 Proyek, 2 Kompetisi, 2 Sertifikasi), tombol aksi cetak CV & kontak, serta informasi kontak resmi (Email & LinkedIn).
   - **Kolom Kanan (65%)**: Berlatar *Pure White* (`#FFFFFF`). Memuat bagian *About Me*, *Areas of Expertise* (6 kartu kompetensi), *Riwayat Pendidikan*, *Technical Skills* (progress bar interaktif), *Pengalaman, Proyek & Sertifikasi* (dengan tab filter dinamis), dan *Kontak Resmi*.
2. **Tablet & Mobile (≤ 992px)**:
   - Berubah menjadi 1 kolom vertikal yang rapi dengan menu hamburger navigasi di bagian atas.

---

## ⚙️ Fitur Interaktif & Teknis

- **Editable Progress Bar**: Menggunakan atribut `data-level="..."` pada elemen HTML sehingga persentase keahlian sangat mudah disesuaikan sendiri. Nilai dianimasikan secara halus saat elemen masuk ke dalam viewport (*IntersectionObserver*).
- **Tab Filter Interaktif**: Filter kategori (*Semua, Kompetisi, Organisasi, Proyek, Sertifikasi*) yang dikendalikan dengan Vanilla JavaScript tanpa memuat ulang halaman.
- **Salin Email Cepat**: Tombol *Salin Email* dengan notifikasi toast berwarna biru elegan yang memberitahukan bahwa alamat email telah tersalin ke clipboard.
- **Siap Cetak PDF (Print-Ready)**: Tombol *Unduh CV* memicu `window.print()` yang didukung oleh aturan `@media print` sehingga otomatis menyembunyikan navigasi dan tombol CTA, menghasilkan layout dokumen formal A4 yang rapi untuk rekruter.
- **Foto Profil dengan Fallback**: Memuat `profile.jpg` langsung dan otomatis menampilkan avatar inisial **"EZ"** jika gambar gagal dimuat.

---

## 🏆 Sorotan Prestasi Kompetisi

- **Juara 2** — Lomba Karya Tulis Ilmiah (KTI) IT Fest Universitas Paramadina (2026)
- **Peserta** — Gayatama International Competition (Kategori UI/UX Design) (2026)

---

## 📂 Struktur Berkas
d:\CV_Etika\
├── index.html       # Struktur semantik HTML5
├── style.css        # Desain layout, palet warna biru & print stylesheet
├── script.js        # Logika interaktif: filter, progress bar, scroll spy, toast, & print
├── profile.jpg      # Foto profil resmi
└── README.md        # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

1. **Buka Langsung**: Klik dua kali pada berkas [**`index.html`**](file:///d:/CV_Etika/index.html) di File Explorer.
2. **Live Server VS Code**: Buka folder `d:\CV_Etika` di Visual Studio Code, klik kanan pada `index.html` lalu pilih **Open with Live Server**.
