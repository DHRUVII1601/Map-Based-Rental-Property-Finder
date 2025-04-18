document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! We’ve received your recommendation.");
    this.reset();
  });
  