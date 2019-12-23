(function ($, Drupal) {
  var dice = document.getElementById('dice');
  for(var i=0;i<3;i++){
    var row = document.createElement("div");
    row.className = "row";
    for(var j=0;j<3;j++){
      var box = document.createElement("div");
      box.className = "box";
      var dot = document.createElement("div");
      dot.className = "dot";
      box.appendChild(dot);
      row.appendChild(box);
    }
    dice.appendChild(row);
  }
})(jQuery, Drupal);

var dots = document.getElementsByClassName('dot');
var stay = [];
function change(value) {
  switch(value){
  case 1:
    stay = [4];
    break;
  case 2:
    stay = [2,6];
    break;
  case 3:
     stay = [2,4,6];
    break;
  case 4:
    stay = [0,2,6,8];
    break;
  case 5:
    stay = [0,2,4,6,8];
    break;
  case 6:
    stay = [0,2,3,5,6,8];
    break;
}
  for(var i=0;i<dots.length;i++){
    if(stay.includes(i)){
      dots[i].style.visibility = "visible";
    } else {
      dots[i].style.visibility = "hidden";
    }
  }
}

var button = document.getElementById('button');
button.addEventListener("click", function(){
  for(var i=0;i<6;i++){
    setTimeout(function(){ change(Math.floor(Math.random() * 6) + 1); }, 250*(i+1));
  }
});
