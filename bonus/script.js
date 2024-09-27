const bubbles = document.querySelectorAll('.bubble');
const message = document.getElementById('message');

const colors = [
    { hex: "#ff0000", name: "Red" },
    { hex: "#00ff00", name: "Green" },
    { hex: "#0000ff", name: "Blue" },
    { hex: "#ffff00", name: "Yellow" },
    { hex: "#ff00ff", name: "Magenta" },
    { hex: "#00ffff", name: "Cyan" },
    { hex: "#ffffff", name: "White" },
    { hex: "#000000", name: "Black" },
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

bubbles.forEach(bubble => {
    bubble.addEventListener('click', () => {
        const { hex, name } = getRandomColor();
        bubble.style.backgroundColor = hex;

        message.textContent = `You clicked a bubble! Color: ${name}`;
    });
});
