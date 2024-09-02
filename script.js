const button = document.querySelector('button')
const firstName = document.querySelector('.fname')
const lastName = document.querySelector('.lname')
const  messageBox = document.querySelector('.txt')
const email =  document.querySelector('.mail')
const radios = document.querySelector('.radios')

document.addEventListener('DOMContentLoaded', () =>{
    radioSelect()
    button.addEventListener('click', submitForm)
})

function radioSelect(){
    let radio1 = radios.querySelector('.radio1')
    let radio2 = radios.querySelector('.radio2')

    let query1 = radios.querySelector('.query1')
    let query2 = radios.querySelector('.query2')


    query1.addEventListener('click', (event) => {
        radio1.checked = true
        query1.style.backgroundColor = 'hsl(148, 38%, 91%)'
        query2.style.backgroundColor = ''
    })

    query2.addEventListener('click', () =>{
        radio2.checked = true
        query2.style.backgroundColor = 'hsl(148, 38%, 91%)'
        query1.style.backgroundColor = ''
    })
}


function validateInputs(){
    let isValid = true
            let fnameError = document.querySelector('.first_name> p.error')
            if(firstName.value === ''){
                fnameError.style.display = 'block'
                firstName.style.border = '1px solid var(--clr-accent-200)'
                isValid = false
            }else{
                fnameError.style.display = ''
                firstName.style.border = '1px solid rgba(128, 128, 128, 0.699)'
            }

        
            let lnameError = document.querySelector('.last_name> p.error')
            if(lastName.value === ''){
                lnameError.style.display = 'block'
                lastName.style.border = '1px solid var(--clr-accent-200)'
                isValid = false
            }else{
                lnameError.style.display = ''
                lastName.style.border = '1px solid rgba(128, 128, 128, 0.699)'
            }
        
            const validEmail = 
        /^[a-zA-Z0-9.!|$%&'*+=/?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let emailError = document.querySelector('.email> p.error')
            if(validEmail.test(email.value) === false){
                emailError.style.display = 'block'
                email.style.border = '1px solid var(--clr-accent-200)'
                isValid = false
            }else{
                emailError.style.display = ''
                email.style.border = '1px solid rgba(128, 128, 128, 0.699)'
            }

        
            let radio1 = radios.querySelector('.radio1')
            let radio2 = radios.querySelector('.radio2')
            let queryError = document.querySelector('.query> p.error')
            if(radio1.checked === true || radio2.checked === true){
                queryError.style.display = ''
            }else{
                queryError.style.display = 'block'
                isValid = false
            }
        
        
             let messageError = document.querySelector('.message> p.error')
            if(messageBox.value === ''){  
               messageError.style.display = 'block'
               messageBox.style.border = '1px solid var(--clr-accent-200)'
                isValid= false
            }else{
                messageError.style.display = ''
                messageBox.style.border = '1px solid rgba(128, 128, 128, 0.699)'
            }
        
        
            let consentError = document.querySelector('.consent > p.error')
            let checkbox = document.querySelector('.checkbox')
    
            if(checkbox.checked === true){
                consentError.style.display = ''
            }else{
                consentError.style.display = 'block'
                isValid = false
            }
        return isValid
}

// function validateInputs(){
//     let isValid = true
//     validatefName()
//     validatelName()
//     validateEmail()
//     validateQuery()
//     validateMessageBox()
//     validateCheckbox()
// }


function onSuccess(){
    const success = document.querySelector('.success_message')
    success.style.display = 'block'
}


function submitForm(){
   if(validateInputs()){
    onSuccess()
   }else{
    console.log('none')
   }
}
