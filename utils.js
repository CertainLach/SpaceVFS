function asyncToCb(func) {
    return (...args) => {
        let cb = args.pop();
        func(args).then(data=>{
            if(data !== void 0)
                console.log('<< cb(0,%s);',JSON.stringify(data));
            else
                console.log('<< cb(0);');
            cb(0,data);
        }).catch(err => {
            if(err.id){
               console.error('Error in FUSE function: '+err.message);
               console.error('<< cb(%d);',err.id);
               cb(err.id);
            }else{
               console.error('Uncatched error in FUSE function: '+err.message);
               console.error('<< cb(-1);');
               cb(-1);
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