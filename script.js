function checkWindowSize() {
    // Get the element with class 'navbar'
    const navbarElement = document.querySelector('.navbar');
  
    // Check if the element exists on the page
    if (navbarElement) {
      // Get the width of the 'navbar' element
      const navbarWidth = navbarElement.getBoundingClientRect().width;
  
      // Get the current window width
      const windowWidth = window.innerWidth;
  
      // Compare window width with 'navbar' width
      if (windowWidth < navbarWidth) {
        // Hide the 'navbar' element when the window is smaller
        navbarElement.style.display = 'none';
      } else {
        // Show the 'navbar' element when the window is larger
        navbarElement.style.display = 'block';
      }
    } else {
      // If no element with class 'navbar' is found, log an error message
      console.log("Element with class 'navbar' not found.");
    }
  }
  
  // Call the function to check the window size
  checkWindowSize();
  
  // You can also listen for window resize events to recheck whenever the window is resized
  window.addEventListener('resize', checkWindowSize)