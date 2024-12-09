document.addEventListener("DOMContentLoaded", function () {
    //Get the content container
    const content = document.getElementById("content");

    //Get all navbar tab containers
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");

    //Content of each page
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

    //Update content
    function updateContent(contentHTML) {
        content.innerHTML = contentHTML;

        // --- Homepage
        const btnAgree = document.getElementById("button-agree");
        const btnDisagree = document.getElementById("button-disagree");
        const checkbox = document.getElementById("do-not-show-again");
        
        if (btnAgree && btnDisagree) {
            btnAgree.addEventListener("click", function (e) {
                e.preventDefault();
                checkbox.checked
                    ? localStorage.setItem("agreed", "true") //if checked, consent is saved in localStorage
                    : sessionStorage.setItem("agreed", "true"); //if unchecked, consent is only saved in sessionStorage
                updateContent(calculatorContent); 
            });

            btnDisagree.addEventListener("click", function () {
                window.location.href = "https://www.google.com";
            });
        }

        // --- Contactpage
        const btnClearAgreement = document.getElementById("button-clear-agreement");
        if (btnClearAgreement) {
            btnClearAgreement.addEventListener("click", function () {
                localStorage.removeItem("agreed");
                sessionStorage.removeItem("agreed");
                updateContent(homeContent);
            });
        }

        // --- Calculatorpage
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
          
                const result = parseFloat(input1) + parseFloat(input2) + parseFloat(input3); //calculation
        
                const resultContainer = document.getElementById("result-container");
                resultContainer.innerHTML = `<h2>Result: ${result}</h2>`;
                errorContainer.innerHTML = ``;
            });
        }
    }

    //Event listeners for each navbar tab

    // --- Homepage
    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        if (
            localStorage.getItem("agreed") === "true" || 
            sessionStorage.getItem("agreed") === "true"
        ) {
            updateContent(calculatorContent);
        } else {
            updateContent(homeContent);
        }
    });

    // --- Aboutpage
    aboutLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(aboutContent);
    });

    // --- Contactpage
    contactLink.addEventListener("click", function (e) {
        e.preventDefault();
        updateContent(contactContent);
    });

    //Initial page
    if (
        localStorage.getItem("agreed") === "true" ||
        sessionStorage.getItem("agreed") === "true"
    ) {
        updateContent(calculatorContent);
    } else {
        updateContent(homeContent);
    }
});