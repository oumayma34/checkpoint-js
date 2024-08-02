var serviceEmail = require('nodemailer');

var monEmail = serviceEmail.createTransport({service:'outlook',auth:{user:'########',pass:'######'},});
var parametreEmail = {from:'#########',to:'#######',subject:'CheckPoint',text:'Hello from Node.js',};
monEmail.sendMail(parametreEmail,function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log('email envoyé à',data.response)
    }
});