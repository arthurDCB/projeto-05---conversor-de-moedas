//daytrade value
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//obteining form elements
const form =document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// manipulating amount input to accept numbers numbers
amount.addEventListener("input",
  () => {

    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
  })

  // capturing submit event
  form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
      case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
      case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
      case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
    }
  }

  //creating conversion function

  function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
  }
