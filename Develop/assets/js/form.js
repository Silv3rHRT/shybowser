// Select elements
const body = document.body;
const header = document.header; // Directly access the header element

// Inject toggle switch into the header
function injectToggleSwitch() {
  if (!(header instanceof HTMLElement)) {
    console.error("'header' is not a valid Element.");
    return;
  }

  const toggleContainer = document.createElement('div');
  toggleContainer.id = 'toggle-container';

  const toggleButton = document.createElement('button');
  toggleButton.id = 'toggle';
  toggleButton.textContent = body.classList.contains('light') ? '☀️' : '🌙'; // Set initial emoji

  toggleContainer.appendChild(toggleButton);
  header.appendChild(toggleContainer);

  // Add event listener to the toggle button
  toggleButton.addEventListener('click', toggle);
}

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
  if (!(body instanceof Element)) {
    console.error("'body' is not a valid Element.");
    return;
  }

  const currentMode = body.classList.contains('light') ? 'light' : 'dark';
  const newMode = currentMode === 'light' ? 'dark' : 'light';

  // Remove currentMode and add newMode
  body.classList.remove(currentMode);
  body.classList.add(newMode);

  // Update button text
  const toggleButton = document.getElementById('toggle');
  if (toggleButton) {
    toggleButton.textContent = newMode === 'light' ? '☀️' : '🌙';
  }

  // Save the new mode to local storage
  localStorage.setItem('theme', newMode);
}

// Inject the toggle switch on page load
injectToggleSwitch();

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data):[];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, newData){
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
