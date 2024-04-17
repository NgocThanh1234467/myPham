$(document).ready(function () {
    // Validate email
    function kiemTraEmail() {
        let email = $("#txtEmail").val();
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;  // Updated to allow longer TLDs
        if (email.trim() == "") {
            alert("Email là bắt buộc!");
            return false;
        }
        if (!regexEmail.test(email)) {
            alert("Địa chỉ email không hợp lệ!");
            return false;
        }
        return true;
    }

    // Validate title
    function kiemTraTieuDe() {
        let tieuDe = $("#txtTitle").val();
        if (tieuDe.trim() == "") {
            alert("Tiêu đề không được để trống!");
            return false;
        }
        return true;
    }

    // Handle the message send button click event
    $("#btnGuiTinNhan").click(function () {
        if (!kiemTraEmail() || !kiemTraTieuDe()) {
            return false;
        }
        // Display a custom confirmation message
        alert("Chúng tôi đã nhận được góp ý của bạn. Chúc bạn một buổi mua sắm thật tuyệt vời!");
        return true;
    });
});
