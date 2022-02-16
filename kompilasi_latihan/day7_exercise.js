let props = andhika
const selda = (param) => {
    if(param === 'bob'){
        return () => {
            return {
                ampuh:{
                    andhika: [
                        {arta: 'berhasil'
                        }
                    ]
                }
            }
        }
    }
}

console.log(selda("bob")().ampuh["andhika"][0].arta)



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


let dhika={aqil:()=>{
    return [
        [,
            ()=>{
                return {arta: 'daniel'}
            }]
    ]
}
}

console.log(dhika.aqil()[0][1]().arta)//daniel




const ampuh =()=>{
    return () =>{
       return {dhika:{
           felix:[
               ()=>{
                   return {fauzi:'dika'}
                }
            ]
        }
    }
}
}


console.log(ampuh()()['dhika'].felix[0]().fauzi)//dika


// let docs = { getNilai: () => {
//     return [
//         ,
//         {value: 'berhasil'}
//     ]
//  }
// }

// console.log(docs.getNilai()[1].value)   // berhasil