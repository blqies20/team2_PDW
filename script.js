function handleFormSubmit(e) {
    e.preventDefault();  // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var partySize = document.getElementById('party-size').value;
    var specialRequests = document.getElementById('special-requests').value;

    // Display submitted data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Party Size:', partySize);
    console.log('Special Requests:', specialRequests);

    // Perform further actions with the submitted data
    // For example, you can send the data to a server or display a success message
    // Here, we'll display an alert with the submitted data
    var message = "Name: " + name + "\nEmail: " + email + "\nDate: " + date + "\nTime: " + time + "\nParty Size: " + partySize + "\nSpecial Requests: " + specialRequests;
    alert(message);
};
document.getElementById('reservation-form').addEventListener('submit', handleFormSubmit);


