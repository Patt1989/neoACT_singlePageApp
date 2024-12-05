document.addEventListener("DOMContentLoaded", function () {
    // Get the content container
    const content = document.getElementById("content");

    // Get all links
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");

    // Define content for each page
    const homeContent = `
        <h1>Welcome to NeoACT Calculator</h1>
        <p>This is the home page of the NeoACT calculator. Explore our tools and features.</p>
    `;
    const aboutContent = `
        <h1>About Us</h1>
        <p>NeoACT Calculator helps users calculate various parameters based on their inputs.</p>
    `;
    const contactContent = `
        <h1>Contact</h1>
        <p>For inquiries, please email us at info@neoactcalculator.com.</p>
    `;

    // Function to update content dynamically
    function updateContent(contentHTML) {
        content.innerHTML = contentHTML;
    }

    // Event listeners for each link
    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(homeContent);
    });

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(aboutContent);
    });

    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(contactContent);
    });

    // Optional: Set the default content to home when the page loads
    updateContent(homeContent);
});



//document.addEventListener("DOMContentLoaded", function () {
//    // Function to update the content based on the route
//    function updateContent(route, data) {
//        const content = document.getElementById("content");

//        if (data && data[route]) {
//            content.innerHTML = `<h1>${data[route].title}</h1><p>${data[route].content}</p>`;
//        } else {
//            content.innerHTML = "<h1>Page Not Found</h1>";
//        }
//    }

//    // Fetch data from the JSON file
//    function fetchData() {
//        return fetch('data.json')
//            .then(response => response.json())
//            .catch(error => {
//                console.error('Error loading data.json:', error);
//                return {}; // Return empty object in case of error
//            });
//    }

//    // Event listeners for navigation links
//    function setupNavigation(data) {
//        document.getElementById("home-link").addEventListener("click", function () {
//            updateContent("home", data);
//            history.pushState(null, null, "#home");
//        });

//        document.getElementById("about-link").addEventListener("click", function () {
//            updateContent("about", data);
//            history.pushState(null, null, "#about");
//        });

//        document.getElementById("contact-link").addEventListener("click", function () {
//            updateContent("contact", data);
//            history.pushState(null, null, "#contact");
//        });
//    }

//    // Handle browser back/forward button events
//    window.addEventListener("popstate", function () {
//        const route = location.hash.slice(1); // Get the route from the URL
//        fetchData().then(data => {
//            updateContent(route, data);
//        });
//    });

//    // Initial content load based on current URL hash
//    const initialRoute = location.hash.slice(1) || "home"; // Default to home if no route
//    fetchData().then(data => {
//        updateContent(initialRoute, data);
//        setupNavigation(data); // Set up navigation listeners
//    });
//});


