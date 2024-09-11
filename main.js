document.getElementById('dropdownButton').addEventListener('click', function () {
  const menu = document.getElementById('dropdownMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
window.addEventListener('click', function (e) {
  const button = document.getElementById('dropdownButton');
  const menu = document.getElementById('dropdownMenu');
  if (!button.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
  }
});