// TODO: Create a variable that selects the form element
const formElement = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function submitForm(event) {
    event.preventDefault();


    const username = formElement.querySelector('#username').value.trim();
    const title = formElement.querySelector('#title').value.trim();
    const content = formElement.querySelector('#content').value.trim();
    const error = formElement.querySelector('#error');

    if (!username || !title || !content){
        error.style.display = 'block';
        return;
    } else {
    //makes sure error is hidden if all fields are gucci
        error.style.display = 'none';
    }

    const formData = {
        username: username,
        title: title,
        content: content,
    };

    // Retrieve existing blog posts from localStorage or initialize an empty array
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Add the new post to the array
    storedPosts.push(formData);

    // Save the updated array back to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(storedPosts));

    // Redirect to the blog page
    redirectPage('blog.html');
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
if (formElement) {
    formElement.addEventListener('submit', submitForm)
}