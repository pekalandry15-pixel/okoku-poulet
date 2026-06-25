// L'événement load attend que toute la page soit chargée et affichée.
window.addEventListener("load", function() {
  console.log("La page est entièrement chargée et affichée.");
  var button = document.getElementById("MYbutton");
  button.addEventListener("click", function() {
    alert("Button clicked!");
  });
});
