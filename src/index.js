document.getElementById("demo").onclick = function () {
  art();
};
function art() {
  document.getElementById("demo").innerHTML =
    "Dear Visitor! We are happy that you've chosen our website to learn about art ❤ ";
  document.getElementById("demo").style.color = "#7a3418";
  document.getElementById("demo").style.backgroundColor = "#fde28a";
  document.getElementById("demo").style.border = "2px solid";
  document.getElementById("demo").style.borderRadius = "5px";
  document.getElementById("demo").style.fontSize = "30px";
  document.getElementById("demo").style.border = "4px";
  document.getElementById("demo").style.margin = "10px 20px 10px 20px";
  document.getElementById("demo").style.padding = "0 auto";
}
