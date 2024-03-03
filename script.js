console.log("działa");

const example = "elo";
let example2;
example2 = 3;

// console.log(example, example2);
// console.log(typeof example); //sprawdzi typ zmiennej


const value = true && 1; // przypisuje druga wartosc da 1
const isCheck = false ||2; // jezeli false to wkazdym innym wypadku przypisuje druga wartosc


const items = ['grabie', 'szczotka', 'grzebien', 'durszlak'];
const modifiedItems = items.map((item)=> `${item}-dodatek`);
// console.log(modifiedItems);
const secoundTab=[];

items.forEach ((item)=> {
  secoundTab.push(item);
  // console.log(item);
});
// console.log('tablica foreach',secoundTab);
//Funkcja- function
function add(a,b){
// console.log(a,b);
return a +b;
}

//wywolanie funkcji, uruchomienie

const addValue = add(1,2);
// console.log(addValue);


// Utworz funkcje ktora przyjmuje jako parametry 3 liczby - dodaje pierwwsza z druga i dzieli przez 3, pamietaj o warunku ktory sprawdza czy nie dzielimy przez 0
// jezeli:
// nie dzielimy przez 0 to zwroc wynik
// - dzielimy przez 0 zwroc undefined
// pamietamy o kolejnosci wykonywania dzialan

function division(a,b,c){
  let score = (a +b) / c ;
  if(score > 0) return score;
  if(c===0)  return console.log("nie dzielimy przez 0");;
}
const x = division(3,7,0);
// console.log(x);

//Utworz funkcje strzalkowa ktora przyjmuje 2 parametry oraz  zwroci nam wieksza liczbe
const arrowNumber = (a,b) => {
  if (a > b )return a;
  return b;
}

// console.log(arrowNumber(2,3));

//Utworz funkcje ktora zwraca tablice skladajaca sie z dwóch zmiennych

// const returnArr = (a, b) => [a,b];
// console.log(returnArr);


//Utworz funkcje ktora zwraca tablice 5 elementów
//- nastepnie odczytaj element 1 i 4 za pomoca destrukturyzacji tablicowej

const getNames = () => {

  return ['Ala', 'Ada', 'Monika', 'Pawel', 'Marek']
}

const tab = getNames();

const [imie1, , , imie5] = tab;

// console.log(imie1);
// console.log(imie5);
const emailInput = document.querySelector('.email')
// console.log(emailInput.text);

const header = document.querySelector("#mainHeader");
header.style.fontSize = "24px";
header.style.backgroundColor = "yellow"; 
console.log(header.style);