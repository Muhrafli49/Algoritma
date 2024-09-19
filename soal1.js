// Terdapat string "NEGIE1"
// Silahkan reverse alphabet nya dengan angka tetap diakhir kata
// Hasil = "EIGEN1"

function reverse(string) {
    const letters = string.match(/[A-Za-z]/g).reverse().join('');
    const number = string.match(/\d+/g).join('');
    return letters + number;
}

const result = reverse('NEGIE1');
console.log(result);