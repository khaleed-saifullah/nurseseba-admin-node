$(document).ready(function () {
    $("#equipment-files").change(function () {
        filename = this.files[0].name;
        $(".file-upload-btn p").text(filename);
    });

    $("#hostipal-files").change(function () {
        filename = this.files[0].name;
        $(".file-upload-btn p").text(filename);
    });

    $("#ambulance-files").change(function () {
        filename = this.files[0].name;
        $(".file-upload-btn p").text(filename);
    });
});
