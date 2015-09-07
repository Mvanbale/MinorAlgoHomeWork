module.exports.iterTriangle = iterTriangle;
module.exports.recurTriangle = recurTriangle;


//assignment 1.1
function iterTriangle(n) {
    var results = 0;
    var number = n;
    var reducedNumber = n - 1;
    for (i = 1; i < n; i++) {
        number = Number(number) + Number(reducedNumber);
        reducedNumber--;
    }
    return number;
}

//assignment 1.2
function recurTriangle(n, result) {
    if (n === 0) {
        return result;
    }
    result += Number(n - 1)
    return recurTriangle(n - 1, result);

    //assignment 1.3 : Loops are usually faster, recursion comes with a certain overhead. We are unlikely to see a large difference because we did not optimize the iterative version.

}