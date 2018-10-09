const rxjs = require('rxjs-compat');
const fs = require('fs');
const observable = rxjs.Observable;
const fileExist = observable.bindNodeCallback(fs.stat);

const mkdirRecursive = require('./mkdirRecursive');

mkdirRecursive('/tmp/a/b/c/d/e/f/g/h').subscribe(x => console.log(x));
