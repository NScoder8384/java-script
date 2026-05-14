// const num = 5;
// console.log('num*1');
// console.log('num*2');
// console.log('num*3');
// console.log('num*4');
// console.log('num*5');
// const num = 5;
// for (let i=1; i<=5; i++){
//     console.log(num*i);
// }
const num = 5;
const times = 3;
for (let i=1; i<=times; i++){
    console.log(num*i);
}
// CAP that prints only even number between num1 and num 2 .
const num1 = 1;
const num2 = 10;
for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// CAP that prints only odd number between num1 and num 2 .
const num3 = 1;
const num4 = 10;  
for (let i = num3; i <= num4; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// CAP that prints only prime number .
const num5 = 1;
const num6 = 20;  
for (let i = num5; i <= num6; i++) {
    if (i > 1) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

// CAP that only prints multiple of a number between num1 and num 2 
const num1 =10;
const num2=20;
const multiple =2;
for (let i = num1; i <= num2; i++) {
    if (i % multiple === 0) {
        console.log(i);
    } 
}