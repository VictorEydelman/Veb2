document.addEventListener("DOMContentLoaded",function (){
    document.getElementById("php").reset()
    document.getElementById("imgt").style.height=document.getElementById("con").style.height
    if (typeof subtrue === 'undefined') {
        subtrue=false;
        document.getElementById("submit").disabled=true
        document.getElementById("imgt").style.height=document.getElementById("con").style.height
    }
    document.getElementById("imgt").innerHTML +=
        "<h4 class='prov' id='rnot' style='color:red' >Не введён R</h4>";
    document.getElementById("rnot").style.visibility="hidden"
})

window.setInterval(function () {
    document.getElementById("imgt").style.height=document.getElementById("con").style.height
    document.getElementById("Y").addEventListener('input', Ycheck)
    document.getElementById("x1").addEventListener('click', Xcheck1)
    document.getElementById("x2").addEventListener('click', Xcheck2)
    document.getElementById("x3").addEventListener('click', Xcheck3)
    document.getElementById("x4").addEventListener('click', Xcheck4)
    document.getElementById("x5").addEventListener('click', Xcheck5)
    document.getElementById("x6").addEventListener('click', Xcheck6)
    document.getElementById("x7").addEventListener('click', Xcheck7)
    document.getElementById("x8").addEventListener('click', Xcheck8)
    document.getElementById("x9").addEventListener('click', Xcheck9)
    document.getElementById("R").addEventListener('input', Rcheck)
    if(document.getElementById("Yprov1")!= null || document.getElementById("Yprov2")!= null
        || document.getElementById("Yprov3")!= null /*|| document.getElementById("Xprov")!= null*/
        || document.getElementById("Rprov1")!= null || document.getElementById("Rprov2")!= null
        || document.getElementById("Rprov3")!= null || typeof yprov === 'undefined'
        || typeof xprov === 'undefined' || typeof rprov === 'undefined' || document.getElementById("Y").value==="-"
        || document.getElementById("R").value==="-"){
        document.getElementById("submit").disabled=true
    } else {
        document.getElementById("submit").disabled=false
    }

    document.getElementById("svg").onclick=function (e){
        let svg=document.getElementById("svg").getBoundingClientRect();
        let x=(e.clientX-svg.x)
        let y = (e.clientY - svg.y)
        let r=document.getElementById("R").value
        if(r!==""){
            x=(x-140)/80*r
            y=(140-y)/80*r
            x=x.toFixed(16)
            y=y.toFixed(16)
            let time = Intl.DateTimeFormat().resolvedOptions().timeZone;
            ajax(x,y,r,time);
        } else {
            document.getElementById("rnot").style.visibility="visible"
        }
    }
})

function on() {
    let xm = document.getElementById(x).value;
    let y = document.getElementById("Y").value;
    let r = document.getElementById("R").value;
    let time = Intl.DateTimeFormat().resolvedOptions().timeZone;
    ajax(xm,y,r,time);
}
function ajax(x,y,r,time){
    $.ajax({
        type:'POST',
        url: 'controller',
        async: false,
        data: {time: time, x: x, y: y, r: r},
        success: function (msg){
            window.location.href="/Veb21/index.jsp"
        },
        error: function (e){
            alert("Ошибка ajax")
        }
    })
}

function Xcheck1(){
    Xcheck();
    x="x1";
    document.getElementById("x1").style.background="red"
}
function Xcheck2(){
    Xcheck();
    x="x2"
    document.getElementById("x2").style.background="red"
}
function Xcheck3(){
    Xcheck();
    x="x3"
    document.getElementById("x3").style.background="red"
}
function Xcheck4(){
    Xcheck();
    x="x4"
    document.getElementById("x4").style.background="red"
}
function Xcheck5(){
    Xcheck();
    x="x5"
    document.getElementById("x5").style.background="red"
}
function Xcheck6(){
    Xcheck();
    x="x6"
    document.getElementById("x6").style.background="red"
}
function Xcheck7(){
    Xcheck();
    x="x7"
    document.getElementById("x7").style.background="red"
}
function Xcheck8(){
    Xcheck();
    x="x8"
    document.getElementById("x8").style.background="red"
}
function Xcheck9(){
    Xcheck();
    x="x9"
    document.getElementById("x9").style.background="red"
}


function Xcheck() {
    if (typeof xprov === 'undefined') {
        xprov = 0
        x=""
        m=document.getElementById("x2").style.background
    }
    document.getElementById("x1").style.background=m
    document.getElementById("x2").style.background=m
    document.getElementById("x3").style.background=m
    document.getElementById("x4").style.background=m
    document.getElementById("x5").style.background=m
    document.getElementById("x6").style.background=m
    document.getElementById("x7").style.background=m
    document.getElementById("x8").style.background=m
    document.getElementById("x9").style.background=m
}

