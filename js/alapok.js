let nev = "Tanar";
console.log( nev );
console.log( 11 + 4 );
console.log( nev + 11 + 4 );
    // Megjegyzés

/*
    Megjegyzés
*/

/*

szám / 34, 35.56
szöveg / "szöveg" ritkábban de mehet a ''
logikai / true - false
--
null // null
undefined //undefined
*/

/*
tömb
objektum
*/
let szin1= "red", szin2="black";

let szöveg = "Lev Tolsztoj : Háború és béke";
console.log( szöveg + " mikor lesz már ennek vége?");
let idézet = "A. Huxley: 'Szóma ha mondom segít a gondon!'";

let szám ;

console.log("A négyzet területe="+ négyzetTerület( 11 ) );

function négyzetTerület( oldal ){
    return oldal*oldal;
}

console.log("A négyzet területe="+ négyzetTerület(10) );

szám = 5;

console.log("teszt 1: "+tesztLáthatóság(101));

function tesztLáthatóság( szám ){
    
    return szám * szám;
}
szám = 7;
console.log( "teszt 2: "+tesztLáthatóság(49));

//Adat bevitel
let nev2 = prompt("Add meg a neved","Nagy Zoárd");
console.log("Szia "+nev2+"!");

let kerdes = confirm("Ebédeltél már?");
console.log(kerdes);

console.log( Math.sqrt( 100 ));
console.log( Math.random());
szám = 23.45;
console.log( Math.round(szám));

function terjesztes(){
    window.alert("Itt vagyok!")
}