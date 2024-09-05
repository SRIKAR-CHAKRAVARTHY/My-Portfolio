// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links with href starting with #
    const links = document.querySelectorAll('nav ul li a');

    // Add a click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default anchor behavior

            // Get the target element's id from the href attribute
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element smoothly
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add event listener for the search button
    document.getElementById('search-button').addEventListener('click', function() {
        var searchInput = document.getElementById('search-input').value.toLowerCase();
        
        if (searchInput === 'home') {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        } else if (searchInput === 'about') {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        } else if (searchInput === 'skills') {
            document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
        } else if (searchInput === 'contact') {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Section not found');
        }
    });
});

