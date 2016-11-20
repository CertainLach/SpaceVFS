const fuse = require('fuse-bindings');
const fs = require('fs');

const package = require('./package.json');
const operations = require('./operations.js');
const config = require('./config.js');

let isMounted = false;

console.log('SPACE IDE VFS MOUNT');
console.log(`VERSION:   ${package.version}`);
console.log(`AUTHOR:    F6CF`);

fs.mkdir(config.VFS_PATH, function (err) {
    if (!err || err.code === 'EEXIST') {
        fuse.mount(config.VFS_PATH, operations, (err) => {
            if (err) {
                console.log('Error on FUSE init!');
                console.log(err);
            }
            else {
                isMounted = true;
            }
        });
    }
    else {
        console.log('Error on mounting creating directory for virtual file system!');
        console.log(err);
    }
});

process.on('SIGINT', function () {
    if (isMounted) {
        console.log('Unmounting vfs...');
        fuse.unmount(__dirname + '/vfs', function (e) {
            console.log(e);
            process.exit();
        });
    }
});
