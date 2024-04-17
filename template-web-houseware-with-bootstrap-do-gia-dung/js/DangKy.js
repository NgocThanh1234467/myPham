$(document).ready(function () {
    // Kiểm tra tính hợp lệ của email
    function kiemTraEmail() {
        let email = $("#txtEmail").val();
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.trim() == "") {
            alert("Email là bắt buộc!");
            return false;
        }
        if (!regexEmail.test(email)) {
            alert("Địa chỉ email của bạn không hợp lệ!");
            return false;
        }
        return true;
    }

    // Kiểm tra tên đăng nhập
    function kiemTraTenDangNhap() {
        let tenDangNhap = $("#txtLoginName").val();
        let regexDangNhap = /^[A-Z][a-zA-Z0-9]{5,}$/;
        if (tenDangNhap.trim() == "") {
            alert("Tên đăng nhập không được để trống!");
            return false;
        }
        if (!regexDangNhap.test(tenDangNhap)) {
            alert("Tên đăng nhập phải bắt đầu bằng chữ in hoa và gồm chữ và số, ít nhất 6 ký tự");
            return false;
        }
        return true;
    }

    // Kiểm tra mật khẩu
    function kiemTraMatKhau() {
        let matKhau = $("#txtPassword").val();
        let regexMatKhau = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (matKhau.trim() == "") {
            alert("Mật khẩu không được để trống");
            return false;
        }
        if (!regexMatKhau.test(matKhau)) {
            alert("Mật khẩu phải ít nhất 8 ký tự, chứa ít nhất một chữ cái, một số và một ký tự đặc biệt");
            return false;
        }
        return true;
    }

    // Kiểm tra nhập lại mật khẩu
    function kiemTraNhapLaiMatKhau() {
        let matKhau = $("#txtPassword").val();
        let matKhau2 = $("#txtConfirmPassword").val();
        if (matKhau2.trim() == "") {
            alert("Nhập lại mật khẩu không được để trống");
            return false;
        }
        if (matKhau != matKhau2) {
            alert("Nhập lại mật khẩu không trùng khớp");
            return false;
        }
        return true;
    }

    // Kiểm tra họ tên
    function kiemTraHoTen() {
        let hoTen = $("#txtName").val();
        if (hoTen.trim() == "") {
            alert("Họ tên không được để trống");
            return false;
        }
        return true;
    }

    // Kiểm tra số điện thoại
    function kiemTraSDT() {
        let sdt = $("#txtTel").val();
        let regexSDT = /^0[0-9]{9,10}$/;
        if (sdt.trim() == "") {
            return true;  // Không bắt buộc nhập số điện thoại
        } else {
            if (!regexSDT.test(sdt)) {
                alert("Số điện thoại gồm 10 hoặc 11 số và bắt đầu bằng 0");
                return false;
            }
            return true;
        }
    }

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
});
