document.addEventListener('DOMContentLoaded', function() {
    const highlightBtn = document.getElementById('highlight-btn');
    const highlightBox = document.getElementById('highlight-box');
    
    highlightBtn.addEventListener('click', function() {
        if (highlightBox.style.display === 'none' || highlightBox.style.display === '') {
            highlightBox.style.display = 'block';
            highlightBtn.textContent = 'Скрыть достижения';
        } else {
            highlightBox.style.display = 'none';
            highlightBtn.textContent = 'Показать достижения';
        }
    });
    
    // Анимация появления секций
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
    });
    
    setTimeout(() => {
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }, 100);
});