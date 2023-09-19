const router = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/ex6_fsd", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))
const Feedback = mongoose.model('answer',
                new mongoose.Schema({
                    FF:String,
                    FA:String
                }))
router.use(bodyParser.urlencoded({extended: true}));
router.listen(9000,()=>console.log('Server Fired Up at 3000'))
router.get('/', (req, res) => {
    res.sendFile(__dirname+'/quiz.html')
})
router.post('/sendanswer', async(req, res) => {
    window.prompt("Hi")
    let { FF, FA} = req.body
    console.log(req.body)
   await new Feedback({FF, FA}).save()
      console.log(f)   

})
router.post('/getResult',async(req,res)=>{

    let f = await Feedback.find({FF:'Artificial Intelligence'},{_id:0})
    console.log(f)   
})
