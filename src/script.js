const FORM = document.querySelector("form")
const INPUTS = document.querySelectorAll(".form--input")

FORM.addEventListener("submit", (e) => {
  e.preventDefault()
  INPUTS.forEach((input) => {
    if (!input.value) {
      console.log("Hello world")
    }
  })
})
