btnSubmit.onclick=function(){
    let income = inptIncome.value
    return income
}

if (inptIncome.value < 30000) {
    lblBracket.value = `With your income of ${income}, you are in a tax bracket of 8%`
} else if (inptIncome.value < 99999) {
    lblBracket.value = `With your income of ${income}, you are in a tax bracket of 15%`
} else if (inptIncome.value > 99999)
    lblBracket.value = `With your income of ${income}, you are in a tax bracket of 25%`

btnGoAgain.onclick=function(){
  inptIncome.value = ''
}

//I think there was an issue with my browser because I was unable to have the display (to enter income and submit/go again) show up to check if my code was working