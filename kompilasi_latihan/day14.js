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





// const hitung = (num) =>{
//     myArr = String(num).split("").map((num)=>{
//         return Number(num)
//     })
        
//     //   console.log(myArr)
    
    
//     let output2 = 0
    
//     for (let i = 0; i < myArr.length; i++) {
//         if((i%2) == 1){

//             output2 += myArr[i]
//         }
        
//     }
//     return output2
// }

// console.log(hitung(41366372)) // 


// const hitung = (numb)=>{
//     // let hasil = numb % 10 //1
//     let hitungan = 1
//     let output = 0
//     do {
//         let ujung = numb % 10
//         if(hitungan % 2 == 1){
//             output+=ujung
//         }
//         hitungan++
//         numb = Math.floor((numb - ujung)/10) // (2341-1)/10= 234
//     } while (numb > 0);
//     return output
// }

// const hitungDigit = (numb)=>{
//     let hitungan =0 
//     do {
//         let ujung = numb % 10
//         numb = Math.floor((numb - ujung)/10) 
//         hitungan++
//     } while (numb>0);
//     return hitungan
// }

// console.log(hitung(234135)) // 3+1= 4
// console.log(hitungDigit(21393)) // 5
// pagination
// [1,2,3,4,5,6,7] page 1-5
// [4,5,6,7,8] 6 dst

const jadiString = (arr,page) =>{
    let output = arr
    let ind = output.indexOf(page)
    output[ind]=output[ind]+''
    return output
}


const pages = (currPage,maxPage)=>{
    let output
    if(currPage <=5){
        output = [1,2,3,4,5,6,7]
        
    }else if(maxPage-currPage<=1){
        output = Array(5)
        for (let i = 0; i < output.length; i++) {
            output[i] = maxPage-4 +i
            
        }
        // output = []
        // for (let i = maxPage-4; i <= maxPage; i++) {
        //     output.push(i)
        // }
        
    }else{
        output = []
        for (let i = currPage-2; i <= currPage+2; i++) {
            output.push(i)
        }
    }
    return jadiString(output,currPage)

}

console.log(pages(5,20))// [1,2,3,4,'5',6,7]
console.log(pages(6,20))// [4,5,"6",7,8]
console.log(pages(19,20))// [16,17,18,'19',20]
console.log(pages(20,20))// [16,17,18,'19',20]
