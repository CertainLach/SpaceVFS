const VFS_PATH    = process.platform !== 'win32' ? __dirname+'/vfs' : 'V:\\';   //Dirname to mount VFS on
const HOST        = 'space.local';                                              //Hostname
const PORT        = 8967;                                                       //Port   
const PROJECT     = 'SpaceIDE';                                                 //Project name
const VFS_TOKEN   = 'odIwOScAwDNKApaskSIOdowiNASndsjaUSDiwklASdiu';             //VFS token (Space>Settings>Global>Tokens)
const DEBUG       = true;                                                       //Enable debugging
const FORCE       = true;
const DISPLAY     = true; 
const DIRECT_IO   = true;

module.exports = {VFS_PATH,HOST,PORT,PROJECT,VFS_TOKEN,DEBUG,FORCE,DISPLAY,DIRECT_IO};