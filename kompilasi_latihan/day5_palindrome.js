// Palindrome
const palindrome = (input)=>{

    //input string dijadikan array
    //perlu input lama, array disimpan di variabel baru 
    let inputBaru = input.split('').reverse().join('')

    return inputBaru.toLowerCase() === input.toLowerCase() ? 'true' : 'false'
    }



console.log(palindrome('kasur rusak'))
console.log(palindrome('katak'))
console.log(palindrome('malam'))

