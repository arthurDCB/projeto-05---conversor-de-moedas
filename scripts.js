//daytrade value
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//obteining form elements
const form =document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

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
    try {
      //showing exchange value
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

      //aplying class to show footer
      footer.classList.add("show-result")
    } catch (error) {
      

      //removing footer on error
      console.log(error)
      footer.classList.remove("show-result")
      alert("não foi possível converter. Tente novamente mais tarde.")
    }
  }

//showing results on BRL
  function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }
