document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const dataTable = document.getElementById('dataTable');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        // Mock data for demonstration purposes
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subscribe: document.getElementById('subscribe').checked,
            gender: document.querySelector('input[name="gender"]:checked').value
        };

        // Mock server response
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${formData.name}</td><td>${formData.email}</td><td>${formData.subscribe}</td><td>${formData.gender}</td>`;
        dataTable.appendChild(newRow);

        // You can use XMLHttpRequest or Fetch API to send data to the server
    }
});
