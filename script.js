// اسکرول نرم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// سال فوتر
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    yearElement.textContent = '© ۱۴۰۳ نمایندگی درب‌های اتوماتیک شیشه‌ای حسینی | تمامی حقوق محفوظ است.';
}
