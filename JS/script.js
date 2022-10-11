let name = document.getElementById("name").value;
let newAmount = document.getElementById("amount").value;
let balance = document.querySelector(".balance");
let income = document.querySelector(".income");
let expense = document.querySelector(".expense");
let amount_name = document.querySelector(".amount-name");
// console.log(amount_name)


// accept_and_store_values_to_transaction_list
// let data = {};
// function setProperties() {
//     data['balance'] = document.querySelector(".balance").innerHTML;
//     data['income'] = document.querySelector(".income").innerHTML;
//     data['expense'] = document.querySelector(".expense").innerHTML;
//     data['name'] = document.getElementById("name").value;
//     data['newAmount'] = parseInt(document.getElementById("amount").value);
//     upDateValues();
// };

function validateFields() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    if (name == "" || amount == "") {
        alert("Fields can't be empty.")
    }
    else {
        setProperties()
    }
}


let data = [];
function setProperties() {
    let name = document.getElementById("name").value;
    let userNewAmount = parseInt(document.getElementById("amount").value);
    data.push({
        balance: document.querySelector(".balance").innerHTML,
        income: document.querySelector(".income").innerHTML,
        expense: document.querySelector(".expense").innerHTML,
        name: name,
        newAmount: userNewAmount

    })
    localStorage.setItem("userData",JSON.stringify(data));
    upDateValues();
    // console.log(data)
    // upDateValues();

}

function upDateValues() {
    let transaction_container = document.querySelector('.transaction-container');
    transaction_container.innerHTML = "";
    data.map((element,index)=>{
        return transaction_container.innerHTML += `
        <div class="transaction" id=${index}>
        <div>
        <span class="amount-name referance">${element.name}</span>
        <span class="amount set-fz">$${element.newAmount}</span>
        <span class="remove-amount remove-btn" onclick = "removeTransaction(this)">X</span>
        </div>
    </div>
        `;
    })
    // transaction_container.style.height = "113px";
    transaction_container.style.overflow = "scroll"
    clearFields(document.getElementById("name"), document.getElementById("amount"))

}

function addIncome() {
    let name = document.getElementById("name").value;
    let newAmount = Number.parseInt(document.getElementById("amount").value);
    if (name != "" && newAmount != "") {
        let balance = document.querySelector(".balance");
        let income = document.querySelector(".income");
        balance.innerHTML = Number.parseInt(balance.innerHTML) + newAmount;
        income.innerHTML = Number.parseInt(income.innerHTML) + newAmount;

        }
    validateFields()
}

function addExpense() {
    let name = document.getElementById("name").value;
    let newAmount = Number.parseInt(document.getElementById("amount").value);
    if (name != "" && newAmount != "") {
        let balance = document.querySelector(".balance");
        let income = document.querySelector(".income");
        let expense = document.querySelector(".expense");
        expense.innerHTML = Number.parseInt(expense.innerHTML) + newAmount;
        income.innerHTML = Number.parseInt(income.innerHTML) - newAmount;
        balance.innerHTML = Number.parseInt(balance.innerHTML) - newAmount;
    }
    validateFields()
}


(
    ()=>{
        data = JSON.parse(localStorage.getItem("userData"));
        upDateValues()
        
        }
)()
// clear fields 
function clearFields(field1, field2) {
    // setProperties()
    field1.value = ""
    field2.value = "";
}


// add-total_income and expense


function removeTransaction(e){
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.index,1);
    localStorage.setItem("userData",JSON.stringify(data))
    
}