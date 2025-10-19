let circle = document.getElementById("cursor-circle");
let cx = window.innerWidth / 2;
let cy = window.innerHeight / 2;
let tx = window.innerWidth / 2;
let ty = window.innerHeight / 2;
let cw = 0;
let ch = 0;
let tw = 0;
let th = 0;
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
let page = 0;
let nts = 0;
let nsf = 0;
let lpoy = 0;
let lpmy = 0;
let nv = false;

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
let navTexts = document.getElementsByClassName("nav-text");
let navPoints = document.getElementsByClassName("nav-point");
let navAs = document.getElementsByClassName("nav-a");
let nav = document.getElementsByTagName("nav")[0];

const langs = {
    "pl": {
        "welcome-background": "gry grafika apki strony internetowe",
        "about-me": "O <span style=\"color: #dc0000\">mnie</span>",
        // "about-content": "Jestem młodym programistą, który lubi robić gry",
        "about-content": "Jestem młodym programistą z 7 letnim doświadczeniem w Unity Engine",
        "qg-desc": "Moja apka do nauki",
        "download-app": "<div class=\"button-circle\"></div>Pobierz aplikację →",
        "in-development": "<div class=\"button-circle\"></div>W trakcie tworzenia",
        "ds-desc": "RPG gra kliker",
        "go-to-repo": "<div class=\"button-circle\"></div>Repozytorium →",
        "play-the-game": "<div class=\"button-circle\"></div>Zagraj w grę →",
        "cc-desc": "1v1 dungeon crawler",
        "sm-desc": "Gra o kopaniu kryształów w proceduralnie generowanych jaskiniach",
        "tg-desc": "Prosty dungeon crawler",
        "sc-desc": "Gra o obronie krypty",
        "footer-header": "Kontakt",
        "ks-desc": "Gra edukacyjna na konkurs InfoSukces 2022-2023",
        "about": "O mnie",
        "home": "Strona główna"
    },
    "en": {
        "welcome-background": "games graphic design apps websites",
        "about-me": "About <span style=\"color: #dc0000;\">me</span>",
        // "about-content": "I\'m young programmer, who likes making games",
        "about-content": "I\'m a young programmer with 7 year of experience in Unity Engine",
        "qg-desc": "My learning app",
        "download-app": "<div class=\"button-circle\"></div>Download app →",
        "in-development": "<div class=\"button-circle\"></div>In development",
        "ds-desc": "RPG clicker game",
        "go-to-repo": "<div class=\"button-circle\"></div>Repository →",
        "play-the-game": "<div class=\"button-circle\"></div>Play the game →",
        "cc-desc": "1v1 dungeon crawler",
        "sm-desc": "Game about mining crystals in procedurally generated caves",
        "tg-desc": "Simple dungeon crawler",
        "sc-desc": "Game about defending crypt",
        "footer-header": "Contact",
        "ks-desc" : "Educational game for the InfoSukces 2022-2023 competition",
        "about": "About",
        "home": "Main page"
    }
};

// for (let i = 0; i < pages.length; i++) {
//     if (i > 0)
//         pages[i].style.
    
// }

dcircles[0].style.opacity = isMobile ? "0" : "1";

if (localStorage.getItem("lang") == null)
    localStorage.setItem("lang", "pl");

setLanguage(localStorage.getItem("lang"));

refreshPages();

addEventListener("scroll", ()=>{
    refreshPages();
});

