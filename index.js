// Get the code element
let codeElement = document.getElementById('code');

// Initialize lock state
let locked = false;

// Function to copy code to clipboard
function copyCode() {
    if (!locked) {
        codeElement.select();
        document.execCommand('copy');
    }
}

// Function to save code (placeholder alert)
function saveCode() {
    if (!locked) {
        let code = codeElement.value;
        // Here you can implement code to save to a server or local storage
        alert('Code saved!');
    }
}

// Function to toggle lock state
function toggleLock() {
    locked = !locked;
    codeElement.disabled = locked;
    if (locked) {
        codeElement.style.background = '#f0f0f0';
    } else {
        codeElement.style.background = '#fff';
    }
}

// Function to increase indentation
function increaseIndent() {
    if (!locked) {
        let start = codeElement.selectionStart;
        let end = codeElement.selectionEnd;
        let selectedText = codeElement.value.substring(start, end);
        let lines = selectedText.split('\n');
        let indentedText = lines.map(line => '\t' + line).join('\n');
        codeElement.setRangeText(indentedText, start, end);
        codeElement.setSelectionRange(start, end + lines.length - 1);
    }
}

// Function to clear all
function clearCode() {
    let codeElement = document.getElementById('code');
    codeElement.value = ''; // Set the value of the textarea to an empty string
}
