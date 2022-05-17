function masukkan(operasi){
	document.hasilhitung.kotak.value = document.hasilhitung.kotak.value + operasi;
}

function samadengan(){
	var hasil = document.hasilhitung.kotak.value;
	document.hasilhitung.kotak.value = eval(hasil);
}

function hapushasil(){
	document.hasilhitung.kotak.value = "";
}

function hapus(){
	var hasil = document.hasilhitung.kotak.value;
	document.hasilhitung.kotak.value = hasil.substring(0,hasil.length-1);
}