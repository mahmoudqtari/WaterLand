let name = document.getElementById('name');
let email = document.getElementById('email');
let comment = document.getElementById('comment');

let validName = /^[A-Z][a-z]{3,20}$/;
let validEmail = /^[a-z]{1,20}(@gmail.com)$/;
let validComment = /^[a-z]{1,200}$/;

let NameLabel = document.querySelector('.name_label');
let emailLabel = document.querySelector('.email_label');
let commentLabel = document.querySelector('.comment_label');

let btn_blog = document.getElementById('btn-submit-blog');

name.addEventListener("keyup", function(){
    checkValue(name,validName,NameLabel);
});

email.addEventListener('keyup', function(){
    checkValue(email,validEmail,emailLabel);
});

comment.addEventListener('keyup', function(){
    checkValue(comment,validComment,commentLabel);
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
    if(name.value.match(validName)&& email.value.match(validEmail)&& comment.value.match(validComment)){
        btn_blog.removeAttribute('disabled');
    }else{
        btn_blog.setAttribute('disabled', 'disabled');
    }
}