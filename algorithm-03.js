/* 
Soal: Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

Contoh Soal:
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
*/

function countWord(arr) {
  let count = 0;
  let output = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     for (let q = 0; q < arr.length; q++) {
  //       if (arr[i] == arr[q]) {
  //         return count++;
  //       }
  //     }
  //     output(count);
  //   }
}

const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

console.log(countWord(input, query));
