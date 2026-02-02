
📋 Standar Kualifikasi Vue.js (Balanja.id)
Untuk level magang yang akan dilibatkan ke proyek real, berikut adalah "Menu Wajib" yang biasanya Pa Rezha lihat:

Reactivity Fundamentals: Paham perbedaan ref dan reactive serta kapan menggunakannya.

Component Communication: Mahir mengirim data antar komponen via Props (atas ke bawah) dan Emits (bawah ke atas).

State Management: Mengerti cara kerja Pinia (atau Vuex), karena fitur seperti Shopping Cart di balanja.id mustahil dikelola hanya dengan props.

API Integration: Bisa melakukan fetching data menggunakan Axios atau Fetch API dan menampilkannya secara asinkron.

Vue Router: Paham cara berpindah halaman tanpa reload (SPA).

🛠️ "The 30-Minute Challenge" (Asesmen Mandiri)
Coba buatlah fitur sederhana berikut tanpa melihat tutorial penuh. Jika kamu bisa menyelesaikannya dalam waktu singkat, kamu sudah sangat layak untuk follow-up ke beliau.

Tugas: "Mini Product Dashboard"

Data: Gunakan DummyJSON - Products sebagai sumber API.

Fitur 1: Tampilkan daftar produk (Gambar, Nama, Harga) dalam bentuk Card menggunakan v-for.
task : 
- buat CardDisplay
- Buat CardInput
- Buat Cardlist
- Buat CardItem

Fitur 2: Buat satu komponen terpisah untuk "Product Card". Kirim data produk dari Parent ke Child lewat Props.

Fitur 3: Tambahkan tombol "Tambah ke Keranjang" pada setiap card. Saat diklik, jumlah "Total Keranjang" di bagian atas halaman harus bertambah (Gunakan Emits atau Pinia).

Fitur 4: Tambahkan input pencarian sederhana untuk memfilter daftar produk berdasarkan nama (Gunakan computed properties).