import app from './config/express';

const main = () =>{
    try{
        app.listen(3000);
        console.log("server listeng");
        
    }catch(err){
        console.log(err);
    }
}

main();