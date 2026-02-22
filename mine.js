
// Simple fade-in effect for each story section
window.addEventListener('scroll', () => {
    document.querySelectorAll('.story').forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial CSS for JS effect
document.querySelectorAll('.story').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 1s ease';
});
