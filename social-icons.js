document.addEventListener('DOMContentLoaded', function() {
 
  const socialContainers = document.querySelectorAll('.social-icons-container');
  
  socialContainers.forEach(container => {
   
    if (!container.closest('.latest-projects')) {
      container.classList.add('horizontal');
    }
  });
});
