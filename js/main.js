let circle = document.getElementById("cursor-circle");
let cx = 0;
let cy = 0;
let tx = 0;
let ty = 0;
let cw = 100;
let ch = 100;
let tw = 100;
let th = 100;
let rz = 0;
let trz = 0;
let sx = 0;
let tsx = 0;
let mouse = true;
let mx = 0;
let my = 0;
let tmx = 0;
let tmy = 0;
let pages = document.getElementsByClassName("box");
let dcircles = document.getElementsByClassName("deco-circle");
let mcx = 0;
let mcy = 0;
const pageHeightMultiplier = 1.25;

function detectMob() {
    return window.innerWidth <= 800;
  }

//const isMobile = navigator.userAgentData.mobile;
let isMobile = detectMob();
circle.style.opacity = isMobile ? 0 : 1;
let myphoto = document.getElementById("my-photo");
let baxkgroundTexts = document.getElementsByClassName("welcome-background");
let mytexts = document.getElementsByClassName("main-text");
let aboutPhoto = document.getElementById("about-photo");
let splasharts = document.getElementsByClassName("splashart");
let backgrondLogo = document.getElementById("background-logo");

const langs = {
    "pl": {
        "welcome-background": "gry grafika apki strony internetowe",
        "about-me": "O <span style=\"color: #dc0000\">mnie</span>",
        // "about-content": "Jestem młodym programistą, który lubi robić gry",
        "about-content": "Jestem młodym programistą z 7 letnim doświadczeniem w Unity Engine",
        "qg-desc": "Moja apka do nauki",
        "download-app": "<div class=\"button-circle\"></div>Pobierz aplikację →",
        "in-development": "W trakcie tworzenia",
        "ds-desc": "RPG gra kliker",
        "go-to-repo": "<div class=\"button-circle\"></div>Repozytorium →",
        "play-the-game": "<div class=\"button-circle\"></div>Zagraj w grę →",
        "cc-desc": "1v1 wieloosobowy dungeon crawler",
        "sm-desc": "Gra, w której musisz wykopać jak najwięcej rud w wyznaczonym czasie",
        "tg-desc": "Dungeon crawler, w którym wchodzisz do lochu, który zależy od danej częsci tygodnia",
        "sc-desc": "Gra, w której twoja armia szkieletów musi obronić twoją kryptę",
        "footer-header": "Kontakt",
        "ks-desc": "Gra edukacyjna na konkurs InfoSukces 2022-2023"
    },
    "en": {
        "welcome-background": "games graphic design apps websites",
        "about-me": "About <span style=\"color: #dc0000;\">me</span>",
        // "about-content": "I\'m young programmer, who likes making games",
        "about-content": "I\'m a young programmer with 7 year of experience in Unity Engine",
        "qg-desc": "My learning app",
        "download-app": "<div class=\"button-circle\"></div>Download app →",
        "in-development": "In development",
        "ds-desc": "RPG clicker game",
        "go-to-repo": "<div class=\"button-circle\"></div>Repository →",
        "play-the-game": "<div class=\"button-circle\"></div>Play the game →",
        "cc-desc": "1v1 multiplayer dungeon crawler",
        "sm-desc": "A game in which you have to mine as many ores as possible within a given time",
        "tg-desc": "Dungeon crawler in which you enter a dungeon that depends on the part of the week",
        "sc-desc": "Game where your skeleton army must protect your crypt",
        "footer-header": "Contact",
        "ks-desc" : "Educational game for the InfoSukces 2022-2023 competition"
    }
};

// for (let i = 0; i < pages.length; i++) {
//     if (i > 0)
//         pages[i].style.
    
// }


if (localStorage.getItem("lang") == null)
    localStorage.setItem("lang", "pl");

setLanguage(localStorage.getItem("lang"));

refreshPages();

addEventListener("scroll", ()=>{
    refreshPages();
});

function refreshPages(){
    isMobile = detectMob();

    for (let i = 0; i < pages.length; i++) {
        let pos = (window.innerHeight * pageHeightMultiplier) * i - window.pageYOffset;
        if (pos < 0)
            pos = 0;

        pages[i].style.top = pos + "px";
        pages[i].style.zIndex = i + 1;
    }

    // for (let i = 0; i < dcircles.length; i++) {
    //     let w = dcircles[i].getBoundingClientRect();
    //     let mx = i % 2 == 0 ? -1 : 1;
    //     let m = -window.pageYOffset / w.width * 200;
    //     dcircles[i].style.transform = "translate(" + m * mx + "px, " + m + "px)";
        
    // }

    myphoto.style.right = -window.pageYOffset / 30 + "px";

    for (let i = 0; i < baxkgroundTexts.length; i++) {
        baxkgroundTexts[i].style.left = (-window.pageYOffset / 10) + "px";
    }

    for (let i = 0; i < mytexts.length; i++) {
        mytexts[i].style.left = (-window.pageYOffset / 30 + (isMobile ? 32 : 64)) + "px";
    }

    aboutPhoto.style.right = ((window.pageYOffset - window.innerHeight) / 15 + 128) + "px";
    
    // let ym = window.pageYOffset - window.innerHeight * 4;
    // if (ym < 0)
    //     ym = 0;
    // console.log(ym);
    for (let i = 0; i < splasharts.length; i++) {
        //let pos = (window.innerHeight * pageHeightMultiplier) * i - window.pageYOffset;
        let m = (window.innerHeight * pageHeightMultiplier) * (i + 2) - window.pageYOffset + window.innerHeight * (pageHeightMultiplier - 1);
        //let m = (window.pageYOffset - window.innerHeight * (i + 2) * pageHeightMultiplier);

        if (i == 2)
            console.log(m + splasharts[i].src);
        // let m = 0;
        if (m > 0)
            m = 0;
        m *= 0.1;
        splasharts[i].style.top = m + "px";
    }
}

