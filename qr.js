let wrap=document.querySelector(".wrap");

let recieved=wrap.querySelector(".form input");
let recievedimage=wrap.querySelector(".qr_code img");
let btngnrt=wrap.querySelector(".form button");

let prev;
btngnrt.addEventListener("click",()=>{
    
    let value=recieved.value.trim();
    if(!recieved || value==prev) return;
    prev=value;
    btngnrt.innerText="Generating the QR..."
    recievedimage.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    wrap.classList.add("active");
    btngnrt.innerText="Generate QR"
});

recieved.addEventListener("keyup",()=>{
    if(recieved.value.trim())
    {
        wrap.classList.remove("active");
     prev=" ";
    }
});