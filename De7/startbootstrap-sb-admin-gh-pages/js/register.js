function ktFirstName() {
    var fname = document.getElementById('inputFirstName').value;
    var pattern = /^[A-Za-z]+$/;
    if (pattern.test(fname)) {
        return true;
    }
    return false;
}
function ktLastName() {
    var lname = document.getElementById('inputLastName').value;
    var pattern = /^[A-Za-z]+$/;
    if (pattern.test(lname)) {
        return true;
    }
    return false;
}
function ktEmail() {
    var email = document.getElementById('inputEmail').value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
    if (pattern.test(email)) {
        return true;
    }
    return false;
}
function ktPass() {
    let pass = document.getElementById('inputPassword').value;
    let pattern = /^[\w]{8,}$/;
    
    let passcf = document.getElementById('inputPasswordConfirm').value;
    if (pattern.test(pass)) {
        if (passcf === pass) {
            return true;
        } else return false;
    }
    else{
        return false;
    }
}

// function validData() {
//     var creat = document.getElementById('btnCreate');
//     creat.addEventListener('click', () => {
//         if (!ktFirstName() || !ktLastName()) {
//             alert('First name và Last name nhập vào không phải là số');
//         }
//         else if (!ktEmail()) {
//             alert('Email address nhập vào phải là email');
//         }
//         else if (!ktPass) {
//             alert('Password và Confirm Password: phải 8 ký tự trở lên và phải giống nhau');
//         }
//         else {
//             window.location = '../startbootstrap-sb-admin-gh-pages/login.html'
//         }
//     });
// }

// validData();

function validData() {
    // var creat = document.getElementById('btnCreate');

    if (!ktFirstName() || !ktLastName()) {
        alert('First name và Last name nhập vào không phải là số');
    }
    else if (!ktEmail()) {
        alert('Email address nhập vào phải là email');
    }
    else if (!ktPass()) {
        alert('Password và Confirm Password: phải 8 ký tự trở lên và phải giống nhau');
    }
    else {
        window.location = '../startbootstrap-sb-admin-gh-pages/login.html'
    }

}