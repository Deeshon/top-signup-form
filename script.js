const inputs = document.querySelectorAll("input")
const password = document.querySelector(".password")
const confirmPassword = document.querySelector(".confirm-password")
const btn = document.querySelector("#sub-btn")

btn.addEventListener('click', () => {
    inputs.forEach((input) => {
        if (input.value == ""){
            let id = input.className
            document.getElementById(`${id}`).style.opacity = 1
        } else {
            let id = input.className
            document.getElementById(`${id}`).style.opacity = 0
        }
    })

    if (password.value != confirmPassword.value) {
        document.querySelector(`#${confirmPassword.className}`).textContent = "Password does not match"
        document.getElementById(`${confirmPassword.className}`).style.opacity = 1
    }
    
})
