// تاریخ فارسی
function getPersianDate() {
    const now = new Date();
    const persianDate = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }).format(now);
    return persianDate;
}

// نمایش تاریخ فارسی در فیلد ثبت سفارش
const dateField = document.getElementById('persian-date');
if (dateField) {
    dateField.value = getPersianDate();
}

// فرم ثبت سفارش
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ سفارش شما با موفقیت ثبت شد!\nبه زودی کارشناسان ما با شما تماس خواهند گرفت.');
    this.reset();
    if (dateField) {
        dateField.value = getPersianDate();
    }
});

// فرم تماس
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('✅ درخواست شما با موفقیت ثبت شد!\nبه زودی با شما تماس خواهیم گرفت.');
    this.reset();
});

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
    const currentYear = new Date().getFullYear();
    yearElement.textContent = `© ${currentYear} نمایندگی درب‌های اتوماتیک شیشه‌ای حسینی | تمامی حقوق محفوظ است.`;
}