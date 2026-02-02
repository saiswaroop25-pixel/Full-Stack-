//Q1
function eveorodd(num) {
    if (num %2==0){
        return "even";
    }else{
        return "odd";
    }
}
console.log(eveorodd(5));

//Q2)
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));
//Q3)
function palindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
console.log(palindrome("racecar")); 
console.log(palindrome("hello")); 
//Q4)
function max(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}   
console.log(max([3, 1, 4, 1, 5, 9, 2, 6, 5]));

//Q5)
function sum(arr){
    let total=0;
    for (let i=0;i<arr.length;i++){
        total+=arr[i];
    }
    return total;
}
console.log(sum([1,2,3,4,5]));

//Q6)
function display1ton(num){
    for(let i=1;i<=num;i++){
        console.log(i)
    }

}
console.log(display1ton(5));