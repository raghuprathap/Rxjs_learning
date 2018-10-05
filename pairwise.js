const rxjs = require('rxjs-compat');

const source = rxjs.Observable.from([1, 2, 3]).pairwise();

source.subscribe(
    function (x) {
        console.log(`x value ${x}`);
    },
    function (error) {
        console.log(`Error ${error}`)
    },
    function() {
        console.log('completed');
    }
)