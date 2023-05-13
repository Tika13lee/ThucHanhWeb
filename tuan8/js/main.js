//kiểm tra mã bệnh nhân
function ktMaBN() {
    var ma = document.getElementById('txtMaBN').value;
    var pattern = /^BN-[0-9]{5}/;
    if (pattern.test(ma)) {
        document.getElementById('erMaBN').innerHTML = '';
        return true;
    } else {
        document.getElementById('erMaBN').innerHTML = 'Mã bệnh nhận có dạng BN-xxxxx';
        return false;
    }
}

//kiểm tra mật khẩu
function ktMK() {
    var mk = document.getElementById('txtMK').value;
    var pattern = /^\w{6}/;
    if (pattern.test(mk)) {
        document.getElementById('erMK').innerHTML = '';
        return true;
    } else {
        document.getElementById('erMK').innerHTML = 'Mật khẩu phải từ 6 ký tự trở lên, không chứa kí tự đặc biệt';
        return false;
    }
}

function ktNgay() {
    var today = new Date();
    var nk = new Date(document.getElementById('dateNK').value);
    if (today.getDate() >= nk.getDate()) {
        document.getElementById('erNgayK').innerHTML = 'Vui lòng chọn ngày lớn hơn ngày hiện tại';
        return false;
    } else {
        document.getElementById('erNgayK').innerHTML = '';
        return true;
    }
}

//thêm dữ liệu vào bảng
function loadData() {
    var stt = 1;
    var ckb = document.getElementsByName('LDV');
    var t = 0;
    var dv = "";
    for (var i = 0; i < ckb.length; i++) {
        if (ckb[i].checked === true) {
            t += 50000;
            dv += ckb[i].value + ', ';
        }
    }

    if (ktMaBN() && ktMK() && ktNgay()) {
        let ma = document.getElementById('txtMaBN').value;
        let mk = document.getElementById('txtMK').value;
        let nk = document.getElementById('dateNK').value;
        let chuyenKhoa = document.getElementById('chuyenKhoa').value;

        let row_moi = "<tr><td>" + stt + "</td><td>" + ma + "</td><td>" + mk + "</td><td>" + nk + "</td><td>" + dv + "</td><td>" + t + "</td><td>" + chuyenKhoa + "</td></tr>";
        document.getElementById('tb').innerHTML += row_moi;

        stt++;
    }
}