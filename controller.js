// Fungsi untuk mendapatkan tanggal dan waktu saat ini
function getCurrentDateTime() {
  var currentDateTime = new Date();
  return currentDateTime.toLocaleString();
}

// Fungsi untuk menampilkan tanggal dan waktu pada elemen dengan id "datetime"
function displayDateTime() {
  var datetimeElement = document.getElementById("datetime");
  datetimeElement.textContent = getCurrentDateTime();
}

// Fungsi untuk menampilkan pesan peringatan saat tombol "Click Me" diklik


// Memanggil fungsi displayDateTime saat halaman dimuat
window.onload = function() {
  displayDateTime();
};

function goToReservation() {
  window.location.href = 'form.html';
}