if (!isMobile){
    window.addEventListener("mousemove", (e) =>{
        let x = e.clientX - 50;
        let y = e.clientY - 50;
        
        if (mouse){
            tx = x;
            ty = y;
            tw = 100;
            th = 100;
            
        }

        tmx = x;
        tmy = y;

        //console.log(window.pageYOffset);
        
        mcx = e.clientX - window.innerWidth / 2;
        mcy = e.clientY - window.innerHeight / 2;
    });
}

if (!isMobile){
    setInterval(() => {
        cx = lerp(cx, tx, 0.1)
        cy = lerp(cy, ty, 0.1);


        mx = lerp(mx, tmx, 0.1)
        my = lerp(my, tmy, 0.1);


        if (mouse){
            // dx = tx - cx;
            // dy = ty - cy;
            dx = mx - tmx;
            dy = my - tmy;
            trz = Math.atan2(dy, dx) * 57.29578;
            tsx = Math.sqrt(dx*dx + dy*dy) / 300 + 1;
        }
        else{
            trz = 0;
            tsx = 1;
        }

        if (Math.max(trz, rz) - Math.min(trz, rz) > 170)
        {
            // console.log(rz + " " + trz);
            if (rz > 0)
                rz -= 360;
            else if (rz < 0)
                rz += 360;
        }
            
        rz = lerp(rz, trz, 0.2)
        sx = lerp(sx, tsx, 0.1);
        circle.style.left = cx + "px";
        circle.style.top = cy + "px";
        circle.style.transform = "rotateZ(" + rz + "deg) scaleX(" + sx + ")";
        // console.log(rz);
        cw = lerp(cw, tw, 0.1)
        ch = lerp(ch, th, 0.1);
        circle.style.width = cw + "px";
        circle.style.height = ch + "px";
        // console.log(sx);

        lmx = mx;
        lmy = my;


        let moveMulti = -0.005;
        let cmx = mcx / window.innerWidth * 2 * moveMulti;
        let cmy = mcy / window.innerHeight * 2 * moveMulti;
        for (let i = 0; i < dcircles.length; i++) {
            let w = dcircles[i].getBoundingClientRect();
            let mx = i % 2 == 0 ? -1 : 1;
            let m = -window.pageYOffset / w.width * 200;
            dcircles[i].style.transform = "translate(" + (m * mx + cmx * w.width) + "px, " + (m + cmy * w.width) + "px)";
        }
        backgrondLogo.style.transform = "translate(" + (cmx * 100 - 50) + "%, " + (cmy * 100 - 50) + "%)";
    }, 8);
}
const lerp = (x, y, a) => x * (1 - a) + y * a;

var buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", (e) =>{
        var rect = e.target.getBoundingClientRect();
        tx = rect.left;
        ty = rect.top;
        tw = rect.width + 1;
        th = rect.height + 1;
        trz = 0;
        tsx = 1;
        mouse = false;
    });
    buttons[i].addEventListener("mouseleave", (e) =>{
        mouse = true;
        // let x = e.clientX - 75;
        // let y = e.clientY - 75;
        // var rect = e.target.getBoundingClientRect();
        // cx = rect.left;// + rect.width / 2;
        // cy = rect.top;// + rect.height / 2;
        // tsx = 1;
        // trz = 0;
        // cx = x;
        // cy = y;

    });
}

function setLanguage(lang) {
    window.lang = lang;
    location.hash = lang;
    // location.reload();
    document.documentElement.lang = lang;

    document.getElementById("pl-button").style.textDecoration = lang == "pl" ? "underline" : "none";
    document.getElementById("en-button").style.textDecoration = lang == "en" ? "underline" : "none";

    let keys = Object.keys(langs[lang]);
    keys.forEach(k => {
        let elm = document.getElementsByClassName(k);
        for (let i = 0; i < elm.length; i++) {
            elm[i].innerHTML = langs[lang][k];
        }
    });
    localStorage.setItem("lang", lang);
}