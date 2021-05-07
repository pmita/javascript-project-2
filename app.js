//Global selection
const generateColorBtn = document.querySelector('.btn');
const backgroundContainer = document.querySelector('.background-container');
const colorText = document.querySelector('.color-text');

const allHexCharacter = [0, 1 ,2 ,3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//Event Listneres
generateColorBtn.addEventListener('click', function(){
    let generatedHex = '#';
    for( let i=0; i< 6; i++){
        generatedHex += allHexCharacter[randomIndex()];
    }
    backgroundContainer.style.backgroundColor = generatedHex;
    colorText.textContent = generatedHex;
});

function randomIndex() {
    return Math.floor((Math.random() * allHexCharacter.length));
}
