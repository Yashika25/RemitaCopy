function validate() {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var errorMsg = document.getElementById('error');
    var message = "No error";

    errorMsg.style.padding = '20px';
    if (!email.contains('@')) {
        message = "\nEmail format not correct."
        errorMsg.innerHTML = message;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        message = "\nPhone Number format not correct."
        errorMsg.innerHTML = message;
        return false;
    }
    if (firstName.length < 3) {
        message = "\nEnter a valid First Name.";
        errorMsg.innerHTML = message;
        return false;
    }
    if (lastName.length < 3) {
        message = "\nEnter a valid Last Name.";
        errorMsg.innerHTML = message;
        return false;
    } 

    alert("Registration Success!");
    return true;
}
