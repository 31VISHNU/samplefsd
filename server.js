const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/message',(req,res)=>{
    res.json({message:"Hello How Are You"});
});
app.listen(8000,()=>{
    console.log("Server listening on port 8000");
});