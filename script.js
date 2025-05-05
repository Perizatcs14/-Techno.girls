document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();  
  
      
      thankYouMessage.style.display = 'block';
      form.reset();
  
      
      setTimeout(() => {
        thankYouMessage.style.display = 'none';
      }, 5000);
    });
  });
  