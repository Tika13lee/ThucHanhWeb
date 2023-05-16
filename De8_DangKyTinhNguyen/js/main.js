function ktMa() {
    let ma = document.getElementById('txtMa').value;
    let pattern = /^(17|18|19|20|21)([0-9]{5})1/;
    if (ma === '') {
        document.getElementById('errMa').innerHTML = 'Vui lòng nhập mã sinh viên';
    } else {
        if (pattern.test(ma)) {
            document.getElementById('errMa').innerHTML = '';
            return true;
        } else {
            document.getElementById('errMa').innerHTML = 'Mã sinh viên gồm 8 số bắt đầu bằng 17 hoặc 18 hoặc 19 hoặc 20 hoặc 21 và kết thúc bằng 1';
            return false;
        }
    }
}

function ktHo() {
    let ho = document.getElementById('txtHo').value;
    if (ho === '') {
        document.getElementById('errHo').innerHTML = 'Vui lòng nhập họ sinh viên';
        return false;
    } else {
        document.getElementById('errHo').innerHTML = '';
        return true;
    }
}

function ktTen() {
    let ten = document.getElementById('txtTen').value;
    if (ten === '') {
        document.getElementById('errTen').innerHTML = 'Vui lòng nhập tên sinh viên';
        return false;
    } else {
        document.getElementById('errTen').innerHTML = '';
        return true;
    }
}

function ktGioiTinh() {
    let gt = document.getElementsByName('sex');
    let flag = 0;
    for (let i = 0; i < gt.length; i++) {
        if (gt[i].checked === true) {
            document.getElementById('errSex').innerHTML = '';
            flag = 1;
            return true;
        }
    }
    if (flag == 0) {
        document.getElementById('errSex').innerHTML = 'Vui lòng chọn giới tính';
        return false;
    }
}

function ktPhone() {
    let dt = document.getElementById('txtPhone').value;
    let pattern = /^([0-9]{4})( [0-9]{3})( [0-9]{3})/;
    if (dt === '') {
        document.getElementById('errPhone').innerHTML = 'Vui lòng nhập số điện thoại';
        return false;
    } else {
        if (pattern.test(dt)) {
            document.getElementById('errPhone').innerHTML = '';
            return true;
        } else {
            document.getElementById('errPhone').innerHTML = 'Số điện thoại có dạng xxxx xxx xxx';
            return false;
        }
    }
}

function ktDate() {
    let date = new Date(document.getElementById('txtDate').value);
    let now = new Date();
    if (document.getElementById('txtDate').value == '') {
        return true;
    } else {
        if (date.getDate() - now.getDate() > 3) {
            document.getElementById('errDate').innerHTML = '';
            return true;
        } else {
            document.getElementById('errDate').innerHTML = 'Nếu chọn ngày phải sau ngày hiện tại ít nhất 3 ngày';
            return false;
        }
    }
}

let stt = 1;
function ketqua() {
    let tn = document.getElementsByName('hd');
    let hd = '';
    for (let i = 0; i < tn.length; i++) {
        if (tn[i].checked) {
            hd += tn[i].value + ' ';
        }
    }
    if (ktMa() && ktHo() && ktTen() && ktGioiTinh() && ktPhone() && ktDate()) {
        let ma = document.getElementById('txtMa').value;
        let ho = document.getElementById('txtHo').value;
        let ten = document.getElementById('txtTen').value;
        let dt = document.getElementById('txtPhone').value;
        let ngay = document.getElementById('txtDate').value;
        let dk = document.getElementById('activity').value;
        
        let gTinh = document.querySelector('input[name="sex"]:checked');
        let gt;
        if (gTinh) {
            gt = gTinh.value;
        }
        
        let row_new = "<tr><td>" + stt++ + "</td><td>" + ma + "</td><td>" + ho + ' ' + ten + "</td><td>" + gt + "</td><td>" + dt + "</td><td>" + ngay + "</td><td>" + dk + "</td><td>" + hd + "</td></tr>";
        document.getElementById('tb').innerHTML += row_new;
    }
}
let kq = document.querySelector('.ketQua');
kq.addEventListener('click', function (e) {
    e.preventDefault();
    ketqua();
})