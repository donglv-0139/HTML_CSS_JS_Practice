var sucessBtn = document.querySelector(".control .success-btn");
var warningBtn = document.querySelector(".control .warning-btn");
var errorBtn = document.querySelector(".control .error-btn");

sucessBtn.addEventListener("click", function () {
  createToast("success");
});
warningBtn.addEventListener("click", function () {
  createToast("warning");
});
errorBtn.addEventListener("click", function () {
  createToast("error");
});

function createToast(status) {
  let templateInner = "";
  switch (status) {
    case "success":
      templateInner = `<i class="fa-solid fa-circle-check"></i>
    <span class="message">This is a Success message!</span>`;
      break;
    case "warning":
      templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Warning message!</span>`;
      break;
    case "error":
      templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Error message!</span>`;
      break;
  }

  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
    <span class="countdown"></span>`;

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  setTimeout(function () {
    toast.style.animation = "slide_hide 2s ease forwards";
  }, 3800);
  setTimeout(function () {
    toast.remove();
  }, 6000);
}
