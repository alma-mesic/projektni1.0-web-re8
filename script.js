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

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const scroll2 = document.getElementById('scroll-2');

    if (scrollPos > 800) { // primjer vrijednosti kad ulaziš u downloads
        scroll2.style.backgroundImage = "url('castle.jpg')";
    } 
});