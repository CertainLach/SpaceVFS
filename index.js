const fuse = require('fuse-bindings');
const fs = require('fs');

const package = require('./package.json');
const operations = require('./operations.js');
const {
    VFS_PATH,
    DEBUG,
    FORCE
} = require('./config.js');

let isMounted = false;

console.log('SPACE IDE VFS MOUNT');
console.log(`VERSION:   ${package.version}`);
console.log(`AUTHOR:    F6CF`);
if(FORCE)
    console.warn('"FORCE" can be harmful! Use at your own risk!');

function continueMount(){
    fuse.mount(VFS_PATH, operations, err => {
        if (err) {
            console.error('Error on FUSE init!');
            console.error(err);
        }
        else {
            console.log(`VFS mounted on ${VFS_PATH}`);
            isMounted = true;
        }
    });
}

if(VFS_PATH[1]!==':'){
    console.log('Mounting as folder...');
    fs.mkdir(VFS_PATH, err => {
        if (!err || err.code === 'EEXIST') {
            continueMount();
        }
        else {
            console.error('Error on mounting creating directory for virtual file system!');
            console.error(err);
        }
    });
}
else{
    console.log('Mounting as drive...');
    continueMount()
}

process.on('SIGINT', () => {
    if (isMounted) {
        console.log('Unmounting vfs...');
        fuse.unmount(VFS_PATH, err => {
            console.error('Error on unmounting VFS!');
            console.error(err);
            process.exit();
        });
    }
});
