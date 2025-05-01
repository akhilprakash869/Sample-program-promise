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
//Is palindrome or not in javascript
function isPalindrome(str){
    const cleaned=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversed=cleaned.split("").reverse().join("");
    return cleaned===reversed;
}
console.log(isPalindrome("madam"))
console.log(isPalindrome("malayalam"))
console.log(isPalindrome("water"))