// fungsi mencari kata terpanjang
function longestWord() {
  let word = sentence.split(" "); // memisahkan kalimat menjadi kata[]
  let longestWord = ""; // (menyimpan) kata terpanjang
  let numbChar = 0; // (menyinpan) jumlah huruf

  // looping index array
  for (let i = 0; i < word.length; i++) {
    // jika panjang kata lebih besar dari jumlah huruf
    if (word[i].length > numbChar) {
      longestWord = word[i];
      numbChar = word[i].length;
    }
  }

  return `${longestWord}: ${numbChar} character`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longestWord(sentence));
