document.getElementById('mobile-menu-button').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Como fazer uma janela em Java Script, espero que isso me sirva em algum outro dia

const windowElement = document.getElementById('link_lavar');

let isDragging = false;
let inicialX;
let inicialY;

windowElement.addEventListener('mousedown', startDragging);
windowElement.addEventListener('mouseup', stopDragging)
windowElement.addEventListener('mousemove' , drag);

function startDragging(e){
    isDragging = true;
    inicialX = e.clientX - windowElement.getBoundingClientRect().left;
    inicialY = e.clientY - windowElement.getBoundingClientRect().right;
}

function stopDragging(e){
    isDragging = false;
}

function drag(e){
    if (isDragging) {
        const newX = e.clientX - initialX;
        const newY = e.clientY - initialY;
        windowElement.style.left = `${newX}px`;
        windowElement.style.top = `${newY}px`;
    }
}