function Ycheck() {
    if (typeof yprov === 'undefined') {
        yprov = 0
    }
    let y = document.getElementById("Y").value;
    if (y.includes('0x')) {
        y = y.replace('0x', '');
        document.getElementById("Y").value = y;
    }
    if (y.includes('0X')) {
        y = y.replace('0X', '');
        document.getElementById("Y").value = y;
    }

    if (y === "") {
        document.getElementById("submit").disabled = true;
        if (yprov > 0) {
            yprov = delete_element(yprov);}
        yprov = 1;
        f = false;
        document.getElementById("yblock").innerHTML +=
            "<h4 class='prov' id='Yprov1' >Не введён Y</h4>";

    }else if (isNaN(y) && y !== "-" && !y.includes(",")) {
        document.getElementById("submit").disabled = true;
        if (yprov > 0) {
            yprov = delete_element(yprov);
        }
        yprov = 2;
        f = false;
        document.getElementById("yblock").innerHTML +=
            "<h4 class='prov' id='Yprov2'>Ошибка при вводе Y</h4>";
    } else if(y.includes(",")) {
        if (!y.includes(".")) {
            y = y.replace(',', '.');
        } else{
            y = y.replace(',', '');
        }
        document.getElementById("Y").value = y;
    } else if (y < -5 || y > 3) {
        document.getElementById("submit").disabled = true;
        if (yprov > 0) {
            yprov = delete_element(yprov);
        }
        yprov = 3;
        f = false;
        document.getElementById("yblock").innerHTML +=
            "<h4 class='prov' id='Yprov3' >Y вышел за приделы от -5 до 3</h4>";
    } else if(y==="-"){
        document.getElementById("submit").disabled = true;
        if (yprov > 0) {
            yprov = delete_element(yprov);
        }
    } else {
        document.getElementById("submit").disabled = false;
        yprov=delete_element(yprov)
    }
}
function delete_element(prov) {
    if (prov === 1) {
        document.getElementById("Yprov1").remove();
    }
    if (prov === 2) {
        document.getElementById("Yprov2").remove();
    }
    if (prov === 3) {
        document.getElementById("Yprov3").remove();
    }
    return  0;
}



function Rcheck(){
    if (typeof rprov === 'undefined') {
        rprov = 0
    }
    let r = document.getElementById("R").value;
    if (r.includes('0x')) {
        r = r.replace('0x', '');
        document.getElementById("R").value = r;
    }
    if (r.includes('0X')) {
        r = r.replace('0X', '');
        document.getElementById("R").value = r;
    }

    if (r === "") {
        document.getElementById("submit").disabled = true;
        if (rprov > 0) {
            rprov = delete_elementr(rprov);}
        rprov = 1;
        f = false;
        document.getElementById("rblock").innerHTML +=
            "<h4 class='prov' id='Rprov1' >Не введён R</h4>";

    }else if (isNaN(r) && r !== "-" && !r.includes(",")) {
        document.getElementById("submit").disabled = true;
        if (rprov > 0) {
            rprov = delete_elementr(rprov);
        }
        rprov = 2;
        f = false;
        document.getElementById("rblock").innerHTML +=
            "<h4 class='prov' id='Rprov2'>Ошибка при вводе R</h4>";
    } else if(r.includes(",")) {
        if (!r.includes(".")) {
            r = r.replace(',', '.');
        } else{
            r = r.replace(',', '');
        }
        document.getElementById("R").value = r;
    } else if (r < 2 || r > 5) {
        document.getElementById("submit").disabled = true;
        if (rprov > 0) {
            rprov = delete_elementr(rprov);
        }
        rprov = 3;
        f = false;
        document.getElementById("rblock").innerHTML +=
            "<h4 class='prov' id='Rprov3' >R вышел за приделы от 2 до 5</h4>";
    } else if(r==="-"){
        document.getElementById("submit").disabled = true;
        if (rprov > 0) {
            rprov = delete_elementr(rprov);
        }
    } else {
        document.getElementById("submit").disabled = false;
        rprov=delete_elementr(rprov)
    }
}
function delete_elementr(prov) {
    if (prov === 1) {
        document.getElementById("Rprov1").remove();
    }
    if (prov === 2) {
        document.getElementById("Rprov2").remove();
    }
    if (prov === 3) {
        document.getElementById("Rprov3").remove();
    }
    return  0;
}