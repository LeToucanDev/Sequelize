async function startFetch(){
    const request = await fetch('/api/dining');
    const halls = await request.json();
    let html = `
    <thead>
    <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Address</th>
    </tr>
    </thead>
    <tbody>`;

    let table = document.querySelector('.table');

    halls.forEach(element => {
        html += `<tr>
        <td>${element.hall_id}</td>
        <td>${element.hall_name}</td>
        <td>${element.hall_address}</td>
        </tr>`;
    });
    html += '</tbody>'

    table.innerHTML = html;

}



window.onload = startFetch();