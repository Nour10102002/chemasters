function displayMenu() {
    let menu = document.querySelector(".menu");
    if(menu.style.display === 'none')
    {
        menu.style.display = 'block';
    } 
    else {
        menu.style.display = 'none';
    }

}

var state = false;
function showPassword() {
    let password = document.getElementById("password");
    let eyeSlash = document.querySelector(".bi-eye-slash");
    if(state)
    {
        eyeSlash.style.display = "none";
        password.setAttribute("type", "password");
        state = false;
    }
    else {
        eyeSlash.style.display = "block";
        password.setAttribute("type","text");
        state = true;
    }
}

var c_state = false;
function show_c_Password() {
    let password = document.getElementById("c_password");
    let eyeSlash = document.querySelector(".c_eye");
    if(c_state)
    {
        eyeSlash.style.display = "none";
        password.setAttribute("type", "password");
        c_state = false;
    }
    else {
        eyeSlash.style.display = "block";
        password.setAttribute("type","text");
        c_state = true;
    }
}

function matching() {
    let c_password = document.getElementById("password").value;
    let password = document.getElementById("c_password").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let notMatch = document.getElementById("notMatch");
    let message = document.querySelector('.message');
    if(c_password != password)
    {
        notMatch.style.display = "block";
    }
    else if(c_password === password && c_password !='' && password != ''&& username != '' && email != ''){
        message.style.display = 'inline';
    }
}

function displayTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hours>=12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }

    if(hours>12) {
        hours = hours - 12;
    }

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minute;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 10);