let inner = document.querySelectorAll(".affiliate");
let wind = document.querySelectorAll("#window");
// let affiliate = document.querySelectorAll(".affiliate");


for (var i = 0; i < inner.length ; i++) {
  inner[i].addEventListener('click' , ()=>{
            wind[0].style.animation = "come 1s ease-in-out forwards";
            window.scrollTo(0,0);
  });
}


// history btn;

const history = document.querySelector('.history');
const history_sec = document.querySelector('.wind');

window.onload = function (){

 let place = document.querySelector(".his-sec");


 try {
   fetch("/history")
    .then(response => response.json())
    .then((data)=>{

      data.forEach((item, i) => {

        let div = `
          <div class="c-mid">

          <div class="team">
             <span style = "background : ${item.t1_background};
                            background-size : contain;"></span>
             <p>${item.team1_name}</p>
           </div>

          <div class="team data">
             <span></span>
           </div>

          <div class="team">
             <span style = "background : ${item.t2_background};
                            background-size : contain;"></span>
             <p>${item.team2_name}</p>
           </div>

          </div>

         <div class="c-bottom">
           <div class="c-bottom-in">
             <span>Game Started</span>
           </div>
           <div class="c-bottom-in">
             <span>Score</span>
             <span class="in">${item.team1} : ${item.team2}</span>
           </div>
           <div class="c-bottom-in amount">
             <span>your bid</span>
             <span class="in">${item.amount}</span>
           </div>
         </div>
  `;

          let ele = document.createElement("div");
          ele.classList.add("content-scores");
          ele.innerHTML = div;

          place.append(ele);

      });

    });

 } catch (e) {
   console.log(e);
 }

}

// history delete

// window back btn;

let back = document.querySelectorAll(".bord-back-btn");

back.forEach((item, i) => {

  item.addEventListener('click' , ()=>{
   if (i === 1) {
       history_sec.style.animation = "go 1s ease-in-out forwards";
    }

  })

});
