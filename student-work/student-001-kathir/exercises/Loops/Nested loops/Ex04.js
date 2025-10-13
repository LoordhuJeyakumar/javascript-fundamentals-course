//Number Pyramid:
let row = 5;
for (let i = 1;i <= row;i++){
    let pattern = "";
    for (let s = 1;s <= row -i;s++){    //s is:space
        pattern += " ";
    }
    for (let num = 1;num <= i;num++){
        pattern += num;
        if(num < i)pattern += " ";
    }
    console.log(pattern);
}