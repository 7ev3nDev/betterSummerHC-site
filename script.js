const main = document.querySelector('main');

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        main.classList.add('active');
    }
});
document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        main.classList.add('active');
    }
});

