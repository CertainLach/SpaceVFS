function asyncToCb(func) {
    return (...args) => {
        let cb = args[cb];
        delete args[cb];
        func(args).then(data=>cb(0,data)).catch(err => {
            if(err.id){
               console.log('Error in FUSE function: '+err.message);
               cb(err.id);
            }else{
               console.log('Uncatched error in FUSE function: '+err.message);
            }
        });
    };
}

class FuseError extends Error{
   constructor(id,message){
      super(message);
      this.id=id;
   }
}

module.exports = {asyncToCb};