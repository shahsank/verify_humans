const p = document.getElementById("para");
const r = document.getElementById("reset"); 
const btn = document.getElementById("btn");
let count  = 0; let checkid=0; let src = "1",src2="";
let array1 = document.getElementsByClassName("img-fluid");
const sr1=[];
for(let i = 0;i< array1.length-1; i++){
     sr1.push(array1[i].src);
}

function reset1(){
    count=0; checkid=0;
    src=""; src2="1";
    const img = document.getElementsByClassName("img6")[0];
    const rand = Math.floor(Math.random()*5)+1;
    img.setAttribute("src","https://picsum.photos/150/150?random="+rand);
    let sr2 = [...sr1];
    sr2.push(img.src);
    hide();
    reversechange();  
    randomize(sr2);   
}

function randomize(sr2){
    for(let i=0;i<sr2.length-1;i++){
        let j = Math.floor(Math.random()*(5-i))+1;
        const k = sr2[i+j];
        sr2[i+j]=sr2[i];
        sr2[i]=k;
    }
    assignsrc(sr2);
}

function assignsrc(sr2){
    let array = document.getElementsByClassName("img-fluid");
    for(let i = 0; i<array.length;i++){
        array[i].setAttribute("src",sr2[i]);
    }
    sr2=[];
}

function hide(){
    p.style.visibility = "hidden";
    r.style.visibility = "hidden";
    btn.style.visibility = "hidden";
}

function reversechange(){
    const v = document.getElementsByClassName("img-fluid");
    for(let i = 0; i<v.length; i++) v[i].style.border = "0px";
}

function changestyle(i){
    const idd = document.getElementById(i);
    idd.style.border = "2px solid cyan";
}

function clk(that){
    changestyle(that.id);
    if(that.id !== checkid){
        count++;
        if(count === 1) {
            src = that.src;
            r.style.visibility = "visible";
        }
        else if(count === 2) {
            src2 = that.src;
            btn.style.visibility = "visible";
        }
        else{
            btn.style.visibility = "hidden";
        }
    } 
    checkid = that.id;
}

function submit(){
    if(src === src2){
        p.innerText = "You are a human. Congratulations!";    
        p.style.color = "green";     
    }
    else{
        p.innerText = "We can't verify you as a human. You selected the non-identical tiles"
        p.style.color = "red";
    }
    p.style.visibility = "visible";
    p.setAttribute("id","para");
    p.style.margin = "20px";
    p.style.textAlign = "center";
    
}

reset1();