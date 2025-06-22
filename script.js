const body = document.querySelector('body');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        body.classList.add('active');
    }
});
document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        body.classList.add('active');
    }
});

document.addEventListener('touchmove', () => {
    body.classList.add('active');
});
