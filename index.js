document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("selectedLanguage");
    const dropdownContent = document.querySelector(".dropdown-content");
    const toggleSpeechCheckbox = document.getElementById("toggleSpeech");

    const synth = window.speechSynthesis;

    dropdownContent.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            const selectedLanguage = event.target.textContent;
            dropdownButton.textContent = selectedLanguage;
            dropdownContent.style.display = "none";

            if (toggleSpeechCheckbox.checked) {
                speakText(selectedLanguage);
            }
        }
    });

    dropdownButton.addEventListener("click", function() {
        dropdownContent.style.display = "block";
    });

    toggleSpeechCheckbox.addEventListener("change", function() {
        if (this.checked) {
            const selectedLanguage = dropdownButton.textContent;
            speakText(selectedLanguage);
        } else {
            synth.cancel();
        }
    });

    function speakText(text) {
        synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    document.addEventListener("click", function(event) {
        if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});
