// State management
let currentPanel = 1;
const totalPanels = 4;

// DOM elements
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentPanelSpan = document.getElementById('currentPanel');
const comicContainer = document.querySelector('.comic-container');
const comicPanels = document.querySelectorAll('.comic-panel');

// Initialize the comic strip
function init() {
    // Set up single-view mode
    comicContainer.classList.add('single-view');

    // Show first panel
    showPanel(currentPanel);

    // Add event listeners
    prevBtn.addEventListener('click', previousPanel);
    nextBtn.addEventListener('click', nextPanel);
    document.addEventListener('keydown', handleKeyboard);
}

// Display a specific panel
function showPanel(panelNumber) {
    // Remove active class from all panels
    comicPanels.forEach(panel => panel.classList.remove('active'));

    // Add active class to current panel
    if (comicPanels[panelNumber - 1]) {
        comicPanels[panelNumber - 1].classList.add('active');
    }

    // Update counter
    currentPanelSpan.textContent = panelNumber;

    // Update button states
    updateButtonStates();
}

// Navigate to previous panel
function previousPanel() {
    if (currentPanel > 1) {
        currentPanel--;
        showPanel(currentPanel);
    }
}

// Navigate to next panel
function nextPanel() {
    if (currentPanel < totalPanels) {
        currentPanel++;
        showPanel(currentPanel);
    }
}

// Handle keyboard navigation
function handleKeyboard(event) {
    if (event.key === 'ArrowLeft') {
        previousPanel();
    } else if (event.key === 'ArrowRight') {
        nextPanel();
    }
}

// Update button states (disable at edges)
function updateButtonStates() {
    prevBtn.disabled = currentPanel === 1;
    nextBtn.disabled = currentPanel === totalPanels;
}

// Start the comic strip
init();
