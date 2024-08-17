function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Function to handle the click event
document.getElementById("greetButton").addEventListener("click", function() {
    // Get the name entered by the user
    const name = document.getElementById("nameInput").value;

    // If the name is not empty, display the greeting
    if (name) {
        document.getElementById("message").textContent = greetUser(name);
    } else {
        document.getElementById("message").textContent = "Please enter your name!";
    }
});
