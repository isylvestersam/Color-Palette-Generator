const generateBtn = document.querySelector('.generate-btn')
const palleteContainer = document.querySelector('.pallete-container')
const colorBoxes = document.querySelectorAll('.color-boxes')
const hexValue = document.querySelectorAll('.hex-value');
const copyBtn = document.querySelectorAll('.copy-btn');
const checkMark = document.querySelectorAll('.check-mark');

generateBtn.addEventListener('click', generatePalette);
function generatePalette() {
    const colors = [];
    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor())
    }
    updatePaletteDisplay(colors)
}

palleteContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('copy-btn')){
        const hexValue = e.target.previousElementSibling.textContent;
        

        navigator.clipboard.writeText(hexValue)
        .then(() => {
            showCopySuccess(e.target, e.target.nextElementSibling)
        })
        .catch((err) => {
            console.log(err);
        })
    }
    else if (e.target.classList.contains('color-boxes')){
        const hexValue = e.target.nextElementSibling.querySelector('.hex-value').textContent;
        navigator.clipboard.writeText(hexValue).then(() => {
            showCopySuccess(e.target.nextElementSibling.querySelector('.copy-btn'), e.target.nextElementSibling.querySelector('.check-mark'))
        }).catch((err) => {
            console.log(err);
        })
        
    }
});

function showCopySuccess(elementOne, elementTwo) {
    elementOne.classList.add('hidden');
    elementTwo.classList.remove('hidden');

    setTimeout(() => {
        elementOne.classList.remove('hidden');
        elementTwo.classList.add('hidden');
    }, 1500);
}


function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function updatePaletteDisplay(colors){
    colorBoxes.forEach((box, idx) => {
        const color = colors[idx];
        box.style.backgroundColor = color;
        hexValue[idx].innerHTML = color;
    })
}
generatePalette()