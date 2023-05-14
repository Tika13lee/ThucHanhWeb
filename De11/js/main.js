function ktName() {
    let name = document.getElementById('txtName').value;
    let pattern = /^[A-Z][a-z]*( [A-Z][a-z]*){1,}/;
    if (name === '') {
        document.getElementById('errName').innerHTML = 'Vui lòng nhập họ tên';
        return false;
    } else {
        if (pattern.test(name)) {
            document.getElementById('errName').innerHTML = '';
            return true;
        } else {
            document.getElementById('errName').innerHTML = 'Họ tên phải 2 từ trở lên và viết hoa chữ cái đầu';
            return false;
        }
    }
}

function ktPhone() {
    let phone = document.getElementById('txtPhone').value;
    let pattern = /^[0-9]{10}/;
    if (phone === '') {
        document.getElementById('errPhone').innerHTML = 'Vui lòng nhập số điện thoại';
        return false;
    } else {
        if (pattern.test(phone)) {
            document.getElementById('errPhone').innerHTML = '';
            return true;
        } else {
            document.getElementById('errPhone').innerHTML = 'Số điện thoại phải gồm một dãy chứa 10 con số';
            return false;
        }
    }
}

function ktEmail() {
    let email = document.getElementById('txtEmail').value;
    let pattern = /^[\w]+@.{3,}\.com/;
    if (email === '') {
        document.getElementById('errEmail').innerHTML = 'Vui lòng nhập email';
        return false;
    } else {
        if (pattern.test(email)) {
            document.getElementById('errEmail').innerHTML = '';
            return true;
        } else {
            document.getElementById('errEmail').innerHTML = 'Email có dạng emailname@mailserver.com';
            return false;
        }
    }
}

function ktAddress() {
    let address = document.getElementById('txtAddress').value;
    if (address === '') {
        document.getElementById('errAddress').innerHTML = 'Vui lòng nhập địa chỉ';
        return false;
    } else {
        document.getElementById('errAddress').innerHTML = '';
        return true;
    }
}

function ktYear() {
    let year = new Date(document.getElementById('txtYear').value);
    let now = new Date();
    if (document.getElementById('txtYear').value === '') {
        document.getElementById('errYear').innerHTML = 'Vui lòng nhập năm dự định';
        return false;
    } else {
        if (year.getFullYear() > now.getFullYear()) {
            document.getElementById('errYear').innerHTML = '';
            return true;
        } else {
            document.getElementById('errYear').innerHTML = 'Năm dự định phải lớn hơn năm hiện tại';
            return false;
        }
    }
}

let stt = 1;
function ketqua() {
    let citys = document.querySelector('input[name="city"]:checked');
    let city;
    if(citys){
        city = citys.value;
    }
    
    if (ktName() && ktPhone() && ktEmail() && ktAddress() && ktYear()) {
        let name = document.getElementById('txtName').value;
        console.log(name);
        let phone = document.getElementById('txtPhone').value;
        let email = document.getElementById('txtEmail').value;
        let address = document.getElementById('txtAddress').value;
        let year = document.getElementById('txtYear').value;

        let new_row = "<tr><td>" + stt + "</td><td>" + name + "</td><td>" + phone + "</td><td>" + email + "</td><td>" + address + "</td><td>" + year + "</td><td>" + city + "</td></tr>";

        document.getElementById('tb').innerHTML += new_row;
        stt++;
    }
}

// let check = document.querySelector('.check');
// check.addEventListener('click', function(e){
//     e.preventDefault();
//     ketqua();
// })