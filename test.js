const x = parseInt(prompt("Nhap so a: "));
const y = parseInt(prompt("Nhap so b: "));
function Primecheck(num){
    let count = 0;
    for (let i = num; i > 0; i--){
        if (num % i = 0){
            count++;
        }
        else{
            continue;
        }
    
    if (count == 2){
        return true;

    }
    else{
        return false;
    }
}

    for (let j = x-1; j > y; j--){
         If(Primecheck(j)){
            console.log(j);
        }
    }
}
