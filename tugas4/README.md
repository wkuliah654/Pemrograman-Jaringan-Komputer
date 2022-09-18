Tugas 4 : Encrypt, Decrypt data <br>
<br>
disini saya mencoba menggunakan perintah encrypt sendiri menggunakan cara dari kriptografi (caesar cipher) dan saya simpan di file crypt.js <br>
<br>
rumus perhitungan sistem <br>
jika kunci bernilai integer <br>
encrypt : (index.text + (kunci % panjang_chiperText)) % panjang_chiperText <br>
decrypt : (index.text - (kunci % panjang_chiperText)) % panjang_chiperText <br>
(kunci % panjang_chiperText) => menghindari jumlah kunci yang melebihi panjang_chiperText <br>
<br>
jika kunci bernilai string <br>
encrypt : (index.text + index.kunci) % panjang_chiperText <br>
decrypt : (index.text - index.kunci) % panjang_chiperText <br>
<br><br><br>
data yang sudah di encrypt akan dimasukkan ke dalam json agar dapat di decrypt oleh server <br>
<br>

kekurangan : jika data bernilai angka, maka yang keluar adalah 'undefined'