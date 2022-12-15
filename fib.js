//fibonacci
var fib = function (num) {
    if (num == 0) {
        return num;
    }
    if (num == 1 || num == 2) {
        return 1;
    }
    return fib(num - 2) + fib(num - 1);
};
var fibCounter = function (howMany) {
    for (var i = 0; i <= howMany; i++) {
        console.log(fib(i));
    }
};
fibCounter(10);
