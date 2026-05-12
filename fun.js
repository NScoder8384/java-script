// WAP to find the number is prime or not  between two numbers using function in java script
function isprime(num){
    if (num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

const num1 = 10;
const num2 = 20;
for (let i = num1; i <= num2; i++){
    if (isprime(i)){
        console.log(i + ' is a prime number');
    }
}