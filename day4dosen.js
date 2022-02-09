  
// array digunakan untuk menyimpan data satu atau lebih
// didalam sebuah variable
// syntax array 
// tiap data didalam array di kasih label sesuatu yang disebut index
// index pasti dimulai dari 0,1,2,.. dst
//  tiap value dibatasin dengan "koma" (",")
// let things = ['buku','pena','pensil',]

// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])


// let things = ['buku',"pena",'pensil']

// console.log(things)
// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// // ingin mengganti salah satu isi dari array
// things[0] = "laptop"
// // things[5] = 'napkin'
// console.log(things)

// console.log(things[0])
// console.log(things[1])
// console.log(things[2])

// console.log(things.length)
// console.log(things[1].length)


// let things = ['buku',"pena",'pensil','baju']
// console.log(things)
// things.push('jacket')
// push dan codingan dibawah sama saja
// things[things.length]= 'jacket'
// console.log(things)

// let data =things.pop()
// console.log(data)
// console.log(things)



// let things = ['buku',"pena",'pensil','baju']
// splice bisa buat edit, nambahin, atau hapus , di index mana saja
// splice(startIndex,berapaYangMauDihapus,dataYang)
// ini contoh untuk menambahkan ditengah

// things.splice(2,0,"kacamata","penggaris")
// contoh hapus ditengah
// things.splice(1,2)
// console.log(things)

// let things = ['buku',"pena",'pensil','baju']

// slice(startINdex, endIndex) endINdex tidak dimasukkan

// let newThings=things.slice(1,3)
// let newThings=things.slice(1)

// console.log('things :',things)
// console.log('newthings',newThings)

// let things = ['buku',"Pena",'pensil','baju']

// things.sort()
// things.reverse()

// console.log(things)
// join menggabungkan array of strings menjadi string
// jika type data didalam tidak ada strign maka akan tetap diubah 
// menjadi string 
let days = ['sunday',"monday",'tuesday','wednesday']
// let days = ['sunday',1,'tuesday','wednesday']
// let days = [1,1,1,1]

// let newDays=days.join(' ')
// console.log(newDays)

// let things = ['baju','celana']
// let fruits = ['pisang','jeruk']
// let animals = ['kucing','anjing']

// let two = things.concat(fruits)
// let three = things.concat(fruits,animals)
// pake cara spread operator
// things = [...things,'tes']
// let three = [...things,...animals,...fruits]
// console.log(three)

// let kata = 'laptop'
// let tes=kata.split('')

// console.log(tes)
// tes = tes.join('')
// console.log(tes)

// let angka =23567
// angka = angka + ''
// angka = angka.split('').reverse().join('')
// angka = Number(angka)

// console.log(angka) //76532

// let things = [
//     ['red pen', 'blue pen'],
//     ['analog clock','digi clock'],
//     ['futsal shoes','badminton shoes']
// ]

// console.log(things[1][1])


// let angka = [[1,2],[1,[56,90],[100,123]],1,[57,23]]

// console.log(angka[1][2][1])


let categories = ['horror','romcom','action','drama', 'thriller']

let output = 'list category film :\n'

for (let i = 0; i < categories.length; i++) {
    output+=`${i+1}. ${categories[i]}\n` ;
}
console.log(output)

let noTlp = [8321321319,832131,8313213,731321]

// ['08','08','08',tidak dikenal]


// console.log(myFunction())
function myFunction(param1,param2){
    
    return true
}
// myFunction()
// const myFunction3=function(){
//     console.log('jalan di 8')
//     return false
    
// }
// const myFunction2=()=>{
//     console.log('jalan di 11')
// }

// const myFunction3=function(){
//     console.log('jalan di 8')
//     // for (let i = 0; i < 10000000; i++) {
//     //     console.log('jalan di 19')
        
//     // }
//     return false
    
// }

// let tes= myFunction2()
// let tes2= myFunction3()
// console.log(tes)
// console.log(tes2)
// console.log(myFunction2())

// const tambahan = (angka1,angka2)=>{
//     if(!angka1||!angka2) {
//         return 'harus input angka 2-2nya'
//     }
//     // bikin proteksi harus number
//     let hasil= parseInt(angka1) +parseInt(angka2)
//     if(isNaN(hasil)){
//         return 'input harus number'
//     }
//     return hasil
// }

