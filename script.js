document.addEventListener('DOMContentLoaded', function () {
    const boxContainer = document.querySelector('#box-container');
    const newBoxButton = document.querySelector('#new-box-button');
    const colorForm = document.querySelector('#color-form');
    const colorInput = document.querySelector('#color-input');

    let boxColor = null;
    let boxIdCounter = 0;

    function createNewBox() {
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = boxColor;
        newBox.style.color = 'black';
        newBox.innerText = `Box: ${boxIdCounter}`;
        newBox.dataset.id = boxIdCounter;
        boxIdCounter++;
        newBox.classList.add("box");
        boxContainer.append(newBox);
    }

    colorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        boxColor = colorInput.value;
        colorInput.value = '';
        const boxes = Array.from(document.querySelectorAll('.box'));
        boxes.forEach(element => element.style.backgroundColor = boxColor);
    });

    newBoxButton.addEventListener('click', function () {
        createNewBox();
    });

    document.addEventListener('keypress', function (e) {
        if (e.target.id === 'color-input') {
            return;
        }
        if (e.key === 'N') {
            createNewBox();
        }
    })

    boxContainer.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.innerText = `(x: ${e.pageX}, y: ${e.pageY})`;
        }
    });

    boxContainer.addEventListener('mouseout', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.innerText = `Box: ${e.target.getAttribute('data-id')}`;
        }
    });

    boxContainer.addEventListener('dblclick', function (e) {
        if (e.target.classList.contains('box')) {
            e.target.remove();
        }
    });
})