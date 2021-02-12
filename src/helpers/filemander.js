const fs = require('fs');

const createFile = (name, location, content) => {

    fs.open(location + name, 'w', (err, fd) => {
        if (err) throw err;

        fs.writeFile( location + name, content, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });

}

/**
 * Create folder
 *
 * */
const createFolder = (name, location, cb) => {
    ensureExists(location+name, cb);
}

const writeFile = (name, location, write_content) => {
    fs.writeFile( location + name, write_content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function ensureExists(path, mask, cb) {
    if (typeof mask == 'function') { // allow t he `mask` parameter to be optional
        cb = mask;
        mask = 777;
    }
    fs.mkdir(path, mask, function(err) {
        if (err) {
            if (err.code === 'EEXIST') cb(null); // ignore the error if the folder already exists
            else cb(err); // something else went wrong
        } else cb(null); // successfully created folder
    });
}

module.exports = {
    createFile,
    createFolder,
    writeFile
}