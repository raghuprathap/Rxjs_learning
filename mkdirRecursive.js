const Rx = require('rxjs');
const { scan, filter, map, concatAll } = require('rxjs/operators')
const fs = require('fs');

const fileExist = Rx.Observable.bindCallback(fs.stat);
const mkdirCallback = Rx.Observable.bindCallback(fs.mkdir);

function mkdir(path) {
    return mkdirCallback(path);
}
function stat(path) {
    return fileExist(path);
}
    

function mkdirRecursive(path) {
    return Rx.Observable.from(path.split('/'))
        .scan((acc, curr) => `${acc}/${curr}`)
        .filter(r => r !== '')
        .map(x => stat(x))
        .concatAll()
        .filter(x => x.path)
        .map(x => mkdir(x.path))
}

module.exports = mkdirRecursive;