let string = "NEGIE1";

let reversed =
  // memotong char terakhir
  // memisahkan setiap char
  // mirror posisi setiap char
  // menyatukan kembali char
  // menambahkan kembali char yang terpotong
  string.slice(0, -1).split("").reverse().join("") + string.slice(-1);

console.log(reversed);
