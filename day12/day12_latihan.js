// const cariIndex = (arr,keyword)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === keyword) {
//             return i
//         }
//     }
//     return'tidak ada'
// }



// console.log(cariIndex([15,5,6,89,90,13],5)) // 1
// console.log(cariIndex([15,5,6,89,90,13],13)) // 5

// ada siput di dalam sumur sedalam 10m
// dalam sehari siput bisa naik 3 meter, turun 1 meter
// hari keberapa dia bisa keluar dari sumur

// const siput =(sumur,naik,turun) =>{

// }
// // sebuah kota memiliki 10e4 penduduk. tiap tahun tambah 10%
// // berapa jumlah penduduk setelah 5 tahun

// const penduduk = (awalTambah,tambah,persen)=>{
    
    
//     return output = awalTambah * (1+(persen/100))**tambah
    
// }
// console.log(penduduk(10e4,5,10)) 


// let dhika={aqil:()=>{
//     return [
//         [,
//             ()=>{
//                 return {arta: 'daniel'}
//             }]
//     ]
// }
// }

// console.log(dhika.aqil()[0][1]().arta)//daniel




// const ampuh =()=>{                   // function ampuh
//     return () =>{                    // return ()
//        return {dhika:{               // krn function (kurawal), pk return, return nya ke 
//            felix:[                   //
//                ()=>{                 // abis panah kurawal, jadinya fungsi
//                    return {fauzi:'dika'} // . fauzi-> return {fauzi: 'isi'}
//                 }
//             ]
//         }
//     }
// }
// }

 
// console.log(ampuh()()['dhika'].felix[0]().fauzi)//dika

const dhika ={                          // variabel dhika
    felix:[                             // object felix, 
        ,[                              // object ini ada di array ke 1
            {
                fauzi:() =>({           // array ke-0, ada function fauzi
                    selda:'aqil'        // kl abs panah kurawal, hrs return, kalo kurung, auto return
                })
            }
        ]
    ]
}

console.log(dhika['felix'][1][0].fauzi().selda)


let selda = [
    ,
    function (){                        // function selda array 1
        return {       
            felix:{                     // object felix
                arta:()=>{              // function arta
                    return ()=>{
                        return {dika:'aqil'}
                    }
                }
            }
        }

    }
   
]



// console.log(selda[1]()['felix'].arta()().dika) //aqil
console.log(selda[1]()['felix'].arta()().dika)

