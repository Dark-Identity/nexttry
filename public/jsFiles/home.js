const socket = io();

const content = document.querySelectorAll("#contents");

let y = [
  {
t1_back:"../public/photos/Goias.png",
t2_back: "../public/photos/Wanderers.png",
t1_name: "Goias",
t2_name: "Wanderers",
match_day: new Date(2022, 5, 7,16,5),
time: 0,
team1 : 1,
team2 : 1
},
{
t1_back:"../public/photos/OperarioPR.png",
t2_back: "../public/photos/Botafogo.png",
t1_name: "Operario PR",
t2_name: "Botafogo",
match_day: new Date(2022, 5, 7,19,25),
time: 0,
team1 : 1,
team2 : 3
},
{
t1_back:"../public/photos/Guarani.png",
t2_back: "../public/photos/Goias.png",
t1_name: "Guarani",
t2_name: "Goiás",
match_day: new Date(2022, 5, 7,15,0),
time: 0,
team1 : 3,
team2 : 3
},
{
t1_back:"../public/photos/OperarioPR.png",
t2_back: "../public/photos/Wanderers.png",
t1_name: "Operario PR",
t2_name: "Wanderers",
match_day: new Date(2022, 5, 7 , 18, 0),
time: 0,
team1 : 1,
team2 : 2
},
{
t1_back:"../public/photos/CampinensePB.png",
t2_back: "../public/photos/Latvia.png",
t1_name: "Campinense PB",
t2_name: "Latvia",
match_day: new Date(2022, 5, 7,20,0),
time: 0,
team1 : 3,
team2 : 3
},
{
t1_back:"../public/photos/DalianProfessional.png",
t2_back: "../public/photos/GuangzhouCity.png",
t1_name: "Dalian Professional",
t2_name: "Guangzhou City",
match_day: new Date(2022, 5, 7,22,0),
time: 0,
team1 : 9,
team2 : 9
},
{
t1_back:"../public/photos/DalianProfessional.png",
t2_back: "../public/photos/BostonRiver.png",
t1_name: "Dalian Professional",
t2_name: "Boston River",
match_day: new Date(2022, 5, 6,23,58),
time: 0,
team1 : 2,
team2 : 3
},
{
t1_back:"../public/photos/BerekumChelsea.png",
t2_back: "../public/photos/DreamsFC.png",
t1_name: "Berekum Chelsea",
t2_name: "Dreams F.C.",
match_day: new Date(2022, 5, 6,20,0),
time: 0,
team1 : 9,
team2 : 9
},
{
t1_back:"../public/photos/DeportesTolima.png",
t2_back: "../public/photos/Dreams FC.png",
t1_name: "Deportes Tolima",
t2_name: "Dreams F.C.",
match_day: new Date(2022, 5, 6,19,0),
time: 0,
team1 : 9,
team2 : 9
},
{
t1_back: "../public/photos/Envigado.png",
t2_back: "../public/photos/laEquidad.png",
t1_name: "Envigado",
t2_name: "La Equidad",
match_day: new Date(2022, 5, 6,17,0),
time: 0,
team1 : 9,
team2 : 9
},
  {
t1_back:"../public/photos/Guarani.png",
t2_back: "../public/photos/CampinensePB.png",
t1_name: "Guarani",
t2_name: "Campinense PB",
match_day: new Date(2022, 5, 6,18,0),
time: 0,
team1 : 1,
team2 : 3
},
{
t1_back:"../public/photos/Guarani.png",
t2_back: "../public/photos/Remo.png",
t1_name: "Guarani",
t2_name: "Remo",
match_day: new Date(2022, 5, 6,21,0),
time: 0,
team1 : 2,
team2 : 3
},
{
t1_back:"../public/photos/Wanderers.png",
t2_back: "../public/photos/Latvia.png",
t1_name: "Wanderers",
t2_name: "Latvia",
match_day: new Date(2022, 5, 6,23,0),
time: 0,
team1 : 9,
team2 : 9
},
{
    t1_back : "../public/photos/RealMadrid.png",
    t2_back : "../public/photos/Barcelona.png",
    t1_name : "Real Madrid",
    t2_name : "Barcelona",
    match_day : new Date(2022 , 5 , 7 , 10 , 0),
    time : 0,
    team1 : 9,
    team2 : 1
  },

  {
    t1_back : "../public/photos/Juventus.png",
    t2_back : "../public/photos/manchesterUnited.png",
    t1_name : "Juventus",
    t2_name : "Manchester United",
    match_day : new Date(2022 , 5 , 7 , 16 , 0),
    time : 0,
    team1 : 9 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/ManchesterCity.png",
    t2_back : "../public/photos/chelse.png",
    t1_name : "Manchester City",
    t2_name : "Chelsea",
    match_day : new Date(2022 , 5 , 8 , 10 , 0),
    time : 0,
    team1 : 9 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/Arsenal.png",
    t2_back : "../public/photos/liverpool.png",
    t1_name : "Arsenal",
    t2_name : "Liverpool",
    match_day : new Date(2022, 5 , 8 , 16 , 0),
    time : 0,
    team1 : 0 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/BayernMunchen.png",
    t2_back : "../public/photos/BorussiaDortmund.png",
    t1_name : "Bayern Munchen",
    t2_name : "Borussia Dortmund",
    match_day : new Date(2022, 5 , 9 , 10 , 0),
    time : 0,
    team1 : 9 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/PSG.png",
    t2_back : "../public/photos/TottenhamHotspur.png",
    t1_name : "PSG",
    t2_name : "Tottenham Hotspur",
    match_day : new Date(2022, 5 , 9 , 16 , 0),
    time : 0,
    team1 : 2 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/AtleticoMadrid.png",
    t2_back : "../public/photos/Intenazionale.png",
    t1_name : "Atletico Madrid",
    t2_name : "Intenazionale",
    match_day : new Date(2022, 5 , 10 , 10 , 0),
    time : 0,
    team1 : 2 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/Milan.png",
    t2_back : "../public/photos/Brazil.png",
    t1_name : "Milan",
    t2_name : "Brazil",
    match_day : new Date(2022, 5 , 10 , 16 , 0),
    time : 0,
    team1 : 1 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/Spain.png",
    t2_back : "../public/photos/Argentina.png",
    t1_name : "Spain",
    t2_name : "Argentina",
    match_day : new Date(2022, 5 , 11 , 10 , 0),
    time : 0,
    team1 : 0 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/Germany.png",
    t2_back : "../public/photos/England.png",
    t1_name : "Germany",
    t2_name : "England",
    match_day : new Date(2022, 5 , 12 , 16 , 0),
    time : 0,
    team1 : 0 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/RealMadrid.png",
    t2_back : "../public/photos/Juventus.png",
    t1_name : "Real Madrid",
    t2_name : "Juventus",
    match_day : new Date(2022, 5 , 13 , 10 , 0),
    time : 0,
    team1 : 0 ,
    team2 : 0
  },
  {
    t1_back : "../public/photos/Barcelona.png",
    t2_back : "../public/photos/manchesterUnited.png",
    t1_name : "Barcelona",
    t2_name : "Mnchester United",
    match_day : new Date(2022, 5 , 13 , 16 , 0),
    time : 0,
    team1 : 2 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/ManchesterCity.png",
    t2_back : "../public/photos/Arsenal.png",
    t1_name : "Manchester City",
    t2_name : "Arsenal",
    match_day : new Date(2022, 5 , 14 , 10 , 0),
    time : 0,
    team1 : 1 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/chelse.png",
    t2_back : "../public/photos/liverpool.png",
    t1_name : "Chelsea",
    t2_name : "Liverpool",
    match_day : new Date(2022, 5 , 14 , 16 , 0),
    time : 0,
    team1 : 2 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/BayernMunchen.png",
    t2_back : "../public/photos/PSG.png",
    t1_name : "Bayern Munchen",
    t2_name : "PSG",
    match_day : new Date(2022, 5 , 15 , 10 , 0),
    time : 0,
    team1 : 1 ,
    team2 : 2
  },
  {
    t1_back : "../public/photos/BorussiaDortmund.png",
    t2_back : "../public/photos/TottenhamHotspur.png",
    t1_name : "Borussia Dortmund",
    t2_name : "Tottenham Hotspur",
    match_day : new Date(2022, 5 , 15 , 16 , 0),
    time : 0,
    team1 : 1 ,
    team2 : 1
  },
  {
    t1_back : "../public/photos/AtleticoMadrid.png",
    t2_back : "../public/photos/Milan.png",
    t1_name : "Atletico Madrid",
    t2_name : "Milan",
    match_day : new Date(2022, 5 , 16 , 10 , 0),
    time : 0,
    team1 : 3 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/Intenazionale.png",
    t2_back : "../public/photos/Milan.png",
    t1_name : "Intenazionale",
    t2_name : "Milan",
    match_day : new Date(2022, 5 , 16 , 16 , 0),
    time : 0,
    team1 : 0 ,
    team2 : 0
  },
  {
    t1_back : "../public/photos/Brazil.png",
    t2_back : "../public/photos/Argentina.png",
    t1_name : "Brazil",
    t2_name : "Argentina",
    match_day : new Date(2022, 5 , 17 , 10 , 0),
    time : 0,
    team1 : 1 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/Spain.png",
    t2_back : "../public/photos/Germany.png",
    t1_name : "Spain",
    t2_name : "Germany",
    match_day : new Date(2022, 5 , 17 , 16 , 0),
    time : 0,
    team1 : 0 ,
    team2 : 3
  },
  {
    t1_back : "../public/photos/Argentina.png",
    t2_back : "../public/photos/England.png",
    t1_name : "Argentina",
    t2_name : "England",
    match_day : new Date(2022, 5 , 18 , 10 , 0),
    time : 0,
    team1 : 2,
    team2 : 2
  }

];

