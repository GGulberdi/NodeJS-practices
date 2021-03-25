const express = require('express')
const router = express.Router()


router.get('/User/:id?/:jobId',(req,res)=>{res.send("Id="+req.params.id+" JobId="+req.params.jobId)})
router.post('/User',(req,res,next)=>{res.send("Hello world from USER POST Method...")

const user = false;
if(user){
    res.send('Hello word from USer Method...')

}else{
    rerun.next({status:404, message:"This user was not found."})
}

})


module.exports = router;

