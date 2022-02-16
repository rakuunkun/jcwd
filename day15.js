// const jadiString = (arr,page) =>{
//     let output = arr
//     let ind = output.indexOf(page)
//     output[ind]=output[ind]+''
//     return output
// }
// const pages = (currPage,maxPage)=>{
//     let output
//     if(currPage <=5){
//         output = [1,2,3,4,5,6,7]
        
//     }else if(maxPage-currPage<=1){
//         output = Array(5)
//         for (let i = 0; i < output.length; i++) {
//             output[i] = maxPage-4 +i
            
//         }
//         // output = []
//         // for (let i = maxPage-4; i <= maxPage; i++) {
//         //     output.push(i)
//         // }
        
//     }else{
//         output = []
//         for (let i = currPage-2; i <= currPage+2; i++) {
//             output.push(i)
//         }
//     }
//     return jadiString(output,currPage)

// }

// console.log(pages(5,20))// [1,2,3,4,'5',6,7]

const bangkuBioskop = (row,col) =>{
    let huruf = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    let output=[]

    for (let i = 0; i < row; i++) {
        let baris = []
        for (let j = 0; j < col; j++) {
            baris.push(`${huruf[i]}${j+1}`)
        }
        output.push(baris)
    }
    return output
}
console.log(bangkuBioskop(10,10))// [[a1,a2,a3,..,a10,a], [b1,b2,..,b10,b],..,[j1,..,j10,j]]

const booking = (listBook) => {
    let bangku = bangkuBioskop(12,12)
    for (let i = 0; i < listBook.length; i++) {
        let {row,col} = listBook[i]
        bangku[row][col] =true
       
    }
    return bangku
}
console.log(booking([{row:0,col:4},{row:9,col:9}]))