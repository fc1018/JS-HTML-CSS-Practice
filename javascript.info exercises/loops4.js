let maxNumber = prompt("What is the highest number you want the prime numbers up to?", );

nextPrime:
    for (let i = 2; i < maxNumber; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                continue nextPrime;
            }

        }
        alert(i);
    }