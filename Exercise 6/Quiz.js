var exp = require("express")
var router = exp();
var bodyparser = require("body-parser")
var mongoose = require("mongoose");

router.use(bodyparser.urlencoded ({extended : true}))

router.get("/",function(req,res){
    res.sendFile(__dirname+'/Quiz.html')
});

router.post("/send", async function(req,res){
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ex6_fsd', { useNewUrlParser: true });
    console.log('Connected to database!');

    const schema = new mongoose.Schema({
      Ques_no : {
        type : Number,
        required : true
      },
      Ans : {
        type : String,
        required : true
      }
    });

    const table = mongoose.model('answers_new', schema);

    const que1 = await table.find({Ques_no : 1});
    const que2 = await table.find({Ques_no : 2});
    const que3 = await table.find({Ques_no : 3});

    const formValue1 = req.body.q1;
    const formValue2 = req.body.q2;
    const formValue3 = req.body.q3;

    const gotans1 = que1.find((d) => d.Ans === formValue1);
    const gotans2 = que2.find((d) => d.Ans === formValue2);
    const gotans3 = que3.find((d) => d.Ans === formValue3);

   

    if (gotans1 && gotans2 && gotans3 ) 
    {
      res.send('3 out of 3');
    } 
    else if((gotans1 && gotans2 && !gotans3) || (gotans1 && !gotans2 && gotans3) || (!gotans1 && gotans2 && gotans3) )
    {
      res.send('2 out of 3');
    }
    else if((gotans1 && !gotans2 && !gotans3) || (!gotans1 && gotans2 && !gotans3) || (!gotans1 && !gotans2 && gotans3) || (!gotans1 && !gotans2 && gotans3))
    {
      res.send('1 out of 3');
    }
    else
    {
      res.send('All Answers Are Incorrect');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

router.listen(8080,console.log("Server Listening"));

