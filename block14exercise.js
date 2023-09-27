//only odds 
var numbers=[2,4,6,8,11,20,15,22];

const odds =[];
for (const num of numbers) {
    if (num%2===1){
        odds.push(num);
    }
}
console.log(odds);
// if (num%2 ==0)

//vowels vs consonant

var vowels=["a", "e", "i", "o", "u"];
const inputArr = "hello"

let vowelcount=0;
let constcount=0;

for(const char of inputArr){
    if (vowels.includes(char)){
        vowelcount++
    } else{
        constcount++;
    }
}

console.log(inputArr, "has", vowelcount, "vowels and", constcount, "constanents");

//ReverseArray
var numms=[1,2,3];

numms.reverse();

console.log(numms);

//fizzbuzz//
for (var i = 1; i<101;i++){
    if (i% 15 ==0) console.log("FizzBuzz");
    else if (i%3 == 0) console.log("Fizz");
    else if(i%5 ==0) console.log("Buzz");
    else console.log(i);
}
