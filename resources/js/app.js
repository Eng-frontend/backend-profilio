import './bootstrap';
/* navbar */
let nav = document.getElementsByClassName("nav")[0];
let right = document.getElementsByClassName("nav")[0];
let partablet = document.getElementById("partablett");


// Create a media query for 320px to 480px
let mediaQuery = window.matchMedia("(min-width: 320px) and (max-width: 480px)");

if (mediaQuery.matches) {
    partablet.style.display = "none";
    right.addEventListener("click", function () {
        if (nav.style.height === "70px") {
            nav.style.height = "350px";
            nav.style.transition = "1s";
        } else {
            nav.style.height = "70px";
            nav.style.transition = "1s";
        }
    });
}

/* profilio */

/* button Here_me */

let Here_Me_id = document.getElementById("Here_Me_id");

Here_Me_id.onclick = function(){

    setTimeout(() => {

        location.href = "https://github.com/Eng-frontend";

    }, 2000);
}

/* button Here_me */

let Work_Me_id = document.getElementById("Work_Me_id");

Work_Me_id.onclick = function(){

    setTimeout(() => {

        location.href = "https://www.linkedin.com/in/mohamed-sherif-a56018286/";

    }, 2000);
}

let par = document.getElementById("par_id");

let mediaQuery_tablet = matchMedia("(min-width:480px) and (max-width:768px)");

if(mediaQuery_tablet.matches) {

    par.style.display = "none";
}

let mediaQuery_tablet2 = matchMedia("(min-width:768px) and (max-width:1024px)");

if(mediaQuery_tablet2.matches) {

    par.style.display = "none";
}

let mediaQuery_tablet3 = matchMedia("(min-width:1024px) and (max-width:1200px)");

if(mediaQuery_tablet3.matches) {

    par.style.display = "none";
}


/* button Here_me_tablet */

let Here_Me_id_tablet = document.getElementById("Here_Me_id_tablet");

Here_Me_id_tablet.onclick = function(){

    setTimeout(() => {

        location.href = "https://github.com/Eng-frontend";

    }, 2000);
}

/* button Here_me_tablet */

let Work_Me_id_tablet = document.getElementById("Work_Me_id_tablet");

Work_Me_id_tablet.onclick = function(){

    setTimeout(() => {

        location.href = "https://www.linkedin.com/in/mohamed-sherif-a56018286/";

    }, 2000);
}
