// const num1=21
// const num2=20
const num =4
let isprime =true
for(let i=2; i<=num/2; i++){
    if(num%i==0){
        isprime=false
        break
    }
}
console.log(isprime)
// if(isprime){
//     console.log(num+" is prime")
// } else{
//     console.log(num+" is not prime")
// }