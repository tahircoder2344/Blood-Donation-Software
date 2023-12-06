document.addEventListener('DOMContentLoaded', function() {
  const myForm = document.getElementById('myForm');

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById('in-1').value;
    const fatherName = document.getElementById('in-2').value;
    const motherName = document.getElementById('in-3').value;
    const grade = document.getElementById('in-4').value;
    const bloodGroup = document.getElementById('in-5').value;

    // Create an object with the form data
    const formData = {
      'Name :': name,
      'Father\'s Name :': fatherName,
      'Mother\'s Name :': motherName,
      'Grade :': grade,
      'Blood Group Type :': bloodGroup
    };

    // Store data in local storage as a JSON string
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirect to table.html after form submission
    window.location.href = 'table.html';
  }

  // Add event listener for form submission
  myForm.addEventListener('submit', handleFormSubmit);
});
      let modeBtn = document.querySelector("#mode");
      let currMode = "light";

      modeBtn.addEventListener("click", () => {
        if (currMode === "light") {
          currMode = "dark";
          document.querySelector("body").style.backgroundColor = "black";
          document.querySelector("body").style.color = "red";
          document.querySelector("#btn").style.backgroundColor = "white";
          document.querySelector("#btn").style.color = "black";
          document.querySelector(".button").style.color = "white";
          document.querySelector(".button").style.backgroundColor = "black";
          document.querySelector("#mode").style.backgroundColor = "black";
          document.querySelector("#mode").style.color = "white";
          document.getElementById('mode').innerText = " Click here to turn Dark Mode OFF"
          // document.querySelector("body").style.backgroundImage = 'url(pic2.jpg)';
                   
        } else {
          currMode = "light";
          document.querySelector("body").style.backgroundColor = "white";
          document.querySelector("body").style.color = "black";
          document.querySelector("#btn").style.backgroundColor = "#007bff";
          document.querySelector("#btn").style.color = "white";
          document.querySelector(".button").style.color = "#fff";
          document.querySelector(".button").style.backgroundColor = "#007bff";
          document.querySelector("#mode").style.backgroundColor = "#007bff";
          document.querySelector("#mode").style.color = "white";
          document.getElementById('mode').innerText = " Click here to turn Dark Mode ON"
          document.querySelector("body").style.backgroundImage = '';


        }
      });


  




  

