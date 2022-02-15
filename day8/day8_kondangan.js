let data = [
    {kegiatan:'berenang', image:'https://d1bpj0tv6vfxyp.cloudfront.net/berenangdikolamrenangtingkatkanrisikopanuhalodoc.jpg', hari:'Senin'},
    {kegiatan:'racing', image:'https://pbs.twimg.com/media/FK599J1aIAEWosi?format=jpg&name=4096x4096', hari:'Kamis'}
]
// -1 artinya gak ada
let indexDelete = -1 
let indexEdit = -1

let days = ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu']

const renderDays = (selectedDays) => {
    return days.map((val)=>{
        if(val === selectedDays){
            // agar saat di edit default selected days
            return `<option value = '${val}' selected>${val}</option>`
        }
            return `<option value = '${val}'>${val}</option>`
    }).join('')
}
// fitur render data
const renderData = () => {
    let output = ''
    
    data.forEach((val,index)=>{
        if(index == indexDelete){
            output+=`
            <tr>
                <td>${index+1}</td>
                <td>${val.kegiatan}</td>
                <td><img height = 100px; src=${val.image}</td>
                <td>${val.hari}</td>
                <td>
                    <button onclick ='yesDel()'>Yes</button>
                    <button onclick ='cancelDel()'>No</button>
                </td>
            </tr>
        `
        }else if(index == indexEdit){
            output+=`
            <tr>
                <td>${index+1}</td>
                <td><input value='${val.kegiatan}' type="text" placeholder='Kegiatan' id="aktivitasEd"> </td>
                <td><input value='${val.image}' type="text" placeholder='Link Gambar' id="gambarEd"></td>
                <td> 
                <select id="hariEd">
                    ${renderDays(val.hari)}
                </select>
                </td>
                <td>
                    <button onclick ='saveEd()'>Save</button>
                    <button onclick ='cancelEd()'>Cancel</button>
                </td>
            </tr>
        `

        }else{
        // untuk menampilkan tampilan paling depan
        output+=`
        <tr>
            <td>${index+1}</td>
            <td>${val.kegiatan}</td>
            <td><img height = 100px; src=${val.image}</td>
            <td>${val.hari}</td>
            <td>
                <button onclick ='edData(${index})'>Edit</button>
                <button onclick ='delData(${index})'>Delete</button>
            </td>
        </tr>
       `
    } // del data di isi index agar tau delete nomor berapa yang di tekan
    })
    // mengambil data
    let el = document.getElementById('kegiatan')
    el.innerHTML=output
}

// fitur tambah data
const addData = () => {
    // mau ambil aktivitas, gambar, dan hari
    let aktivitas = document.getElementById('aktivitas').value
    let gambar = document.getElementById('gambar').value
    let hari = document.getElementById('hari').value

    // memasukan data ke variabel
    data.push({kegiatan:aktivitas,image:gambar, hari})
    // render ulang untuk menampilkan data yang telah ditambah
    renderData()

    // untuk tampilan kosong baru
    renderData()
    document.getElementById('aktivitas').value = ''
    document.getElementById('gambar').value=''
    document.getElementById('hari').value=''
}


renderData()

// button delete data
const delData = (ind) => {
    // dibuat agar kalo ditekan, nilai index delete nya menjadi sesuai index yang ditekan
    indexDelete = ind
    renderData()

}

// button cancel delete
const cancelDel = () => {
    // agar balik ke setelan default
    indexDelete = -1
    renderData()
}

// button edit data
const edData = (ind2) => {
    // dibuat agar kalo ditekan, nilai index delete nya menjadi sesuai index yang ditekan
    indexEdit = ind2
    renderData()

}

// button cancel delete
const cancelEd = () => {
    // agar balik ke setelan default
    indexEdit = -1
    renderData()
}

// button yes delete
const yesDel = () => {
    // agar balik ke setelan default
    data.splice(indexDelete,1)
    indexDelete = -1
    renderData()
}

const saveEd = () => {
    // ambil data dari hasil editan
    let aktivitasEd = document.getElementById('aktivitasEd').value
    let gambarEd = document.getElementById('gambarEd').value
    let hariEd = document.getElementById('hariEd').value

    // edit obj
    data.splice(indexEdit,1,{kegiatan:aktivitasEd, image:gambarEd, hari:hariEd})
 
    indexEdit = -1
    renderData()
}