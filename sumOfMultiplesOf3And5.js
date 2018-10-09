const rxjs = require('rxjs-compat');
const Observale = rxjs.Observable;

// Observale.range(1, 1000).filter(x => !(x % 3 && x % 5))
//     //.reduce((acc, curr) => acc+curr)
//     .subscribe(x => console.log(`x value ${x}`))

// Observale.of('foo, bar').subscribe(x => console.log(`x value ${x}`))

var myObservable = new rxjs.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');