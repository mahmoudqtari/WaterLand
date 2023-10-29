let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

let validName = /^[A-Z][a-z]{3,20}$/;
let validEmail = /^[a-z]{1,20}(@gmail.com)$/;
let validSubject = /^[a-z]{1,30}$/;
let validMessage = /^[a-z]{1,200}$/;

let NameLabel = document.querySelector('.name_label');
let emailLabel = document.querySelector('.email_label');
let subjectLabel = document.querySelector('.subject_label');
let messageLabel = document.querySelector('.message_label');

let btn_contact = document.getElementById('btn-contact-submit');

name.addEventListener("keyup", function(){
    checkValue(name,validName,NameLabel);
});

email.addEventListener('keyup', function(){
    checkValue(email,validEmail,emailLabel);
});
subject.addEventListener('keyup', function(){
    checkValue(subject,validSubject,subjectLabel);
});
message.addEventListener('keyup', function(){
    checkValue(message,validMessage,messageLabel);
});

function checkValue(input, validPattern,label){
    if(input.value.match(validPattern)){
        if(input.classList.contains('is-invalid')){
            input.classList.remove('is-invalid');
        }
        input.classList.add("is-valid");
        label.style.cssText = "display: none !important";
        checkValidButton();
    }
    else{
        if(input.classList.contains('is-valid')){
            input.classList.remove('is-valid');
        }
        input.classList.add("is-invalid");
        label.style.cssText = "display: block !important;margin-top: -30px;";
        checkValidButton();
    }
}

function checkValidButton(){
    if(name.value.match(validName)&&email.value.match(validEmail)&&subject.value.match(validSubject)&&message.value.match(validMessage)){
        btn_contact.removeAttribute('disabled');
    }else{
        btn_contact.setAttribute('disabled', 'disabled');
    }
}