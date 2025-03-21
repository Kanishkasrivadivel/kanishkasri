<script>
document.getElementById('submit-button').addEventListener('click', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the form fields
    const serialNo = document.querySelector('input[placeholder="ENTER SERIAL NO"]').value;
    const employeeId = document.querySelector('input[placeholder="ENTER EMPLOYEE\'S ID NO"]').value;
    const modelSelect = document.querySelector('select').value;

    // Check if all fields are filled
    if (!serialNo || !employeeId || !modelSelect) {
        alert('Please fill in all fields before submitting.');
    } else {
        // If all fields are filled, redirect to the next page
        window.open('file:///C:/Users/kanis/OneDrive/Desktop/JAVASCRIPT/p3.html');
    }
});


    </script>