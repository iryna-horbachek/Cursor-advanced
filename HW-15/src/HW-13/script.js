// 1
export function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}

const idGenerator = createIdGenerator();

// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value);
// console.log(idGenerator.next().value);

//2
// const upBtn = document.getElementById('up');
// const downBtn = document.getElementById('down');
// const currentText = document.getElementById('text');

// function* newFontGenerator(initFontSize) {
//     let fontValue = initFontSize;
//     for (let i = 0; i < Infinity; i++) {
//         const initValue = yield;
//         if (initValue === 'up') {
//             fontValue += 2;
//             currentText.style.fontSize = fontValue + 'px';
//         } else if (initValue === 'down') {
//             fontValue -= 2;
//             currentText.style.fontSize = fontValue + 'px';
//         }
//     }
// }

// const fontGenerator = newFontGenerator(14);

// upBtn.addEventListener("click", () => {
//     fontGenerator.next('up').value;
// })

// downBtn.addEventListener("click", () => {
//     fontGenerator.next('down').value;
// })