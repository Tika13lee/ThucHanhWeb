var uu_tien = 0;

//mang ghi nho cac so
var mang_so_index = 0;
var mang_so = new Array();

//mang ghi nho cac phep tinh
var mang_pt_index = 0;
var mang_pt = new Array();

function ClickButton (obj){
    var ketqua = document.getElementById('ketqua');
    
    var str_ketqua_old = ketqua.value;
    if(str_ketqua_old == '0'){
        str_ketqua_old = '';
    }

    var phim_moi = '';
    
    var type = obj.innerHTML;
    
    if(type == '0' || type == '1' || type == '2' || type == '3' || type == '4' || type == '5' || type == '6' || type == '7' || type == '8' || type == '9'){
        phim_moi += type;
        ketqua.value = str_ketqua_old + phim_moi;
    }
}