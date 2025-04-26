// Matrix Rain Effect
const matrix = document.getElementById('matrix');
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const numberOfColumns = Math.floor(window.innerWidth / 20); // Adjust the width to fit screen size
const columnHeight = window.innerHeight;

for (let i = 0; i < numberOfColumns; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.left = `${i * 20}px`;
    matrix.appendChild(column);

    // Create the falling text inside each column
    let text = '';
    setInterval(() => {
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        text += randomChar;
        if (text.length > columnHeight / 20) {
            text = text.slice(1); // Keep the text length manageable
        }
        column.textContent = text;
    }, 50);
}

// Typewriter Intro Effect
const introText = "Welcome to NO1DS, the underground hub for hackers.";
let index = 0;

function typewriterEffect() {
    if (index < introText.length) {
        document.getElementById("intro-text").innerHTML += introText.charAt(index);
        index++;
        setTimeout(typewriterEffect, 100); // Speed of typing
    }
}

window.onload = typewriterEffect;

// Glitch Sound Effect
const glitchSound = new Howl({
    src: ['glitch-sound.mp3'] // Path to your glitch sound file
});

document.getElementById("glitch-button").addEventListener("click", () => {
    glitchSound.play();
});

// Command Input Area
document.getElementById('command-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = this.value;
        document.getElementById('console-output').innerHTML += `<p>Command: ${command}</p>`;
        this.value = ''; // Clear input after command
    }
});