// const isWeekend = ()=>{
//     return [0,6].includes(new Date().getDay())
// }

// console.log(isWeekend())
// if(isWeekend()){
//     console.log('tidak bisa proses absennya')
// }else{
//     console.log('prosess')
// }

// angka1 = 100 adalah salah satu contoh defualt parameter
// jika argument tidak diberikan maka isi dari angka1 adalah 100
const tambahan = (angka1=100,angka2 =0)=>{

    if(angka1 === undefined||angka2 === undefined ) {
        return 'harus input angka 2-2nya'
    }
    // bikin proteksi harus number
    let hasil= parseInt(angka1) +parseInt(angka2)
    if(isNaN(hasil)){
        return 'input harus number'
    }
    return hasil
}

// const kurangan = (angka1,angka2)=>{
//     return angka1 - angka2
// }

// const kalian = (angka1,angka2)=>{
//     return angka1*angka2
// }

// const showResult = (angka1,angka2,angka3,angka4) =>{
//     return tambahan(angka1,angka2) + kurangan(angka3,angka4)
// }
// call back 
// cb1 dan cb2 expektasinya adalah function
// const showResult = (cb1,cb2,angka1,angka2) =>{

//     return cb1(angka1,angka2) + cb2(angka1,angka2)
// }

// console.log(tambahan(2))

// console.log(showResult(5,3,10,2))
// console.log(tambahan(5,"adas"))

// console.log(showResult(kalian,kurangan,2,10))
// console.log(showResult((angka1,angka2)=>{
//     return angka1*angka2
// },(angka1,angka2)=>{
//     return angka1 - angka2
// },2,10))

// recursive 
// function countDown(count){
//     console.log(count)

//     count --
//     if(count >= 0){
//         countDown(count)
//     }
// }

// countDown(8)

// const fibonacci = (urutan) =>{
//     if(urutan<=2){
//         return 1
//     }else{
//         return fibonacci(urutan -2) +fibonacci(urutan -1)
//     }
// }

// console.log(fibonacci(2))  //1
// console.log(fibonacci(1))  //1
// console.log(fibonacci(6))  //3

// foreach looping sepanjang array
// atas dan bawah sama saja
// nums 
let nums = [3,120,3,4,5]
// for(let i = 0 ;i<nums.length;i++){
//     console.log(`loop ${nums[i]}`)
// }

// console.log('==================')
// nums.forEach((val)=>{
//     console.log(index)
//     console.log(`loop ${val}`)
// })

// let angka = [1,2,3,4,5]

// const kali2 = (val)=>{
//     return 2*val
// }

// // let angkaKali2=angka.map(kali2)
// let angkaKali2=angka.map((val)=>{
//     return val *2
// })
// atas dan bawah sama saja 
// let newArr = new Array(angka.length)
// console.log(newArr)
// for (let i = 0; i < angka.length; i++) {
//     // newArr.push(angka[i]);
//     newArr[i] = angka[i] * 2
    
// }
// console.log(newArr)

// console.log(angka)
// console.log(angkaKali2)

let numb = [1,2,3,4,5]

// let newNumb = numb.map((val)=>{
//     return val /2
// })
// callback function di atas dan bawah sama saja 
// let newNumb = numb.map(val => val/2)
// console.log(newNumb)

let numb2 = [1,3,4,5]
// let oddOrEven = numb2.map((val)=>{
//     // if(val %2 == 0){
//     //     return 'even'
//     // }else{
//     //     return 'odd'
//     // }
//     return val%2 ==0 ? 'even' :'odd'
// })

// console.log(oddOrEven)

// const reverse = kata => kata.split('').reverse().join('')
// kodingan diatas sama dengan kodingan dibawah
// const reverse = (kata) => {

//     return kata.split('').reverse().join('')
// }

// filter
// filter pasti return array
// callback function di filter harus return  boolean
let deret = [1,2,3,4,5]

let newDeret = deret.filter((val)=>{
    return val % 2 === 1
})
// console.log(newDeret)

// sort (advanced with callback)

// let things = [102,31,16,50,316]

// things.sort((a,b)=>{
//     return b-a
// })

let things = ["dino","dika","fauzi","daniel","aqil"]

things.sort((a,b)=>{
    if(a<b){
        return -1
    }
    if(a>b){
        return 1
    }
    return 0
})

console.log(things)

