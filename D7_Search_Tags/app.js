var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var removeAll = document.querySelector(".remove-all");

var tags = ["NodeJs", "ReactJS"];

function render() {
  content.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
                            ${tag}
                            <i class="fas fa-times" onclick="removeTag(${i})"></i>
                        </li>`;
  }

  content.appendChild(input);
  input.focus();
}

render();

input.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    var check = 1;
    for (let tag of tags) {
      if (tag == input.value.trim()) {
        check = 0;
      }
    }
    if (check == 1) {
      tags.push(input.value.trim());
    }
    input.value = "";
    render();
  }
});

function removeTag(index) {
  tags.splice(index, 1);
  render();
}

removeAll.addEventListener("click", function () {
  tags = [];
  render();
});
