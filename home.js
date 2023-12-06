document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const storedUsername = parsedData.username;
      const storedPassword = parsedData.password;

      if (username === storedUsername && password === storedPassword) {
        alert('Welcome to Red Organizations, Ltd.!');
        // Redirect to another page after successful login
        window.location.href = '2ndpage.html'; // Change to your desired page
      } else {
        alert('If you are not registered, kindly register yourself!');
      }
    } else {
      alert('If you are not registered, kindly register yourself!');
      // Redirect to the signup page if no data is found
      window.location.href = 'signup.html';
    }
  });
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollUp").style.display = "block";
  } else {
    document.getElementById("scrollUp").style.display = "none";
  }
}

document.getElementById("scrollUp").onclick = function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
