let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function generateqr(){
    if(qrtext.Value === ''){
       alert("hello");
    }
   else if(qrtext.Value.length > 1){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.Value;
        imgbox.classList.add("show-img");
    }else{
        qrtext.classList.add('error');
        setTimeout(()=>{
            qrtext.classList.remove('error');
        },1000);
    }
}