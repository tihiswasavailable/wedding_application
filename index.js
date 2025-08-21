// index.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Wedding Application Loaded!');

    const translations = {
        en: {
            couple_names: "Vanja & Stefan",
            wedding_date: "13.09.2025",
            seating_plan: "Seating Plan  🪑",
            share_pic: "Share Your Pic  📸"
        },
        sr: {
            couple_names: "Vanja & Stefan",
            wedding_date: "13.09.2025",
            seating_plan: "Raspored  🪑",
            share_pic: "Podeli Tvoju Sliku  📸"
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const seatingPlanBtn = document.getElementById('seating-plan-btn');
    const sharePicBtn = document.getElementById('share-pic-btn');

    function setLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        if (translations[lang] && translations[lang]['wedding_date']) {
            document.querySelector('p.date').innerHTML = translations[lang]['wedding_date'];
        }

        langButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            }
        });
        localStorage.setItem('lang', lang);
    }

    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.getAttribute('data-lang'));
        });
    });

    // Button Redirection Logic
    seatingPlanBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        // Replace YOUR_GOOGLE_DRIVE_PDF_SHARE_LINK_HERE with your actual Google Drive shareable link for the PDF
        window.open('https://drive.google.com/file/d/1_b80BPl6hFFyn7Qmq2UhwjbR8aKl80VD/view?usp=sharing', '_blank'); 
    });

    sharePicBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        // Replace YOUR_GOOGLE_FORM_UPLOAD_LINK_HERE with the public link to your Google Form for file uploads
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSekLueIVQXSryNkCWQ-JZjLoWan2f3J0X87oPcSTlx59_NSTA/viewform?usp=dialog', '_blank');
    });
});
