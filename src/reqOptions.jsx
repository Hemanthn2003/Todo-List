const reqOptions =async (url='', optionsObj=null, errMsg='')=>{
try{
const response = await fetch(url, optionsObj);
if(!response.ok)throw Error('please reload app');
}catch(err){
errMsg = err.message;
}finally{
return errMsg
}
}
export default reqOptions;