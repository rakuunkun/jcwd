// const isPrima = (input) => {
//     let output=[2,3]
//     for (let i = 4; i <= input; i++){
//         let habisDibagi = 1
//         for (let j = 2; j <=i; j++){
//             if(i % j === 0){
//                habisDibagi++
//             }
//             if(habisDibagi > 2){
//                 break
//             }
//         }
//         if(habisDibagi === 2){
//             output.push(i)
//         }
//     }
//     return output
// }
// console.log (isPrima(50))
// console.log (isPrima(100))


let database = [
    {id:1, username:'aqill77',password:'123abc'},
    {id:2, username:'rio007',password:'strong09'}

]

const signIn = (data) =>{
    let {username,password} = data // destruct
    let filterData = database.filter((val)=>{
        return val.username === username && val.password === password
    })
    // kalau ada pw dan uname sama array baru ada isinya
    // kalau tidak ada yang sama, array bakal kosong
    return Boolean(filterData.length)    
    // atau return filterData.length >0 ?true:false

}

const signUp = (data) =>{
    let {username} = data
    let filterData = database.filter((val)=>{
        return val.username === username
    })
    if( filterData.length >0){  
    return 'Username sudah terpakai'
    }else{
        let idNew = database.length+1
        data = {...data,id:idNew}
        // data.id=idNew
        database.push()
        return 'Username tersedia'
    }
}

    




console.log(signIn({username:'aqill77',password:'123abc'})) // true
console.log(signIn({username:'tes',password:'123abc'})) // false
console.log(database)
console.log(signUp({username:'aqill7',password:'123abc'}))


