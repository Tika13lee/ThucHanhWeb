function ktMa() {
    var ma = document.getElementById('txtMa').value;
    var pattern = /[0-9]{10}/;
    if (pattern.test(ma)) {
        document.getElementById('errMa').innerHTML = '';
        return true;
    } else {
        document.getElementById('errMa').innerHTML = 'Vui long nhap ma dang 10 chu so';
        return false;
    }
}

function ktTen() {
    var ten = document.getElementById('txtTen').value;
    var pattern = /[A-Za-z ]/;
    if (pattern.test(ten)) {
        document.getElementById('errTen').innerHTML = '';
        return true;
    } else {
        document.getElementById('errTen').innerHTML = 'Vui long nhap ten la chu';
        return false;
    }
}

function ktEmail() {
    var mail = document.getElementById('txtEmail').value;
    var pattern = /^[A-Za-z ]+@iuh.edu.vn/;
    if (pattern.test(mail)) {
        document.getElementById('errEmail').innerHTML = '';
        return true;
    } else {
        document.getElementById('errEmail').innerHTML = 'Vui long nhap email dang xxxxxx@iuh.edu.vn';
        return false;
    }
}

function ktPhone() {
    var dt = document.getElementById('txtMa').value;
    var pattern = /[0-9]{10}/;
    if (pattern.test(dt)) {
        document.getElementById('errDT').innerHTML = '';
        return true;
    } else {
        document.getElementById('errDT').innerHTML = 'Vui long nhap so dien thoai dang 10 chu so';
        return false;
    }
}

var stt = 1;

function loadData() {

    if (ktMa() && ktTen() && ktEmail() && ktPhone()) {
        var ma = document.getElementById('txtMa').value;
        var ten = document.getElementById('txtTen').value;
        var ngay = document.getElementById('txtNgay').value;
        var mail = document.getElementById('txtEmail').value;
        var dt = document.getElementById('txtPhone').value;

        var row_new = "<tr> <td>" + stt + " <td> <td>" + ma + " <td> <td>" + ten + " <td> <td>" + ngay + " <td> <td>" + mail + " <td> <td>" + dt + " <td> </tr>";

        document.getElementById('tb').innerHTML += row_new;

    }
    stt++;
}