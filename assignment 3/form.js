const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (name === '' || email === '' || password === '') {
        event.preventDefault();
        alert('Please fill out all required fields.');
      }
    });