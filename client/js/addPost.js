function readURL(input, element) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(element).find(".image-upload-wrap").hide();
      $(element).find(".file-upload-image").attr("src", e.target.result);
      $(element).find(".file-upload-content").show();
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload(element);
  }
}

function removeUpload(element) {
  $(element).find(".file-upload-input").replaceWith($(element).find(".file-upload-input").clone());
  $(element).find(".file-upload-content").hide();
  $(element).find(".image-upload-wrap").show();
  $(element).find(".image-upload-wrap").removeClass("image-dropping");
}

$(".image-upload-wrap").bind("dragover", function () {
  $(this).addClass("image-dropping");
});

$(".image-upload-wrap").bind("dragleave", function () {
  $(this).removeClass("image-dropping");
});

$(".file-upload-input").change(function () {
  var element = $(this).closest(".file-upload");
  readURL(this, element);
});

$(".remove-image").click(function () {
  var element = $(this).closest(".file-upload");
  removeUpload(element);
});

$(".file-upload-content").hide();