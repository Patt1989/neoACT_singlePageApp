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
        <h2>Disclaimer</h2>
        <p>Text about disclaimer</p>
        <div class="button-container">
            <button id="button-agree">Agree</button>
            <button id="button-disagree">Do not agree</button>
        </div>
        <label>
          <input type="checkbox" id="do-not-show-again"> Do not show again
        </label>
    `;
    const aboutContent = `
        <h1>About</h1>
        <p>NeoACT Calculator helps users calculate various parameters based on their inputs.</p>
    `;
    const contactContent = `
        <h1>Contact</h1>
        <p>For inquiries, please email us at info@neoactcalculator.com.</p>
        <button id="button-clear-agreement">Clear Agreement</button>
    `;
    const calculatorContent = `
        <h1>Calculator</h1>
        <p>Please enter the following data</p>
        <div class="input-container">
            <div class="input-line">
                <label for="input1">Input 1:</label>
                <input type="number" id="input1" placeholder="Enter value 1" />
            </div>

            <div class="input-line">
                <label for="input2">Input 2:</label>
                <input type="number" id="input2" placeholder="Enter value 2" />
            </div>

            <div class="input-line">
                <label for="input3">Input 3:</label>
                <input type="number" id="input3" placeholder="Enter value 3" />
            </div>

            <div class="error-container" id="error-container"></div>

            <button id="button-calculate">Calculate</button>
        </div>
        <div id="result-container"></div>
    `;

    // Function to update content dynamically
    function updateContent(contentHTML) {
        content.innerHTML = contentHTML;

        // If the content includes the "Agree" button, set up the event listener
        const btnAgree = document.getElementById("button-agree");
        const btnDisagree = document.getElementById("button-disagree");
        const checkbox = document.getElementById("do-not-show-again");
        if (btnAgree) {
            btnAgree.addEventListener("click", function (e) {
                e.preventDefault();
                checkbox.checked
                    ? localStorage.setItem("agreed", "true")
                    : sessionStorage.setItem("agreed", "true");
                updateContent(calculatorContent); // Change the content to the "about" page
            });
        }

        // "Do not agree" button click event to redirect to a website
        if (btnDisagree) {
            btnDisagree.addEventListener("click", function () {
                // Redirect to the specified website
                window.location.href = "https://www.google.com"; // Change the URL to your desired website
            });
        }

        // Clear agreement button
        const btnClearAgreement = document.getElementById("button-clear-agreement");
        if (btnClearAgreement) {
            btnClearAgreement.addEventListener("click", function () {
                localStorage.removeItem("agreed");
                sessionStorage.removeItem("agreed");
                updateContent(homeContent);
            });
        }

        // Event listener for the "Calculate" button
        const btnCalculate = document.getElementById("button-calculate");
        const errorContainer = document.getElementById("error-container");
        if (btnCalculate) {
            btnCalculate.addEventListener("click", function () {
                const input1 = document.getElementById("input1").value;
                const input2 = document.getElementById("input2").value;
                const input3 = document.getElementById("input3").value;

                if (input1 === "" || input2 === "" || input3 === "") {
                    errorContainer.innerHTML = `<h5>Please enter all values</h5>`;
                    return;
                }
          
                // Example calculation: Add the three input values
                const result = parseFloat(input1) + parseFloat(input2) + parseFloat(input3);
        
                // Display the result in the result container
                const resultContainer = document.getElementById("result-container");
                resultContainer.innerHTML = `<h2>Result: ${result}</h2>`;
                errorContainer.innerHTML = ``;
            });
        }
    }

    // Event listeners for each link
    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        if (
            localStorage.getItem("agreed") === "true" ||
            sessionStorage.getItem("agreed") === "true"
        ) {
            updateContent(calculatorContent); // Automatically go to calculator content
        } else {
            // If not, show the home content (which includes the disclaimer and Agree button)
            updateContent(homeContent);
        }
    });

    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(aboutContent);
    });

    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(contactContent);
    });

    if (
        localStorage.getItem("agreed") === "true" ||
        sessionStorage.getItem("agreed") === "true"
    ) {
        updateContent(calculatorContent);
    } else {
        updateContent(homeContent);
    }
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
