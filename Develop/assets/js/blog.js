// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.querySelector('#back')

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, className, textContent, parent) {
    const element = document.createElement(tag); //create element such as 'p', 'h1', 'div'
    element.className = className; //set class name
    element.textContent = textContent; //set the text content
    parent.appendChild(element); //append the element to the specified parent
}

// TODO: Create a function that handles the case where there are no blog posts to display
function handleNoBlogPosts() {
    mainElement.innerHTML = '' //clear the main element
    buildElement('p', 'no-post', 'There are no blog posts at the moment, please hit the back button above and submit a new blog post', mainElement) //post default list
}
// a function that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')); //retrieves blogs from local storage

    if (blogPosts && blogPosts.length > 0) {
        mainElement.innerHTML = '' //clear main content before rendering

        //iterate over array of posts
        blogPosts.forEach((post) => {
            buildElement('h1', 'title', post.title, mainElement); // add the title
            buildElement('h3', 'username', `by ${post.username}`, mainElement); //add an author line
         buildElement('p', 'content', post.content, mainElement); //add the blog content
        });
    } else {
        handleNoBlogPosts();
    }
}

// Calls the `renderBlogList` function
renderBlogList();

// Redirects to the home page using the `redirectPage` function found in logic.js when the back button is clicked

backButton.addEventListener('click', () => {
    redirectPage('index.html');
});
