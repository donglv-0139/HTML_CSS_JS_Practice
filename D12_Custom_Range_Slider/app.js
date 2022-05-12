var range = document.querySelector(".range");
var process = document.querySelector(".process");
var value = document.querySelector(".process span");
var body = document.querySelector("body");

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
  body.style.background = `rgba(0, 0, 0, ${percent / 100}`;
}

range.addEventListener("mousemove", function (e) {
  var processWidth = e.pageX - this.offsetLeft; //this = range; offsetLeft: điểm đầu bên trái của range
  var percent = Math.round((processWidth / this.offsetWidth) * 100);

  updateProcess(percent);
});

updateProcess(50);
