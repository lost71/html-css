const pixarCharacters = [
    'buzz_lightyear.png',
    'woody.jpg',
    'nemo.png',
    'dory.png',
    'sulley.png',
    'mike_wazowski.png',
    'lightning_mcqueen.png',
    'wall_e.png',
    'russell.png',
    'carl.png',
    'joy.png',
    'sadness.png',
    'miguel.png',
    'hector.png'
];

function createPixarCharacter() {
    const character = document.createElement('img');
    character.src = `images/${pixarCharacters[Math.floor(Math.random() * pixarCharacters.length)]}`;
    character.classList.add('pixar-animation');
    character.style.position = 'absolute';
    character.style.left = `${Math.random() * window.innerWidth}px`;
    character.style.top = `${Math.random() * window.innerHeight}px`;
    character.style.width = '100px'; // Ajuste o tamanho conforme necessário
    character.style.height = 'auto'; // Ajuste o tamanho conforme necessário
    document.body.appendChild(character);

    setTimeout(() => {
        character.classList.add('active');
    }, 100);
}

function initializePixarAnimation() {
    document.body.addEventListener('mousemove', (event) => {
        createPixarCharacter();
    });
}

initializePixarAnimation();
