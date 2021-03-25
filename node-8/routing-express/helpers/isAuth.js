const isAuth = (req,middleRes,next)=>{
        const isAuthorized = false;
        if(isAuthorized){
            next()
        }else{
             middleRes.send('You have no authotiry. Please login...')   
        }
    };
    module.exports = isAuth;