function refreshPages(){

    isMobile = detectMob();

    if (isMobile){
        page = Math.floor(window.pageYOffset / (window.innerHeight * pageHeightMultiplier));

        let pageMove = lpoy - window.pageYOffset;

        if (pageMove > 0)
            lpmy = 1;
        else if (pageMove < 0)
            lpmy = -1;

        let nr = nav.getBoundingClientRect();
        nav.style.marginTop = lpmy == 1 ? "20px" : (-100 - nr.height) +"px";

        for (let i = 0; i < navTexts.length; i++) {
            if (i == 0)
                navTexts[i].children[0].children[0].style.fill = page == i ? "#dc0000" : "white";
            navTexts[i].style.color = page == i ? "#dc0000" : "white";
        }

        lpoy = window.pageYOffset;


    }

    for (let i = 0; i < pages.length; i++) {
        let pos = (window.innerHeight * pageHeightMultiplier) * i - window.pageYOffset;
        if (pos < 0 && pos > -window.innerHeight * pageHeightMultiplier)
            pos = 0;

        pages[i].style.top = pos + "px";
        pages[i].style.zIndex = i + 1;
    }


    if (isMobile && page < 2){
        for (let i = 0; i < dcircles.length; i++) {
            let w = dcircles[i].getBoundingClientRect();
            let mx = i % 2 == 0 ? -1 : 1;
            let m = -window.pageYOffset / w.width * 200;
            dcircles[i].style.transform = "translate(" + m * mx + "px, " + m + "px)";    
        }
    }

    if (page < 1){
        myphoto.style.right = -window.pageYOffset / 30 + "px";

        for (let i = 0; i < baxkgroundTexts.length; i++) {
            baxkgroundTexts[i].style.left = (-window.pageYOffset / 10) + "px";
        }

        for (let i = 0; i < mytexts.length; i++) {
            mytexts[i].style.left = (-window.pageYOffset / 30 + (isMobile ? 32 : 64)) + "px";
        }
    }
    if (page < 2)
        aboutPhoto.style.right = ((window.pageYOffset - window.innerHeight) / 15 + 128) + "px";
    
    // let ym = window.pageYOffset - window.innerHeight * 4;
    // if (ym < 0)
    //     ym = 0;
    // console.log(ym);
    for (let i = 0; i < splasharts.length; i++) {
        //let pos = (window.innerHeight * pageHeightMultiplier) * i - window.pageYOffset;
        let m = (window.innerHeight * pageHeightMultiplier) * (i + 2) - window.pageYOffset + window.innerHeight * (pageHeightMultiplier - 1);
        //let m = (window.pageYOffset - window.innerHeight * (i + 2) * pageHeightMultiplier);

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

    setInterval(() => {
        page = Math.floor(window.pageYOffset / (window.innerHeight * pageHeightMultiplier) + 0.01);

        cx = lerp(cx, tx, 0.1);
        cy = lerp(cy, ty, 0.1);


        mx = lerp(mx, tmx, 0.1);
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
        if (page < 2){
            for (let i = 0; i < dcircles.length; i++) {
                let w = dcircles[i].getBoundingClientRect();
                let mx = i % 2 == 0 ? -1 : 1;
                let m = -window.pageYOffset / w.width * 200;
                dcircles[i].style.transform = "translate(" + (m * mx + cmx * w.width) + "px, " + (m + cmy * w.width) + "px)";
            }
        }
        if (page >= 8)
            backgrondLogo.style.transform = "translate(" + (cmx * 100 - 50) + "%, " + (cmy * 100 - 50) + "%)";

        /*
        // nts = lerp(nts, (mx < 300 ? 16 : 0), 0.2);
        // nts = mx < 300 ? 16 : 0;
        nts = mx < 300 ? 1 : 0;
        // nts = 1;
        nsf = lerp(nsf, (mx < 300 ? 1 : 0), 0.1);
        // nsf = 1;
        for (let i = 0; i < navTexts.length; i++) {
            navTexts[i].style.fontSize = nts + "em";
            navTexts[i].style.color = page == i ? "#dc0000" : "white";
            navPoints[i].style.backgroundColor = page == i ? "#dc0000" : "white";
            let rect = navAs[i].getBoundingClientRect();
            let d = rect.top - my;
            d /= 100;
            if (d > 3.14 || d < -3.14)
                d = 3.14;
            // console.log();
            // navAs[i].style.marginLeft = (Math.sin(i / (navTexts.length - 1) * 3.14) * 30) + "px";
            navAs[i].style.marginLeft = ((Math.cos(d) + 1) / 2 * 30) * nsf + -5 + "px";
        }*/

        let pageMove = lpoy - window.pageYOffset;

        if (pageMove > 0)
            lpmy = 1;
        else if (pageMove < 0)
            lpmy = -1;

        // nts = lpmy == 1 ? 1 : 0;

        if (!nv && my <= 200 && mx >= 200 && mx <= window.innerWidth - 200)
            nv = true;

        
        if (nv && my > 200)
            nv = false;
        
        console.log(nv);
        let nr = nav.getBoundingClientRect();
        nav.style.marginTop = lpmy == 1 || nv /*|| my < 200*/ ? "20px" : (-100 - nr.height) +"px";

        for (let i = 0; i < navTexts.length; i++) {
            // navTexts[i].style.fontSize = nts + "em";
            if (i == 0)
                navTexts[i].children[0].children[0].style.fill = page == i ? "#dc0000" : "white";
            navTexts[i].style.color = page == i ? "#dc0000" : "white";
            // navTexts[i].parentElement.style.borderColor = page == i ? "#dc0000" : "#00000000";
            // navTexts[i].style.textDecoration = page == i ? "underline" : "none";
            // navPoints[i].style.backgroundColor = page == i ? "#dc0000" : "white";
            let rect = navAs[i].getBoundingClientRect();
            let d = rect.left + rect.width / 2 - mx;
            d /= 100;
            if (d > 3.14 || d < -3.14)
                d = 3.14;
            // // console.log();
            // // navAs[i].style.marginLeft = (Math.sin(i / (navTexts.length - 1) * 3.14) * 30) + "px";
            // navTexts[i].style.transform = "scale(" ((Math.cos(d) + 1) / 2 * 30) * nsf + -5 + ")";
            // console.log(((Math.cos(d) + 1) / 2));
            // navTexts[i].style.transform = "scale(" + ((Math.cos(d) + 1) / 2 * 0.1 + 1) + ")";
        }

        lpoy = window.pageYOffset;
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