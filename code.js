


window.onload = () => {
  
  
let category = [{logo : 'LOGO/STARWARS.png', name : 'StarWars'},  // ΠΙΝΑΚΑΣ ΜΕ ΚΑΤΗΓΟΡΙΕΣ
                {logo : 'LOGO/MARVEL.png', name : 'Marvel'},
                {logo : 'LOGO/DC.png', name : 'DC'},
                {logo : 'LOGO/DISNEY.PNG', name : 'Disney'},
                {logo : 'LOGO/YUGIOH.jpg', name : 'YuGiOh'},
                {logo : 'LOGO/POKEMON.PNG', name : 'Pokemon'},
                {logo : 'LOGO/WITCHER.jpg', name : 'Witcher'},
                {logo : 'LOGO/OTHER.jpg', name : 'Other'}];

const container = document.getElementById('container')

function ShowCategories() {
  for (c of category){
    container.innerHTML += `<div class="categories" id=${c.name}><img src="${c.logo}"'></div>`
  }
}

ShowCategories();  // ΔΕΙΞΕ ΚΑΤΗΓΟΡΙΙΕΣ

let funko = [{name : 'Iron-Man', category : 'Marvel'},
             {name : 'Batfleck', category : 'DC'},
             {name : 'Darth Revan', category : 'StarWars'},
             {name : 'Woody', category : 'Disney'},
             {name : 'Buzz', category : 'Disney'},
             {name : 'Mufasa', category : 'Disney'},
             {name : 'Simba', category : 'Disney'},
             {name : 'R.E.B.D', category : 'YuGiOh'},
             {name : 'B.E.W.D', category : 'YuGiOh'},
             {name : 'Joy', category : 'YuGiOh'},
             {name : 'Mewtwo', category : 'Pokemon'},
             {name : 'Gerald', category : 'Witcher'},
             {name : 'Gerald-Game', category : 'Witcher'},
             {name : 'Yenefer', category : 'Witcher'},
             {name : 'Crash', category : 'Other'},
             {name : 'Spyro', category : 'Other'},
             {name : 'Ryuk', category : 'Other'},
             {name : 'Dovakhin', category : 'Other'}]

const starwars = document.getElementById('StarWars')
const marvel = document.getElementById('Marvel')
const dc = document.getElementById('DC')
const disney = document.getElementById('Disney')
const yugioh = document.getElementById('YuGiOh')
const pokemon = document.getElementById('Pokemon')
const witcher = document.getElementById('Witcher')
const other = document.getElementById('Other')

starwars.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='StarWars')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/Star Wars/BOX/${f.name}.png" alt="FUNKO/Star Wars/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

marvel.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='Marvel')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/Marvel/BOX/${f.name}.png" alt="FUNKO/Marvel/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

dc.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='DC')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/DC/BOX/${f.name}.png" alt="FUNKO/DC/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

disney.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='Disney')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/Disney/BOX/${f.name}.png" alt="FUNKO/Disney/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

yugioh.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='YuGiOh')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/YuGiOh/BOX/${f.name}.png" alt="FUNKO/YuGiOh/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

pokemon.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='Pokemon')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/Pokemon/BOX/${f.name}.png" alt="FUNKO/Pokemon/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

witcher.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='Witcher')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/Witcher/BOX/${f.name}.png" alt="FUNKO/Witcher/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}

other.onclick = function (){
  container.innerHTML = ''
  for (f of funko) {
    if(f.category==='Other')
    container.innerHTML += `<div class="categories_funko"><img class="myImg" src="FUNKO/Other/BOX/${f.name}.png" alt="FUNKO/Other/OOB/${f.name}.png"></div>`
    funkoImg();
  }
}






let popup = document.getElementById("pop-up"); // null  
let img = document.getElementsByClassName("myImg");
let popupImg = document.getElementById("img01");

// $('.myIMG').click(function(){
//   showModal();
// })

 function funkoImg(){
 for (let i = 0; i < img.length; i++) {
     img[i].addEventListener('click', showModal);
 }}


let showModal = function(){
 
    popup.style.display = "block";
    popupImg.src = this.alt;
   
}

$('#pop-up').click(function() {   //JQUERY 
  $('#pop-up').hide();
})

// popup.onclick = function() {   //JS
//   popup.style.display = "none";
// }

};
 
