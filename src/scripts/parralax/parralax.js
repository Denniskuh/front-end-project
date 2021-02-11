window.addEventListener('scroll', () => {
    const parallax = document.querySelector('#ta');    
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateX(' + scrollPosition * .6 + 'px)';
});