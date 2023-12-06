document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    localStorage.setItem('formData', JSON.stringify(data));
    alert('Form data stored in local storage.');
    form.reset();

    window.location.href = 'index.html'; // Redirect to the login page after signup
  });
});
