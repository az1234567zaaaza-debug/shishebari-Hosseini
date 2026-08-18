// شماره واتساپ برای دریافت سفارش
const WHATSAPP_NUMBER = '989031985104';

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

// نمایش تاریخ فارسی
const dateField = document.getElementById('persian-date');
if (dateField) {
    dateField.value = getPersianDate();
}

// فرم ثبت سفارش
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="name"]').value || '';
    const phone = this.querySelector('input[name="phone"]').value || '';
    const service = this.querySelector('select[name="service"]').value || '';
    const quantity = this.querySelector('input[name="quantity"]').value || '';
    const dimensions = this.querySelector('input[name="dimensions"]').value || '';
    const address = this.querySelector('input[name="address"]').value || '';
    const description = this.querySelector('textarea[name="description"]').value || '';
    const orderDate = dateField ? dateField.value : '';
    
    let message = '🆕 سفارش جدید از سایت\n';
    message += '━━━━━━━━━━━━━━━━\n';
    message += '📅 تاریخ: ' + orderDate + '\n';
    message += '👤 نام: ' + name + '\n';
    message += '📞 تلفن: ' + phone + '\n';
    message += '🔧 خدمات: ' + service + '\n';
    if (quantity) message += '🔢 تعداد: ' + quantity + '\n';
    if (dimensions) message += '📏 ابعاد: ' + dimensions + '\n';
    message += '📍 آدرس: ' + address + '\n';
    if (description) message += '📝 توضیحات: ' + description + '\n';
    message += '━━━━━━━━━━━━━━━━';
    
    const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
    
    this.reset();
    if (dateField) {
        dateField.value = getPersianDate();
    }
});

// فرم تماس
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="name"]').value || '';
    const phone = this.querySelector('input[name="phone"]').value || '';
    const messageText = this.querySelector('textarea[name="message"]').value || '';
    
    let message = '📩 پیام جدید از سایت\n';
    message += '━━━━━━━━━━━━━━━━\n';
    message += '👤 نام: ' + name + '\n';
    message += '📞 تلفن: ' + phone + '\n';
    if (messageText) message += '📝 پیام: ' + messageText + '\n';
    message += '━━━━━━━━━━━━━━━━';
    
    const whatsappUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
    
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
    yearElement.textContent = '© ۱۴۰۳ نمایندگی درب‌های اتوماتیک شیشه‌ای حسینی | تمامی حقوق محفوظ است.';
}
