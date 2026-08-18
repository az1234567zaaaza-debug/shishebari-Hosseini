// شماره واتساپ
const WHATSAPP_NUMBER = '989031985104';

// تاریخ فارسی
function getPersianDate() {
    const now = new Date();
    const persianDate = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
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
    
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const service = document.querySelector('select[name="service"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const dimensions = document.querySelector('input[name="dimensions"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const description = document.querySelector('textarea[name="description"]').value;
    
    let text = 'سفارش جدید از سایت\n';
    text += 'تاریخ: ' + getPersianDate() + '\n';
    text += 'نام: ' + name + '\n';
    text += 'تلفن: ' + phone + '\n';
    text += 'خدمات: ' + service + '\n';
    if (quantity) text += 'تعداد: ' + quantity + '\n';
    if (dimensions) text += 'ابعاد: ' + dimensions + '\n';
    text += 'آدرس: ' + address + '\n';
    if (description) text += 'توضیحات: ' + description;
    
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
    window.location.href = url;
});

// فرم تماس
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const messageText = document.querySelector('textarea[name="message"]').value;
    
    let text = 'پیام جدید از سایت\n';
    text += 'نام: ' + name + '\n';
    text += 'تلفن: ' + phone + '\n';
    text += 'پیام: ' + messageText;
    
    const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
    window.location.href = url;
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
