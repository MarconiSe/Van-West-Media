const template = document.querySelector("#work-card-template");
const wrapper = document.createDocumentFragment();

document.getElementById('dropdownButton').addEventListener('click', function () {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden'); // Show or hide the menu
});

async function workArea() {
  const workPromise = await fetch("https://sunny-sfogliatella-40c6d1.netlify.app/.netlify/functions/work");
  const workData = await workPromise.json();
  workData.forEach(work => {
      const clone = template.content.cloneNode(true);

      clone.querySelector(".card-title").textContent = work.Name;
      clone.querySelector(".card-description").textContent = work.About;
      clone.querySelector("img").src = work.Photo

      if (!work.Photo) pet.Photo= "src\img\fallbackworkimage.png"

      wrapper.appendChild(clone); // Append the clone to the wrapper
  });
  document.querySelector(".work-section").appendChild(wrapper); // Append the wrapper to the work-section
}

workArea();