url = "http://127.0.0.1:8000/signup"

signupButton = document.getElementById("signup-button")
if (signupButton != null){
    signupButton.addEventListener('click', signup);
}

loginButton = document.getElementById("login-button")
if (loginButton != null){
    loginButton.addEventListener('click', login);
}

function signup(e){
    e.preventDefault()
    document.getElementById("signup-form").innerHTML
    let first_name = document.getElementById("signup-form-first-name").value
    let last_name = document.getElementById("signup-form-last-name").value
    let email = document.getElementById("signup-form-email").value
    let phone = document.getElementById("signup-form-phone").value
    let password = document.getElementById("signup-form-password").value
    
    const url='http://127.0.0.1:8000/signup/';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                window.location.href = '/elements/login.html'
            } 
            else {
                console.log("Can't sign up!")
            }
        }
    };

    formData = new FormData()
    formData.append("first_name", `${first_name}`)
    formData.append("last_name", `${last_name}`)
    formData.append("email", `${email}`)
    formData.append("phone", `${phone}`)
    formData.append("password", `${password}`)
    
    xhr.send(formData);
}
function login(e){
    e.preventDefault()
    document.getElementById("login-form").innerHTML
    let email = document.getElementById("login-form-email").value
    let password = document.getElementById("login-form-password").value

    // const url='http://127.0.0.1:8000/login/';

    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', url, true);
    // xhr.onreadystatechange = () => {
    //     if (xhr.readyState === XMLHttpRequest.DONE) {
    //         const status = xhr.status;
    //         if (status === 0 || (status >= 200 && status < 400)) {
    //             // window.location.href = '/elements/login.html'
    //         } 
    //         else {
    //             console.log("Can't sign up!")
    //         }
    //     }
    // };

    // formData = new FormData()
    // formData.append("email", `${email}`)
    // formData.append("password", `${password}`)
    
    // xhr.send(formData);
}
function save_data(_first_name, _last_name, _email, _phone, _password){
    var data = {
        first_name: _first_name,
        last_name: _last_name,
        email: _email,
        phone: _phone,
        password: _password
    }
  
    const user_data = JSON.stringify(data);
    const blob = new Blob([user_data], { type: "application/jso+n" });
    
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = _first_name+".json";

    a.click();
}