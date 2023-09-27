//only odds 
//create a var for numbers input 
// for loop, if numbers give a remainder, they are odd - put in different list - print that list out 
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
//create a variable for both vowelcounts and const, establish a array for vowels,
//put all other not counted in array into const count. 

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
//use num reverse to reverse the numbers of the array 

var numms=[1,2,3];

numms.reverse();

console.log(numms);

//fizzbuzz//
// create an array with range of less than 101 to get the full range of 100, 
//create conditions for diving by 3 with an output of fizz, 
// create conditions for dividing by 5 with an output of buzz 
// else put fizzbuzz for those that dont meet the first two conditons 
for (var i = 1; i<101;i++){
    if (i% 15 ==0) console.log("FizzBuzz");
    else if (i%3 == 0) console.log("Fizz");
    else if(i%5 ==0) console.log("Buzz");
    else console.log(i);
}
