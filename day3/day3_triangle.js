let output=''
let jumlah=5


for(let i = 0; i<jumlah; i++){
    for (let j = i; j<jumlah-1; j++) {    //j=0; 0<5, 0<4, 0<3, 0<2, 0<1, 0<0(salah),j=1; 1<5, 1<4, 1<3, 1<2, 1<1(salah))
        output+=' '                     //untuk segitiga kosong
        
    }
    for(let j = 0; j<=i; j++) {         //j=0; 0<=0(salah),; 0 -> j=1; 1<=0, 1<=1, 2<=1(salah) -> j=2; 2<=0, 2<=1, 2<=2
        output+='*'                     //untuk segitiga mirror
        
    }
    for(let j = 1; j<=i; j++) {         //j=1; 1<=0, 1<=1 2<=1(salah)-> j=2; 2<=0, 2<=1, 2<=2, 3<=2(salah)
        output+='*'                     //untuk segitiga sikusiku (diisi j=1 karena agar gada bintang pertama di atas)
        
    }
    if(i<jumlah-1){
        output+='\n'
    }
}

console.log(output)


