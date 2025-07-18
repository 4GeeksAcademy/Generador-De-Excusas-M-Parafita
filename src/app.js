import "bootstrap";
import "./style.css";


window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  function selector(who,action,what,when) {
    let nuevaExcusa = "";
    let random = Math.floor(Math.random() * 4);
    nuevaExcusa += who[random]+" ";
    random = Math.floor(Math.random() * 4);
    nuevaExcusa += action[random]+" ";
    random = Math.floor(Math.random() * 4);
    nuevaExcusa += what[random]+" ";
    random = Math.floor(Math.random() * 4);
    nuevaExcusa += when[random]+" ";
    return nuevaExcusa;
  }
  let excusa = selector(who,action,what,when);
  let parrafoHTML = document.getElementById("excuse");
  parrafoHTML.innerHTML = excusa
};
