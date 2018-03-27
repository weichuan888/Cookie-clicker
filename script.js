window.onload = function() {
  var cliquer = document.getElementById("test");

  cliquer.onclick = function() {
    alert("tu as bien cliqué!");
  };

  var clip = document.getElementById("truc");
  clip.addEventListener(
    "click",
    function(e) {
      console.log(e);
      event.preventDefault();
    },
    false
  );

  var machin = document.querySelectorAll("li.page");
  machin.forEach(function(element) {
    element.addEventListener(
      "mouseenter",
      function(event) {
        element.style.backgroundColor = "yellow";
      },
      false
    );

    element.addEventListener(
      "mouseleave",
      function(event) {
        element.style.backgroundColor = "blue";
      },
      false
    );
  });
};

var compteur = 0;
var inter = setInterval(function() {
  if (compteur > 10) {
    clearInterval(inter);
  }
  console.log("bonjour" + compteur);
  compteur++;
}, 1000);
