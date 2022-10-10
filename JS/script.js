let name = document.getElementById("name").value;
let newAmount = document.getElementById("amount").value;
let balance = document.querySelector(".balance");
let income = document.querySelector(".income");
let expense = document.querySelector(".expense");
let amount_name = document.querySelector(".amount-name");
// console.log(amount_name)



    function addIncome(){
        let name =  document.getElementById("name").value;
       let newAmount =  Number.parseInt(document.getElementById("amount").value);
       if(name != "" && newAmount != ""){
        let balance = document.querySelector(".balance");
        let income = document.querySelector(".income");
        balance.innerHTML = Number.parseInt( balance.innerHTML) + newAmount;
        income.innerHTML = Number.parseInt(income.innerHTML) + newAmount;
 
        
    }
    validateFields();
   }

   function addExpense(){
    let name =  document.getElementById("name").value;
    let newAmount =  Number.parseInt(document.getElementById("amount").value);
    if(name != "" && newAmount != ""){
    let balance = document.querySelector(".balance");
    let income = document.querySelector(".income");
    let expense = document.querySelector(".expense");
    expense.innerHTML = Number.parseInt(expense.innerHTML) + newAmount;
    income.innerHTML = Number.parseInt(income.innerHTML) - newAmount;
    balance.innerHTML = Number.parseInt(balance.innerHTML) - newAmount;
    }
    validateFields()
   }

function validateFields() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    if (name == "" || amount == "") {
        alert("Fields can't be empty.")
    }
    else {
        clearFields(document.getElementById("name"), document.getElementById("amount"))
        // console.log(name)
        // console.log(amount)

    }
}
// clear fields 
function clearFields(field1, field2) {
    setProperties()
    field1.value = ""
    field2.value = "";
}

// accept_and_store_values_to_transaction_list
let data = {};
function setProperties() {
    data['balance'] = document.querySelector(".balance").innerHTML;
    data['income'] = document.querySelector(".income").innerHTML;
    data['expense'] = document.querySelector(".expense").innerHTML;
    data['name'] =  document.getElementById("name").value;
    data['newAmount'] =  parseInt(document.getElementById("amount").value);
    upDateValues();
};

function upDateValues(){
    let transaction_container = document.querySelector('.transaction-container');
    transaction_container.innerHTML += `
    <div class="transaction">
    <span class="amount-name referance">${data.name}</span>
    <span class="amount set-fz">$${data.newAmount}</span>
    <span class="remove-amount remove-btn">X</span>
</div>
    `;
    
}


// add-total_income and expense

