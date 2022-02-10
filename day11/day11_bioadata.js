// membuat let untuk list pekerjaan
let jobs = ['Dev','CEO','PM','CTO','DevOps']
let data = [
    {nama: 'Alex', umur: 22, pekerjaan:'Dev'},
    {nama: 'Alicia', umur: 32, pekerjaan:'Dev'},
    {nama: 'Alona', umur: 26, pekerjaan:'Dev'},
    {nama: 'Batios', umur: 33, pekerjaan:'CEO'},
    {nama: 'Bakhti', umur: 38, pekerjaan:'PM'},
    {nama: 'Charlee', umur: 27, pekerjaan:'CTO'},
]



const renderData = (arr) => {
    let output =''
    let el = document.getElementById('data')
    arr.forEach((val,index)=>{
      output+=`
      <tr>
            <td>${index+1}</td>
            <td>${val.nama}</td>
            <td>${val.umur}</td>
            <td>${val.pekerjaan}</td>
            </tr>
       `
    })

    el.innerHTML=output
}



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

    let usiaFilter = document.getElementById('usiaFilter').value
    if(!usiaFilter){
        renderData(data)
    }else{
        let newFilterData = data.filter((val)=>{
            return val.usia.includes(usiaFilter)
        })
        renderData(newFilterData)
    }

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


const filterByUsiaMin = () =>{
    let usiaMin = document.getElementById('usiaMinFilter').value
    let usiaMax = document.getElementById('usiaMaxFilter').value

    if(!usiaMin){   // kondisi usia min tidak diisi -> kosong
        usiaMin = 0
    }
    let newFilterData = data.filter((val)=>{
        
        // return val.usia>= usiaMin && true       // true = val usia <= usia max
        // if(!usiaMin){
        //     kondisiMin = true // cara kedua
        // }

        // let kondisiMin = usiaMin ? true : usiaMin // cara ketiga
       
        // let kondisiMin = usiaMin || true : val.usia

        let kondisiMax =! usiaMax && usiaMax == '' ? true : val.usia <= usiaMax
        return kondisiMin && kondisiMax

    })
    renderData(newFilterData)
}

const clearFilter = () =>{
    let namaFilter = document.getElementById('namaFilter').value=''
    let umurFilter = document.getElementById('umurFilter').value=''
    // let sex = document.getElementsByName('sex')=''
}


































