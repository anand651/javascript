function valid(){
   
    let a=document.getElementById('First').value;
    if(a==""){
        document.getElementById('Firsts').innerHTML="**please enter the first name";
    }
    let b=document.getElementById('Last').value;
    if(b==""){
        document.getElementById('Lasts').innerHTML="**please enter the last name";
    }
    let c=document.getElementById('Email').value;
    if(c==""){
        document.getElementById('Emails').innerHTML="**please enter the valid email";
    }
    let d=document.getElementById('Message').value;
    if(d==""){
        document.getElementById('Messages').innerHTML="**please enter your text";
    }
    let f=Array.from(document.querySelectorAll('.point'))
    f.forEach(element => {
        if(element.checked==false){
            document.getElementById('points').innerHTML="**please cheked it";
        }
    });
}
const z=document.querySelector('.Submit');
z.addEventListener('click',function(e){
    e.preventDefault();
    valid();
})