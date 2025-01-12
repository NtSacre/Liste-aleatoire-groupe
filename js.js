function randomTableau(tableau) {
  for (let i = tableau.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
}
let etudiantClass = [
  "Pape Ibrahima Gueye",
  "Daouda Coulibaly",
  "Elisabeth Yao",
  "Darel Kif",
  "Kia Leye",
  "Jem Diatta",
  "Laye Souare",
  "Modou Ndiaye",
  "Assane Mbodj",
  "Coumba Thiaw",
  "Ousmane Ndao",
  "Ouattara Mati",
  "Zeyna",
  "Coumba Diouf",
  "Aliou Diallo",
  "Alioune Ndiaye",
  "Yah Awa Mountakha",
  "WilsonTureh Ceteris",
  "Elhadji Toure",
  "Babacar Mbaye",
  "kelly Kelly",
  
];
randomTableau(etudiantClass);
console.log(etudiantClass);
let tab1 = etudiantClass.slice(0, 5);
console.log(tab1);
let tab2 = etudiantClass.slice(5, 10);
let tab3 = etudiantClass.slice(9, 15);
let tab4 = etudiantClass.slice(14, 21);


let myDiv1 = document.getElementById("groupe1");
for (let index = 0; index < tab1.length; index++) {
  myDiv1.innerHTML += `<span class="nom">  ${tab1[index]}</span> <br>`;
}
// tableau 2----------------
let myDiv2 = document.getElementById("groupe2");
for (let index = 0; index < tab2.length; index++) {
  myDiv2.innerHTML += `<span class="nom"> ${tab2[index]}</span><br>`;
}
// tableau 3----------------

let myDiv3 = document.getElementById("groupe3");

for (let index = 1; index < tab3.length; index++) {
  myDiv3.innerHTML += `<span class="nom">  ${tab3[index]}</span><br>`;
}
// tableau 4----------------

let myDiv4 = document.getElementById("groupe4");

for (let index = 1; index < tab4.length; index++) {
  myDiv4.innerHTML += `<span class="nom">  ${tab4[index]}</span><br>`;
}

function afficheDate() {
  const date = new Date();
  const heure = date.getHours();
  const minute = date.getMinutes();
  const seconde = date.getSeconds();
  const formateHeure = `${heure.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${seconde.toString().padStart(2, "0")}`;
  document.getElementById("horloge").innerText = formateHeure;
}
setInterval(afficheDate, 1000);
