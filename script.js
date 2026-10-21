// Ambil elemen dari halaman
const formLogin = document.getElementById('formLogin');
const inputUser = document.getElementById('username');
const inputPass = document.getElementById('password');
const kotakPesan = document.getElementById('kotakPesan');

// Fungsi menampilkan pesan validasi
function tampilPesan(teks, jenis) {
  kotakPesan.innerHTML = `
    <div class="alert alert-${jenis} alert-dismissible fade show" role="alert">
      ${teks}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;
}

// Fungsi cek format email
function cekEmail(email) {
  const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pola.test(email);
}

// Proses saat formulir dikirim
formLogin?.addEventListener('submit', function(e) {
  // Cegah pengiriman ulang halaman
  e.preventDefault();
  
  // Bersihkan pesan lama
  kotakPesan.innerHTML = '';
  
  let valid = true;
  let pesanError = '';
  
  // Validasi Email / Nama Pengguna
  const nilaiUser = inputUser.value.trim();
  if (nilaiUser === '') {
    valid = false;
    pesanError += '<p>⚠️ Email atau nama pengguna tidak boleh kosong!</p>';
  } else if (nilaiUser.includes('@') && !cekEmail(nilaiUser)) {
    valid = false;
    pesanError += '<p>⚠️ Format email tidak sah! Contoh: nama@gmail.com</p>';
  }
  
  // Validasi Kata Sandi
  const nilaiPass = inputPass.value;
  if (nilaiPass === '') {
    valid = false;
    pesanError += '<p>⚠️ Kata sandi tidak boleh kosong!</p>';
  } else if (nilaiPass.length < 6) {
    valid = false;
    pesanError += '<p>⚠️ Kata sandi harus berisi minimal 6 karakter!</p>';
  }
  
  // Tampilkan hasil
  if (!valid) {
    tampilPesan(pesanError, 'danger');
  } else {
    tampilPesan(
      '<strong>✅ Berhasil!</strong> Selamat datang Afdal 🎉 <br> Anda akan diarahkan ke Beranda...',
      'success'
    );
    // Kosongkan formulir
    formLogin.reset();
    
    // Arahkan ke halaman BERANDA setelah 1,5 detik agar pesan terbaca
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 1500);
  }
});