let ind = 0;

function start(today , match_day , i){
  // console.log(match_day  ,   today);
  if(match_day >= today){

    var diff = (match_day.getTime() - today.getTime()) / 1000;

    if(diff <= 86400){

    let timer = diff/60;

    // setInterval(function () {
      let day = Math.floor(timer / 1440 );
      let hr = Math.floor( (timer%1440)/60 )
      let minute = parseInt( (timer%1440)%60 , 10 );

      hr = hr < 10 ? "0"+ hr : hr;
      day = day < 10 ? "0"+ day : day;
      minute = minute < 10 ? "0" + minute : minute;

      let time = `${day}d : ${hr}h : ${minute}m`;

      let ls = document.createElement("div");

      ls.classList.add("content-scores");

      ls.value = ind;

      ls.innerHTML = `<div class="c-top">
      <p></p>
      </div>


      <div class="c-mid">

      <div class="team">
      <span style = "background : url(${y[i].t1_back});
                     background-position: center;
                     background-size: contain;
                     background-repeat: no-repeat;"></span>
      <p>${y[i].t1_name}</p>
      </div>

      <div class="team data">
      <span></span>
      <p>${time}</p>
      </div>

      <div class="team">
      <span style = "background : url(${y[i].t2_back});
                     background-position: center;
                     background-size: contain;
                     background-repeat: no-repeat;" ></span>
      <p>${y[i].t2_name}</p>
      </div>

      </div>

      <div class="c-bottom">
      <div class="c-bottom-in">
      <span>Game start</span>
      <span class="in">${time}</span>
      </div>
      <div class="c-bottom-in amount">
      <span>Amount</span>
      <span class="in">39439</span>
      </div>
      </div>
      <input class = "background_val" style = "display : none" value = ${y[i].t1_back}></input>
      <input class = "background_val" style = "display : none" value = ${y[i].t2_back} ></input>
      `;

      content[0].appendChild(ls);
      y[i].time = timer;
    }
  }
}

