const languageSelect = document.getElementById("language-select");


if ((navigator.language || navigator.userLanguage) != 'null'){
    if ((navigator.language || navigator.userLanguage).includes("nl")){
        languageSelect.querySelector('option[value="nl"]').selected = true;
    }
    else if ((navigator.language || navigator.userLanguage).includes("en")){
        languageSelect.querySelector('option[value="en"]').selected = true;
    }
    else{
        languageSelect.querySelector('option[value="en"]').selected = true;
    }
    updateContent();
}

// Load all translations from a single JSON file
async function loadTranslations() {
    try {
        const response = await fetch("javascript/translations.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error loading translations.json:", error);
        return null;
    }
}

// Function to update the content based on the selected language
async function updateContent() {
    const translations = await loadTranslations();

    if (translations && translations[selectedLanguage]) {
        const translation = translations[selectedLanguage];
        for (const key in translation) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translation[key];
            }
        }
    }
}


// Event listener to update the content when the language selection changes
languageSelect.addEventListener("change", function () {
    
    const selectedLanguage = languageSelect.value;

    // Store the selected language in local storage
    sessionStorage.setItem('selectedLanguage', selectedLanguage);
   
    // Update the content
    updateContent(selectedLanguage);
    location.reload(); 
});

// Retrieve the selected language from local storage on page load
const selectedLanguage = sessionStorage.getItem('selectedLanguage');

// Check if the selected language exists in local storage
if (selectedLanguage) {
    // Use the selected language to update the content
    
    updateContent(selectedLanguage);

    if (selectedLanguage == "en") {
        languageSelect.querySelector('option[value="en"]').selected = true;
    }
    else if (selectedLanguage == "nl") {
        languageSelect.querySelector('option[value="nl"]').selected = true;
    }
}
else{
    // Use the default language to update the content
    updateContent("en");
    languageSelect.querySelector('option[value="en"]').selected = true;
}

