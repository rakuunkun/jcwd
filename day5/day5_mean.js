// // median
// let angka = [1,2,3,2,5,2,7,2]

// let median = (angka.length/2)
// angka.sort((a,b)=>a-b)

// if(angka.length%2 == 1){                //ganjil

//     angkaMedian = angka[median-0.5]

// }else {         //genap
    
//     angkaMedian = (angka[median-1]+angka[median])/2

// }
// console.log(angka)
// console.log(`Jumlah angka: ${angka.length}
// Median dari deret tsb adalah: ${angkaMedian}`)


// // sudah diperbaiki jadi function
// let angka = [1,2,3,2,5,2,7,2]

// const mean = (arr) => {
//     let median = (angka.length/2)
//     angka.sort((a,b)=>a-b)

//     if(angka.length%2 == 1){                //ganjil
//         return angka[median-0.5]
//     }else {                                 //genap 
//         return (angka[median-1]+angka[median])/2
//     }
// }
// console.log(mean(angka))

// mean

// let angka = [1,2,3,4,5,6]

// average = angka.reduce((a,b)=> a + b,0)/angka.length

// console.log(average)


// sudah diperbaiki jadi function
// let angka = [1,2,3,2,5,2,7,2]

// const mean = (arr) => {
    
//     let total = 0
//     angka.forEach((val) => total += val)
    
//     return total/angka.length
// }

// console.log(mean(angka))

// mode

let angka = [1,2,3,2,5,2,7,2]
const mode = (arr) => {
    let output
    // samaTerbanyak = jumlah berapa kali angka yang sama dan terbanyak 
    let samaTerbanyak = 0
    for (let i = 0; i < arr.length; i++) {
        // jumlahSama = jumlah berapa kali ketemu angka yang sama
        let jumlahSama = 0
        for (let j = 0; j < arr.length; j++) {
           
            if(arr[i] === arr[j]){

                jumlahSama++
            }
            
        }
        // check apakah angka terbaru punya sama lebih banyak
        if(jumlahSama > samaTerbanyak){
            output = arr[i]
            // kalau sama nya lebih banyak, di replace
            samaTerbanyak = jumlahSama
        }

        
    }
    return output
}

console.log(mode(angka))

