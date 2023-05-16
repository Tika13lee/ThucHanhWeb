var stt = 1;
function ktSo() {
    var so = document.getElementById('txtSo').value;
    var pattern = /^[A-Z_0-9]{6,}/;
    if (pattern.test(so)) {
        document.getElementById('errSo').innerHTML = '';
        return true;
    } else {
        document.getElementById('errSo').innerHTML = 'Vui lòng nhập số serial ít nhất 6 ký tự gồm chữ cái hoa, dấu _ và ký số';
        return false;
    }
}

function ktMoTa() {
    var mt = document.getElementById('txtMoTa').value;
    var pattern = /^[A-Z_0-9 ]+/;
    if (pattern.test(mt)) {
        document.getElementById('errMoTa').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('errMoTa').innerHTML = 'Vui lòng nhập mô tả';
        return false;
    }
}

function ktKg() {
    var kg = document.getElementById('txtKg').value;
    var pattern = /^[0-9]+/;
    var phi = 0;
    if (pattern.test(kg)) {
        document.getElementById('errKg').innerHTML = '';
        if (kg > 50) {
            phi = kg * 15000;
        } else if (kg > 20) {
            phi = kg * 30000;
        } else {
            phi = kg * 35000;
        }
        document.getElementById('txtPhi').value = phi;
        return true;
    }
    else {
        document.getElementById('errKg').innerHTML = 'Vui lòng nhập trọng lượng là số dương';
        return false;
    }
}

const kq = tinh();


function ketqua() {
    var so = document.getElementById('txtSo').value;
    var mt = document.getElementById('txtMoTa').value;
    var kg = document.getElementById('txtKg').value;
    var phi = document.getElementById('txtPhi').value;


    if (ktSo() && ktMoTa() && ktKg()) {
        let row_new = "<tr><td>" + stt + "</td><td>" + so + "</td><td>" + mt + "</td><td>" + '' + "</td><td>" + kg + "</td><td>" + phi + "</td></tr>";
        document.getElementById('tb').innerHTML += row_new;
        stt++;
    }
}

var btnXN = document.querySelector('.btn');
btnXN.addEventListener('click', function (e) {
    e.preventDefault();
})