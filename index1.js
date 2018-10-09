const rxjs = require('rxjs-compat');
const observable = rxjs.Observable;

observable.from([1,2,3, 4, 5, 6, 7])
    .filter(x => x>2)
    .subscribe(x => console.log(`x value ${x}`))