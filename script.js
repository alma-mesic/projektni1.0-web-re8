let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.top = '-100px';
    } else {
        header.style.top = '0';
    }

    lastScroll = currentScroll;
});

const overlay = document.querySelector('#scroll-2 .bg-overlay');

