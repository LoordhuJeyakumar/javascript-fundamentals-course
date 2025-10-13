// Basic Nested Loop Pattern:
let row = 5;
for(i = 1;i <= 5;i++){
    let pattern = "";
    for(j = 1;j <= i;j++){
        pattern += j + "";
    }
console.log(pattern);
}