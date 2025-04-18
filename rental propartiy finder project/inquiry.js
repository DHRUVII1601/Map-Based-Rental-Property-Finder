document.querySelector('.inquiry-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will contact you shortly.');
    this.reset(); // Clear the form
  });
  


