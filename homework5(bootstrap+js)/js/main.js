    // progress-bar
function progressBar() {
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = scroll / height * 100;
    document.getElementById('progress').style.width = scrolled + '%';
}
window.addEventListener('scroll', progressBar);

    //output in new Window
function outputNewWindow() {
    let nameUser = document.myForm.name.value;
    if (document.myForm.gridRadios[0].checked) Change="Call me"; 
    if (document.myForm.gridRadios[1].checked) Change="Write me a letter";
    let emailUser = document.myForm.email.value;
    let messageUser = document.myForm.message.value;
    newWindow = window.open('','newWindow',"top=100, left=500, width=250, height=250");
    newWindow.focus();
    newWindow.document.open();
    newWindow.document.write('<html><head><title>newWindow');
    newWindow.document.write('</title></head><body><table border="1"><tr><td>');
    newWindow.document.write("Name");
    newWindow.document.write('</td><td>');
    newWindow.document.write(nameUser);
    newWindow.document.write('</td></tr><tr><td>');
    newWindow.document.write("Email");
    newWindow.document.write('</td><td>');
    newWindow.document.write(emailUser);
    newWindow.document.write('</td></tr><tr><td>');
    newWindow.document.write("Change");
    newWindow.document.write('</td><td>');
    newWindow.document.write(Change);
    newWindow.document.write('</td></tr><tr><td>');
    newWindow.document.write("Message");
    newWindow.document.write('</td><td>');
    newWindow.document.write(messageUser);
    newWindow.document.write('</td></tr></table>');
    newWindow.document.write('</body></html>');
    newwindow.document.close();
} 
document.querySelector('#submit-form').addEventListener('click', validate)
function validate() {
    let a = document.forms["myForm"]["name"].value;
    if (a == "" || a.length < 8) {
        alert("Write yout name more then 8 words");
        return false;
    }
    let b = document.forms["myForm"]["email"].value;
    if (b == "") {
        alert("Write your E-mail");
        return false;
    }
}

    // dark theme
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

    // anti watch & copy
window.onload = () => {
    document.onkeydown = () => {
        let e = window.event || arguments[0];
        if(e.keyCode == 123){
            return false;
        }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
            return false;
        }else if((e.shiftKey) && (e.keyCode == 121)){
            return false;
        }else if((e.ctrlKey) && (e.keyCode == 85)){
            return false;
        }
    };
    document.oncontextmenu = () => {
        return false;
    }; 
    inactivityTime(); 
}

    // page without user

let inactivityTime = () => {
    let time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.addEventListener('scroll', resetTimer, true);
    function logout() {
        let isHere = confirm('Are you here?');
        isHere ? alert('Ok, stay here :)') : location.href = 'logout.html';
    }
    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, 50000);
    }
};

    // browser info
let BrowserCheck = () => {
    let N = navigator.appName, ua = navigator.userAgent, tem;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*(\.?\d+(\.\d+)*)/i);
    if(M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) {
        M[2] = tem[1];
    };
    M = M ? [M[1], M[2]] : [N, navigator.appVersion,'-?'];
    return M;
}
let element = document.querySelector('#user-agent');
element.textContent = BrowserCheck();

    // smooth scrolling
const anchors = document.querySelectorAll('.scroll-to');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

