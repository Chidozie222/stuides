console.log("John")




document.getElementById("Wall").textContent = "My name is John";




let time = document.createElement('h1');
time.textContent = "Joinning random words";
document.body.appendChild(time);


const John = document.createElement(`b`);
John.textContent = 'My nickname is joker';
document.body.appendChild(John);











let canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;
let ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText("Hello world", 50,50);
document.body.appendChild(canvas);


let number1 = "I am";
let number2 = " boy";
let vol= number1 + number2;
console.log(vol);


let one = 10;
let two = 5;
let a = one + two;
let b = one - two;
let c = one * two;
let d = one / two;
console.log(a);
console.log(b);
console.log(c);
console.log(d);






const van = document.createElement('p');
van.textContent = "John is the best and no one is better than him";
document.body.appendChild(van);


let Fisrtname = ["Ibenne", "Ikpen", "Johnson"];
console.log(Fisrtname);
window.alert(Fisrtname[0]);



let Id = {
    Fisrtname : 'John',
    lastname : 'Ibenne',
    Age : '15',
};
console.log(Id);


function heart(){
    const css = document.body;
    css.classList.toggle("heart")
}



let y = 'John';
let z = 'Ibenne'
let out = `My name is ${y} and surname is ${z}`;
console.log(out);


function plus(a,b){
    return a+b
}
plus(20,40)

60

plus(400,10)

410


let country = "Nigeria";
country.toLowerCase();
country.toUpperCase();
country.length;
country.charAt(0);

"N"

co

'co' 

country.toUpperCase()

"NIGERIA"

country.toLowerCase()

"nigeria"

country.length

7

country.slice(0,-1)

"Nigeri"




const hat = "HyperTextMarkupLanguage i am learning HyperTextMarkupLanguage.";
hat.replace("HyperTextMarkupLanguage", "HTML");