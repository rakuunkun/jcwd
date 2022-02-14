// let a=1
// let b=2

// console.log(a,'a')
// console.log(b,'b')

// let temp
// temp=b
// b=a
// a=temp

// console.log('a',a)
// console.log('b',b)

// // bubble sort
// let arr = [2,3,56,89,12,1]

// 1. 2 > 3 -> false, posisi tetap
// 2. 3 > 56 -> false, posisi tetap
// 3. 56 > 89 -> false, posisi tetap

// 4. 89 > 12 -> true, posisi ditukar dengan cara:
// let temp = arr[3]
// arr[3] = arr[3+1]
// arr[3+1] = temp

// 5. 89 > 1 -> true, posisi ditukar dengan cara:
// let temp = arr[4]
// arr[4] = arr[4+1]
// arr[4+1] = temp

// kondisi sekarang [2,3,56,12,1,89]
// ulangi lagi
// 6. 2 > 3 -> false, posisi tetap
// 7. 3 > 56 -> false, posisi tetap
// 8. 56 > 12 -> true, posisi tukar
// [2,3,56,1,12,89]

// dan seterusnya sampai [1,2,3,12,56,89]

// sintaksnya
let arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
]

// function bubbleSort(arr=[],prop,urutan){
        
//         let output = arr
        
//         for (let i = 0; i < output.length; i++) {
//             for (let j = 0; j < output.length-1; j++) {
//                     if(urutan === 'asc'){
//                         condition= output[j][prop] > output[j+1][prop]
//                     }else{
//                         condition= output[j][prop] < output[j+1][prop]
//                     }    
//                     if(condition){
//                         let temp = output[j]
//                         output[j]=output[j+1]                                
//                         output[j+1]=temp
//             }
            
//         }  
//     }
//     return output
// }

// console.log(bubbleSort(arrProduct, 'name','desc'))
// console.log(bubbleSort(arrProduct, 'price','desc'))

// untuk optimation
function bubbleSort(arr=[],prop,urutan){
    
    let output = arr
    
    for (let i = 0; i < output.length; i++) {
        let swapped=false
        for (let j = 0; j < output.length-1; j++) {
            if(urutan === 'asc'){
                condition= output[j][prop] > output[j+1][prop]
            }else{
                condition= output[j][prop] < output[j+1][prop]
            }    
            if(condition){
                let temp = output[j]
                    output[j]=output[j+1]                                
                    output[j+1]=temp
                    swapped=true
                }
            }  
            if(!swapped){
                break
            }
        }
        return output
    }
    console.log(bubbleSort(arrProduct, 'category','asc'))