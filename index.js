const rxjs = require('rxjs-compat');
const fs = require('fs');
const observable = rxjs.Observable;

function mkdirRecursive(path) {
    observable.from(path.split('/')
        .filter(x => x !== ''))
        .scan(function (acc, curr) { return acc + '/' + curr })
        .skipWhile(x => fs.exists(x, (exists) => {
            console.log(`directory ${x} already exists ${exists}`)
        }))
        .subscribe(x => {
            console.log(`x value ${x}`)
            fs.mkdir(x, (error) => {
                console.log(`Error while creating directory ${error}`)
            })
        })
}

mkdirRecursive('/k/a');

// const TestScheduler = require('rxjs/testing');
// const scheduler = new TestScheduler((actual, expected) => {

// })