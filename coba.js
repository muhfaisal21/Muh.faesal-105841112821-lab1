// Fungsi untuk menghitung akar kuadrat dari sebuah bilangan
function hitungAkarKuadrat(bilangan) {
    if (bilangan < 0) {
      throw new Error('Bilangan tidak boleh negatif');
    }
    return Math.sqrt(bilangan);
  }
  
  // Fungsi untuk melakukan pengujian white box
  function testHitungAkarKuadrat() {
    try {
      // Pengujian dengan bilangan positif
      console.assert(hitungAkarKuadrat(4) === 2, 'Pengujian dengan bilangan positif gagal');
  
      // Pengujian dengan bilangan negatif
      let errorTerjadi = false;
      try {
        hitungAkarKuadrat(-1);
      } catch (error) {
        errorTerjadi = true;
      }
      console.assert(errorTerjadi, 'Pengujian dengan bilangan negatif gagal');
  
      // Pengujian dengan bilangan nol
      console.assert(hitungAkarKuadrat(0) === 0, 'Pengujian dengan bilangan nol gagal');
  
      console.log('Semua pengujian berhasil!');
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Jalankan fungsi pengujian
  testHitungAkarKuadrat();