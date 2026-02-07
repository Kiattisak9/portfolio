const LANG = {
    en: {
        name: "Kiattisak Chaosri",
        title: "IT Application & Infrastructure Support",
        badge: "System Builder • Internal Developer • IT Operations",
        about_menu: "About",
        skills_menu: "Skills",
        projects_menu: "Projects",
        experience_menu: "Experience",
        contact_menu: "Contact",
        about_title: "About Me",
        about_desc: "IT professional with 3+ years of experience in internal web application development and enterprise IT infrastructure support. Specialized in PHP/MySQL workflow systems and automation."
    },

    th: {
        name: "เกียรติศักดิ์ ชาวศรี",
        title: "เจ้าหน้าที่ไอที และพัฒนาระบบภายในองค์กร",
        badge: "พัฒนาระบบ • ดูแลโครงสร้าง IT • ปรับปรุงงานดิจิทัล",
        about_menu: "เกี่ยวกับฉัน",
        skills_menu: "ทักษะ",
        projects_menu: "โปรเจค",
        experience_menu: "ประสปการณ์",
        contact_menu: "ติดต่อ",
        about_title: "เกี่ยวกับฉัน",
        about_desc: "ผู้เชี่ยวชาญด้าน IT มีประสบการณ์มากกว่า 3 ปี ในการพัฒนาระบบ Web Application ภายในองค์กร และดูแลโครงสร้างพื้นฐาน IT เชี่ยวชาญระบบ PHP/MySQL และระบบ workflow อัตโนมัติ"
    }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang){

    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;

        if(LANG[lang][key]){
            el.innerText = LANG[lang][key];
        }
    });

    // update flag
    document.getElementById("flag").src =
        lang === "th"
        ? "icon/en.png"
        : "icon/th.png";
}

function toggleLang(){
    setLang(currentLang === "en" ? "th" : "en");
}

window.onload = () => {
    setLang(currentLang);
};

