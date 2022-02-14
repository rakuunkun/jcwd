// membuat let untuk list pekerjaan
let jobs = ['Dev','CEO','PM','CTO','DevOps']
let data = [
    {nama: 'Alex', usia: 22, pekerjaan:'Dev'},
    {nama: 'Alicia', usia: 32, pekerjaan:'Dev'},
    {nama: 'Alona', usia: 26, pekerjaan:'Dev'},
    {nama: 'Batios', usia: 33, pekerjaan:'CEO'},
    {nama: 'Bakhti', usia: 38, pekerjaan:'PM'},
    {nama: 'Charlee', usia: 27, pekerjaan:'CTO'},
]



const initialRender=()=>{
    let output1 = `<option value="">All</option>`    // untuk tampilan All
    let output2 = `<option value="" hidden selected >Pilih Pekerjaan</option>`
    
    jobs.forEach((val)=>{
        // untuk list pekerjaan
        output1+=`<option value="${val}">${val}</option>`
        output2+=`<option value="${val}">${val}</option>`
    })
    
    // setelah output jadi, masukan ke dalam element yang dituju
    
    document.getElementById('pekerjaanFilter').innerHTML = output1
    document.getElementById('inputPekerjaan').innerHTML = output2
}


const renderData = (arr) => {
    let output =''
    let el = document.getElementById('data')
    arr.forEach((val,index)=>{
      output+=`
      <tr>
            <td>${index+1}</td>
            <td>${val.nama}</td>
            <td>${val.usia}</td>
            <td>${val.pekerjaan}</td>
            </tr>
       `
    })

    el.innerHTML=output
}


initialRender()
renderData(data)

// ambil apa yang di ketik user
// jika kosong, render semua data

// jika tidak kosong, baru lakukan filter data sesuai input user
const filterByNama = () =>{

    let namaFilter = document.getElementById('namaFilter').value
    if(!namaFilter){
        renderData(data)
    }else{
        let newFilterData = data.filter((val)=>{
            return val.nama.toLowerCase().includes(namaFilter.toLowerCase())
        })
        renderData(newFilterData)
    }
    // let newFilterData = data.filter((val)=>{
    //     if(!namaFilter){      // kalo kosong string kosong -> false value
    //     return true
    //     // jika return callback true, val nya masuk array baru
    //     }
    //     return val.nama.toLowerCase().includes(namaFilter.toLowerCase())
    // })
    // renderData(newFilterData)

}

const filterByUsia = () =>{
    let usiaMin = document.getElementById('usiaMinFilter').value
    let usiaMax = document.getElementById('usiaMaxFilter').value

    // if(!usiaMin){   // kondisi usia min tidak diisi -> kosong
    //     usiaMin = 0
    // }
    let newFilterData = data.filter((val)=>{
        
        // return val.usia>= usiaMin && true       // true = val usia <= usia max
        let kondisiMin = !usiaMin ? true : val.usia >= usiaMin  

        let kondisiMax = !usiaMax && usiaMax == '' ? true : val.usia <= usiaMax
        return kondisiMin && kondisiMax

    })
    renderData(newFilterData)
}


const filterByPekerjaan = () =>{

    let pekerjaanFilter = document.getElementById('pekerjaanFilter').value
    if(!pekerjaanFilter){
        renderData(data)
    }else{
        let newFilterData = data.filter((val)=>{
            return val.pekerjaan.includes(pekerjaanFilter)
        })
        renderData(newFilterData)
    }

}



const clearFilter = () =>{
    document.getElementById('namaFilter').value =''
    document.getElementById('usiaMinFilter').value = ''
    document.getElementById('usiaMaxFilter').value = ''
    document.getElementById('pekerjaanFilter').value = ''

    renderData(data)
}


const isiData =()=>{
    let inputNama = document.getElementById('inputNama').value
    let inputUsia = document.getElementById('inputUsia').value
    let inputPekerjaan = document.getElementById('inputPekerjaan').value
  
    data.push({nama:inputNama,usia:inputUsia,pekerjaan:inputPekerjaan})

    renderData(data)
  }































