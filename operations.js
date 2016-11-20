const {
   asyncToCb,
   FuseError
} = require('utils.js');

const {
   EINPROGRESS 
} = require('fuse-bindings')

async function init(){
   throw new FuseError(EINPROGRESS,'WORK IN PROGRESS');
}

/*
TODO:
ops.access(path, mode, cb)
ops.statfs(path, cb)
ops.getattr(path, cb)
ops.fgetattr(path, fd, cb)
ops.flush(path, fd, cb)
ops.fsync(path, fd, datasync, cb)
ops.fsyncdir(path, fd, datasync, cb)
ops.readdir(path, cb)
ops.truncate(path, size, cb)
ops.ftruncate(path, fd, size, cb)
ops.readlink(path, cb)
ops.chown(path, uid, gid, cb)
ops.chmod(path, mode, cb)
ops.mknod(path, mode, dev, cb)
ops.setxattr(path, name, buffer, length, offset, flags, cb)
ops.getxattr(path, name, buffer, length, offset, cb)
ops.open(path, flags, cb)
ops.opendir(path, flags, cb)
ops.read(path, fd, buffer, length, position, cb)
ops.write(path, fd, buffer, length, position, cb)
ops.release(path, fd, cb)
ops.releasedir(path, fd, cb)
ops.create(path, mode, cb)
ops.utimens(path, atime, mtime, cb)
ops.unlink(path, cb)
ops.rename(src, dest, cb)
ops.link(src, dest, cb)
ops.symlink(src, dest, cb)
ops.mkdir(path, mode, cb)
ops.rmdir(path, cb)
ops.destroy(cb)
*/

const exports = {init};

//Convert to callbacks:
for (let key in exports) {
   let value = exports[key];
   if (typeof value == 'function')
      exports[key] = asyncToCb(value);
}

module.exports = {};
