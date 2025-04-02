let sum = 0;

for (let i = 1; i <= 10; i++) {
    let number = Math.random() * 10;
    if (number % 2 === 0) {
        sum += number;
    }
}

console.log(sum);
