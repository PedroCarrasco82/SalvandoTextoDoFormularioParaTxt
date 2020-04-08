var fs = require('fs');

module.exports.index = function(application,req,res){
    res.render('index');
}

module.exports.registrararquivo = function(application,req,res){
   fs.writeFile("./app/files/"+req.body.nomeArquivo+".txt", req.body.conteudoArquivo,(err)=>{
        if(err)
            res.send(err);
        else
        res.redirect('/');
   });
}