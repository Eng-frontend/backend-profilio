/*********************** services page***************************** */
var text = document.getElementById("pargraph_loop");
if (text.innerHTML) {
    let text_loop = text.innerHTML;
    let splite = text_loop.split("");

    text.innerHTML = "";

    splite.map((ele, index) => {
        setTimeout(function () {
            text.innerHTML += ele; 
        }, index * 350);
    });
} else {
    console.log("error");
}

let mediaquiery1 = matchMedia("(min-width:320px) and (max-width:480px)");





if(mediaquiery1.matches){

    let partab = document.getElementById("partab");
    partab.style.display = "none";

    let parlab = document.getElementById('parlab');
    parlab.style.display = "none";

    let parDesk = document.getElementById("parDesk");
    parDesk.style.display = "none";

    let top_tab = document.getElementById("top_tab");
    top_tab.style.display = "none";

    let top_lab = document.getElementById("top_lab");
    top_lab.style.display = "none";

    let top_Des = document.getElementById("top_Des");
    top_Des.style.display = "none";

    let top_phone = document.getElementById("top_phone");

    window.onscroll = function(){
        if(this.scrollY >= 300){
            top_phone.classList.add("top1")
        }else{
            top_phone.classList.remove("top1")
        }
    }
    top_phone.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth" 
        });
    };



}

let mediaquiery2 = matchMedia("(min-width:480px) and (max-width:768px)");


if(mediaquiery2.matches){

    let par_ser = document.getElementById("par_ser");
    par_ser.style.display = "none";

    let parlab = document.getElementById('parlab');
    parlab.style.display = "none";

    let parDesk = document.getElementById("parDesk");
    parDesk.style.display = "none";

    let top_phone = document.getElementById("top_phone");
    top_phone.style.display = "none";

    let top_lab = document.getElementById("top_lab");
    top_lab.style.display = "none";

    let top_Des = document.getElementById("top_Des");
    top_Des.style.display = "none";

    let top_tab = document.getElementById("top_tab");

    window.onscroll = function(){
        if(this.scrollY >= 400){
            top_tab.classList.add("top2")
        }else{
            top_tab.classList.remove("top2")
        }
    }
    top_tab.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth" 
        });
    };


}

let mediaquiery3 = matchMedia("(min-width:768px) and (max-width:1024px)");

if(mediaquiery3.matches){

    let par_ser1 = document.getElementById("par_ser");
    par_ser1.style.display = "none";

    let partab = document.getElementById("partab");
    partab.style.display = "none";

    let parDesk = document.getElementById("parDesk");
    parDesk.style.display = "none";

    let top_phone = document.getElementById("top_phone");
    top_phone.style.display = "none";

    let top_tab = document.getElementById("top_tab");
    top_tab.style.display = "none";

    let top_Des = document.getElementById("top_Des");
    top_Des.style.display = "none";

    let top_lab = document.getElementById("top_lab");

    window.onscroll = function(){
        if(this.scrollY >= 400){
            top_lab.classList.add("top3")
        }else{
            top_lab.classList.remove("top3")
        }
    }
    top_lab.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth" 
        });
    };
}

let mediaquiery4 = matchMedia("(min-width:1024px) and (max-width:1200px)");

if(mediaquiery4.matches){

    let par_ser1 = document.getElementById("par_ser");
    par_ser1.style.display = "none";

    let partab = document.getElementById("partab");
    partab.style.display = "none";

    let parlab = document.getElementById('parlab');
    parlab.style.display = "none";

    let top_phone = document.getElementById("top_phone");
    top_phone.style.display = "none";

    let top_tab = document.getElementById("top_tab");
    top_tab.style.display = "none";

    let top_lab = document.getElementById("top_lab");
    top_lab.style.display = "none";

    let top_Des = document.getElementById("top_Des");

    window.onscroll = function(){
        if(this.scrollY >= 400){
            top_Des.classList.add("top4")
        }else{
            top_Des.classList.remove("top4")
        }
    }
    top_Des.onclick = function(){
        window.scrollTo({
            top:0,
            behavior:"smooth" 
        });
    };
}


