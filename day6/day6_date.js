const convert = (angka) =>{
    angka = String(angka)
    if(angka.length < 2){
        return '0'+angka
    }
    return angka
}
let d = new Date()

let hari = d.getDay()
let bulan = d.getMonth()
let tahun = d.getFullYear()
let tanggal = d.getDate()
let jam = d.getHours()
let menit = d.getMinutes()
let detik = d.getSeconds()

let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'jumat','Sabtu']
let bulans = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']
console.log(`Hari ini hari ${d[hari]},`)
