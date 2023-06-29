const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;

const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

// grid board
const controlBar = {
    width: canvas.width,
    height: cellSize,
}
// projectiles/attacks

// towers

// enemies

// resources

// utils
function animate() {
    ctx.fillStyle= 'blue';
    ctx.fillRect(0,0, controlBar.width, controlBar.height);
    requestAnimationFrame(animate);
}

animate();