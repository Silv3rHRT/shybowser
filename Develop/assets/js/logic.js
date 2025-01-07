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

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const modeButton = document.getElementById('toggle')

const modeSwitch = function(mode){
  let icon, color;
  if (mode == 'light'){
    icon = '☀️';
    color = '#FFB100';
  }else{
    icon = '🌙';
    color = '#8570A5';
  }
  
  modeButton.textContent = icon;
  document.body.classList = mode;

  document.documentElement.style.setProperty('--circle-color', color)

}

const handleModeToggle= function() {
  console.log('hi')
  let mode = readMode()
  let nextMode;

  if (mode == 'light'){
    nextMode = 'dark'
  }else{ 
    nextMode = 'light'
  }
  modeSwitch(nextMode)
  storeMode(nextMode)
}

const readMode = function () {
  console.log('reading')
  const mode = localStorage.getItem('mode') || 'dark'
return mode
}

const storeMode = function (mode) {
  console.log('stored')
  localStorage.setItem('mode', mode)
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = function(){

}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = function() {
  
}
// ! Use the following function whenever you need to redirect to a different page
modeSwitch(readMode())

modeButton.addEventListener('click', handleModeToggle)

