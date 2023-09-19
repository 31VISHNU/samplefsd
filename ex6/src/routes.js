const express = require('express')
const router = express.Router()


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/vishnu.html')
});

app.post('/length', async(req, res) => {
    var count = req.body.box.split('').length;
    console.log(count);
    return res.send('Length is ' + req.body.box.split('').length);
  })
router.get('/questions', (req, res) => {

})
// this one is just a test
router.get('/', (req, res) => {
    res.send('H3ll0 W0RlD')
})


module.exports = router