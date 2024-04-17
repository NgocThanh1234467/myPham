$(document).ready(function () {
    // Xử lý sự kiện khi click nút đăng ký
    $("#btnDangKy").click(function () {
        if (kiemTraTenDangNhap() && kiemTraEmail() && kiemTraMatKhau() && kiemTraNhapLaiMatKhau() && kiemTraHoTen() && kiemTraSDT()) {
            let taiKhoan = {
                tenDangNhap: $("#txtLoginName").val(),
                email: $("#txtEmail").val(),
                matKhau: $("#txtPassword").val(),
                hoTen: $("#txtName").val(),
                soDienThoai: $("#txtTel").val()
            };

            // Chuyển đổi đối tượng thành chuỗi JSON
            let jsonTaiKhoan = JSON.stringify(taiKhoan);

            // Lưu vào Local Storage với key là "taiKhoan"
            localStorage.setItem("taiKhoan", jsonTaiKhoan);

            alert("Đăng ký thành công");
            $("#formDangKy").hide();
            $("#formDangNhap").show();
        }
    });

    // Xử lý sự kiện khi click nút đăng nhập
    $("#btnDangNhap").click(function () {
        checkLogin();
    });

    // Hàm kiểm tra đăng nhập
    function checkLogin() {
        var email = $("#email").val();
        var password = $("#password").val();

        // Lấy thông tin người dùng từ Local Storage
        var storedInfo = localStorage.getItem("taiKhoan");
        if (storedInfo) {
            // Chuyển chuỗi JSON thành đối tượng JavaScript
            var userInfo = JSON.parse(storedInfo);

            // Kiểm tra thông tin đăng nhập
            if (email === userInfo.email && password === userInfo.matKhau) {
                alert("Đăng nhập thành công!");
                $('#signinPage').modal('hide');
                window.location.href = "../html/TrangChu.html"; // Chuyển hướng đến trang chủ
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng!");
            }
        } else {
            alert("Không có thông tin người dùng. Vui lòng đăng ký.");
        }
    }
});
