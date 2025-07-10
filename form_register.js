const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cfPassword = document.getElementById('cfPassword')
const agree = document.getElementById('checkbox')
const form = document.getElementById('container')
document.querySelector

var isUserName = false
var isEmail = false
var isPassword = false
var isCfPassword = false
var isAgree = true

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    submitForm();
})
username.addEventListener('keyup',checkUserName)
email.addEventListener('keyup',checkEmail)
password.addEventListener('keyup',checkPassword)
cfPassword.addEventListener('blur',checkCfPassword)

function submitForm(){

    checkUserName()
    checkEmail()
    checkPassword()
    checkCfPassword()
    if(!agree.checked){
        const parent = agree.parentElement
        const small = parent.querySelector('small')
        small.style.visibility = 'visible'
        isAgree = false
    } else{
        const parent = agree.parentElement
        const small = parent.querySelector('small')
        small.style.visibility = 'hidden'
        isAgree = true
    }
    if(isUserName && isEmail && isPassword && isCfPassword && isAgree){
        form.submit()
    }
}

function checkUserName(){
    let nameUserValue = username.value.trim()
    console.log(nameUserValue)

    if(nameUserValue ===''){
        setError(username,'User name cannot be empty')
    } else if(nameUserValue.length < 3){
        setError(username,'User name should be min 3 characters')
    } else{
        setSuccess(username)
        isUserName = true
    }
}

function setError(input, message){
    const parent = input.parentElement
    const errorIcon = parent.querySelector('span.error')
    const successIcon = parent.querySelector('span.success')
    const small = parent.querySelector('small')
    small.innerHTML = message

    parent.classList.add('error')
    parent.classList.remove('success')

    successIcon.style.visibility = 'hidden'
    errorIcon.style.visibility = 'visible'
}

function setSuccess(input){
    const parent = input.parentElement
    const successIcon = parent.querySelector('span.success')
    const errorIcon = parent.querySelector('span.error')

    parent.classList.remove('error')
    parent.classList.add('success')

    errorIcon.style.visibility = 'hidden'
    successIcon.style.visibility = 'visible'
}

function checkEmail(){
    let emailValue = email.value.trim()
    let emailreg = /^[^@]{1,64}@gmail\.com$/
    let valid = emailreg.test(emailValue)

    if(emailValue ===''){
        setError(email,'Email name cannot be empty')
    }else if(emailValue.length < 3){
        setError(email, 'Email should be min 3 characters')
    } else if(!valid){
        setError(email,"Invalid email Id")
    } else{
        setSuccess(email)
        isEmail = true
    }
}

function checkPassword(){
    let passwordValue = password.value.trim()

    let valid1 = /[A-Z]/g
    let valid2 = /[a-z]/g
    let valid3 = /[0-9]/g

    if(passwordValue ===''){
        setError(password, 'Password name cannot be empty')
    } else if(passwordValue.length < 8){
        setError(password,'Password should be min 8 characters')
    } else if(!valid1.test(passwordValue) || !valid2.test(passwordValue) || !valid3.test(passwordValue)){
        setError(password,'Must contain one number, one uppercase,lowercase letter')
    } else{
        setSuccess(password)
        isPassword = true
    }
}

function checkCfPassword(){
    let cfPasswordValue = cfPassword.value.trim()
    let passwordValue = password.value.trim()
    if(cfPasswordValue ===''){
        setError(cfPassword,'Confirm Password name cannot be empty')
    } else if (cfPasswordValue !== passwordValue){
        setError(cfPassword,`The password does't match`)
    } else{
        setSuccess(cfPassword)
        isCfPassword = true
    }
}