// script.js

// Function to toggle visibility of authentication sections
function toggleAuth(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
}

// Event listeners for the auth headers
document.querySelectorAll('.auth-header').forEach(header => {
    header.addEventListener('click', function() {
        const sectionId = this.dataset.target;
        toggleAuth(sectionId);
    });
});

// Show or hide additional content on hover
document.querySelectorAll('.auth-header').forEach(header => {
    header.addEventListener('mouseover', function() {
        const sectionId = this.dataset.target;
        document.getElementById(sectionId).style.display = 'block';
    });

    header.addEventListener('mouseout', function() {
        const sectionId = this.dataset.target;
        document.getElementById(sectionId).style.display = 'none';
    });
});

// Show a loading spinner when submitting a form
document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting
        document.querySelector('.loading-spinner').style.display = 'block'; // Show spinner
        // Simulate form submission
        setTimeout(() => {
            document.querySelector('.loading-spinner').style.display = 'none'; // Hide spinner after 2 seconds
            alert('Form submitted!');
        }, 2000);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const toggleHeader = document.querySelector('.toggle-header');
    const toggleContent = document.querySelector('.toggle-content');
    
    toggleHeader.addEventListener('click', function() {
        if (toggleContent.style.display === 'block') {
            toggleContent.style.display = 'none';
        } else {
            toggleContent.style.display = 'block';
        }
    });
});
