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
