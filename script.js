// Handle 3D hover effect for cards
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = card;
        const { offsetX: x, offsetY: y } = e;

        const xRotation = ((y / height) - 0.5) * 20; // Rotate on the Y-axis
        const yRotation = ((x / width) - 0.5) * -20; // Rotate on the X-axis

        card.style.transform = `rotateY(${yRotation}deg) rotateX(${xRotation}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)'; // Reset rotation
    });
});

// Popup functionality
function openPopup(gameId) {
    const popup = document.getElementById('game-popup');
    popup.style.display = 'flex';
    popup.classList.remove('hide');  // Ensure popup appears without animation
    // You can customize the popup based on the gameId (e.g., different images or text)
}

function closePopup() {
    const popup = document.getElementById('game-popup');
    popup.classList.add('hide');  // Add hide class to trigger close animation
    setTimeout(() => {
        popup.style.display = 'none';  // Hide popup completely after the animation
    }, 500);  // Match the duration of the closing animation
}
