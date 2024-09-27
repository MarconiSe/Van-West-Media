const template = document.querySelector("#work-card-template");
const wrapper = document.createDocumentFragment();

document.getElementById('dropdownButton').addEventListener('click', function () {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden'); // Show or hide the menu
});

// Add event listener to close dropdown on radio selection
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', function () {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.add('hidden'); // Close the menu after selection
  });
});

async function workArea() {
  const workPromise = await fetch("https://sunny-sfogliatella-40c6d1.netlify.app/.netlify/functions/work");
  const workData = await workPromise.json();
  workData.forEach(work => {
      const clone = template.content.cloneNode(true)

      clone.querySelector(".card-title").textContent = work.Name
      clone.querySelector(".card-description").textContent = work.About
      
      if (!work.Photo || work.Photo.trim() === "") {
        work.Photo = "src/img/fallbackworkimage.png";
      }
      
      clone.querySelector("img").src = work.Photo
      wrapper.appendChild(clone) // Append the clone to the wrapper
  });
  document.querySelector(".work-section").appendChild(wrapper); // Append the wrapper to the work-section
}

workArea();