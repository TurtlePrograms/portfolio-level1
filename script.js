function checkWindowSize() {
    //gets the navbar element
    const navbarElement = document.querySelector('.navbar');
  
    // Check if the 'navbar' element exists
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
  
  // Add an event listener that waits for the window to resize
  window.addEventListener('resize', checkWindowSize)