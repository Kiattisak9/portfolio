let currentLang = localStorage.getItem("lang") || "en";

function setLang(lang){

    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-en]").forEach(el=>{
        el.innerText = el.dataset[lang];
    });

    const flag = document.getElementById("flag");
    if(flag){
        flag.src = lang === "th"
            ? "icon/en.png"
            : "icon/th.png";
    }
}

function toggleLang(){
    setLang(currentLang === "en" ? "th" : "en");
}

window.onload = ()=> setLang(currentLang);
