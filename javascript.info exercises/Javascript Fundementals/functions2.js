let x = prompt("Enter a value for x: ", );
let n = prompt("Enter a value for n: ", );

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

alert(`${x}^${n} = ${pow(x, n)}`);