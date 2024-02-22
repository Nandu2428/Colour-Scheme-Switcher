const btns = document.querySelectorAll('.colours button');
const body = document.querySelector('body');
const head = document.querySelector('.container h1');
btns.forEach(function (btn) {
    btn.addEventListener('click', function (evt) {
        if (evt.target.className === "pink") {
            body.style.backgroundColor = "pink";
            
        }
        else if (evt.target.className === "green") {
            body.style.backgroundColor = "green";
        }
        else if (evt.target.className === "red") {
            body.style.backgroundColor = "red";
        }
        else if (evt.target.className === "yellow") {
            body.style.backgroundColor = "yellow";
        }
        else {
            body.style.backgroundColor = "white";
        }
    });
});
