let redirectURL = '';

const redirectPage = function (url) {
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

