const hitungKomen = () =>{
    let komentar = document.getElementById('komentar').value
    document.getElementById('batas').innerHTML = `Huruf: ${komentar.length}/200`
    if(komentar.length > 200 || komentar.length == 0){
        document.getElementsByTagName('button')[0].disabled = true
    }else{
        document.getElementsByTagName('button')[0].disabled = false
    }
    let kata = komentar.split(' ')
    
    kata = kata.filter((val)=>val!=='')
    document.getElementById('kata').innerHTML = `kata: ${kata.length}`
}



