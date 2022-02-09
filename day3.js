//while

// while(true){
//     console.log('line 4')
// }

// contoh print while 1-5
// let angka = 1

// while(angka<6){
// //  pakai "+" jadinya string, pakai "," jadinya number
//     console.log('count- '+angka)
//     angka++
// }
// //karena di luar kurawal, hasilnya 6
// console.log('terakhir' ,angka)

// untuk membalik -> while(!(angka<6))

// do while
// let angka = 1

// do{
//     console.log(angka)
//     angka++
// }while(angka<5)

// console.log('line 27')
// alur: cek i<6, jika iya -> print, -> i++ -> cek lagi)
// for (let i = 1; i < 6; i++) {
//     console.log('count- '+i)
    
// }

// for (let i = -5; i < 0; i++) {
//     console.log('count- '+(i*-1))
    
// }

// let angka = 0
// while(true){
//     if(angka>3){
//         break
//     }
//     console.log(angka)
//     angka++
// }
//=================================

//membuat bintang horizontal

// let output=''

// for(let i = 0; i<5; i++){
//     output+='*'
// }
// console.log(output)
//=================================

// //membuat bintang vertikal
// let output=''

// for(let i = 0; i<5; i++){
//     output+='*\n'
// }
// console.log(output)
//=================================

// //membuat bintang persegi
// let output=''

// for(let i = 0; i<5; i++){
//     output+='*****\n'
// }
// console.log(output)
//=================================

// //segitiga siku siku
// let output=''

// for(let i = 0; i<5; i++){
//     for (let j = 0; j < 5; j++) {   //atau pakai j<=i, gapake break
//         output+='*'
//         if(i==j){   
//             break
//         }
//     }
//     output+='\n'
// }
// console.log(output)

//segitiga terbalik
let output=''
let jumlah=5
let spasi=''


for(let i = 0; i<jumlah; i++){
    for (let j = s; j>i; j--) {
        output+='*'
        
    }
    output+='\n'
}
for(let i = 1; i<jumlah; i++){
    for (let j = 0; j <= i; j++) { 
       output+='*'
    }
    output+='\n'
}
console.log(output)


