// let timer;

// function comecar(){
//   timer = setInterval(showTime, 1000)
// }

// function parar(){
//  clearInterval(timer)
// } 

// function showTime(){
//   let d = new Date();
//   let h = d.getHours();
//   let m = d.getMinutes();
//   let s = d.getSeconds();

//   let txt = d+':'+h+':'+m+':'+s;
//   document.querySelector('.demo').innerHTML = txt;
// }


let timer;

function rodar(){
   timer =  setTimeout(() => {
    document.querySelector('.demo').innerHTML = 'rodooou'
  }, 2000);
}

function parar(){
  clearTimeout(timer)
}