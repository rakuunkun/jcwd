// let props = andhika
// const selda = (param) => {
//     if(param === 'bob'){
//         return () => {
//             return {
//                 ampuh:{
//                     andhika: [
//                         {arta: 'berhasil'
//                         }
//                     ]
//                 }
//             }
//         }
//     }
// }

// console.log(selda("bob")().ampuh["andhika"][0].arta)



// let docs = { getNilai: () => {
//     return [
//         ,
//         {value: 'berhasil'}
//     ]
//  }
// }

// console.log(docs.getNilai()[1].value)   // berhasil



let ampuh = [
    [
        ,
        {
             andika:{
                 arta: () => {
                     return () => {
                         return 'fauzi'
                     }
                    }
                }
            }
        ]
    ]


console.log(ampuh[0][1]['andika'].arta()()) //fauzi      



