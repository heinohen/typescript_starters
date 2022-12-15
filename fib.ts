//fibonacci


const fib = (num:number):number => {
    if (num == 0) {
        return num;
    }

    if (num == 1 || num == 2) {
        return 1;
    }

    return fib(num - 2) + fib(num - 1);
}


const fibCounter = (howMany:number):void => {
    for (let i = 0; i <= howMany; i++) {
        console.log(fib(i));
    }
};

fibCounter(10);




