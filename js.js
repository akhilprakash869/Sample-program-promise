const promis=new Promise(function(resolve,reject){
    let success=true;
    if(success===true){
        resolve("operation succesfull");
    }else{
        reject("operation is failure");
    }
});
promis
.then(function(result){
console.log(result)
})
.catch(function(error){
    console.log(error)
})