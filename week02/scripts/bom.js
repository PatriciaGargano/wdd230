const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim(); // Get the trimmed value of the input

    if (chapter !== '') {
        // Create <li> element
        const listItem = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; // Set delete button text content
        deleteButton.classList.add('delete'); // Add a class for styling

        // Populate <li> element with input value and delete button
        listItem.textContent = chapter;
        listItem.appendChild(deleteButton);

        // Append <li> to the <ul> list
        list.appendChild(listItem);

        // Add event listener to delete button to remove <li> element
        deleteButton.addEventListener('click', () => {
            listItem.remove(); // Remove <li> from DOM
        });

        input.value = ''; // Clear input field
        input.focus(); // Return focus to input field
    } else {
        alert('Please enter a valid book and chapter.'); // Alert user if input is empty
        input.focus(); // Return focus to input field
    }
});

