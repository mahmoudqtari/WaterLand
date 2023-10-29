let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let package = document.getElementById('package');
let date = document.getElementById('date');
let guest = document.getElementById('guest');

let form = document.getElementById('form');


let validName = /^[A-Z][a-z]{3,20}$/;
let validPhone = /^(970)[0-9]{9}$/;
let validEmail = /^[a-z]{1,20}(@gmail.com)$/;
let validDate = /^([0-2][1-9]|30)(-)(0[1-9]|1[0-2])(-)(19[6-9][0-9]|20[0-2][0-3])$/;

let NameLabel = document.querySelector('.name_label');
let phoneLabel = document.querySelector('.phone_label');
let emailLabel = document.querySelector('.email_label');
let PackageLabel = document.querySelector('.package_label');
let DateLabel = document.querySelector('.date_label');
let guestLabel = document.querySelector('.guest_label');

let email_list = document.getElementById('email_list');
let labelEmailList = document.querySelector('.email_list_label');

let btn_header = document.getElementById('btn-submit');
let btn_Email_list = document.querySelector('.send');
let btn_contact = document.getElementById('btn-contact-submit');
console.log(btn_contact);


name.addEventListener("keyup", function(){
    checkValue(name,validName,NameLabel);
});

email.addEventListener('keyup', function(){
    checkValue(email,validEmail,emailLabel);
    console.log(email);
});

phone.addEventListener('keyup', function(){
    checkValue(phone,validPhone,phoneLabel);
});

package.addEventListener('keyup', function(){

    if(package.value != 'sel'){
        console.log("valid");
        if(package.classList.contains('is-invalid')){
            package.classList.remove('is-invalid');
        }
        package.classList.add("is-valid");
        PackageLabel.style.cssText = "display: none !important";
        checkValidButton();
    }
    else{
        console.log("not valid");
        if(package.classList.contains('is-valid')){
            package.classList.remove('is-valid');
        }
        package.classList.add("is-invalid");
        PackageLabel.style.cssText = "display: block !important;margin-top: -30px;";
        checkValidButton();
    }
});

date.addEventListener('keyup', function(){  
    checkValue(date,validDate,DateLabel);
});

guest.addEventListener('keyup', function(){
    
    if(guest.value > 0){
        console.log("valid");
        if(guest.classList.contains('is-invalid')){
            guest.classList.remove('is-invalid');
        }
        guest.classList.add("is-valid");
        guestLabel.style.cssText = "display: none !important";
        checkValidButton();
    }
    else{
        console.log("not valid");
        if(guest.classList.contains('is-valid')){
            guest.classList.remove('is-valid');
        }
        guest.classList.add("is-invalid");
        guestLabel.style.cssText = "display: block !important;margin-top: -30px;";
        checkValidButton();
    }
});

email_list.addEventListener('keyup', function(){
    if(email_list.value.match(validEmail)){
        console.log("valid");
        if(email_list.classList.contains('is-invalid')){
            email_list.classList.remove('is-invalid');
        }
        email_list.classList.add("is-valid");
        labelEmailList.style.cssText = "display: none !important";
        btn_Email_list.removeAttribute('disabled');
    }
    else{
        console.log("not valid");
        if(email_list.classList.contains('is-valid')){
            email_list.classList.remove('is-valid');
        }
        email_list.classList.add("is-invalid");
        labelEmailList.style.cssText = "display: block !important;margin-top: -30px;";
        btn_Email_list.setAttribute('disabled','disabled');
    }
});


btn_header.addEventListener('click', function(e){
    e.preventDefault();
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'You have booked successfully',
        showConfirmButton: false,
        timer: 3000
      }).then(() => {
        form.submit();
      })
});

btn_Email_list.addEventListener('click', function(e){
    e.preventDefault();
    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'You have booked successfully',
        showConfirmButton: false,
        timer: 3000
      }).then(() => {
        form.submit();
      })
});

function checkValue(input, validPattern,label){
    console.log("test");
    if(input.value.match(validPattern)){
        console.log("valid");
        if(input.classList.contains('is-invalid')){
            input.classList.remove('is-invalid');
        }
        input.classList.add("is-valid");
        label.style.cssText = "display: none !important";
        checkValidButton();
    }
    else{
        console.log("not valid");
        if(input.classList.contains('is-valid')){
            input.classList.remove('is-valid');
        }
        input.classList.add("is-invalid");
        label.style.cssText = "display: block !important;margin-top: -30px;";
        checkValidButton();
    }
}

function checkValidButton(){
    if(name.value.match(validName)&&
        phone.value.match(validPhone)&&
        email.value.match(validEmail)&&
        package.value != 'sel'&&
        date.value.match(validDate)&&
        guest.value > 0){
            btn_header.removeAttribute('disabled');
    }else{
        btn_header.setAttribute('disabled', 'disabled');
    }
}