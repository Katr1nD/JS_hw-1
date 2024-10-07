function getRangeDivider (n) {
    let arrayOfCorrespondingNumbers = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            arrayOfCorrespondingNumbers.push(i);
        }
    }
    return arrayOfCorrespondingNumbers;
}

console.log(getRangeDivider(7));
