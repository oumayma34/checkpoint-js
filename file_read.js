var fs = require('fs');

fs.writeFile('welcome.txt','Hello Node',function(err){
    if (err){
        console.error(err);
        console.log('welcome.txt has be canceled');
    }
});

fs.readFile('welcome.txt',function(err,data){
    if (err){
        console.error(err);
    } else {
        console.log('Contents of welcome.txt',data);
    }
});