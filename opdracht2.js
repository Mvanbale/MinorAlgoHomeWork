module.exports.iterFibonacci = iterFibonacci;
module.exports.recurFibonacci = recurFibonacci;

function iterFibonacci(n) {
    var i;
    var fibs = new Array();
    fibs.push(0);
    fibs.push(1);

    for (i = 0; i <= n; i++) {
        fibs.push(fibs[0] + fibs[1]);
        fibs.shift(); //shift removes the first array element
    }
    return fibs[0];
}

function recurFibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return recurFibonacci(n - 2) + recurFibonacci(n - 1);
    }
}