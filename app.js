let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpans = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade'); // Тук поправяме и грешката с "ad" към "add"
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300);

    });
});
