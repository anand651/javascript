function loginusermessage (username="sam"){
    if(username === undefined){
        console.log("please enter your username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginusermessage());
//console.log(loginusermessage("hitesh"));

function calculatecartprice(...num1){
return num1
}
//console.log(calculatecartprice(200,500,100,4586));

const  user ={
    username:"hitesh",
    price:199
}
function handleabject(anyobject){
  //  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleabject(user)


handleabject({
    username: "sam",
    price:399
})

const mynewarray =[200,400,100,600]
function returnsecondvalue(getarray){
    return getarray[1]
}
//console.log(returnsecondvalue(mynewarray));
// console.log(returnsecondvalue([200,400,100,600]));



let a = 100;
if (true) {
    let a = 10;
    const b = 20;
   // console.log("INNER:",a); 
}
// console.log(a);
// console.log(b);


function one(){
    const username ="hitesh"
    function two(){
        const website ="youtube"
    //    console.log(username);
    //     console.log(website);
    }
   // console.log(website);
    two()
}
 one()

// console.log(addone(4));
function addone(num){
    return num+1
}

//addotw(5)
const addotw = function(num){
    return num+2
}


const users={
    username:"hitesh",
    price:999,

    welcomemassage:function() {
       // console.log(`${this.username},welcome to website`);
        //console.log(this);
    }
}

 users.welcomemassage()
 users.username="sam"
 users.welcomemassage()

 //console.log(this);

function chai(){
     let username ="anand"
//console.log(this.username);
}
chai()

const chaia =function(){
    let username ="anand"
    //console.log(this.username);
}
chaia()

const chaic =() => {
    let username ="anand"
   // console.log(this.username);
}
chaic()

const addtwo=(num1,num2)=>{
return num1+num2
}
//console.log(addtwo(3,4));

const addtw=(num1,num2)=>  num1+num2
//console.log(addtw(3,8));


const addt=(num1,num2)=>  (num1+num2)
//console.log(addt(3,2));


const add=(num1,num2)=>  ({username:"abc"})
//console.log(add(3,2));


    //immediately invoked function expression (iife)

     ( function chaib(){
       // console.log(`db connection`);
    })();
    //chaib()

    (function  aurcode (){
      //  console.log(`db connection two`);
    })();

    (  (name) => {
       // console.log(`db connection two ${name}`);
    })('hitesh')

    const score =200
    if(score>100){
        let power ="fly"
      // console.log(`user power: ${power}`);
    }
    //console.log(`user power: ${power}`);

    const useremaila = []
    if(useremaila){
       // console.log("got user email");
    }else{
        console.log("donot have user email");
    }

    const useremailb = "h@email.com"
    if(useremailb){
       // console.log("got user email");
    }else{
        console.log("donot have user email");
    }

    const useremail = ""
    if(useremail){
        console.log("got user email");
    }else{
       // console.log("donot have user email");
    }

   // falsy value
   //false, 0, -0, bigint 0n,"", null, undefined,Nan

   //truthy values
   // "0", 'false', " ", [], {}, function(){}


   if (useremail.length ===0  ) {
      // console.log("array is empty");
   }

    const emptyObj = {}
    if(Object.keys(emptyObj).length === 0 ){
          //  console.log("object is empty");
    }


    // false==0
    // true
    // false==""
    // true
    // 0==''
    // true


    // nullish coalescing operator (??):null undefine
    let value1;
    value1= 5??10
   value1= null??10
   value1= undefined??15
   value1= null??10??15
   // console.log(value1);


    const arr = [1,2,3,4,5]
    for(const num of arr){
      // console.log(num);
    }

    const greeting = "hello world"
    for(const greet of greeting)
    {
       // console.log(`each char is ${greet}`);
    }

    //maps

    const map = new Map()
    map.set('IN',"India")
    map.set('USA',"united state of america")
    map.set('FR',"france")
    map.set('IN',"India")

   // console.log(map);

    for (const [key,value] of map) {
       // console.log(key , ':-', value);
    }

    const myobject = {
        game1:'ngj',
        game2:'kklko'
     }
     for (const [key,value] in myobject) {
        // console.log(key , ':-', value);
     }

    const mobject = {
        game1:'ngj',
        game2:'kklko',
        game3:'jgujk'
     }

     for (const key in mobject) {
         // console.log(`${key} shortcut is for ${myobject[key]}`);
     }

     const programming =['js', 'rb','py','java','cpp']
     for (const key in programming) {
       //console.log(programming[key]);
     }

     
     const coding =['js', 'rb','py','java','abc']
     coding.forEach( function (item) {
       // console.log(item);
     })

     coding.forEach((item)=>{
        //console.log(item);
     })
     
     function printme (item){
       // console.log(item);
     }
     coding.forEach(printme)


     coding.forEach((item,index,arr)=>{
         //console.log(item,index,arr);
      })

      const mycoding =[
        {
            languagename:"javascript",
            languagefilename:"js"
        },
        {
            languagename:"python",
            languagefilename:"py"
        },
        {
            languagename:"java",
            languagefilename:"java"
        },
      ]
      mycoding.forEach((item)=>{
       // console.log(item.languagename);
      })

      const value = coding.forEach((item)=>{
       // console.log(item);
        return item
      })
     // console.log(value);

     const mynums= [1,2,3,4,5,6,7,8,9,10]
      const newnum = mynums.filter((num)=>num>4)
       //console.log(newnum);


      const newnums = mynums.filter((num)=>{
        return num>7
    })
      //console.log(newnums);

      const nenums = []
      mynums.forEach((num)=>{
        if(num>6){
            nenums.push(num)
        }
      })
      //console.log(nenums);

      const books =[
        {
            languagename:"javascript",
            languagefilename:"js",
            genre:"history",
            publish:"2006",
            edition:"1999"
        },
        {
            languagename:"python",
            languagefilename:"py",
            genre:"history",
            publish:"2001",
            edition:"1956"

        },
        {
            languagename:"java",
            languagefilename:"java",
            genre:"civis",
            publish:"2005",
            edition:"1947"
        },
      ];
      const userbooks =books.filter((bk)=>bk.genre==="history")
    //console.log(userbooks);

    let  usebooks =books.filter((bk)=>{
      return  bk.publish>=2000 && bk.genre==="history"})
      //console.log(usebooks);


      const mynumers= [1,2,3,4,5,6,7,8,9,10]
      const newnumes = mynumers.map((num)=>num>5)
      //console.log(newnumes);

      const mnumers= [1,2,3,4,5,6,7,8,9,10]
      const nwnumes = mynumers.map((num)=>num+10)
      //console.log(nwnumes);

      const newnms = mynumers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=41)
      //console.log(newnms);

      const myums =[1,2,3] 
      const mytotal= myums.reduce(function (acc,currval)  {
       //console.log(`acc:${acc} and currval: ${currval}`);
        return acc+currval
      },0)
      //console.log(mytotal);


      const mytota= myums.reduce( (acc,curr) =>acc+curr,0)
     // console.log(mytota);

      const shoppingcart =[
        {
            itemname:"js course",
            price: 100
        },
        {
            itemname:"c++ course",
            price: 500
        },
        {
            itemname:"python",
            price: 900
        },
        {
            itemname:"datascience",
            price: 300
        },
      ]
      const pricetopay=shoppingcart.reduce((acc,item)=>acc + item.price,0)
      //console.log(pricetopay);      