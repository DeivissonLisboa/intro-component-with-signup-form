const FORM = document.querySelector("form")
const INPUTS = document.querySelectorAll(".form--input")

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault()

  INPUTS.forEach((input) => {
    input.classList.remove("error")
  })

  INPUTS.forEach((input) => {
    console.log(input.id)
    if (!input.value || (input.id === "email" && !validateEmail(input.value))) {
      input.classList.add("error")
    }
  })
})
