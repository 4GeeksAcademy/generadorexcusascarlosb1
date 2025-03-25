import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  let indiceWhoAleatorio = Math.floor(Math.random() * who.length);
  let indiceactionAleatorio = Math.floor(Math.random() * action.length);
  let indicewhatAleatorio = Math.floor(Math.random() * what.length);
  let indicewhenAleatorio = Math.floor(Math.random() * when.length);
  

  console.log(who[indiceWhoAleatorio] +' '+ action[indiceactionAleatorio] + ' ' + what[indicewhatAleatorio] + when[indicewhenAleatorio]);
  let respuesta = who[indiceWhoAleatorio] +' '+ action[indiceactionAleatorio] + ' ' + what[indicewhatAleatorio] + when[indicewhenAleatorio];


  //DOM -> MODELO DE OBJETOS DE DOCUMENTO
  document.getElementById('excuse').innerHTML = respuesta;

};
