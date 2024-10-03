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

let down_icone = document.getElementById("down_icone");
let tra = document.getElementById("tra");

down_icone.onclick = function(){
    if(tra.style.height == "65px"){
        tra.style.height = "300px" ;
    }else{
        tra.style.height = "65px" ;
    }
}

let down_icone2 = document.getElementById("down_icone2");
let tra2 = document.getElementById("tra2");

down_icone2.onclick = function(){
    if(tra2.style.height == "65px"){
        tra2.style.height = "300px" ;
    }else{
        tra2.style.height = "65px" ;
    }
}

let down_icone3 = document.getElementById("down_icone3");
let tra3 = document.getElementById("tra3");

down_icone3.onclick = function(){
    if(tra3.style.height == "65px"){
        tra3.style.height = "300px" ;
    }else{
        tra3.style.height = "65px" ;
    }
}
let down_icone4 = document.getElementById("down_icone4");
let tra4 = document.getElementById("tra4");

down_icone4.onclick = function(){
    if(tra4.style.height == "65px"){
        tra4.style.height = "300px" ;
    }else{
        tra4.style.height = "65px" ;
    }
}

let down_icone5 = document.getElementById("down_icone5");
let tra5 = document.getElementById("tra5");

down_icone5.onclick = function(){
    if(tra5.style.height == "65px"){
        tra5.style.height = "300px" ;
    }else{
        tra5.style.height = "65px" ;
    }
}

let mediaquiery1 = matchMedia("(min-width:320px) and (max-width:480px)");

if(mediaquiery1.matches){

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

    let top_phone = document.getElementById("top_phone");

    window.onscroll = function(){
        if(this.scrollY >= 200){
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

let mediaquiery3 = matchMedia("(min-width:768px) and (max-width:1024px)");

if(mediaquiery3.matches){

    let top_phone = document.getElementById("top_phone");

    window.onscroll = function(){
        if(this.scrollY >= 200){
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

let mediaquiery4 = matchMedia("(min-width:1024px) and (max-width:1200px)");

if(mediaquiery4.matches){

    let top_phone = document.getElementById("top_phone");

    window.onscroll = function(){
        if(this.scrollY >= 200){
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