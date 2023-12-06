document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Validation (you can add more complex validation as needed)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Display the form data (simulating sending the message locally)
  const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  alert('Message sent:\n\n' + formData);

  // Reset the form after submission
  this.reset();
});