async function loadFile(){
    let FileLoded = false;
    if(FileLoded){

        return "file is loaded";
    }
    else{
        throw "file is not loaded"
    }
}
loadFile().then(value =>console.log(value))
.catch(Error =>console.log(Error));