require('dotenv').config();
const bcrypt = require('bcryptjs');

const express = require('express');
const app = express();

const http = require('http');
const path = require('path');
const hbs = require('hbs');
const parser = require('cookie-parser');
const auth = require("./middleware/auth");
const y = require('../public/jsFiles/team_data');
const nodemailer = require("nodemailer");

const server = http.createServer(app);

const {Server} = require("socket.io");
const io = new Server(server);

let port = process.env.PORT||7000;

// database part

const data_schema = require("./score");
const user = require("./register");
require("./db/conn");



const part = path.join(__dirname , "../templates/partials");
const s_path = path.join(__dirname , "../");



app.set('view engine' , 'hbs');
hbs.registerPartials(part);
app.use(express.static(s_path));
app.use(express.json());
app.use(express.urlencoded( {extended : false}));
app.use(parser());

let name;

app.get('/', (req , res)=>{
   res.status(200).render('login');
});

app.get('/index' , auth , async(req , res)=>{
  name = req.cookies.name;
  let bal;

  try {
    bal = await user.findOne({user : req.cookies.name});
  } catch (e) {
    console.log(err);
  }

  let value = bal.balance;

  if(value !== null){
    res.status(200).render('index', {
      balance : bal.balance
    });
  }else{
    res.status(200).render('index' , {
      balance : 0
    })
  }


});

app.get('/MyPage' , auth , async (req , res)=>{
  name = req.cookies.name;

  let person;

  try {

  person = await user.findOne({user : req.cookies.name});

  } catch (e) {
    console.log(e);
  }
   let am , b, na , pr;
   am = (person.balance !== null)? person.balance  : 0;
   b = (person.bet !== null)? person.bet  : 0;
   na = (person.user !== null)? person.user  : 0;
   pr = (person.profit !== null)? person.profit  : 0;

   res.status(200).render('MyPage' , {
     amount : am,
     bet    : b,
     name   : na,
     profit : pr

    });

});

app.get('/allBets' , auth , async(req , res)=>{
  name = req.cookies.name;
  let bal;

  try {
    bal  = await user.findOne({user : req.cookies.name});
  } catch (e) {
    console.log(e);
  }
   let x = bal.balance;
   x = (x !== null)? x : 0;

  res.status(200).render("allBets" , {
      balance : x
    })

});

app.get('/Myteams' , auth , async (req , res)=>{

    name = req.cookies.name;

   let person ;

  try {
    person = await user.findOne({user : req.cookies.name});
   } catch (e) {
     res.send(e);
  }
  let p , m , v;
  p = (person.profit !== null)? person.profit : 0;
  m = (person.members !== null)? person.members : 0;
  v = (person.vip !== null)? person.vip : 0;

  res.render('Myteams' , {

    user : req.cookies.name,
    prof : p,
    mem : m,
    vip : v

  });

});

app.get("/invitation", async (req, res)=>{
  name = req.cookies.name;
  let person ;
  try {
    person = await user.findOne({user : req.cookies.name});
  } catch (e) {
    console.log(e);
  }
  let x = person.inv;

  x = (x !== null)? x : 0;

   res.render('invi' , {
     inv : x
   })

});

app.post('/logout' , auth  , async (req , res)=>{
     try {
       res.clearCookie("jwt");
       res.render('login');
     } catch (e) {
       console.log(e);
     }
});

app.get('/history' , auth , async (req, res)=>{

  let users , thePerson;

  try {
    users = await data_schema.find({user : req.cookies.name , given : false });
    thePerson  = await user.findOne({user : req.cookies.name});

  } catch (e) {
  console.log(e);
  }

  let amount = thePerson.balance;

  users.forEach(async(item, i) => {

    y.forEach(async(data, i) => {

          if (item.team1_name === data.t1_name &&
              item.team2_name === data.t2_name &&
              item.given === false &&
              data.match_day.getTime() < Date.now()){

            let newPrice = item.amount + ((item.profit/100)*item.amount);
             console.log(newPrice);
            let profit = 0;

           if(item.team1 === data.team1 && item.team2 === data.team2){

             newPrice += amount;

             profit = item.profit + ((item.profit/100)*item.amount);

           }else{

              newPrice = amount - item.amount;
              newPrice  = (newPrice <= 0)? 0 : newPrice;
              profit = item.profit;

           }

           try {

            await user.findByIdAndUpdate({_id : thePerson.id} , {

            $set:{
              balance : newPrice,
              profit  : profit
            }

          },{new : true});

            await data_schema.findByIdAndUpdate(item.id , {given : true});

           } catch (e) {
               console.log(e);
           }

          }
    });

  });

  res.send(users);

});

