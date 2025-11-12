// Custom JavaScript for Campus Life Super App

document.addEventListener("DOMContentLoaded", () => {
    console.log("Campus Life Super App loaded successfully!");

    // Example: Click event for future API integration
    const featureElements = document.querySelectorAll("section .col-md-4");
    featureElements.forEach((feature) => {
        feature.addEventListener("click", () => {
            alert(`You clicked on ${feature.querySelector("h3").innerText}`);
        });
    });

    // Placeholder for API integration
    // Example: Fetch upcoming events from a campus API
    // fetch('https://api.example.com/events')
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error("API Error:", error));
});
