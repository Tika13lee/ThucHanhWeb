var productAPI = "https://645994958badff578e105e68.mockapi.io/product/api/v1/product";

var editFormData;

// add product
function addProduct() {
    let payload = {};
    payload['name'] = document.getElementById('txtName').value;
    payload['img'] = document.getElementById('txtImg').value;
    payload['date'] = document.getElementById('txtNgay').value;

    fetch(productAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            getData();
        })
}

// delete product
function deleteProduct(id) {
    fetch(productAPI + '/' + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            getData();
        })
}

// update product
function getFormData() {
    return {
        name: document.getElementById('txtName').value,
        img: document.getElementById('txtImg').value,
        date: document.getElementById('txtNgay').value
    }
}

function clearFormData() {
    document.getElementById('txtName').value = '';
    document.getElementById('txtImg').value = '';
    document.getElementById('txtNgay').value = '';
}

function setFormData(name, img, date) {
    document.getElementById('txtName').value = name;
    document.getElementById('txtImg').value = img;
    document.getElementById('txtNgay').value = date;
}

// get data theo id
function editCallData(id) {
    // console.log(id);
    // fetch(productAPI + '/' + id, {
    //     method: "GET"
    // })
    //     .then((res) => {
    //         res.json();
    //     })
    //     .then((response) =>{
    //         // editFormData = response;
    //     })

    fetch(productAPI + '/' + id)
        .then(response => response.json())
        .then(data => {
            console.log(`Details of product with ID ${id}:`, data);
            clearFormData();
            editFormData = data[0];
            setFormData(editFormData.name, editFormData.img, editFormData.data);
        })
}

function updateProduct() {
    var formData = getFormData();
    fetch(productAPI, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
        .then((res) => {
            return res.json();
        })
        .then((response) => {
            clearFormData();
        })
}

// get product
function getData() {
    var table = document.getElementById('table-body');
    fetch(productAPI)
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            var temp = json.map((item) => {
                return `
                <tr>
                    <td>${item.id}</td>
                    <td><img src="${item.img}"></img></td>
                    <td>${item.name}</td>
                    <td>${item.date}</td>
                    <td><button class="btn btn-primary" onclick="editCallData(${item.id})">Cập nhật</button></td>
                    <td><button class="btn btn-danger" onclick="deleteProduct(${item.id})">Xóa</button></td>
                </tr>
            `
            })
            table.innerHTML = temp.join('');
        })
}

getData();