// Caesar Cipher
// // salah
// const caesarCipher = (input,add)=>{
    
//     input = input.toLowerCase()
//     // inputBaru = input.split('')
//     let arr1 = []
//     for (let i = 0; i < input.length; i++) {
//         let add
//         let hex = Number(input.charCodeAt(i)+add).toString(16);
		    
//         arr1.push(String.fromCharCode(hex));
        
// 	 }
// 	return arr1.join('')
        
// }
    
// console.log(caesarCipher('mobil'))

// cari index huruf pertama
// tambah dengan angka maju
// modulus 26
// ulangi sampai semua huruf
const caesarCipher = (input,add)=>{

    let abjad = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let abjadBesar = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    input = input.split('')
    let output = ''
    input.forEach(val => {
        if(val === ' '){
            output+=val
        }else{
            let urutan = abjad.indexOf(val)
            if(urutan < 0){
                // jika char tidak ada di huruf kecil
                // cari di huruf besar
                urutan = abjadBesar.indexOf(val)
                output += abjadBesar[(urutan+add) % 26]
            }
            else{
                output += abjad[(urutan+add) % 26]
            }
        }   
    })
    return output
    
}

console.log (caesarCipher('Sunday Six',2))