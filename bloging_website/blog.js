function myFunction(x) {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
    if (x == 1) {
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    else if (x == 2) {
        if (document.getElementById("dots1").style.display === "none") {
            document.getElementById("dots1").style.display = "inline";
            document.getElementById("myBtn1").innerHTML = "Read more";
            document.getElementById("more1").style.display = "none";
        } else {
            document.getElementById("dots1").style.display = "none";
            document.getElementById("myBtn1").innerHTML = "Read less";
            document.getElementById("more1").style.display = "inline";
        }
    } else if (x == 3) {
        if (document.getElementById("dots2").style.display === "none") {
            document.getElementById("dots2").style.display = "inline";
            document.getElementById("myBtn2").innerHTML = "Read more";
            document.getElementById("more2").style.display = "none";
        } else {
            document.getElementById("dots2").style.display = "none";
            document.getElementById("myBtn2").innerHTML = "Read less";
            document.getElementById("more2").style.display = "inline";
        }
    } else if (x == 4) {
        if (document.getElementById("dots3").style.display === "none") {
            document.getElementById("dots3").style.display = "inline";
            document.getElementById("myBtn3").innerHTML = "Read more";
            document.getElementById("more3").style.display = "none";
        } else {
            document.getElementById("dots3").style.display = "none";
            document.getElementById("myBtn3").innerHTML = "Read less";
            document.getElementById("more3").style.display = "inline";
        }
    } else if (x == 5) {
        if (document.getElementById("dots4").style.display === "none") {
            document.getElementById("dots4").style.display = "inline";
            document.getElementById("myBtn4").innerHTML = "Read more";
            document.getElementById("more4").style.display = "none";
        } else {
            document.getElementById("dots4").style.display = "none";
            document.getElementById("myBtn4").innerHTML = "Read less";
            document.getElementById("more4").style.display = "inline";
        }
    } else if (x == 6) {
        if (document.getElementById("dots5").style.display === "none") {
            document.getElementById("dots5").style.display = "inline";
            document.getElementById("myBtn5").innerHTML = "Read more";
            document.getElementById("more5").style.display = "none";
        } else {
            document.getElementById("dots5").style.display = "none";
            document.getElementById("myBtn5").innerHTML = "Read less";
            document.getElementById("more5").style.display = "inline";
        }
    }
}

let d;
let d1;
let d2;
let d3;
let d4;
let d5;
function myFunction3(like) {
    if (like == 1) {
        d = parseInt(document.getElementById("sg").innerHTML);
        d = d + 1;
        document.getElementById("sg").innerHTML = d;
        compare(d, "Jay Shetty");
    } else if (like == 2) {
        d1 = parseInt(document.getElementById("sg1").innerHTML);
        d1 = d1 + 1;
        document.getElementById("sg1").innerHTML = d1;
        compare(d1, "Rabindranath Tagore");
    } else if (like == 3) {
        d2 = parseInt(document.getElementById("sg2").innerHTML);
        d2 = d2 + 1;
        document.getElementById("sg2").innerHTML = d2;
        compare(d2, "Munshi Premchand");
    } else if (like == 4) {
        d3 = parseInt(document.getElementById("sg3").innerHTML);
        d3 = d3 + 1;
        document.getElementById("sg3").innerHTML = d3;
        compare(d3, "Chetan Bhagat");
    } else if (like == 5) {
        d4 = parseInt(document.getElementById("sg4").innerHTML);
        d4 = d4 + 1;
        document.getElementById("sg4").innerHTML = d4;
        compare(d4, "Joanne Rowling");
    } else if (like == 6) {
        d5 = parseInt(document.getElementById("sg5").innerHTML);
        d5 = d5 + 1;
        document.getElementById("sg5").innerHTML = d5;
        compare(d5, "Mitchell Albom");
    }
}
function openNav() {
    document.getElementById("myNav").style.width = "50%";
}
let s = 1;
function openNav2() {
    if (s == 1) {
        document.getElementById("my").style.width = "50%";
        document.getElementById("my").style.marginLeft = "25%";
        document.getElementById("my").style.marginTop = "5%";
        document.getElementById("somu").style.height = "625px";
        document.getElementById("somu").style.overflow = "hidden";
        s = 2;

        closeNav();
    } else {
        document.getElementById("in").innerHTML = "Signup";
        document.getElementById("in").style.fontSize = "20px";
        document.getElementById("name1").innerHTML = "";
        document.getElementById("img").src = "12.png";
        document.getElementById("out").innerHTML = "";
        s = 1;
    }
}
function about() {
    document.getElementById("my2").style.width = "50%";
    document.getElementById("my2").style.marginLeft = "25%";
    document.getElementById("my2").style.marginTop = "5%";
    document.getElementById("somu").style.height = "625px";
    document.getElementById("somu").style.overflow = "hidden";
    closeNav();
}
function dono() {
    document.getElementById("my5").style.width = "50%";
    document.getElementById("my5").style.marginLeft = "25%";
    document.getElementById("my5").style.marginTop = "5%";


}
function art() {
    if (s == 3) {
        document.getElementById("my4").style.width = "100%";
    } else if (s == 1 || s == 2) {
        alert("please login first");
        openNav2();
    }

}
function contact() {
    document.getElementById("my3").style.width = "50%";
    document.getElementById("my3").style.marginLeft = "25%";
    document.getElementById("my3").style.marginTop = "5%";
    document.getElementById("somu").style.height = "625px";
    document.getElementById("somu").style.overflow = "hidden";
    closeNav();
}

function log() {
    document.getElementById("my").style.width = "0%";
    document.getElementById("my").style.marginLeft = "0%";
    document.getElementById("my").style.marginTop = "0%";
    document.getElementById("somu").style.overflow = "auto";
    document.getElementById("somu").style.height = "100%";
    document.getElementById("in").innerHTML = "LOG out";
    document.getElementById("img").src = "13.png";
    let b = document.getElementById("name2").value;
    document.getElementById("name1").innerHTML = b;
    document.getElementById("name3").innerHTML = "Writer name:-" + b;
    s = s + 1;
    openNav();
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function closeNav2() {
    document.getElementById("my").style.width = "0%";
    document.getElementById("my").style.marginLeft = "0%";
    document.getElementById("my").style.marginTop = "0%";
    document.getElementById("somu").style.overflow = "auto";
    document.getElementById("somu").style.height = "100%";
}
function closeNav3() {
    document.getElementById("my2").style.width = "0%";
    document.getElementById("my2").style.marginLeft = "0%";
    document.getElementById("my2").style.marginTop = "0%";
    document.getElementById("somu").style.overflow = "auto";
    document.getElementById("somu").style.height = "100%";
}
function closeNav4() {
    document.getElementById("my3").style.width = "0%";
    document.getElementById("my3").style.marginLeft = "0%";
    document.getElementById("my3").style.marginTop = "0%";
    document.getElementById("somu").style.overflow = "auto";
    document.getElementById("somu").style.height = "100%";
}
function closeNav5() {
    document.getElementById("my4").style.width = "0%";
    document.getElementById("my4").style.marginLeft = "0%";
    document.getElementById("my4").style.marginTop = "0%";
    document.getElementById("somu").style.overflow = "auto";
    document.getElementById("somu").style.height = "100%";
}
function closeNav6() {
    document.getElementById("my5").style.width = "0%";
    document.getElementById("my5").style.marginLeft = "0%";
    document.getElementById("my5").style.marginTop = "0%";
    document.getElementById("somu").style.overflow = "auto";
    document.getElementById("somu").style.height = "100%";
}
var counter = 1;
function nxt() {
    if (counter == 1) {
        document.getElementById("gr1").style.display = "none";
        document.getElementById("gr2").style.display = "none";
        document.getElementById("gr3").style.display = "flex";
        document.getElementById("gr4").style.display = "flex";
        document.getElementById("gr5").style.display = "none";
        document.getElementById("gr6").style.display = "none";
        counter = 2;
    }
    else if (counter == 2) {
        document.getElementById("gr1").style.display = "none";
        document.getElementById("gr2").style.display = "none";
        document.getElementById("gr3").style.display = "none";
        document.getElementById("gr4").style.display = "none";
        document.getElementById("gr5").style.display = "flex";
        document.getElementById("gr6").style.display = "flex";
        counter = 3;
    }
    else if (counter == 3) {
        document.getElementById("gr1").style.display = "flex";
        document.getElementById("gr2").style.display = "flex";
        document.getElementById("gr3").style.display = "none";
        document.getElementById("gr4").style.display = "none";
        document.getElementById("gr5").style.display = "none";
        document.getElementById("gr6").style.display = "none";
        counter = 1;
    }
}

var t1 = 4;
var t2 = 3;
var t3 = 2;
var x;
var x1;
var x2;
var x4;
function compare(a, b) {
    if (a > t1) {
        t1 = a;
        if (document.getElementById("tred1").innerHTML != b) {
            x = document.getElementById("tred1").innerHTML;
            x2 = document.getElementById("tred2").innerHTML;
            x3 = document.getElementById("tred3").innerHTML;
            document.getElementById("tred1").innerHTML = b;
            document.getElementById("tred2").innerHTML = x;
        } else {
        }
    } else if (a > t2) {
        t2 = a;
        if (document.getElementById("tred2").innerHTML != b) {
            x4 = document.getElementById("tred2").innerHTML;
            document.getElementById("tred2").innerHTML = b;
            document.getElementById("tred3").innerHTML = x4;
        } else {
        }
    } else if (a > t3) {
        t3 = a;
        document.getElementById("tred3").innerHTML = b;
    }
}
function post() {
    alert("Your blog has been posted");
    document.getElementById("ta").innerHTML = "";
    closeNav5();


}