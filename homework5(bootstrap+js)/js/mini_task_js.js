    // 1
let distance = document.documentElement.getBoundingClientRect();
let blockMove = document.querySelector('.block');
let btnStop = document.querySelector('.stop');
let windowSize = parseInt(blockMove.style.width);
let count = 0;
function move() {
    if (distance.right !== windowSize) {
        let goRight = blockMove.offsetLeft;
        blockMove.style.left = goRight + 2 + "px";
    }
    else {
        blockMove.style.left = goRight + 0 + "px";
    };
};
blockMove.addEventListener('click', () => {
    count = setInterval(move, 100);
});
btnStop.addEventListener('click', () => {
    clearInterval(count);
});

    // 2
let containerHide = document.querySelector('.container_hide');
let hideText = document.querySelector('.hide_text');
let hideLink = document.querySelector('.hide_link');
let disEvent = document.querySelector('.disable_event');
function display() {
    if (containerHide.style.display === "block") {
        containerHide.style.display = "none";
    }
    else {
        containerHide.style.display = "block";
        hideText.style.opacity = "1";
    };
};
function disable() {
    if (confirm("Disable event?")) {
        containerHide.style.display = "block";
        hideText.style.opacity = "0";
        hideLink.removeEventListener('click', display);
    } else {
        containerHide.style.display = "block";
    };
};
hideLink.addEventListener('click', display);
disEvent.addEventListener('click', disable);

    // 3
let getButton = document.querySelector('.show_day');
let date = document.getElementById('date');
getButton.addEventListener('click', () => {
    let getDate = new Date();
    let dayWeek = getDate.getDay();
    date.innerHTML = "Today is a good day :) and " + dayWeek +" day of week";
});

    // 4
let list = document.querySelector(".list");
let text = document.querySelector(".text");
let addToList = document.querySelector(".add_list");
function createList() {    
    addToList.addEventListener("click", () => {
        let string = text.value.split(" ");
        for(let i = 0; i < string.length; i++){
            let li = document.createElement("li");
            if ( i === 0) {
                li.innerHTML = string[i].toUpperCase();
            }
            else if (i === string.length - 1 || i === string.length - 2) {
                li.innerHTML = string[i].toLowerCase();
            }
            else {
                li.innerHTML = string[i];
            };
            list.append(li);
        }
        alert(text.value.split("a").length - 1);
    });
};
createList();