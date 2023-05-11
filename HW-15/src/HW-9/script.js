export function generateBlocks() {
    const container = document.querySelector('.div');
    const length = 25;
    container.innerHTML = '';
        for (let i = 0; i < length; i++) {
            const square = document.createElement('square');
            square.style.background = getRandomColor();
            container.append(square);
        }       
    return container;       
}

function getRandomColor() {
    const firstColor = Math.floor(Math. random() * 256);
    const secondColor = Math.floor(Math. random() * 256);
    const thirdColor = Math.floor(Math. random() * 256);
    const randomColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
    return randomColor;
}

function generateBlocksInterval() {
    const interval = setInterval(generateBlocks, 1000);
    return interval;
}




