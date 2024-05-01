var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

ctx.lineWidth = 5;
var grad= ctx.createLinearGradient(50, 50, 150, 325);
grad.addColorStop(0, "blue");
grad.addColorStop(0.5, "purple");
grad.addColorStop(1, "yellow");

ctx.strokeStyle = grad;
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(1500,0);
ctx.stroke();

function rotateFunction(){
    var min = 1024;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate("+deg+"deg)";
  }

  var element = document.getElementById('mainbox');
  element.classList.remove('animate');
  setTimeout(function(){
    element.classList.add('animate');
  }, 5000);
