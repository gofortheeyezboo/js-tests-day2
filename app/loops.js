// 1. Within the factorials function, write a loop that begins at 1 and multiplies every consecutive
// number up to and including the given number(num). Return the total after the loop completes.
// Example:
// input: 4
// output: 24
// 1*2*3*4 = 24

function factorials(num) {
let total = num
if(num == 0 || num == 1){
    return 1
}else{

    
    while(num > 1){
        num--
        total *= num
    }
    return total
}
}

// ------------------------------------------

// 2. Write a function that sums up all of the numbers in a range
// Example:
// input: 2, 6
// output: 20

function rangeTotal(n1, n2) {
let sum = 0;
    for(n1; n1 < n2; n1++){
        sum += n1 
}
sum = sum + n2
return sum
}

// ------------------------------------------


// 3. Write a function that will take in a starting number, ending number, and a divisor. Iterate
// over the range of the numbers and rtuen how many numbers can be divided by the divisor.
// Example:
// input: 15, 20, 5
// output: 2

function rangeDivisor(start, end, divisor) {
let divisibles = 0
    for(start; start <= end; start++){
        if(start%divisor == 0 ){
            divisibles++
            
        }
}
return divisibles
}
