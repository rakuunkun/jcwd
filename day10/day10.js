// set timeout dan set interval

// const fungsiku = () =>{
//     console.log('jalan setelah 1 detik')
// }

// for (let i = 0; i < 10e19; i++) {
//     // looping nya jalan, tapi lama
// }
// console.log('jalan setelah 1 detik')

// pada awal js dibuat, semua kodingan synchronous, makanya hampir semua function dan koding js synchronous.
// synchronous adalah koding yang dibaca dari atas ke bawah, selalu menunggu kodingan di atas selesai dahulu sebelum menjalankan kodingan selanjutnya

// asynchronous

// setTimeout(()=>{
//     console.log('jalan setelah 1 detik')
// },100)
// console.log('setelah timeout')

// 'setelah timeout' keluar deluan, karena yg bawah langsung di run tidak ditunggu selesai dlu function atasnya

// biasanya pakai callback atau asynchronous
// karena kalo sinkronous, loading website akan lama karena nunggu


// promise => bisa diingkari

// async and await



const fetchData = async() => {
    let data = await getData(true)
}