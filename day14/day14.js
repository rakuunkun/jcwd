// let users = [
//     {
//         username: 'user1',
//         carts:[
//             {nama:'tes1', diskon:0},
//             {nama:'tes2', diskon:10},
//             {nama:'tes3', diskon:0},
//             {nama:'tes4', diskon:0}
//         ]
//     },
//     {
//         username: 'user2',
//         carts:[
//             {nama:'tes1', diskon:0},
//             {nama:'tes2', diskon:0},
//             {nama:'tes3', diskon:0},
//             {nama:'tes4', diskon:0}
//         ]
//     }
// ]

// const cariUserDiskon = (username) => {
//     // cari object dahulu dengan pakai filter
//     // let data = users.filter((val)=>val.username === username)
//     // console.log(data[0])
//     // let output = false



//     // kalau pakai find
//     // return value nya sendiri, yang ditemukan pertama kali
//     let data = users.find((val)=>val.username === username)
    
//     output = data.carts.some((val)=> val.diskon>0)
//     return output
//     // console.log(data)
    
//     // cara for each
//     // data.carts.forEach((val)=>{
//     //     if(val.diskon>0){
//     //         output=true
//     //     }
    
//     // })
// }

// console.log(cariUserDiskon('user1')) // true
// console.log(cariUserDiskon('user2')) // false





const hitung = (num) =>{
    myArr = String(num).split("").map((num)=>{
        return Number(num)
    })
        
    //   console.log(myArr)
    
    
    let output2 = 0
    
    for (let i = 0; i < myArr.length; i++) {
        if((i%2) == 1){

            output2 += myArr[i]
        }
        
    }
    return output2
}

console.log(hitung(41366372)) // 

