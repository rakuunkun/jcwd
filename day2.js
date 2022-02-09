// let namamurid = 'aqil'
// let tes = !(2>3) && (100>1)

// if(!(2>3) && (100>1)) {
//     namamurid = 'raditya'

// }

// console.log(namamurid)

// let namamurid = 'aqil'
// let tes = !(2>3) && (100>1)

// if(!(2>3) && (100>1)) {
//     namamurid = 'raditya'

// }else{
//     namamurid = 'felix'
// }

// console.log(namamurid)

// let namamurid = 'aqil'
// let tes = !(2>3) && (100>1)

// if(!(2>3) && (100>1)) {
//     namamurid = 'raditya'

// }else if(2<5){
//     namamurid = 'riyo'
// }else{
//     namamurid = 'felix'
// }

// console.log(namamurid)

//latihan
// let nilai = 84.5
// let grade

// if(nilai >= 85 && nilai <=100){
//     grade = 'a'
    
// }else if (nilai >= 75 && nilai < 85){
//     grade = 'b'
    
// }else if (nilai >= 60 && nilai < 75){
//     grade = 'c'
    
// }else if (nilai = 0 && nilai < 65){
//     grade = 'd'
    
// }else if (nilai === null){
//     grade = 'e'
// }else{
//     grade = 'salah input'
// }
// console.log(grade)

//switch

// let pekerjaan = 'petani'
// let kerjaannya

// switch (pekerjaan === 'petani'){
//     case "petani":
//         kerjaannya = 'menanam'
//         break;
//     case "sopir":
//         kerjaannya ='menyetir'
//         break;
//     default:
//         kerjaannya = 'ada aja'
//         break;
// }
// console.log(kerjaannya)


// tipe-tipe false: '', null, NaN, 0, undefined

//if eternary
//  let tes = 'a'
//  let tes2 = tes%2? 'ganjil' : 'genap'
//  console.log(tes2)

//sama dengan
// if(tes){
//     tes2='isi'
// }else{
//     tes2='kosong'
// }
// console.log(tes2)

let BB = 67
let TB = 1.78
let IMT = (BB/(TB**2))
let grade

if( IMT <18.5){
    grade = 'badan kurang'
}else if(IMT >= 18.5 && IMT <25){
    grade = 'badan ideal'
}else if(IMT >= 25 && IMT <30){
    grade = 'badan berlebih'
}else if(IMT >= 30 && IMT <40){
    grade = 'badan sangat berlebih'
}else{
    grade = 'obesitas'
}
console.log(`IMT anda dengan berat badan ${BB} KG dan tinggi badan ${TB} m adalah ${grade}`)