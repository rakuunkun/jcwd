const reverseWord = (kalimat)=>{

    //input string dijadikan array
    //berdasarkan spasi
    //kalimat = Hai aku Joan Mir
    kalimat = kalimat.split(' ')

    //kalimat = [Hai, aku, Joan, Mir]
    kalimat = kalimat.map((val)=>{

        //tiap kata di split-reverse-join
        return val.split('').reverse().join('')
    })
    //kalimat = ['iaH, uka, naoJ, riM]
    kalimat = kalimat.join(' ')
    return kalimat
}

console.log(reverseWord('Hai aku Joan Mir'))