const rand = (()=>{
  let num = Math.ceil(Math.random()*10000);
  return num;

});



let s_data = [

   {
     score : "0:0",
     profit : 6.84,
   },
   {
     score : "0:1",
     profit : 5.90,
   },{
     score : "0:2",
     profit : 3.42,
   },{
     score : "0:3",
     profit : 1.91,
   },{
     score : "1:0",
     profit : 8.66,
   },{
     score : "1:1",
     profit : 9.28,
   },{
     score : "1:2",
     profit : 4.33,
   },{
     score : "1:3",
     profit : 2.24,
   },{
     score : "2:0",
     profit : 6.84,
   },{
     score : "2:1",
     profit : 6.50,
   },{
     score : "2:2",
     profit : 3.82,
   },{
     score : "2:3",
     profit : 1.58,
   },{
     score : "3:0",
     profit : 4.33,
   },{
     score : "3:1",
     profit : 3.82,
   },{
     score : "3:2",
     profit : 2.25,
   },{
     score : "3:3",
     profit : 1.27,
   },{
     score : "4:4",
     profit : 0.50,
   },

]


function time(match_day , i){

    var currentTime = new Date();

    var hoursIST = currentTime.getHours()
    var minutesIST = currentTime.getMinutes()
    var seconds   = currentTime.getSeconds()
    var date = currentTime.getDate();
    let month = currentTime.getMonth();

    let today = new Date(2022 , month , date , hoursIST , minutesIST);
    start( today , match_day , i);

  }

  y.forEach((item, i) => {
      time(item.match_day , i);
  });


  function dec(){

    setTimeout(function () {
      let index = 0;
      y.forEach((item, i) => {

        if(item.time != 0){

          let day = Math.floor(item.time / 1440 );
          let hr = Math.floor( (item.time%1440)/60 )
          let minute = parseInt( (item.time%1440)%60 , 10 );

          hr = hr < 10 ? "0"+ hr : hr;
          day = day < 10 ? "0"+ day : day;
          minute = minute < 10 ? "0" + minute : minute;
          let uts = `${day}d : ${hr}h : ${minute}m`;

          hey[index].lastElementChild.innerText = uts;
          index++;
          item.time -= 1;

        }

      });

      dec();

    }, 60000);

  }

  let hey = document.querySelectorAll(".data");
  dec();

