
let one = document.getElementById("one");
let two = document.getElementById("two");
let chose = 0.6;
let chose_binary = chose.toString(2);

one.textContent = `|${BinFormat_8(numToBin(chose))}|`;
two.textContent = `|${BinFormat_8(chose_binary)}|`;


function numToBin(initial){
    let arr =[];
    let num = 1;
    let anwer = '';
    for(let i =0;i<54;i++){
        arr.push(num);
        num /=2;
    }
    let isComma = true;
    for(let char of arr){
        if ((+initial) >= (+char)){
            if(isComma){
                isComma = false;
                anwer += ","
            }

            initial-= char;
            anwer +="1";
        }
        else{
            anwer +="0";
        }

    }
    return anwer
}

function BinFormat_8(num){
    let count = 0;
    let mas =[];
    for(let char of num){
         
        if (count++ == 8){
            count = 0;
            char = " "+ char;
        }
        mas.push(char);
    }
    return mas.join("");
}