
console.log(languageSelect)

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
    console.log("Updating content", selectedLanguage);

    const translations = await loadTranslations();

    if (translations && translations[selectedLanguage]) {
        console.log("Updating content for language:", selectedLanguage);
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
    console.log("Language selection changed")
    const selectedLanguage = languageSelect.value;

    // Store the selected language in local storage
    sessionStorage.setItem('selectedLanguage', selectedLanguage);
    console.log("Selected language:", selectedLanguage)

    // Update the content
    updateContent(selectedLanguage);
    location.reload(); 
});

// Retrieve the selected language from local storage on page load
const selectedLanguage = sessionStorage.getItem('selectedLanguage');

// Check if the selected language exists in local storage
if (selectedLanguage) {
    // Use the selected language to update the content
    console.log("Selected language (if):", selectedLanguage)
    updateContent(selectedLanguage);
    console.log("auto update")
    if (selectedLanguage == "en") {
        languageSelect.querySelector('option[value="en"]').selected = true;
    }
    else if (selectedLanguage == "nl") {
        languageSelect.querySelector('option[value="nl"]').selected = true;
    }
}
else{
    // Use the default language to update the content
    console.log("Selected language (else):", selectedLanguage)
    updateContent("en");
    languageSelect.querySelector('option[value="en"]').selected = true;
}

