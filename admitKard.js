// better than approach 2
const getSumOfMultiples1 = (a, b, n) => {
    let ai = 0, bi =0, sum=0;

    for(let i=1; i<n; i++) {
        ai++;
        bi++;

        if(ai == a) {
            sum+= i;
            ai=0;
        }
        if(bi == b) {
            sum+= i;
            bi=0;
        }
    }
    return sum;
}

// less efficient because modulo is an expensive operation
const getSumOfMultiples2 = (a, b, n) => {
    let sum = 0;

    for(let i=1; i<n; i++) {
        if(i % a === 0) sum+= i;
        if(i % b === 0) sum+= i;
    }

    return sum;
}

// creating a new number by separating last digit in each iteration until the num becomes zero.
const getReverse2 = num => {
    let newNum = 0;
    while(num > 0) {
        let lastDigit = num%10;
        num =  parseInt(num/10);
        newNum = (newNum * 10) + lastDigit;
    }
    return newNum;
}
// converting the num into string then into array (so that we can utilise Array.reverse() method) then back to string;
const getReverse1 = num => {
    return parseInt(
            String(num)
            .split("")
            .reverse()
            .join("")
            )
}

// approach 2 for both funtions.

// const sumOfMultiples = getSumOfMultiples2(3, 5, 10);
// const reverse = getReverse2(sumOfMultiples);

// approach 1 for both funtions.
const sumOfMultiples = getSumOfMultiples1(3, 5, 10);
const reverse = getReverse1(sumOfMultiples);

console.log("sum of multiples",  sumOfMultiples);
console.log("reverse", reverse);