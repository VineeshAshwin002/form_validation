const form = document.querySelector("#form")
const username  = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const cpassword = document.querySelector("#cpassword")

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function  validateInputs()
{
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()


    if(usernameVal===''){
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
       setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal))
    {
        setError(email,"Email is invalid")
    }
    else{
        setSuccess(email)
    }
    
    if(passwordVal==='')
    {
        setError(password,"Password is required")
    }
    else if(passwordVal.length<8)
    {
        setError(password,"Must be atleast 8 characters")
    }
    else
    {
        setSuccess(password)
    }
    if(cpasswordVal==='')
    {
        setError(cpassword,"Confirm Password is required")
    }
    else if(cpasswordVal!==passwordVal)
    {
        setError(cpassword,"Password doesnot Match")
    }
    else
    {
        setSuccess(cpassword)
    }
}

function setError(element,message)
{
    const inputGrp = element.parentElement;
    const errorElement = inputGrp.querySelector('.error')

    errorElement.innerText = message

    inputGrp.classList.add('error')
    inputGrp.classList.remove('success')
}

function setSuccess(element)
{
    const inputGrp = element.parentElement;
    const errorElement = inputGrp.querySelector('.error')

    errorElement.innerText = '';
    inputGrp.classList.add('success')
    inputGrp.classList.remove('error')
}

const validateEmail = (email)=>
{
    return String(email)
    .toLowerCase()
    .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
}