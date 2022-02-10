// const coba = (isi) =>{

//     let output = ''   
//     for (let i = 0; i < isi.length; i++) {
//         for (let j = 0; j <=i; j++) {
//             if(j === 0){
//             output+=isi[i].toUpperCase()

//             }else{
//             output+=isi[i].toLowerCase() 
//             }
//         }
//         if(i<isi.length-1) output+='-' 
//     }
//     return output
// }

// console.log(coba('abcD')) // 'A,Bb,Ccc,Dddd



const tesPass = (pass)=>{
    pass = pass.replace(' ','').split('')
    let adaHuruf = false
    let adaAngka = false

    let huruf = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let angka = '0123456789'.split('')

    
    if(pass.length <6){
        return 'weak, less than 6'
    } 
    for (let i = 0; i < pass.length; i++) {
        if(huruf.includes(pass[i].toLowerCase())){
            adaHuruf = true
        }else if(angka.includes(pass[i ])){
            adaAngka = true
        }
    }
    return adaHuruf && adaAngka ? 'strong' : 'weak'

    

}
console.log(tesPass('asade'))
console.log(tesPass('asade1'))
console.log(tesPass('asade '))

