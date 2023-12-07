function hitung() {

    // ambil nilai input
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var sisiA = document.getElementById("sisiA").value; 
    var sisiB = document.getElementById("sisiB").value;
    var sisiC = document.getElementById("sisiC").value;
  
    // hitung luas 
    var luas = alas * tinggi / 2;
  
    // hitung keliling
    var keliling = parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC);
  
    // tampilkan hasil
    var hasil = document.getElementById("hasil");
    hasil.innerHTML = "Luas: " + luas + "<br>Keliling: " + keliling;
  
  }