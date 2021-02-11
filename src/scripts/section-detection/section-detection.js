const sections = document.querySelectorAll('section');
        
const contentSection = document.querySelector('.c');
const options = {threshold: .7};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
    const className = entry.target.className;
    console.log(className);                
    });
}
sections.forEach(section => {
    observer.observe(section);
});