# AI CONTEXT
Version: 1.0.0

---

# Project

Project Name

D'CrunchyWan POS v3

Purpose

Membangun ulang aplikasi Point of Sale (POS) D'CrunchyWan yang sebelumnya dibuat menggunakan Google AppSheet menjadi aplikasi Progressive Web App (PWA) modern yang lebih cepat, stabil, dan dapat digunakan secara offline.

Target utama bukan membuat POS generik, tetapi membangun sistem terbaik untuk operasional D'CrunchyWan.

---

# Tech Stack

Frontend

- Vanilla HTML
- Vanilla CSS
- Vanilla JavaScript (ES Modules)
- Vite

Backend

- Supabase

Database

- PostgreSQL

Hosting

- Cloudflare Pages

Offline

- IndexedDB
- Service Worker

---

# Development Philosophy

Project menggunakan pendekatan:

Business Driven Development

Seluruh keputusan teknis harus mengikuti kebutuhan operasional toko.

Hindari over-engineering.

Apabila solusi sederhana sudah memenuhi kebutuhan, gunakan solusi tersebut.

---

# UI Philosophy

Layout mengikuti aplikasi AppSheet yang telah digunakan lebih dari dua tahun.

Prioritas:

1. Familiar bagi kasir.
2. Cepat digunakan.
3. Responsive.
4. Modern tetapi tidak mengubah alur kerja.

---

# Target Device

Prioritas:

1. Tablet Android Landscape
2. Desktop
3. Mobile Portrait

---

# Offline First

Kasir harus tetap dapat melakukan transaksi tanpa koneksi internet.

Sinkronisasi dilakukan ketika internet tersedia kembali.

---

# Coding Principle

- Clean Code.
- Modular.
- Reusable.
- Jangan membuat fungsi yang belum dibutuhkan.
- Hindari dependency yang tidak diperlukan.

---

# UI Principle

Kasir lebih penting daripada estetika.

Button besar.

Jarak antar tombol nyaman.

Popup seminimal mungkin.

Loading seminimal mungkin.

Navigasi mudah dipahami.

---

# Business Principle

Satu transaksi dapat terdiri dari beberapa Business Unit.

Void hanya diperbolehkan pada transaksi terakhir.

Digital Receipt digunakan sebagai pengganti printer.

Satu Shift operasional.

Satu QRIS.

Dashboard mengikuti kebutuhan Owner.

---

# Golden Rule

Jika terdapat dua solusi:

Pilih solusi yang:

- lebih sederhana,
- lebih mudah dipelihara,
- lebih mudah dipahami,
- lebih cepat digunakan kasir.