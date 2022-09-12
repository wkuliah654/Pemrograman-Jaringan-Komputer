Penjelasan <br>

untuk menjalankan program harus menginstall node.js <br>
cara menjalankan program : <br>
<ol>
	<li>install node.js</li>
	<li>tambahkan alamat lib dari node.js kedalam environmen variable</li>
	<li>buka terminal/cmd</li>
	<li>ketik node server, lalu enter</li>
	<li>buka web browser, ketikan localhost:8000</li>
</ol>

<br><hr><br>

fungsi send() pada file login.ejs <br>
untuk menjalankan perintah pengiriman data ke server. <br>
socket.emit('write') berfungsi untuk menuliskan data username dan password ke dalam file json pada server, data yang di kirim berupa path file json, username, dan password <br>
socket.emit('read') berfungsi untuk menampilkan data dari file json, data yang dikirim berupa path file json <br>

<br>

file data.json digunakan untuk menyimpan data <br>