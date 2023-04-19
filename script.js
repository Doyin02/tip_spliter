var firstSet = document.getElementById('mainContainer')
var input = document.getElementById('input')
var amount = document.getElementById('amount')
var input2 = document.getElementById('input2')
var amounts = document.getElementById('amounts')
var btn = document.getElementById('btn')



firstSet.addEventListener('click', event =>{
    var final = event.target.value * input.value / input2.value;
    final = Math.round(final * 100)/100;
    if(input2.value == ''){
        alert('Number of people cannot be empty')
    }else{
        amount.innerHTML = final
        amountInt= parseFloat(amount.innerHTML)
        inputInt = parseFloat(input.value)
        input2Int = parseFloat(input2.value)
        var totalPerPerson = amountInt + inputInt / input2Int
        totalPerPerson = Math.round(totalPerPerson * 100)/100;
        amounts.innerHTML = totalPerPerson
    }
   
})

btn.addEventListener('click', function(){
    amount.innerHTML = "0.00";
    amounts.innerHTML = "0.00";
    input.value = '';
    input2.value = '';
    
})