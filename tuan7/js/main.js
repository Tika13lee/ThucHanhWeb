// kiểm tra giới tính
function ktRadio() {
    var radios = document.getElementsByName("sex");
    var selected = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selected = true;
            
            break;
        }
    }
    if (!selected) {
        document.getElementById('errSex').innerHTML = "Chon gioi tinh";
        return false;
    }
    return true;
}

// kiểm tra địa chỉ
function ktAddress() {
    let dc = document.getElementById('txtAddress').value;
    let pattern = /[A-Za-z_]/;
    if (pattern.test(dc)) {
        document.getElementById('erAddress').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('erAddress').innerHTML = 'Sai';
        return false;
    }
}

// kiểm tra email
function ktEmail() {
    let mail = document.getElementById('txtEmail').value;
    let pattern = /[A-Za-z_]/;
    if (pattern.test(mail)) {
        document.getElementById('erEmail').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('erEmail').innerHTML = 'Sai';
        return false;
    }
}

// load vào table
function ketqua() {
    let stt = 1;
    // let user = document.getElementById('txtUser').value;
    // let mk = document.getElementById('pass').value;
    // let re = document.getElementById('re-pass').value;

    // let row_moi = "<tr><td>" + stt + "</td><td>" + user + "</td><td>" + mk + "</td><td>" + re;
    // document.getElementById('tb').innerHTML += row_moi;

    if (ktAddress() && ktEmail() && ktRadio()) {
        let name = document.getElementById('txtName').value;
        let ns = document.getElementById('txtNgay').value;

        let gioiTinh = null;
        const gt = document.querySelector('input[name="sex"]:checked');
        if (gt) {
            gioiTinh = gt.value;
        }

        let address = document.getElementById('txtAddress').value;
        let dt = document.getElementById('txtPhone').value;
        let email = document.getElementById('txtEmail').value;

        let row_moi = "<tr><td>" + stt + "</td><td>" + name + "</td><td>" + ns + "</td><td>" + gioiTinh + "</td><td>" + address + "</td><td>" + dt + "</td><td>" + email;

        document.getElementById('tb').innerHTML += row_moi;

        stt++;
    }
}