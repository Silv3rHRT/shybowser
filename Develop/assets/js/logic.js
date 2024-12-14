// Select elements
const toggleButton = document.getElementById('toggle');
const body = document.body;
const header = document.header;
// Apply initial mode from local storage
const savedMode = localStorage.getItem('theme');
if (savedMode) {
  body.classList.add(savedMode);
} else {
  // Default to light mode if no preference is set
  body.classList.add('light');
}

// Function to toggle light/dark mode
function toggle() {
  const currentMode = body.classList.contains('light') ? 'light' : 'dark';
  const newMode = currentMode === 'light' ? 'dark' : 'light';

  // remove currentMode and add newMode
  body.classList.remove(currentMode);
  body.classList.add(newMode);

  // Save the new mode to local storage
  localStorage.setItem('theme', newMode);
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', toggle);

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data):[];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key){
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key,JSON.stringify(existingData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function () {
  const url = 'blog.html';
  redirectURL = url;
  location.assign(url);
};

