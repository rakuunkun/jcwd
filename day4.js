// //syntax array
// let things = ['buku','pena','pensil']

// //memanggil semua array
// console.log(things)

// //memanggil array pertama
// //index dimulai dari 0
// //tiap value dibatasi oleh ","
// //jika tdk ada angka, muncul undefined
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// //ganti isi array
// things[0] = "laptop"

// //tambah array
// things[3] = "napkin"
// console.log(things)

// //cek panjang isi array, instead of i > 5; menggunakan i > things.length
// //console.log(things.length)
// //baca panjang isi array pertama, karena string adalah array
// //console.log(things[0].length)

// //memasukan array dr belakang (terakhir)
// things.push('jacket')
// //atau things[things.length] = 'jacket'
// console.log(things)

// //menghapus array dr belakang (terakhir)
// things.pop()
// console.log(things)

// splice:
// let things = ['buku', 'pena', 'pensil', 'baju']

// //2: array keberapa yang mau dimasukin; 0: berapa yang mau dihapus, 
// //kalau 1 = menghapus pensil (dari array 2(yang pertama)); kacamata: yang mau diisi)
// // things.splice(2,0,'kacamata')
// // console.log(things)

// // //1: array keberapa yang mau dimasukin; 2: berapa yang mau dihapus, 
// // //kalau 2 = menghapus pensil dan baju (dari array 2(yang pertama));
// // things.splice(2,2)
// // console.log(things)

// //slice (mengambil pena dan pensil saja; 1: indeks ke-berapa; 3: 3 nya ga masuk)
// //harus buat variabel baru (newThings)
// let newThings = things.slice(1,3)
// console.log(newThings)

// //kalau mau ambil sampai ending
// let newThings = things.slice(1)

// let angka = 23457

// console.log(angka)

// angka = angka.toString()
// angka = angka.split('').reverse().join('')
// angka = Number(angka)
// console.log(angka)


// array 2 dimensi 
let things = [
    ['red pen', 'blue pen'],
    ['analog clock', 'digi clock'],
    ['futsal shoes', 'badminton shoes']
]

console.log(things[1][1])
