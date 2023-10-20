


//list
function rearrangeTiles() {
  const tilesWrap = document.querySelector('.tilesWrap');

  if (tilesWrap === null) {
    return;
  }

  const items = Array.from(tilesWrap.querySelectorAll('li'));
  // Clear the existing content of the container
  tilesWrap.innerHTML = '';

  // Create a new row container
  let row = document.createElement('ul');
  row.classList.add('tilesRow');

  // Append each item to the row, limiting to 3 items per row
  items.forEach((item, index) => {
    if (index % 3 === 0 && index > 0) {
      // Start a new row
      tilesWrap.appendChild(row);
      row = document.createElement('ul');
      row.classList.add('tilesRow');
    }
    row.appendChild(item);
  });

  // Append the last row if it's not empty
  if (row.children.length > 0) {
    tilesWrap.appendChild(row);
  }
}

// Call the function to rearrange the tiles
rearrangeTiles();


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
    console.log(duck[0].style.display)
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
