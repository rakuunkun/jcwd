// mengubah angka ke string
// console.log(String(20))

// nama function: tes
// langsung return true
// const tes = () => true

//object
let person1= {
    fullName: "martinelli",
    nationality: "italy",
    age: 20,
    // array
    hobbies:['fishing','lying'],
    
    // variasi 
    retired :()=>{
        return this.age *2
    },
    // retired(){
    //     console.log("running")
    // },
    // retired : function(){
    //     console.log("running")
    // },

    // obj dalam obj 
    account: {
        username: 'martiNelli9',
        password: 'stronger',
    }
}

// console.log('cara panggil 1:',person1.nationality)
// console.log('cara panggil 2:',person1["nationality"])
// // cara panggil obj dalam obj
// console.log(person1.account.password)
// // cara panggil array dalam obj
// console.log(person1.hobbies[0])
// // console.log(retired()) undefined karena tidak return
// person1.retired()

// let prop = 'hobbies'
// console.log(person1[prop])
// // console.log(person1.prop) // tidak bisa karena langsung refer ke obj di


// let prop ='fullName'
// console.log(person1[prop])

// // // cara lama
// // person1.fullName = 'josh'
// // person1.dominantFoot = 'right'

// // console.log(person1)
// // console.log(person1.fullName)

// // cara kedua
// person1 = {...person1,fullName: 'josh', dominantFoot: 'right'}

// console.log(person1)
// console.log(person1.fullName)

// // membuat obj baru 
// // let manusia2 = new Object()
// let manusia2 = {}
// manusia2.fullName = 'pele'
// manusia2.dominantFoot = 'left'

// console.log(manusia2)

// class
class Manusia{
    constructor(name, birthDate, nationality){
        this.name = name
        this.birthDate = birthDate
        this.nationality = nationality

    }

    suaraLahir=()=>{
        console.log('nangis')
    }
}

let manusia1 = new Manusia('Pele','1950-07-31','Brazil')
let manusia2 = new Manusia('Romario','1951-07-01','Brazil')


class FootballPlayer extends Manusia{
    constructor(name,birthDate,nationality,dominantFoot){
        super(name,birthDate,nationality)
        this.dominantFoot = dominantFoot
    }
    
}

class Artist extends Manusia{
    constructor(name,birthDate,nationality,artistType){
        super(name,birthDate,nationality)
        this.artistType = artistType
    } 
}
let footballPlayer1 = new FootballPlayer('Romario','1951-07-01','Brazil', 'Left')
let penyanyi1 = new Artist ('Isyana', '1990-05-21', 'Indonesia', 'Singer')
// manusia1.suaraLahir()

console.log(footballPlayer1)

console.log(penyanyi1)
