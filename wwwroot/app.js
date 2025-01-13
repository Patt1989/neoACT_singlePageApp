document.addEventListener("DOMContentLoaded", function () {
    //Get the content container
    const content = document.getElementById("content");

    //Get all navbar tab containers
    const nomogramLink = document.getElementById("nomogram-link");
    const aboutLink = document.getElementById("about-link");
    const contactLink = document.getElementById("contact-link");

    //Content of each page
    const nomogramContent = `
        <h1 class="title">Nomogram for the Prediction of High Nodal Burden (≥N2) in Patients With ER+ HER2neu/ERBB2-Negative Breast Cancer and 1-2 Sentinel Lymph Node Macrometastases</h1>
        <div class="disclaimer-container">
            <h1 class="title-disclaimer">Disclaimer</h1>
            <h3 class="text-disclaimer">
            The nomogram is designed to predict high nodal burden in patients with ER+ HER2neu/ERBB2-negative breast cancer and 
            1-2 macrometastases in sentinel lymph node and serves as a decision aid and should not be used as a stand-alone tool 
            or as a substitute for professional medical advice, diagnosis, or treatment. Please note that this nomogram has not 
            yet undergone external validation.</br>
            </br>
            This nomogram is based on data from predominantly female patients with cN0 T1-T3 ER+ HER2neu/ERBB2-Negative breast cancer and 
            1 or 2 macrometastases in sentinel lymph node who were enrolled in the international randomized SENOMAC trial. It is not applicable 
            to patients with tumors with other characteristics or those treated in a neoadjuvant setting.</br>
            </br>
            Users should not rely on the information provided by this prediction tool for personal health decisions. For any health-related 
            questions or concerns, please consult your physician or other healthcare provider.</br>
            </br>
            The research team does not guarantee the accuracy, completeness, or usefulness of the information provided by the nomogram. 
            Health information is constantly evolving, and the data in this tool may become outdated or incorrect.</br>
            </br>
            The researchers do not collect specific user information from the prediction tool and do not contact users.</br>
            </br>
            You are advised to consult with a physician or other professional healthcare provider before making any decisions or taking 
            any actions related to your health.</br>
            </br>
            By using the nomogram, you agree that neither the researchers nor any other party will be liable for any decisions made or 
            actions taken based on the information provided by the nomogram.
            </h3>
        </div>
        <div class="button-container">
            <button id="button-agree">Agree</button>
            <button id="button-disagree">Do not agree</button>
        </div>
        <label>
          <input type="checkbox" id="do-not-show-again"> Do not show again
        </label>
    `;
    const aboutContent = `
        <h1 class="title">Important information about the nomogram</h1>
        <h3 class="text-about">
        The nomogram is based on data from patients in the control arm of the SENOMAC trial.</br> 
        The main results of the SENOMAC trial are published here: <a href="https://www.google.com">NEJM 2024</a></br>
        The present study and nomogram is published here: <a href="https://www.google.com">JAMASurg 2024</a></br>
        </h3>

        <h3 class="text-about-title">What is a Nomogram?</h3>
        <h3 class="text-about">A nomogram is a graphical tool that helps predict the probability of a clinical event, such as the likelihood of having a high nodal burden 
        (4 or more metastatic axillary lymph nodes) in breast cancer patients. It uses various patient-specific factors to provide a personalized risk assessment. 
        While this is a digital calculator, it is built upon the same principals as the published nomogram Prediction of High Nodal Burden in Patients With Sentinel 
        Node–Positive Luminal ERBB2-Negative Breast Cancer</br> <a href="https://www.google.com">(Skarping et al., JAMA Surg. 2024 doi:10.1001/jamasurg.2024.3944)</a>.
        </h3>

        <h3 class="text-about-title">Purpose of the Nomogram</h3>
        <h3 class="text-about">This nomogram was developed to predict high nodal burden in ER+ HER2neu/ERBB2-Negative patients with cN0 T1-T3 breast cancer and 1-2 sentinel lymph node (SLN) 
        macrometastases. The nomogram can assist in making treatment decisions without the need for additional completion axillary lymph node dissection (cALND), 
        which can cause arm morbidity.
        </h3>

        <h3 class="text-about-title">Key Factors in the Nomogram</h3>
        <h3 class="text-about">The nomogram includes several important factors:</br>
        •	Number of SLN Macrometastases: The number of SLNs with cancer deposits >2 mm.</br>
        •	Presence of SLN Micrometastases: The number of SLNs with cancer deposits >0.2 mm but ≤2 mm and/or >200 cells.</br>
        •	SLN Ratio: The ratio of metastatic to excised SLNs</br>
        •	Presence of SLN Extracapsular Extension: Cancer spread outside the lymph node capsule?</br>
        •	Tumor Size: The histopathological size in mm of the primary breast tumor
        </h3>
        
        <h3 class="text-about-title">This is how the calculator works</h3>
        <h3 class="text-about">
        1.	Identify Patient Factors: Gather the mandatory information on the patient's SLN macrometastases, micrometastases, SLN ratio, extracapsular extension, and tumor size.</br>
        2.	Find the weights: For each variable, find the corresponding weight using the nomogram.</br>
        3.	Calculates Total: Add the weights for all variables.</br>
        4.	Determine Risk: Use the sum of the weights to find the predicted probability of high nodal burden on the nomogram's risk scale.
        </h3>

        <h3 class="text-about-title">Benefits of the Nomogram</h3>
        <h3 class="text-about">
        •	Personalized Risk Assessment: Provides a tailored prediction for each patient.</br>
        •	Informed Treatment Decisions: Helps doctors decide on systemic treatments conditional on nodal status (≥N2) without additional axillary surgery.</br>
        •	Reduced Morbidity: Minimizes the risk of arm problems associated with CALND.
        </h3>

        <h3 class="text-about-title">Result</h3>
        <h3 class="text-about">The result will presented as the probability (%) of high nodal burden in the ipsilateral axilla if subjected to a completion axillary lymph node dissection, 
        based on the characteristics you have entered. Please note that a high nodal burden (≥N2, four or more metastatic axillary lymph nodes) 
        refers to the total number of metastatic lymph nodes, including sentinel lymph node metastases.</br>
        </h3>

        <h3 class="text-about-title">Summary</h3>
        <h3 class="text-about">This nomogram is a valuable tool for predicting high nodal burden (≥N2) in breast cancer patient with ER+ HER2neu/ERBB2-Negative cN0 T1-T3 tumors and 
        1 or 2 SLNs macrometastases, aiding in better treatment planning and reducing the need for cALND for nodal staging. However, further external validation 
        is needed to ensure its accuracy and reliability.
        </h3>
    `;
    const contactContent = `
        <h1>Contact</h1>
        <h3 class="text-contact">For inquiries, please email us at info@neoactcalculator.com.</h3>
        <button id="button-clear-agreement">Clear Agreement</button>
    `;
    const calculatorContent = `
        <h1 class="title">Nomogram for the Prediction of High Nodal Burden (≥N2) in Patients With ER+ HER2neu/ERBB2-Negative Breast Cancer and 1-2 Sentinel Lymph Node Macrometastases</h1>
        <p>Please enter the following data. All fields are mandatory.</p>
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
                resultContainer.innerHTML = `<h2>Your result: The probability of high nodal burden in the ipsilateral axilla is ${result}%. This translates to that ${result} out of 100 patients with the characteristics entered by you will be identified to have high nodal burden (in total four or more metastatic axillary nodes, i.e. sentinel lymph node metastases included) if subjected to a completion axillary lymph node dissection.</h2>`;
                errorContainer.innerHTML = ``;
            });
        }
    }

    //Event listeners for each navbar tab

    // --- Homepage
    nomogramLink.addEventListener("click", function (e) {
        e.preventDefault();
        if (
            localStorage.getItem("agreed") === "true" || 
            sessionStorage.getItem("agreed") === "true"
        ) {
            updateContent(calculatorContent);
        } else {
            updateContent(nomogramContent);
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
        updateContent(nomogramContent);
    }
});