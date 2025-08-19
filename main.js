var xo = ""
var one = document.getElementById("box1")
var two = document.getElementById("box2")
var three = document.getElementById("box3")
var four = document.getElementById("box4")
var five = document.getElementById("box5")
var six = document.getElementById("box6")
var seven = document.getElementById("box7")
var eight = document.getElementById("box8")
var nine = document.getElementById("box9")

function game(i) {
    if (xo == "x") {
        xo = "o"
        document.getElementById("box"+i).innerHTML = xo
    } else {
        xo = "x"
        document.getElementById("box"+i).innerHTML = xo
    }
    document.getElementById("box"+i).removeAttribute("onclick")
    check()
}

function check() {
    if (one.innerHTML != "" && one.innerHTML == two.innerHTML && two.innerHTML == three.innerHTML) {
        console.log("kk")
        four.removeAttribute("onclick")
        five.removeAttribute("onclick")
        six.removeAttribute("onclick")
        seven.removeAttribute("onclick")
        eight.removeAttribute("onclick")
        nine.removeAttribute("onclick")
        one.style.backgroundColor = "#808080"
        two.style.backgroundColor = "#808080"
        three.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (four.innerHTML != "" && four.innerHTML == five.innerHTML && five.innerHTML == six.innerHTML) {
        one.removeAttribute("onclick")
        two.removeAttribute("onclick")
        three.removeAttribute("onclick")
        seven.removeAttribute("onclick")
        eight.removeAttribute("onclick")
        nine.removeAttribute("onclick")
        four.style.backgroundColor = "#808080"
        five.style.backgroundColor = "#808080"
        six.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (seven.innerHTML != "" && seven.innerHTML == eight.innerHTML && eight.innerHTML == nine.innerHTML) {
        one.removeAttribute("onclick")
        two.removeAttribute("onclick")
        three.removeAttribute("onclick")
        four.removeAttribute("onclick")
        five.removeAttribute("onclick")
        six.removeAttribute("onclick")
        seven.style.backgroundColor = "#808080"
        eight.style.backgroundColor = "#808080"
        nine.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (one.innerHTML != "" && one.innerHTML == four.innerHTML && four.innerHTML == seven.innerHTML) {
        two.removeAttribute("onclick")
        three.removeAttribute("onclick")
        five.removeAttribute("onclick")
        six.removeAttribute("onclick")
        eight.removeAttribute("onclick")
        nine.removeAttribute("onclick")
        one.style.backgroundColor = "#808080"
        four.style.backgroundColor = "#808080"
        seven.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (two.innerHTML != "" && two.innerHTML == five.innerHTML && five.innerHTML == eight.innerHTML) {
        one.removeAttribute("onclick")
        three.removeAttribute("onclick")
        four.removeAttribute("onclick")
        six.removeAttribute("onclick")
        seven.removeAttribute("onclick")
        nine.removeAttribute("onclick")
        two.style.backgroundColor = "#808080"
        five.style.backgroundColor = "#808080"
        eight.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (three.innerHTML != "" && three.innerHTML == six.innerHTML && six.innerHTML == nine.innerHTML) {
        one.removeAttribute("onclick")
        two.removeAttribute("onclick")
        four.removeAttribute("onclick")
        five.removeAttribute("onclick")
        seven.removeAttribute("onclick")
        eight.removeAttribute("onclick")
        three.style.backgroundColor = "#808080"
        six.style.backgroundColor = "#808080"
        nine.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (one.innerHTML != "" && one.innerHTML == five.innerHTML && five.innerHTML == nine.innerHTML) {
        two.removeAttribute("onclick")
        three.removeAttribute("onclick")
        four.removeAttribute("onclick")
        six.removeAttribute("onclick")
        eight.removeAttribute("onclick")
        seven.removeAttribute("onclick")
        one.style.backgroundColor = "#808080"
        five.style.backgroundColor = "#808080"
        nine.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if (three.innerHTML != "" && three.innerHTML == five.innerHTML && five.innerHTML == seven.innerHTML) {
        two.removeAttribute("onclick")
        one.removeAttribute("onclick")
        four.removeAttribute("onclick")
        six.removeAttribute("onclick")
        eight.removeAttribute("onclick")
        nine.removeAttribute("onclick")
        five.style.backgroundColor = "#808080"
        seven.style.backgroundColor = "#808080"
        three.style.backgroundColor = "#808080"
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    } else if 
    (
        one.innerHTML != "" && 
        two.innerHTML != "" && 
        three.innerHTML != "" && 
        four.innerHTML != "" && 
        five.innerHTML != "" && 
        six.innerHTML != "" && 
        seven.innerHTML != "" && 
        eight.innerHTML != "" && 
        nine.innerHTML != ""
    ) 
    {
        document.getElementById("fx").style.height = "365px"
        document.getElementById("reloadBtn").style.display = "block"
    }
}

function refresh() {
    location.reload()
}