// rest of the work:-

const bet = document.querySelectorAll("#bet-final");
let inner = document.querySelectorAll(".content-scores");
let whole = document.querySelectorAll('body');

let wind = document.querySelectorAll("#window");
let t1_logo = document.querySelectorAll('.t1_logo');
let t1_background , t2_background;

inner.forEach((item, i) => {

  item.addEventListener('click' , ()=>{

              let w_time = document.querySelectorAll('.w-time')[0];
              let t1_n = document.querySelectorAll('.t-name')[0];
              let t2_n = document.querySelectorAll('.t-name')[1];
              let b_t1 = document.querySelectorAll(".b-team1")[0];
              let b_t2 = document.querySelectorAll(".b-team2")[0];
              let b_data = document.querySelectorAll(".b-data")[0];
              let act_bet = document.querySelectorAll('.bet-data');
             let select = inner[i].children[1];
              t1_background = `url(${item.children[3].value}) no-repeat center`;
              t2_background = `url(${item.children[4].value}) no-repeat center`;

    t1_logo[0].style.background = t1_background;
    t1_logo[1].style.background = t2_background;
    t1_logo[0].style.backgroundSize = "contain";
    t1_logo[1].style.backgroundSize = "contain";


    w_time.innerText = select.children[1].lastElementChild.innerText;
    t1_n.innerText = select.children[0].lastElementChild.innerText;
    t2_n.innerText = select.children[2].lastElementChild.innerText;

// bet window section

   // bet cards
    b_t1.lastElementChild.innerText = t1_n.innerText;
    b_t2.lastElementChild.innerText = t2_n.innerText;
    b_data.lastElementChild.innerText = w_time.innerText;
// d_input
let score = document.querySelectorAll(".score-bord-sec")[0];

s_data.forEach((item, i) => {

     let x = document.createElement("div");
     x.classList.add("score");
     x.classList.add( "b_score");
     x.innerHTML = `<p>${item.score}</p>
                    <p>${item.profit}%</p>
                    <p>${rand()}</p>
                    `
     score.appendChild(x);

});

  let b_score = document.querySelectorAll(".b_score");

  b_score.forEach((item, i) => {

       item.addEventListener('click', ()=>{

         let score_data = document.querySelectorAll('.score-data');
         let profit = document.querySelectorAll(".profit")[0];

         score_data[0].innerText = parseInt(item.children[0].innerText.slice(0,1));
         score_data[1].innerText = parseInt(item.children[0].innerText.slice(2,3));
         profit.innerText = parseFloat(item.children[1].innerText.slice(0,-1));

         let newOne = document.querySelectorAll(".bet-teams");
         newOne[0].children[0].children[0].style.background = t1_background;
         newOne[0].children[0].children[0].style.backgroundSize = 'contain';
         newOne[0].children[2].children[0].style.background = t2_background;
         newOne[0].children[2].children[0].style.backgroundSize = "contain";

         bet[0].style.animation = "come 1s ease-in-out forwards ";
         bet[0].style.overflowY = "hidden";
         bet_amount();
         window.scrollTo(0,0);

       })
  });

      wind[0].style.animation = "come 1s ease-in-out forwards";
      window.scrollTo(0,0);
  })

});

