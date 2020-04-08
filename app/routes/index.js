module.exports = function(application){
    
    application.get('/',function(req,res){
        application.app.controller.index.index(application,req,res);
    });

    application.post('/registrararquivo',function(req,res){
        application.app.controller.index.registrararquivo(application,req,res);
    });

}