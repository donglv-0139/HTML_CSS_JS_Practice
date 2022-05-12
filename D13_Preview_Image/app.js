var upload = document.querySelector("#myPicture");
var preview = document.querySelector(".preview");

upload.addEventListener("change", function (e) {
  var file = upload.files[0];
  if (!file) return;

  if (!file.name.endsWith(".jpg") && !file.name.endsWith(".png")) {
    alert("Ảnh không đúng định dạng! Yêu cầu: .jpg, .png");
    console.log(file);
    return;
  }

  if (file.size / (1024 * 1024) > 5) {
    alert("Chỉ được upload ảnh kích thước < 5Mb");
    return;
  }

  var img = document.createElement("img");

  // Base64: truyền src của img dưới dạng một chuỗi string được mã hóa
  var fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onloadend = function (e) {
    img.src = e.target.result;
  };

  //   Blob: truyền src của img dưới dạng URL
  //   img.src = URL.createObjectURL(file);

  preview.appendChild(img);
});
