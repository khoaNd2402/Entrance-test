let x = prompt('nhap a : ');
let y = prompt('nhap b : ')
function tinh(){
    if(Number(x) < 2){
        alert('so nguyen to nho nhat la 2');

    }
    for(let i = Number(x); i <= Number(y); i++){
        let count = 0;
        for(let j=2; j<=i; j++){
            if(i % j ==0){
                count+=1;
            }
        }
        if(count<=1){
            console.log(i);
        }
    }
}