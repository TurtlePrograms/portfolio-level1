const languageSelect = document.getElementById("language-select");


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
async function updateContent(override=null) {
    pickedLanguage = null;
    if (override != null) {
        pickedLanguage = override;
    }
    else {
        pickedLanguage = languageSelect.value;
    }
    const translations = await loadTranslations();

    if (translations && translations[pickedLanguage]) {
        const translation = translations[pickedLanguage];
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
    updateContent();
    location.reload(); 
});

const selectedLanguage = sessionStorage.getItem('selectedLanguage');

if (selectedLanguage != null) {
    updateContent();
    if (selectedLanguage === "en") {
        languageSelect.querySelector('option[value="en"]').selected = true;
    } else if (selectedLanguage === "nl") {
        languageSelect.querySelector('option[value="nl"]').selected = true;
    }
} else {
    // Use the default language to update the content
    updateContent();
    languageSelect.querySelector('option[value="nl"]').selected = true;

    // Set a flag in local storage to indicate that the default language has been set
    sessionStorage.setItem('defaultLanguageSet', 'true');
}

// Check if the default language has been set
const defaultLanguageSet = sessionStorage.getItem('defaultLanguageSet');
if (!defaultLanguageSet) {
    // If not set, reload the page
    location.reload();
}
updateContent();
