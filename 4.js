// CAP that only prints multiple of a number between num1 and num 2 
const num1 =10;
const num2=20;
const multiple =2;
for (let i = num1; i <= num2; i++) {
    if (i % multiple === 0) {
        console.log(i);
    }
}