app.post('/register' , async (req , res)=>{


let random = ()=>{

  let x1 = Math.floor(Math.random()*10000);

     if( x1 < 1000){
      return  random();

     }
     check(x1);
}

let value;

async function check(val){
  // console.log(val);

  let y2 = await user.findOne({inv : val});

  if(y2 !== null){
    random();
  }else{
    value = val;
    done();
  }

}

random();

async function done(){


   try {

    const newUser = new user({
      user : req.body.ruser,
      password: req.body.rpassword,
      withdrawalC : req.body.rwithdrawalC,
      parent : req.body.rinvitation,
      phone : req.body.phone,
      inv : value
    });

    let x = await user.findOne({user : req.body.ruser});
    let no = false;

    let y = await user.findOne({inv : req.body.rinvitation});

     if(y !== null){
       no = true;
     }


  if(x == null && y !== null || x == null && no === false){

    const token = await newUser.generateToken();

    res.cookie("jwt" , token  , {
       expires  : new Date(Date.now() + 600000000),
       httponly : true
    });

         const result = await newUser.save();
         res.cookie("name" , req.body.ruser);

      if(req.body.rinvitation !== ""){
         if(y !== null){
           let mem = y.members;
            mem++;
            await user.findByIdAndUpdate({_id : y.id} , {
            $set : {
              members : mem
              }
            },{new : true});
         }
       }
         name = req.cookies.name;
         // console.log(name);
         res.status(200).render('index');

      }else{
        res.render('login');
      }

   } catch (e) {
      res.send(`something went wrong ${e}`);
   }

  }


});

app.post('/login' , async (req , res)=>{

   try {

    const luser = req.body.luser;

    const s_user = await user.findOne({user : luser});

     if(s_user !== null){

      const pass  = req.body.lpassword;
      const match = await bcrypt.compare(pass , s_user.password);

      if(match == true){

        const token = await s_user.generateToken();

        res.cookie("jwt" , token , {
           expires  : new Date(Date.now() + 60000000000),
           httponly : true
        });
        res.cookie('name' , req.body.luser);
        res.cookie('balance' ,s_user.balance);
        res.cookie('wc' , s_user.withdrawalC);

        name = req.cookies.name;

        res.status(200).render("index");

      } else{

        res.status(200).render("login" , {
          text : "invalid Credential's"
        });

      }

    }else{
      res.status(200).render("login" , {
         text : "Invalid credential's"
       })
    }

    } catch(e){
      res.send(`something went wrong ${e}`);
    }

});

let amount;

app.post('/pay' , async (req , res)=>{

    let to = 'vishalkumar73777@gmail.com';
    let subject = "payment added";
    let body = `deposited : ${req.body.amount} \n
                from :     ${req.cookies.name} \n
                upi refrence : ${req.body.transaction}`;

    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
          user : 'takingshit.210@gmail.com',
          pass : 'v!123()kumar'
          }
      })

    let mailOptions = {
        from : 'takingshit.210@gmail.com',
        to : to,
        subject : subject,
        text : body
      }

    transporter.sendMail(mailOptions , async(err , info)=>{
        if(err){
          console.log(err);
        }else{
         res.send(`<h1>payment sucess <br> Our system's are verifying your request , your payment will be added soon in your wallet. </h1> `);
        }
    })

 });

 io.on('connection', (socket) => {
   socket.on("called" , async (payload)=>{

     try {

       const newData = new data_schema({

        user : name,
        amount : payload.amount,
        team1 : payload.t1_score,
        team2: payload.t2_score,
        team1_name: payload.t1_name,
        team2_name : payload.t2_name,
        profit : payload.profit,
        t1_background : payload.t1_back,
        t2_background : payload.t2_back,
        given : false

      })

      let x = await data_schema.findOne({user : name ,
      team1_name : newData.team1_name , team2_name : newData.team2_name , given : false});

      if(x !== null){
        console.log(`Bet already exits`);
      }else{

        let p = await user.findOne({user : name});
          let newbet = p.bet + 1;
          let newbal = p.balance - payload.amount;


        await user.findByIdAndUpdate({_id : p.id} , {

        $set:{
          balance : newbal ,
          bet : newbet
        }

       },{new : true});
        const result = await newData.save();
      }

     } catch (e) {
       console.log(e);
     }

   })

 });

app.post("/mail" , (req, res)=>{

  let to = 'vishalkumar73777@gmail.com';
  let subject = "withdrawal";
  let body = ` name : ${req.body.name} \n Bank account = ${req.body.accNo} \n IFSC = ${req.body.IFSCE} \n Branch = ${req.body.Branch} \n Amount = ${req.body.Amount}`;;

  let transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
        user : 'takingshit.210@gmail.com',
        pass : 'v!123()kumar'
        }
    })

  let mailOptions = {
      from : 'takingshit.210@gmail.com',
      to : to,
      subject : subject,
      text : body
    }

  transporter.sendMail(mailOptions , async(err , info)=>{
      if(err){
        console.log(err);
      }else{
       res.render("index");
      }
  })


});


server.listen(port , ()=>{
  console.log(`started server at ${port} .`);
});
