document.getElementById('dropdownButton').addEventListener('click', function () {
  const menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden'); // Show or hide the menu
});

async function workArea() {
  const workPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const workData = await workPromise.json()
  workData.forEach(work => {
    console.log{work.species}
  })
}

workArea()