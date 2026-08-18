// اطلاعات ربات تلگرام
const TELEGRAM_TOKEN = '8659280571:AAEsouKD6xpf24qjENEYNH5czFupBf3PSWs';
const TELEGRAM_CHAT_ID = '7618308200';

// تابع ارسال پیام به تلگرام
function sendToTelegram(message) {
    const url = 'https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage';
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('✅ سفارش شما با موفقیت ثبت شد!\nبه زودی با شما تماس خواهیم گرفت.');
        } else {
            alert('❌ خطا در ثبت سفارش!\nلطفاً با شماره ۰۹۱۵-۸۱۴-۰۰۳۶ تماس بگیرید.');
        }
    })
    .catch(error => {
        alert('❌ خطا در اتصال!\nلطفاً با شماره ۰۹۱۵-۸۱۴-۰۰۳۶ تماس بگیرید.');
    });
}

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
    
    const formData = new FormData(this);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const service = formData.get('service') || '';
    const quantity = formData.get('quantity') || '';
    const dimensions = formData.get('dimensions') || '';
    const address = formData.get('address') || '';
    const description = formData.get('description') || '';
    const orderDate = dateField ? dateField.value : '';
    
    let message = '🆕 <b>سفارش جدید از سایت</b>\n';
    message += '━━━━━━━━━━━━━━━━\n';
    message += '📅 <b>تاریخ:</b> ' + orderDate + '\n';
    message += '👤 <b>نام:</b> ' + name + '\n';
    message += '📞 <b>تلفن:</b> ' + phone + '\n';
    message += '🔧 <b>خدمات:</b> ' + service + '\n';
    if (quantity) message += '🔢 <b>تعداد:</b> ' + quantity + '\n';
    if (dimensions) message += '📏 <b>ابعاد:</b> ' + dimensions + '\n';
    message += '📍 <b>آدرس:</b> ' + address + '\n';
    if (description) message += '📝 <b>توضیحات:</b> ' + description + '\n';
    message += '━━━━━━━━━━━━━━━━';
    
    sendToTelegram(message);
    this.reset();
    if (dateField) {
        dateField.value = getPersianDate();
    }
});

// فرم تماس
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name') || '';
    const phone = formData.get('phone') || '';
    const messageText = formData.get('message') || '';
    
    let message = '📩 <b>پیام جدید از سایت</b>\n';
    message += '━━━━━━━━━━━━━━━━\n';
    message += '👤 <b>نام:</b> ' + name + '\n';
    message += '📞 <b>تلفن:</b> ' + phone + '\n';
    if (messageText) message += '📝 <b>پیام:</b> ' + messageText + '\n';
    message += '━━━━━━━━━━━━━━━━';
    
    sendToTelegram(message);
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
