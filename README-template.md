# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://jpcontactform.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- I  learn't how to use css custom properties very well and how it can be useful when writing reusable code
  :root{
  --clr-primary-900: hsl(169, 82%, 14%);
    --clr-primary-600: hsl(169, 82%, 27%);
    --clr-primary-200: hsl(148, 38%, 91%);

    --clr-neutral-900: hsl(187, 24%, 22%);
    --clr-neutral-500: hsl(186, 15%, 59%);
    --clr-neutral-300: hsl(186, 15%, 59%, 0.699);
    --clr-neutral-100: hsl(0, 0%, 100%);

    --clr-accent-200: hsl(0, 66%, 54%);


    --ff-primary: 'Karla', sans-serif;
    
    --ff-body-400: var(--ff-primary);
    --ff-heading-700: var(--ff-primary);

    --fw-regular: 400;
    --fw-bold: 700;

    --fs-400: .775rem;
    --fs-600: 1rem;
    --fs-700: 1.2rem;
    --fs-900: 1.8rem;
}


To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  .query1, .query2{
    display: flex;
    align-items: center;
    padding: 15px 13px;
    margin-bottom: 5px;
    flex-basis: 50%;
    border: 1.5px solid var(--clr-primary-600);
    border-radius: 5px;
    height: 2rem;
    cursor: pointer;
}

input[type=radio], .checkbox{
    accent-color: var(--clr-primary-600);
}

input[type=radio]:focus, input[type=radio]:active .checkbox{
    accent-color: var(--clr-primary-600);
}
}
```
```js
const proudOfThisFunc = () => {
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

}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

- I would like to work more on flexbox and css grid
- I would also like  to work on css transitions and animations
- I want to be a very good javaScript developer,I would like to work on javaScript based frontend project

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [ChatGpt](https://www.chatgpt.com) - This helped me specially while i was trying to make my website responsive an d also help me with other features. I really liked this pattern and will use it going forward.

- [Google](https://www.googole.com) - I also use google as a great resources for my frontend web development project. I'd recommend it to anyone still learning all concept of html css and JavaScript.

- [Javatpoint](https//:www.javatpiont.com) - This resources is dedicated to offering students far an d wide on tech-based courses for free. It really help me expand my knowledge  on html, css an d JavaSceript. 

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Odoh Onyedika Johnpaul](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Sepecial thanks to my mentor who is a senior dev in web and mobile frontend development. He is my source of inspiration. I dedicated a whole lot of time in building this project and followed someone's design also which 
i may not be able to remeber

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
