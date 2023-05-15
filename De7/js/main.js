function ktMa() {
    let ma = document.getElementById('maKH').value;
    let pattern = /^(PE160000)([0-9]{4})(DN|GD)/;
    if (pattern.test(ma)) {
        document.getElementById('errMaKH').innerHTML = '';
        return true;
    } else {
        document.getElementById('errMaKH').innerHTML = 'Vui lòng nhập mã khách hàng có dạng PE160000xxxx(DN|GD)';
        return false;
    }
}

function ktName() {
    let name = document.getElementById('txtName').value;
    let pattern = /^[A-Z][a-z]*( [A-Z][a-z]+){1,}/;
    if (pattern.test(name)) {
        document.getElementById('errName').innerHTML = '';
        return true;
    } else {
        document.getElementById('errName').innerHTML = 'Vui lòng nhập họ tên khách hàng 2 từ trở lên và viết hoa chữ cái đầu';
        return false;
    }
}

function ktKH() {
    let flag = 0;
    let kh = document.getElementsByName("customer");
    // for (let i = 0; i < kh.length; i++) {
    //     if (kh[i].checked === true) {
    //         document.getElementById('errKH').innerHTML = '';
    //         return true;
    //     }
    // }
    // if (flag == 0) {
    //     document.getElementById('errKH').innerHTML = 'Vui lòng chọn khách hàng';
    //     return false;
    // }
    for (let i = 0; i < kh.length; i++) {
        if (kh[i].checked === true) {
            document.getElementById('errKH').innerHTML = '';
            return true;
        }else{
            
        }
    }
}

function khuyenMai(){
    let km = document.getElementsByName('sale');
    let khuyenMai;
    for (let i = 0; i < km.length; i++) {
        if (km[i].checked === true) {
            khuyenMai = km[i].value;
        } else {
            khuyenMai = 0;
        }
    }
    return khuyenMai;
}

function chiSo(){
    let m = document.getElementById('month').value;
    let chiSo;
    if(m == 1){
        chiSo = 121;
    }else if(m == 2){
        chiSo = 130;
    }else if(m == 3){
        chiSo = 189;
    }else if(m == 4){
        chiSo = 154;
    }else{
        chiSo = 'Chưa tới kỳ thanh toán'
    }
    return chiSo;
}

let stt = 1;
function ketqua() {
    if (ktKH() && ktMa() && ktName()) {
        let khachHang;
        // let kh = document.getElementsByName("customer");
        // for (let i = 0; i < kh.length; i++) {
        //     if (kh[i].checked === true) {
        //         khachHang = kh[i].value;
        //     }
        // }

        let kh = document.querySelector('input[name="customer"]:checked');
        if (kh) {
            khachHang = kh.value;
        }

        let ma = document.getElementById('maKH').value;
        let name = document.getElementById('txtName').value;
        let month = document.getElementById('month').value;



        let row_new = "<tr><td>" + stt + "</td><td>" + khachHang + "</td><td>" + ma + "</td><td>" + name + "</td><td>" + month + "</td><td>" + chiSo() + "</td><td>" + khuyenMai() + "</td></tr>";

        document.getElementById('tb').innerHTML += row_new;
        stt++;
    }
}

let kq = document.querySelector('.check');
kq.addEventListener('click', function (e) {
    e.preventDefault();
    ketqua();
})