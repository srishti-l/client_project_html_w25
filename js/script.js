// dynamic footer: https://www.codexworld.com/how-to/get-current-year-to-display-dynamic-year-in-copyright-using-javascript/
document.getElementById("year").innerHTML = new Date().getFullYear();

document.querySelectorAll('#nav-items')
    .forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.filter = 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5))';
            element.style.background = "linear-gradient(90deg, #FFFFFF, #FFCB05, #FFFFFF)";
        })

        element.addEventListener('mouseleave', () => {
            element.style.filter = '';
            element.style.background = '';
        })

    })


document.querySelectorAll('#body-items')
    .forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.filter = 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))';
        })

        element.addEventListener('mouseleave', () => {
            element.style.filter = '';
        })

    })


document.querySelector('fieldset input[type="submit"]').addEventListener('mouseover', (e) => {
    e.target.style.filter = 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))';
    e.target.style.border = '5px solid #00274C'
})

document.querySelector('fieldset input[type="submit"]').addEventListener('mouseleave', (e) => {
    e.target.style.filter = '';
    e.target.style.border = '';
})







