// MATRIX RAIN
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

// TYPEWRITER INTRO
const introText = "NO1DS - C0NTR0L TH3 GR1D_";
let index = 0;
function typeIntro() {
  if (index < introText.length) {
    document.getElementById("intro").innerHTML += introText.charAt(index);
    index++;
    setTimeout(typeIntro, 100);
  }
}
window.onload = typeIntro;

// TERMINAL COMMANDS
const input = document.getElementById("terminal-input");
const output = document.getElementById("terminal-output");

input.focus();

const commands = {
  help: `Available commands: <br> - help<br> - access tools<br> - access community<br> - access downloads`,
  "access tools": "🔧 Tools: [coming soon]",
  "access community": "🌐 Community: [coming soon]",
  "access downloads": "⬇️ Downloads: [coming soon]",
  clear: () => { output.innerHTML = ''; return ''; },
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    output.innerHTML += `<div><span class="prompt">no1ds&gt;</span> ${command}</div>`;
    const result = typeof commands[command] === "function" ? commands[command]() : commands[command] || "Unknown command. Type 'help'";
    if (result) output.innerHTML += `<div>${result}</div>`;
    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
