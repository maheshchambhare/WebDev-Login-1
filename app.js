const name = document.getElementById("name")
const name = document.getElementById("pass")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e) => {
    let massage = []
    if (name.value === "" || name.value ==null) {
        massage.push('name is required')
    }

    if (pass.value.length <= 6) {
        massage.push("password must be longer than 6 char")
    }

    if (massage.length > 0) {
        e.preventDefault()
        errorElement.innerText = massage.join(',')

    }
})