let text = "Future with Automation";
let i = 0;

function typeText() {
    document.getElementById("typing").innerText = text.slice(0, i);
    i++;

    if (i > text.length) {
        i = 0;
    }
}

setInterval(typeText, 150);

let carousel = document.querySelector(".carousel");

document.getElementById("next").onclick = function () {
    carousel.scrollLeft += 200;
};

document.getElementById("prev").onclick = function () {
    carousel.scrollLeft -= 200;
};
// Auto Scroll every 2.5 seconds
setInterval(() => {
  carousel.scrollLeft += 200;
}, 2500)

let form = document.getElementById("contactForm");
let msg = document.getElementById("successModal");

form.onsubmit = function(event) {
    event.preventDefault();
    msg.classList.remove("hidden");

    setTimeout(() => {
        msg.classList.add("hidden");
    }, 3000);

    form.reset();
};
;

