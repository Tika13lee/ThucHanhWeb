window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

var table = document.getElementById('datatablesSimple');
fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(function (res) {
        return res.json();
    })
    .then(function (json) {
        var temp = json.map((item) => {
             return `
                <tr>
                    <td>${item.userId}</td>
                    <td>${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.completed}</td>
                    <td>${item.title}</td>
                </tr>
            `
        })
        table.innerHTML = temp.join('');
    });
