var generatePassword = require('generate-password');
function genratePassRandom(){
    var mdp = generatePassword.generate({length:8, numbers: true, symbols : true, uppercase:true,});
    console.log('this is the Random Password',mdp);
}
genratePassRandom();