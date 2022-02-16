const hitungKomen = () =>{
    let komentar = document.getElementById('komentar').value
    
    if(komentar.length > 200 || komentar.length == 0){
        document.getElementsByTagName('button')[0].disabled = true
    }else{
        document.getElementsByTagName('button')[0].disabled = false
    }
    
    
    // huruf
    document.getElementById('batas').innerHTML = `Huruf: ${komentar.length}/200`
    
    // kata
    let kata = komentar.split(' ')
    kata = kata.filter((val)=>val!=='')
    document.getElementById('kata').innerHTML = `Kata: ${kata.length}`

    // kalimat
    let kalimat = komentar.split('.')
    kalimat = kalimat.filter((val)=>val!=='')
    document.getElementById('kalimat').innerHTML = `Kalimat: ${kalimat.length}`

}


const addComment=() =>{
    let komentar = document.getElementById('komentar').value 
    let output = document.getElementById('output')
    if(komentar.length>20){
        output.innerHTML = `${komentar.slice(0,20)}...<span onclick="tes()">read more</span>`
    }else{
        output.innerHTML = `${komentar}`
}
}
function tes(){
    console.log('tes')
}

