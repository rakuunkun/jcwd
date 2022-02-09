// function myFunction(param1,param2){
//     return true
// }
// const myFunction2=function(){
//     return false
// }
// console.log(myFunction2())

// yang sering dipakai

// function tanpa parameter
// const myFunction2=()=>{
//     return false         //dibawah return tidak dibaca
// }
// console.log(myFunction2())

// ciri function pny output: ada return nya

// const myFunction2=()=>{
//     console.log('jalan di 20')
// }
// myFunction2()


// const tambahan = (angka1 = 100, angka2 = 0)=>{
//     if(angka1 === undefined || angka2 === undefined){
//         return 'harus input kedua angka'
//     }
//     //proteksi harus number
//     let hasil = parseInt(angka1) + parseInt(angka2)
//     if(isNaN(hasil)){
//         return 'input harus number'
//     }
//     return hasil
// }

// merupakan template, variabel boleh sama dgn yg function lain
// const kurangan = (angka1,angka2)=>{
//     return angka1-angka2
// }

// const tambahan = (angka1,angka2)=>{
//     return angka1+angka2
// }

// const total = (angka1, angka2, angka3, angka4)=>{
//     return tambahan(angka1,angka2)+kurangan(angka3,angka4)
// }

// console.log(total(5,6,7,2))


// call back
// cb1 dan cb2 ekspektasinya adalah function tmabahan dan kurangan
// const total = (cb1,cb2,angka1,angka2)=>{
    
//     return cb1(angka1,angka2) + cb2(angka1,angka2)
// }

// const kalian = (angka1,angka2)=>{
//     return angka1*angka2
// }

// // console.log(total(5,6,7,2))
// console.log(total(tambahan,kalian,2,10))

// let angka = [1,2,3,4,5]

// let angkaX2=angka.map((val)=>{
//     return val *2
// })

// let angkaHalf=angka.map((val)=>{
//     return val /2
// })

// let angkaJenis=angka.map((val)=>{
//     //eternary
//     return val%2==0 ? 'even' : 'odd'

//     // if(val %2 == 0){
//     //     return 'Even'
//     // }else{
//     //     return'Odd'
//     // }
// })
 

// console.log(angka)
// console.log(angkaX2)
// console.log(angkaHalf)
// console.log(angkaJenis)

// Filter
// filter pasti return array
// callaback function di filter harus return boolean
// let deret = [1,2,3,4,5]

// let newDeret = deret.filter((val)=>val % 2 === 1)

// console.log(newDeret)

// Sort

// let things = [102,31,15,50,316]

// //things.sort()   // ini salah karena ngurutin nya kaya ngurutin string

// things.sort((a,b)=>a-b)
// console.log(things)

// cara kerja mapping
// const mapDuplicate = (arr, cb)=>{
//     let newArr = []

//     for(let i=0; i<arr.length; i++){
//         newArr.push(cb(arr[i]),i,arr)
//     }
//     return newArr
// }

// const kali2 = (val)=>val*2

// console.log(mapDuplicate([1,2,3,4,5],kali2)) //[2,4,6,8,10]