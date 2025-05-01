//Creat promise sample project
const promise=new Promise(function(resolve,reject){
    let success=true;
    if(success===true){
        console.log("operation is successful");
    }else{
        console.log("operation is failed");
    }
});
promise
.then(function(result){
    console.log(error);
})
.catch(function(error){
    console.log(error);
})