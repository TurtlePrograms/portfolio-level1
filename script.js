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




//DUCK :)

const duckImage = document.getElementById("duck");
const duck = document.getElementsByClassName("duckcontainer");
let clickCount = 0;
let timer;

duckImage.addEventListener("click", function () {
  clickCount++;
  console.log(clickCount);

  if (clickCount === 1) {
    // Start a timer to reset the click count after a certain time interval
    timer = setTimeout(() => {
      clickCount = 0;
    }, 2000);
  } else if (clickCount === 5) {
    // If the duck is clicked 5 times in quick succession
    console.log("Duck clicked 5 times in quick succession!");
    if (duck[0].style.display === "none") {
      duck[0].style.display = "block";
    } else {
      duck[0].style.display = "none";
    }
    // Reset the click count and clear the timer
    clickCount = 0;
    clearTimeout(timer);
  }
});
