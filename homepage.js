const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        sections.forEach(section => {
            section.style.display = section.id === targetId ? 'block' : 'none';
        });
    });
});

// Initially show only the home section
document.getElementById('home').style.display = 'block';
sections.forEach(section => {
    if (section.id !== 'home') section.style.display = 'none';
});
