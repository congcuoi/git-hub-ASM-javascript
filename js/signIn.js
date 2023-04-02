function checkSign_in(){
    document.querySelector('.js-getform-SignIn').style.display = "flex";
}

function checkSign_up() {
    document.querySelector('.js-getform-SignUp').style.display = "flex";
}

function hidden_signIn(){
    document.querySelector('.sign_in').style.display = "none";
}

function hidden_signUp(){
    document.querySelector('.sign_up').style.display = "none";
}

function validateFormIn() {
    var username = document.forms["myForm"]["username"].value;
    var password = document.forms["myForm"]["password"].value;
    if (username == "") {
        alert("Bạn chưa nhập tài khoản!");
        return false;
    }
    if(password == ""){
        alert("Bạn chưa nhập mật khẩu!");
        return false;
    }
}

function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var pass1 = document.forms["myForm"]["password1"].value;
    var pass2 = document.forms["myForm"]["password_confirm"].value;
    
    if (username == "") {
        alert("Bạn chưa nhập tài khoản!");
        return false;
    }
    if (email == "") {
        alert("Bạn chưa nhập email!");
        return false;
    }
    if (pass1 == "") {
        alert("Bạn chưa nhập mật khẩu!");
        return false;
    }
    if (pass2 == "") {
        alert("Bạn chưa nhập đủ thông tin đăng ký!");
        return false;
    }
    if (pass1 != pass2) {
        alert("Mật khẩu xác nhận không khớp!");
        return false;
    }
}

function validateEmail(email) {
    // Sử dụng regex để kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


