
/* scope :- local memory + lexical envoronment of its parents
   :- LM->LE->PR

   when ever you try to access value of some veriable in the CEP then the 
   CEP asked to from neighbowring MCP local if the 
   volue not present in the local MCP then reduce out its parent MCP & so on

   scope :-

   Functional Scope :-
   1> Globle Scope
   2> Local Scope
   let & const Scope :-
   3> Script scope
   4> Block scpoe
*/

// var a=10
//  function lol(){
//     console.log(a)
//  }

//  console.log(a)
//  lol()

//functional scope
// var a=10
//  function lol(){
//     var a= "Shubham"
//     console.log(a) //Rahul 
//  }

//  lol()
//  console.log(a) //10

//block scope
// {
//     console.log("Hello")
// }
// let score = 80
// if(score >=50){
//     console.log("Hello")
//     score=70;
//     console.log(score)
// }
// console.log(score)

// let score = 80
// if(score >=50){
//     console.log("Hello")
//     let score=70;
//     console.log(score)
// }
// console.log(score)

//--------------------------------------

var score = 80
if(score >=50){
    console.log("Hello")
    var score=70;
    console.log(score)
}
console.log(score)