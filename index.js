

function arabic() {

  window.location.href = "index-ltr.html";
  window.location.replace("index-ltr.html");


}

function english() {

   


}
// .accordion-button::after
// active part

var header = document.getElementsByClassName("navbar-nav");
var btns = document.getElementsByClassName("foractive");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}


const video = document.querySelectorAll(".video").forEach((x) => {
  x.addEventListener("mouseenter", (event) => {
    if (event.target.matches) {
          x.setAttribute("src", "imgs/img.webp")

    }
  });

  x.addEventListener("mouseleave", (event) => {
    if (event.target.matches) {
      x.removeAttribute("src")
      x.setAttribute("src","imgs/image-gif.PNG")
    }
  });
});









