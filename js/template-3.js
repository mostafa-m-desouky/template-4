function clock() {
    let day = document.getElementById("date");
    let hr = document.getElementById("hour");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    let d = new Date().getDate();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    day.innerHTML = d;
    hr.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
}
let interval = setInterval(clock, 1000);