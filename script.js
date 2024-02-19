var background = document.getElementById("foreground");
var background = document.getElementById("background");
document.addEventListener("mousemove", (event) => {
  speed: 0.01;
  var x = Math.round(event.pageX / 10);
  var y = Math.round(event.pageX / 10);
  foreground.style.marginLeft = -x + "px";
  foreground.style.marginTop = -y + "px";
  background.style.marginLeft = x + "px";
  background.style.marginTop = y + "px";
});
