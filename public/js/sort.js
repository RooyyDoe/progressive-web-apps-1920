
const form = document.querySelector('form')

const dropDown = document.querySelector('.sort-games')

dropDown.addEventListener('change', () => {
    form.setAttribute("action", `/sort/${event.target.value}`)
    form.submit()
})
