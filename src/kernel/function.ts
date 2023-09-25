import bcryptjs from 'bcryptjs';
require('dotenv').config();

export async function hash(password:string) {
    return new Promise((resolve,reject)=>{
        bcryptjs.genSalt(10, function(err, salt) {
            bcryptjs.hash("B4c0//", process.env.BCRYPTJS!, function(err, hash) {
                if(err) reject(err);
                resolve(hash)
            });
        });
    })    
}


/*export async function compare(params) {
        return await new   
}*/