// window back btn;

let back = document.querySelectorAll(".bord-back-btn");

  back[0].addEventListener('click', ()=>{

        wind[0].style.animation = "go 1s ease-in-out forwards";
        whole[0].style.overflowY = "scroll";
        // wind[0].style.animationdirection = "reverse";
   });

let hey_back = document.querySelectorAll(".back-hey");
let hey_there = document.querySelectorAll(".hey-there");

  hey_back[0].addEventListener('click' ,()=>{
         hey_there[0].style.animation = "go 1s ease-in-out forwards";
         whole[0].style.overflowY = "scroll";
  })

let tutorial = document.querySelectorAll(".tutorial-title");

   tutorial[0].addEventListener('click' , ()=>{
       hey_there[0].style.animation = "come 1s ease-in-out forwards";

       window.scrollTo(0,0);
       whole[0].style.overflowY = "hidden";
   })

let choose = document.querySelectorAll(".b-choose");
let amount = document.querySelectorAll('.b-amount');

let chose = choose[0].children;

 for(let i = 0; i < choose[0].children.length ; i++){

    chose[i].addEventListener('click' , ()=>{
      if(i != 7){
       amount[0].lastElementChild.value =  parseInt(chose[i].innerText);
       bet_amount();
     }else{
       let balance = document.querySelector('.bal').lastElementChild;
       amount[0].lastElementChild.value = parseInt(balance.innerText);

       bet_amount();
     }

    });
 }

 let cancel_btn = document.querySelectorAll('.cancel');
 let conf_btn = document.querySelector('.conf').lastElementChild;
 // let scores = document.querySelectorAll('.score');



 cancel_btn[0].addEventListener('click' , ()=>{
       bet[0].style.animation = "go 1s ease-in-out forwards";
 });

let response = document.querySelectorAll(".reply");

function bet_amount(){

  const am1 = document.getElementById('amount');
  const prof1 = document.querySelectorAll('.profit');
  const exp_prof = document.querySelector('.b-expected-p').lastElementChild;

  let pr = parseInt(prof1[0].innerText);
  let ammount = parseInt(am1.value);

  if(isNaN(pr/100 * ammount)){
    exp_prof.innerText = "";
  }else{
    exp_prof.innerText = (pr/100 * ammount).toFixed(3);
  }

  let balance = document.querySelector('.bal').lastElementChild.innerText;
  let conf = document.querySelector(".conf").lastElementChild;

  let check = parseInt(balance);

  if( (ammount <= check) && check !== 0 && ammount > 0 ){

    conf.removeAttribute('disabled');
    conf.style.background = "blue";
    response[0].parentElement.style.background = "transparent";
    response[0].innerText = "";

  }else if( ammount > check){

    conf.setAttribute('disabled' , "");
    conf.style.background = "#888888";
    response[0].parentElement.style.background = "#ffc6c6";
    response[0].innerText = "Low Balance";

  }else{
    conf.setAttribute('disabled' , "");
    conf.style.background = "#888888";
  }

}

// b-expected-p"

const score = document.querySelectorAll('.score-data');
const team_name = document.querySelectorAll('.bet-teams')[0];
let input = document.querySelectorAll(".d_input");
let form = document.querySelector('#form');

form.addEventListener("submit" , (e)=>{

    e.preventDefault();

    let am = document.querySelector('#amount');
    let profit = document.querySelector(".profit");

  const data = {
       amount : parseInt(am.value),
       t1_score : parseInt(score[0].innerText),
       t2_score : parseInt(score[1].innerText),
       profit : parseInt(profit.innerText),
       t1_name : team_name.children[0].lastElementChild.innerText,
       t2_name : team_name.children[2].lastElementChild.innerText,
       t2_back :  t2_background,
       t1_back :  t1_background
    }

    response[0].parentElement.style.background = "#a1ffaf";
    response[0].innerText = "Done";

    let test = document.querySelector('.bal').lastElementChild;

    if(parseInt(test.innerText) > 0 ){
      socket.emit("called" , data);
      // console.log("called");
    }else{
       bet_amount();
    }
    // socket.emit("called" , data);

  bet[0].style.animation = "go 2s ease-in-out forwards";

  am.value = '';
  am.innerText = "";
  });
