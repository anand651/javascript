 let c=12;
 let dezy=13;

// console.log("c+d is",c+dezy);
// console.log("the type of a is",typeof(a));



aa=23;
ab=false
// console.log("the type of a is",typeof(aa));
// a=Boolean(ab)
// console.log(ab);

 ac='anand'
// console.log("the type of a is",typeof(ac));



 const firstnumber=3;
 const secondnumber=2;

 const result =firstnumber + secondnumber;
 //console.log(result);
const resultd =firstnumber ** secondnumber;
// console.log(resultd);

 const resultc =firstnumber * secondnumber;
 // console.log(resultc);

let a=12;
a++;
//console.log(a);

let thirdnumber=12;
thirdnumber +=4;
//console.log(thirdnumber);

const firstnumbera='3';
 const secondnumbera=3;

const resulta =firstnumbera == secondnumbera;
 //console.log(resulta);

 const firstnumberb='A';
 const secondnumberb=65;

const resultb =firstnumberb === secondnumberb;
 //console.log(result);


 const age=24;
 if(age>=18){
 //console.log('you can vote');
 }else{
 console.log('you can not vote');  
 }

 const grade ='r';

 switch (grade) {
    case 'A':
   // console.log('a is very good');
    
    case 'B':
   // console.log('b is very smart');
    break;
    case 'C':
    //console.log('c is very learning');
    break;
    case 'D':
   // console.log('d is very not good');
    break;
    default :
   // console.log('invalid detail');
 }

for (let b = 0; b < 5; b++) {
    //console.log("anand kumar",b); 
}


let step=0;
while(step<5){
    //console.log('stp',step);
    step=step+2;
}


let stepa =9;
do{
   // console.log('step',stepa);
    stepa+=1;
}while(stepa<5);


let stepb=0;
while(stepb<5){
    //console.log('stap',stepb);
    stepb=stepb+1;
    if(stepb==2){
        break;
    }
}

let stepc=0;
while(stepc<5){
    stepc=stepc+1;
    if(stepc==2){
        continue;
    }
    console.log('step',stepc);
}

const word = ["apple",'banana','cherry'];
//console.log(word[2]);

const words = ["apple",'banana','cherry',12,true,{
    name:'anand'},
    function hello() {console.log('hello world');}
];

const newwords=words;
newwords[1]="kiwi";

//  console.log(words);
//  console.log(newwords);
//  console.log(words.length);


const num = [4,1,2,8,0,6,8];
//  console.log(num.indexOf(8));

//  console.log(num.indexOf(3));

// console.log(num.includes(8));

 num.push("anuj");   //to add in the last
 //console.log(num);  

num.unshift("anand");   //to add in the first
//console.log(num);

num.pop();        //to remove in the last
//console.log(num);

 num.shift();     //to remove in the first
//console.log(num);

num.sort();
//console.log(num);

const subarray=num.slice(2,5)
//console.log(subarray);

const suarray=num.splice(2,5)
//console.log(suarray);

const x = 12;
const b = 4;
// const aplusb =x+b;
// console.log("result",aplusb);
const resul= sumoftwonumber (x, b);
//console.log('return result',resul);

const y =19;
const d =7;
// const cplusd =y+d;
// console.log("result",cplusd);
 sumoftwonumber(y,d);

const e =72;
const f =5;
// const eplusf =e+f;
// console.log("result",eplusf);
 sumoftwonumber(e,f);

function  sumoftwonumber(a,b) {
    const sum=a+b;
    //console.log("the result are",sum);
    return sum;
}

const square=function(num)
{
    return num*num;
};
//console.log(square);
//console.log(square(7));

function addsquare(a,b)
{
    const sa=square(a);
    const sb=square(b);
    function square(num)
    {
       return num*num;
    }
    return sa+sb;
}
//console.log(addsquare(3,4));


function greet() {
   // console.log("hello world");
}
greet();

// const greeta=(count)=> {
//     for(let i=0;i<count;i++)
//     console.log("hello world");
// }
// greeta(3);



 const squarea=(num)=> num*num;
 //console.log(squarea(5));

 const squareb=(num)=> {
   return num*num;
 }
 //console.log(squareb(8));

 const calculate =(a,b,operation) =>{
    return operation(a,b);
 };
//method 1
const addition=calculate(3,4,function(num1,num2){
    return num1+num2;
});
//console.log(addition);   

//method 2
const subtraction =(a,b) =>a-b;
const subresult =calculate(8,3,subtraction);
//console.log(subresult);

//method 3
function multiply(a,b){
    return a*b;
}
const mulresult=calculate(3,2,multiply)
//console.log(mulresult); 


/*const a=[4,1,6,-2,-5,3,2,-8,6,7];

/*const firstneg =(num)=>{
    return num<0;
}
//  const result= a.find(firstneg);
//  console.log(result);

//  const resulta= a.findIndex(firstneg);
//  console.log(resulta);
*/
/*a.forEach((num,i)=>{
console.log("arraynum",num,i);
});
*/

/*
console.log("anand");
setTimeout(function() {
    console.log("this is a boy");
},3000);
console.log("kumar");
console.log("bhagat");   */

/* function getcheese(callback) {
    setTimeout(() => {
        const cheese="🧀"
        console.log('here is cheese',cheese);
          callback(cheese);
    }, 2000);
}
function makedough(cheese,callback){
    setTimeout(()=>{
        const dough =cheese+"🍪";
        console.log("here is the dough",dough);
        callback(dough);
    },2000 );
}
function bakepizza(dough,callback){
    setTimeout(()=>{
        const pizza= dough+"🍕";
        console.log("here is the pizza",pizza);
        callback(pizza)
    },2000);
}

getcheese((cheese)=>{
    makedough(cheese,(dough)=>{
        bakepizza(dough,(pizza)=>{
            console.log("got my pizza",pizza);
        });
    });
 });
*/


/*
const ticket =new Promise(function(resolve,reject){
    const isborded =false;
    if(isborded){
        resolve("you are in the flight");
    }else{
        reject("your flight have been cancelled");
    }
})

ticket.then((data)=>{
    console.log("wohoo",data);
})
.catch((data)=>{
    console.log('oh no',data);
})
.finally(()=>{
    console.log('i will always be executed');
});
*/



/*function getcheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese="🧀"
              resolve(cheese);
        }, 2000);
    })  ; 
}

function makedough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough= cheese+"🍪"
              resolve(dough);
            // reject("bad cheese");
        }, 2000);
    })  ; 
}

function bakepizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza= dough+"🍕"
            resolve(pizza)
            
        }, 2000);
    })  ; 
}

/*getcheese().then((cheese)=>{
    console.log('here is cheese',cheese);
    return makedough(cheese)
})
.then((dough)=>{
    console.log('here is the dough',dough);
    return bakepizza(dough);
})
.then ((pizza)=>{
    console.log('here is the pizza',pizza);
})
.catch((data)=>{
    console.log("error occured",data);
})
.finally(()=>{
    console.log("process ended");
});*/




/*async function orderpizza() {
    try{
    const cheese=await getcheese();
    console.log('here is cheese',cheese);
    const dough=await makedough(cheese);
    console.log('here is the dough',dough);
    const pizza=await bakepizza(dough);
    console.log('here is the pizza',pizza);
}catch(err){
    console.log('error occur',err);
}
console.log("process ended");
}

orderpizza();*/