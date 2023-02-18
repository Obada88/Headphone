
// Start Section Navbar

const clickBars= document.getElementById("bars")


clickBars.onclick= ()=>{
    clickBars.classList.toggle('fa-xmark')
}

// select the navbar element
const navbar= document.getElementById("Bgscroll")
// listen to the window scroll event
window.addEventListener('scroll', () => {
  // check the scroll position
  if (window.scrollY > 0) {
    // set the background color to a new value
    navbar.style.backgroundColor = '#ddd';
    navbar.style.borderRadius="5px"

  } else {
    // reset the background color to the original value
    navbar.style.backgroundColor = '#000';
  }
});


